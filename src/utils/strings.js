export function shortenAddress(string) {
    if (!string) return '';
    return `${string.substring(0, 6)}...${string.slice(-4)}`;
}
export function shortenString(string, i = 12) {
    if (!string) return '';
    return `${string.substring(0, 12)}`;
}
