import { FunctionComponent } from 'react';
import { Footer, Header, Sidebar } from '.';
import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import { AppContextProvider, IAppContext } from '@/context/app.context';


const Layout = ({children}: LayoutProps):JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.body}>{children}</div>
        <Footer className={styles.footer}/>
    </div>
  )
}

// High order component
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponents(props: T):JSX.Element {
    console.log(props)
    return (
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
          <Layout>
              <Component {...props}/>
          </Layout>  
        </AppContextProvider>
    )
  }
}