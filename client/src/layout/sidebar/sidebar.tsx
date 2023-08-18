import { Menu } from '..';
import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/helpers/icons';
import { Divider } from '@/components';

const Sidebar = ({className,...props}: SidebarProps):JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={'/'} >
        <Image src={Logo} alt="Logo" width={120} height={45}/>
        <Divider/>
      </Link>
      <div>Search...</div>
      <Menu/>
    </div>
  )
}

export default Sidebar