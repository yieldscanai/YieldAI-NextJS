import Image from 'next/image';
import Link from 'next/link';
import Background from '@/assets/logos/bg.webp';
import Logo from '@/assets/logos/logo-full.png';

export default function Home() {
    return (
        <div style={{ backgroundImage: `url(${Background.src})` }} className="bg-black bg-cover bg-center h-[100vh] w-full">
            <div className="flex items-center justify-center h-full">
                <main className="flex flex-col gap-8 p-6 sm:p-10 rounded-2xl border border-gray-300 bg-black/50 backdrop-blur-md shadow-lg max-w-[400px]">
                    <img src={Logo.src} alt="yield ai logo" className="w-full" />
                    <ol className="list-inside list-decimal text-sm sm:text-left text-white">
                        <li className="mb-2">
                            Discover top DeFi protocols with real-time insights and maximum yield opportunities.
                            {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">src/app/page.js</code>. */}
                        </li>
                        <li>Start exploring now and let YieldScan guide you to profitable strategies</li>
                    </ol>

                    <div className="flex gap-4 items-center justify-center w-full flex-col sm:flex-row">
                        <Link
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                            href="/dashboard"
                        >
                            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
                            Explorer
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
