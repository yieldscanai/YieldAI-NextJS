'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { clipboardCopy } from '@/utils/clipboard-copy';
import { UserRoundPlus } from 'lucide-react';
import { TRANSACTIONS } from './data';
import { shortenAddress } from '@/utils/strings';

const actions = [
    { title: 'Last 24h', key: 'time' },
    { title: 'SIZE', key: 'size' },
    { title: 'Trending', key: 'trend' },
];

export default function UsersTable() {
    const [tab, setTab] = useState('time');

    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.tableHeaderLeft}>
                    <div className={'greenCircle'} />
                    <span>{`>`} user_deposits</span>
                </div>
                <div className={styles.tableHeaderRight}>
                    <span>count_20</span>
                </div>
            </div>
            <div className={styles.tableActions}>
                {actions.map((action) => {
                    return (
                        <button
                            onClick={() => setTab(action.key)}
                            key={action.key}
                            className={clsx({
                                [styles.activeAction]: tab === action.key,
                            })}
                        >
                            {action.title}
                        </button>
                    );
                })}
            </div>
            <div className={styles.tableBody}>
                {TRANSACTIONS.map((tx, i) => {
                    return (
                        <div key={i} className={styles.userTableItem}>
                            <div className={styles.rank}>#{i + 1}</div>
                            <div className={styles.content}>
                                <div className={styles.heading}>
                                    <div className="flex items-center gap-2">
                                        <button className={styles.address}>{shortenAddress(tx.address)}</button>
                                        <button onClick={() => clipboardCopy(tx.address)} className="text-primary-main text-[11px]">
                                            [copy]
                                        </button>
                                        <button className={styles.followWallet}>
                                            <UserRoundPlus className="h-3 w-3" />
                                            Follow Wallet
                                        </button>
                                    </div>
                                    <div className={styles.trend}>▲ $5.09m</div>
                                </div>
                                <div className={styles.userStats}>
                                    <div className={styles.stat}>
                                        <h6>tx_amount</h6>
                                        <h4 className="text-green-600">{tx.amount}</h4>
                                        <span>The amount deposited into yield</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <h6>wallets_vol</h6>
                                        <h4 className="text-green-600">{tx.volume}</h4>
                                        <span>Total Depositing Volume</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <h6>total_deps</h6>
                                        <h4>{tx.deposits}</h4>
                                        <span># of deposits in protocols</span>
                                    </div>
                                </div>
                                <div className={styles.transaction}>
                                    <button className={styles.txBtn}>{shortenAddress(tx.hash)}</button>
                                    <button onClick={() => clipboardCopy(tx.hash)} className="text-primary-main text-[11px]">
                                        [copy tx]
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
