import { google } from 'googleapis'

function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON!
  const creds = JSON.parse(raw)
  return new google.auth.GoogleAuth({
    credentials: creds,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets.readonly',
    ],
  })
}

async function getSheetsClient() {
  const auth = getAuth()
  return google.sheets({ version: 'v4', auth })
}

const SHEET_ID = () => process.env.GOOGLE_SHEETS_ID!

// Helpers
function parseBoolean(val: string | undefined): boolean {
  return val?.toUpperCase() === 'TRUE'
}

function parseArray(val: string | undefined): string[] {
  if (!val) return []
  return val.split(',').map((s) => s.trim()).filter(Boolean)
}

function parseIntSafe(val: string | undefined, defaultVal = 0): number {
  const parsed = parseInt(val || '', 10)
  return isNaN(parsed) ? defaultVal : parsed
}

// ─── Blog Posts ────────────────────────────────────────────────────────────
export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string
  publishedAt: string
  readTime: string
  category: string
  authorName: string
  authorImage?: string
  cloudinaryId?: string
}

function rowToPost(row: string[]): Post {
  return {
    id: row[0] ?? '',
    title: row[1] ?? '',
    slug: row[2] ?? '',
    excerpt: row[3] ?? '',
    body: row[4] ?? '',
    publishedAt: row[5] ?? '',
    readTime: row[6] ?? '',
    category: row[7] ?? '',
    authorName: row[8] ?? '',
    authorImage: row[9] || undefined,
    cloudinaryId: row[10] || undefined,
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const sheets = await getSheetsClient()
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID(),
      range: 'BlogPosts!A2:K',
    })
    const rows = (res.data.values ?? []) as string[][]
    return rows.filter((r) => r[0]).map(rowToPost).reverse()
  } catch (error) {
    console.error("Error fetching BlogPosts:", error)
    return []
  }
}

// ─── Projects ──────────────────────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: string
  tags: string[]
  github?: string
  streamlit?: string
  tinkercad?: string
  external?: string
  featured: boolean
  authorName: string
  order: number
}

function rowToProject(row: string[]): Project {
  return {
    id: row[0] ?? '',
    title: row[1] ?? '',
    slug: row[2] ?? '',
    description: row[3] ?? '',
    category: row[4] ?? '',
    tags: parseArray(row[5]),
    github: row[6] || undefined,
    streamlit: row[7] || undefined,
    tinkercad: row[8] || undefined,
    external: row[9] || undefined,
    featured: parseBoolean(row[10]),
    authorName: row[11] ?? '',
    order: parseIntSafe(row[12], 999),
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const sheets = await getSheetsClient()
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID(),
      range: 'Projects!A2:M',
    })
    const rows = (res.data.values ?? []) as string[][]
    const projects = rows.filter((r) => r[0]).map(rowToProject)
    return projects.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error("Error fetching Projects:", error)
    return []
  }
}

// ─── Photos ────────────────────────────────────────────────────────────────
export interface Photo {
  id: string
  driveId: string
  cloudinaryId: string
  cloudinaryUrl: string
  title: string
  shortCaption: string
  longCaption: string
  category: string
  subCategory: string
  mood: string
  colors: string[]
  keywords: string[]
  story: string
  altText: string
  contributorId: string
  collectionIds: string[]
  featured: boolean
  visible: boolean
  createdAt: string
  width: number
  height: number
  updatedAt: string
  version: number
  metadataGenerated?: boolean
}

function rowToPhoto(row: string[]): Photo {
  return {
    id: row[0] ?? '',
    driveId: row[1] ?? '',
    cloudinaryId: row[2] ?? '',
    cloudinaryUrl: row[3] ?? '',
    title: row[4] ?? '',
    shortCaption: row[5] ?? '',
    longCaption: row[6] ?? '',
    category: row[7] ?? '',
    subCategory: row[8] ?? '',
    mood: row[9] ?? '',
    colors: parseArray(row[10]),
    keywords: parseArray(row[11]),
    story: row[12] ?? '',
    altText: row[13] ?? '',
    contributorId: row[14] ?? '',
    collectionIds: parseArray(row[15]),
    featured: parseBoolean(row[16]),
    visible: parseBoolean(row[17]),
    createdAt: row[18] ?? '',
    width: parseInt(row[19] ?? '0', 10),
    height: parseInt(row[20] ?? '0', 10),
    updatedAt: row[21] ?? '',
    version: parseInt(row[22] ?? '1', 10),
    metadataGenerated: row[23] !== 'FALSE', // default true for legacy rows
  }
}

export async function getPhotos(): Promise<Photo[]> {
  try {
    const sheets = await getSheetsClient()
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID(),
      range: 'Photos!A2:X',
    })
    const rows = (res.data.values ?? []) as string[][]
    return rows
      .filter((r) => r[0])
      .map(rowToPhoto)
      .filter((p) => p.visible)
      .reverse()
  } catch (error) {
    console.error("Error fetching Photos:", error)
    return []
  }
}
