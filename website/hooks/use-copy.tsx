import { useToast } from '@/hooks/use-toast';
import { getCodeCategory } from '@/lib/utils';
import { debounce } from 'lodash-es';
import { useCallback, useMemo, useState } from 'react';

export const useCopy = (code: string | string[], copyText: string) => {
	const [isChecked, setIsChecked] = useState(false);
	const { addToast } = useToast();

	const codeString = useMemo(() => {
		return getCodeCategory(code) === 'Keyframes' && Array.isArray(code)
			? `[${code.map((keyframe) => `'${keyframe}'`).join(',\n')}]`
			: String(code);
	}, [code]);

	const resetIsChecked = useCallback(
		debounce(() => setIsChecked(false), 1000),
		[],
	);

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(codeString);
		setIsChecked(true);
		addToast(copyText);
		resetIsChecked();
	}, [codeString, copyText, addToast, resetIsChecked]);

	return [onCopy, isChecked] as const;
};
