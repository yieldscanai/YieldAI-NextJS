import { toast } from 'sonner';

export function clipboardCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success('Copied to Clipboard');
}
