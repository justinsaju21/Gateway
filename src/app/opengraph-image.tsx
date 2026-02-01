import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Justin Jacob Saju | Engineering Ideas & Tech Insights'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a1628',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '120px',
                        height: '120px',
                        borderRadius: '20%',
                        border: '4px solid #8b5cf6',
                        fontSize: 50,
                        fontWeight: 800,
                        color: '#a78bfa',
                        marginBottom: 40,
                    }}
                >
                    JS
                </div>
                <div
                    style={{
                        fontSize: 60,
                        fontWeight: 'bold',
                        color: '#f8fafc',
                        marginBottom: 20,
                        textAlign: 'center',
                    }}
                >
                    Justin Jacob Saju
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: '#cbd5e1',
                        textAlign: 'center',
                    }}
                >
                    Engineering Ideas & Tech Insights
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
