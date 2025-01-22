
export type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icons: {
		default: React.ReactElement<SVGElement>;
		hover: React.ReactElement<SVGElement>;
		clicked?: React.ReactElement<SVGElement>;
	};
	className: string;
};

export type CardProps = {
	children: React.ReactNode;
	keyframes: string[];
	slug: string;
	name: string;
};

export type ChangeLogProps = {
	version: string;
	changes: { type: string; details: string[] }[];
};

export type CopyButtonProps = {
	className?: string;
	code: string;
};

export type CopyCodeButtonProps = {
	code: string | string[];
};

export type ExampleCardProps = {
	title: string;
	code: string;
	isV2?: boolean;
	children?: React.ReactNode;
};

export type FilterProps = {
	category: string;
	onFilterChange: (filteredLoaders: Props[]) => void;
};

export type IconComponents = {
	default: React.ReactElement<SVGElement>;
	hovered: React.ReactElement<SVGElement>;
	clicked?: React.ReactElement<SVGElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement>;

export type JokeCategories = {
	[key in Categories]: string[];
};

export type LoaderCategories =
	| 'Arrows'
	| 'Bars'
	| 'Circles'
	| 'Dots'
	| 'Emojis'
	| 'Lines'
	| 'Numbers'
	| 'Squares'
	| 'Symbols'
	| 'Togglers';

export type LoaderProps = {
	category?: LoaderCategories;
	name: string;
	speed: number;
	keyframes: string[];
};

export type RendererProps = {
	category?: LoaderCategories;
	name?: string;
	speed: number;
	keyframes: string[];
	className?: string;
};

export type TabsProps = {
	tabs: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
};

export type ToastContextProps = {
	toasts: ToastProps[];
	addToast: (message: string, type: 'success' | 'error' | 'info') => void;
	removeToast: (id: number) => void;
	success: (message: string) => void;
	error: (message: string) => void;
	info: (message: string) => void;
};

export type ToastMessageProps = {
	message: string;
	type: 'success' | 'error' | 'info';
	onClose: () => void;
};

export type ToastProps = {
	id: number;
	message: string;
	type: 'success' | 'error' | 'info';
	onClose?: () => void;
};
