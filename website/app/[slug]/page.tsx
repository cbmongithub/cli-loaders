import { Share } from '@/components/Share';
import LOADERS from '@/lib/config/loaders';
import type { LoaderProps } from '@/types';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero').then((mod) => mod.Hero));
const Renderer = dynamic(() =>
	import('@/components/Renderer').then((mod) => mod.Renderer),
);
const CodeBlock = dynamic(() =>
	import('@/components/CodeBlock').then((mod) => mod.CodeBlock),
);
const BackButton = dynamic(() =>
	import('@/components/BackButton').then((mod) => mod.BackButton),
);
const CopyKeyframes = dynamic(() =>
	import('@/components/CopyKeyframes').then((mod) => mod.CopyKeyframes),
);
const ForwardButton = dynamic(() =>
	import('@/components/ForwardButton').then((mod) => mod.ForwardButton),
);
const NextJsComponentExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.NextJsComponentExample),
);
const OhMyZshExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.OhMyZshExample),
);
const ZeroDependencyExample = dynamic(() =>
	import('@/components/Examples').then((mod) => mod.ZeroDependencyExample),
);
export const generateStaticParams = async () =>
	Object.keys(LOADERS).map((key) => ({
		slug: key,
	}));

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const loaderCategories = Object.keys(LOADERS);
	const currentIndex = loaderCategories.indexOf(slug);
	const loader = LOADERS[slug as keyof typeof LOADERS] as LoaderProps;
	const nextLoader = loaderCategories[currentIndex + 1];
	const { speed, category, keyframes } = loader as LoaderProps;

	return (
		<>
			<section>
				<Hero
					title={slug}
					description={`The ${category.toLocaleLowerCase()} collection`}
				/>
				<div className='z-50 flex flex-row items-center justify-between p-6'>
					<BackButton />
					<ForwardButton href={nextLoader} />
				</div>
			</section>
			<section className='w-full border border-x-0 border-b-0 border-t-neutral-800 p-6'>
				<div className='relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-black p-6'>
					<div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
					<span className='absolute top-2 left-3 text-neutral-50'>Preview</span>
					<CopyKeyframes
						code={keyframes}
						variant='secondary'
						copyText='Keyframes copied to clipboard!'
					/>
					<Renderer speed={speed} keyframes={keyframes} />
				</div>
				<div className='flex w-full flex-col'>
					<h1 className='mt-6 text-lg font-light text-neutral-50'>Installation</h1>
					<div className='pt-6'>
						<CodeBlock lang='bash' title='bash'>
							{`npm install cli-loaders
# or
yarn add cli-loaders
# or
pnpm install cli-loaders
# or
bun add cli-loaders`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Importing</h1>
					<div className='pt-6'>
						<CodeBlock lang='ts' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders'; // for initializing`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Initializing</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader, ${slug} } from 'cli-loaders'; // You can import the ${slug} object

initCliLoader('${slug}'); // by name
initCliLoader(${slug}); // by object`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Customizing</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

initCliLoader('${slug}', 150); // custom speed
initCliLoader('${slug}', 150, ["..", "."]); // custom speed and keyframes`}
						</CodeBlock>
					</div>

					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

const myAwesomeLoader = {
	speed: 150,
	keyframes: ["..", "."]
};

initCliLoader(myAwesomeLoader); // custom loader object`}
						</CodeBlock>
					</div>

					<h1 className='mt-6 text-lg font-light text-neutral-50'>Stopping</h1>
					<div className='pt-6'>
						<CodeBlock lang='tsx' title='example.ts'>
							{`import { initCliLoader } from 'cli-loaders';

const intervalId = initCliLoader('${slug}');

// Stop the loader after some time
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);`}
						</CodeBlock>
						<h1 className='mt-6 text-lg font-light text-neutral-50'>Examples</h1>
						<div className='pt-6'>
							<OhMyZshExample speed={speed} keyframes={keyframes} />
						</div>
						<div className='pt-6'>
							<NextJsComponentExample name={slug} />
						</div>
						<div className='pt-6'>
							<ZeroDependencyExample speed={speed} keyframes={keyframes} />
						</div>
						<h1 className='mt-6 text-center text-lg font-light text-neutral-50'>Share</h1>
						<Share className='pt-6 flex flex-row justify-center items-center' title={slug} description={`${slug} loader on cliloaders.com`} url={`https://cliloaders.com/${slug}`} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
