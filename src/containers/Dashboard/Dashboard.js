'use client';
import styles from './styles.module.scss';
import ProtocolTable from './ProtocolTable/ProtocolTable';
import UsersTable from './UsersTable/UsersTable';
import WalletButton from '@/components/WalletButton/WalletButton';

export default function Dashboard() {
    return (
        <div className={styles.root}>
            <div className={styles.topbar}>
                <div className={styles.topbarText}>
                    <span>{`>>>_ `}Yield Feed</span>
                </div>
                <div className={styles.marquee}>
                    <div className={styles.marqueeContent}>
                        <p>
                            🚀 Jupiter Yield has shot up $1bln <span>[5min ago]</span>
                        </p>
                        <p>
                            🎉 A new platform BYOB just launched <span>[5min ago]</span>
                        </p>
                        <p>
                            🔒 A large deposit was just made on Jupiter <span>[5min ago]</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.statusBar}>
                        <div className={'primaryCircle'} />
                        <span>Status: DEVELOPMENT | Network: Solana,Ethereum,Base</span>
                    </div>
                    <div className={styles.navHeading}>
                        <h1>{`>`} Yield_AI_Explorer</h1>
                        <WalletButton>[Connect Wallet]</WalletButton>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.search}>
                    <span className="font-light">
                        SYSTEM: <span className="font-bold !text-primary-main">Search a wallet address...</span>
                    </span>
                    <div className={styles.textfield}>
                        <input placeholder=">>> _ Input wallet Address" />
                        <button>EXECUTE</button>
                    </div>
                    <span>{`>>>_`} Awaiting Input</span>
                </div>

                <div className={styles.columns}>
                    <ProtocolTable />
                    <UsersTable />
                </div>
            </div>

            <div className={styles.footer}>
                <span>Total Chains: 3</span>
                <div className={'primaryCircle'} />
                <span>Total Volume: $3.6bln</span>
                <div className={'primaryCircle'} />
                <span>Total Liqudity: $13.6bln</span>
                <div className={'primaryCircle'} />
                <span>Total Value Locked: $24.6bln</span>
                <div className={'primaryCircle'} />
                <span>Nodes Watching: 60</span>
            </div>
        </div>
    );
}
