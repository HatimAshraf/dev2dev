import type { Metadata } from 'next';
import { Schibsted_Grotesk, Martian_Mono } from 'next/font/google';
import './globals.css';
import LightRays from '@/components/LightRays';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-schibsted-grotesk',
  subsets: ['latin'],
});

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dev2Dev',
  description: 'All the dev events you can’t afford to miss – in one place',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <LightRays
            raysOrigin='top-center-offset'
            raysColor='#581b98'
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.03}
            noiseAmount={0.1}
            distortion={0.05}
            className='custom-rays'
          />
        </div>
        {children}
      </body>
    </html>
  );
}
