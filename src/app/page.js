import Image from 'next/image';
import Link from 'next/link';
import Background from '@/assets/logos/bg.webp';
import Logo from '@/assets/logos/logo-full.png';

export default function Home() {
    return (
        <div
            style={{ backgroundImage: `url(${Background.src})` }}
            className="bg-black bg-cover bg-center grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        >
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-6 sm:p-10 rounded-2xl border border-gray-300 bg-black/50 backdrop-blur-md shadow-lg">
                <img src={Logo.src} alt="yield ai logo" className="max-w-[400px]" />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 max-w-[400px]">
                        Discover top DeFi protocols with real-time insights and maximum yield opportunities.
                        {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">src/app/page.js</code>. */}
                    </li>
                    <li className="max-w-[400px]">Start exploring now and let YieldScan guide you to profitable strategies</li>
                </ol>

                <div className="flex gap-4 items-center justify-center w-full flex-col sm:flex-row">
                    <Link
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="/dashboard"
                    >
                        <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
                        Explorer
                    </Link>
                    {/* <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read our docs
                    </a> */}
                </div>
            </main>
            {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
                    Examples
                </a>
                <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/dashboard">
                    <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                    Go to nextjs.org →
                </Link>
            </footer> */}
        </div>
    );
}
