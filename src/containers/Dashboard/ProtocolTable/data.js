import AAVE from '@/assets/logos/aave.png';
import Egin from '@/assets/logos/eigen.png';
import Ethena from '@/assets/logos/ethena.svg';
import EtherFi from '@/assets/logos/etherfi.png';
import Jupiter from '@/assets/logos/jupiter.png';
import Lido from '@/assets/logos/lido.png';
import Uniswap from '@/assets/logos/uniswap.png';

export const PROTOCOLS = [
    {
        Name: 'Jupiter',
        Ticker: 'JUP',
        URL: 'https://jup.ag/',
        Logo: Jupiter.src,
        TVL: '$2.667B',
        Volume: '$255.21M',
        Liq: 'N/A',
        APY: '9.8%',
    },
    {
        Name: 'AAVE',
        Ticker: 'AAVE',
        URL: 'https://aave.com/https://cryptologos.cc/logos/aave-aave-logo.png',
        Logo: AAVE.src,
        TVL: '$20.1B',
        Volume: '$468M',
        Liq: 'N/A',
        APY: '4.23%',
    },
    {
        Name: 'Uniswap',
        Ticker: 'UNI',
        URL: 'https://uniswap.org/',
        Logo: Uniswap.src,
        TVL: '$5.032B',
        Volume: '$3.21B',
        Liq: '$59.45M',
        APY: '5.6%',
    },
    {
        Name: 'Lido',
        Ticker: 'LDO',
        URL: 'https://lido.fi/',
        Logo: Lido.src,
        TVL: '$26.42B',
        Volume: '$293.78M',
        Liq: '$10.61M',
        APY: '4.5%',
    },
    {
        Name: 'EigenLayer',
        Ticker: 'EIGEN',
        URL: 'https://www.eigenlayer.xyz/',
        Logo: Egin.src,
        TVL: '$12.079B',
        Volume: '$106.06M',
        Liq: '$6.3M',
        APY: '3.2%',
    },
    {
        Name: 'Ether.fi',
        Ticker: 'ETHFI',
        URL: 'https://ether.fi',
        Logo: EtherFi.src,
        TVL: '$6.993B',
        Volume: '$130.54M',
        Liq: '$2.2M',
        APY: '3.9%',
    },
    {
        Name: 'ethena',
        Ticker: 'ETHENA',
        URL: 'https://ethena.fi/',
        Logo: Ethena.src,
        TVL: '$6.133B',
        Volume: '$295.19M',
        Liq: '$20.76M',
        APY: '6.7%',
    },
];
