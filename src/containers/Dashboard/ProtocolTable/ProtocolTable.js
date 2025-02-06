'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { clipboardCopy } from '@/utils/clipboard-copy';
import { PROTOCOLS } from './data';
import { shortenAddress, shortenString } from '@/utils/strings';

const actions = [
    { title: 'Volume 24h', key: 'volume' },
    { title: 'Liquidity', key: 'liquid' },
    { title: 'Yield AI Ranking', key: 'ranking' },
];

export default function ProtocolTable() {
    const [tab, setTab] = useState('volume');

    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.tableHeaderLeft}>
                    <div className={'greenCircle'} />
                    <span>{`>`} trending_protocols</span>
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
                {PROTOCOLS.map((protocol, i) => {
                    const { Name, Ticker, URL, Logo, TVL, Volume, Liq } = protocol;
                    return (
                        <div key={i} className={styles.protocolTableItem}>
                            <div className="flex items-center gap-2">
                                <div className={styles.protocolLogo}>
                                    <img src={Logo} alt={Name} className="h-[60px] w-[60px]" />
                                    <div className={styles.ranking}>#{i + 1}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className={'flex items-center gap-2'}>
                                        <span className="text-[17px] font-bold text-primary-main">{Name}</span>
                                        <span className="text-[15px] text-primary-main/70">${Ticker}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a href={`${URL}`} target="_blank" className={styles.link}>
                                            {shortenString(URL)}
                                        </a>
                                        <button onClick={() => clipboardCopy(URL)} className="text-primary-main text-[11px]">
                                            [copy]
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:flex-col md:items-end mt-4">
                                <div>
                                    <div className={styles.stat}>
                                        <h6>TVL:</h6>
                                        <span>{TVL}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={styles.stat}>
                                        <h6>Vol:</h6>
                                        <span>{Volume}</span>
                                    </div>

                                    <div className={styles.stat}>
                                        <h6>Liq:</h6>
                                        <span>{Liq}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
