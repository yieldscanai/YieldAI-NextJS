import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import RainbowWrapper from '@/wrappers/RainbowWrapper';
import { SolanaWrapper } from '@/wrappers/SolanaWrapper';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Yield AI Explorer',
    description:
        'Your AI-powered DeFi guide, finding emerging dApps, uncovering top APYs, and maximizing your earnings across decentralized protocols',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster />
                <SolanaWrapper>{children}</SolanaWrapper>
                {/* <RainbowWrapper>{children}</RainbowWrapper> */}
            </body>
        </html>
    );
}
