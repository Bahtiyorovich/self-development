import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm';
	color?: 'red' | 'green' | 'primary';
	children: ReactNode;
}
