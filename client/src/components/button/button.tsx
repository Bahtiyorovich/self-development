import { ButtonProps } from './button.props';
import styles from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({ children, appearance, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.right]: arrow === 'right',
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

export default Button;
