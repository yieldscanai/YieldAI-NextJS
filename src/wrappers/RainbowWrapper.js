'use client';

import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '68f8c26783bf5cf2a941d3d15e3ff636',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export default function RainbowWrapper({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
