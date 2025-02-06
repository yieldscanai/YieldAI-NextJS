'use client';
import { shortenAddress } from '@/utils/strings';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

export default function WalletButton() {
    const { publicKey, connected } = useWallet();
    const { setVisible } = useWalletModal();

    if (connected) {
        return <button onClick={() => setVisible(true)}>[{shortenAddress(publicKey?.toBase58())}]</button>;
    }

    return <button onClick={() => setVisible(true)}>[Connect Wallet]</button>;
}
