import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

const Footer = ({className,...props}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Next Level © 2022 - {format(new Date(), 'yyyy')}. All right reserved
      </div>
      <div>
        <a href="#">Terms of use</a>
        <a href='#'>Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer