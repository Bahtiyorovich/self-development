import { FunctionComponent } from 'react'
import { Footer, Header, Sidebar } from '.'
import { LayoutProps } from './layout.props'


const Layout = ({children}: LayoutProps):JSX.Element => {
  return (
    <>
        {/* Headers */}
        <Header/>
        <div>
            {/*Sidebar  */}
            <Sidebar/>
            <div>{children}</div>
        </div>
        {/* Footer */}
        <Footer/>
    </>
  )
}

// High order component
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponents(props: T):JSX.Element {
    console.log(props)
    return (
      <Layout>
        <Component {...props}/>
      </Layout>  
    )
  }
}