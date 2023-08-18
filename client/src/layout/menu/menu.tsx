import { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { firstLevelMenu } from '@/helpers/constants';
import Link from 'next/link';
import styles from './menu.module.css';
import cn from 'classnames';
import { IFirstLevelMenu, PageItem } from '@/interfaces/menu.interface';
import { useRouter } from 'next/router';

const Menu = ():JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const router = useRouter();

    const openSecondBlock = (category: string) => {
        setMenu && 
           setMenu(
               menu.map(j => {
                    if(j._id.secondCategory === category){
                        j.isOpened = !j.isOpened
                    }
    
                    return j;
                })
           ) 
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(c => (
                    <div key={c.route}>
                        <>
                            <Link href={`/${c.route}`}>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: c.id === firstCategory,
                                })}>
                                    {c.icon}
                                    <span>{c.name}</span>
                                </div>
                            </Link>
                            {c.id === firstCategory && buildSecondLevel(c)}
                        </>
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(c => {

                    if(c.pages.map(i => i._id).includes(router.asPath.split('/')[2])){
                        c.isOpened = true;
                    }

                    return (
                        <div key={c._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondBlock(c._id.secondCategory)}>{c._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockActive]: c.isOpened,
                            })}>
                                {buildThirdLevel(c.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(c => (
                <Link key={c._id} href={`/${route}/${c._id}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${c._id}` === router.asPath,
                })}>{c.title}</Link>
            ))
        )
    };

    return (
        <div className={cn(styles.menu)}>{buildFirstLevel()}</div>
  )
}

export default Menu