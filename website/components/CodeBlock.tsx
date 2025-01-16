import { Code } from 'bright';
import CopyButton from './CopyButton';
import githubDark from '@/lib/theme.json';

type CodeBlockProps = {
  code: string;
  lang: string;
  title: string;
};

Code.theme = githubDark as unknown as Record<string, string>;

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, title }) => {
  return (
    <div className='relative border border-neutral-900'>
        <div className='absolute left-4 top-4'>
          <p className='text-sm text-neutral-400'>{title}</p>
        </div>
      <CopyButton code={code} />
      <Code code={code} lang={lang} />
    </div>
  );
};

export default CodeBlock;
