const { google } = require('googleapis');

async function main() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    console.error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");
    return;
  }
  
  const creds = JSON.parse(raw);
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  
  if (!spreadsheetId) {
    console.error("Missing GOOGLE_SHEETS_ID");
    return;
  }

  console.log("Fetching existing sheets...");
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  const existingTitles = spreadsheet.data.sheets.map(s => s.properties.title);
  
  const requests = [];
  
  if (!existingTitles.includes('BlogPosts')) {
    console.log("Preparing to create 'BlogPosts' sheet...");
    requests.push({
      addSheet: { properties: { title: 'BlogPosts' } }
    });
  }
  
  if (!existingTitles.includes('Projects')) {
    console.log("Preparing to create 'Projects' sheet...");
    requests.push({
      addSheet: { properties: { title: 'Projects' } }
    });
  }

  if (!existingTitles.includes('BlogSubmissions')) {
    console.log("Preparing to create 'BlogSubmissions' sheet...");
    requests.push({
      addSheet: { properties: { title: 'BlogSubmissions' } }
    });
  }

  if (!existingTitles.includes('ProjectSubmissions')) {
    console.log("Preparing to create 'ProjectSubmissions' sheet...");
    requests.push({
      addSheet: { properties: { title: 'ProjectSubmissions' } }
    });
  }
  
  if (requests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests }
    });
    console.log("Successfully created new sheets!");
  } else {
    console.log("Sheets 'BlogPosts' and 'Projects' already exist.");
  }
  
  console.log("Writing headers...");
  const blogHeaders = [['id', 'title', 'slug', 'excerpt', 'body', 'publishedAt', 'readTime', 'category', 'authorName', 'authorImage', 'cloudinaryId']];
  const projectHeaders = [['id', 'title', 'slug', 'description', 'category', 'tags', 'github', 'streamlit', 'tinkercad', 'external', 'featured', 'authorName', 'order']];
  const submissionHeaders = [['id', 'status', 'name', 'email', 'title', 'story', 'keywords', 'uploadedImageUrl', 'submittedAt']];
  const projectSubmissionHeaders = [['id', 'status', 'name', 'email', 'title', 'description', 'keywords', 'github', 'external', 'uploadedImageUrl', 'submittedAt']];
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'BlogPosts!A1:K1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: blogHeaders }
  });
  
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Projects!A1:M1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: projectHeaders }
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'BlogSubmissions!A1:I1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: submissionHeaders }
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'ProjectSubmissions!A1:K1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: projectSubmissionHeaders }
  });
  
  console.log("Done! Headers are perfectly seeded.");
}

main().catch(console.error);
