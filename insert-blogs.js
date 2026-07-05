const { google } = require('googleapis');
const crypto = require('crypto');

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

  const blogs = [
    {
      title: "The Future of Edge AI",
      slug: "future-of-edge-ai",
      excerpt: "Exploring how TensorFlow Lite on microcontrollers is transforming embedded devices.",
      body: "# The Future of Edge AI\n\nAI is moving from the cloud to the edge...",
      readTime: "5 min",
      category: "Artificial Intelligence",
      authorName: "Justin Jacob Saju",
    },
    {
      title: "Getting Started with ESP32",
      slug: "getting-started-esp32",
      excerpt: "A comprehensive guide to WiFi, Bluetooth, and dual-core processing on the ESP32.",
      body: "# Getting Started with ESP32\n\nThe ESP32 is a powerful microcontroller...",
      readTime: "8 min",
      category: "Embedded Systems",
      authorName: "Justin Jacob Saju",
    },
    {
      title: "Building the ECHO System Gateway",
      slug: "building-echo-system",
      excerpt: "How I built a unified digital hub using Next.js, Framer Motion, and Google Sheets.",
      body: "# Building the ECHO System\n\nCreating a seamless digital portfolio...",
      readTime: "10 min",
      category: "Web Engineering",
      authorName: "Justin Jacob Saju",
    }
  ];

  const rows = blogs.map(blog => [
    crypto.randomUUID(),
    blog.title,
    blog.slug,
    blog.excerpt,
    blog.body,
    new Date().toISOString(),
    blog.readTime,
    blog.category,
    blog.authorName,
    '', // authorImage
    ''  // cloudinaryId
  ]);

  console.log("Inserting blogs...");
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'BlogPosts!A:K',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: rows },
  });
  
  console.log("Successfully added 3 blogs!");
}

main().catch(console.error);
