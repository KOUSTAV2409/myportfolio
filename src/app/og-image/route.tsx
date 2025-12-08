import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Koustav Ganguly
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#888',
              marginBottom: '40px',
            }}
          >
            Frontend Developer & Technical Writer
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#666',
              maxWidth: '800px',
            }}
          >
            Building exceptional web experiences and creating educational content for developers
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '20px',
            color: '#444',
          }}
        >
          iamk.xyz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
