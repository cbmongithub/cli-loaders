import { CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const CodeButton = ({ slug }: { slug:string }) => {
    return (
        <Link href={slug}>
            <button
                type="button"
                aria-label="Back to homepage"
                className='absolute right-14 top-3 cursor-pointer border border-neutral-900 p-2 transition hover:bg-neutral-900 bg-black'>
                <CodeIcon className='size-4 text-neutral-50' />
            </button>
        </Link>
    );
}