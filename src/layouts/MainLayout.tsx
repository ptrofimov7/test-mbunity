import { ReactNode } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import * as Styles from './MainLayout.styles'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Styles.MainLayout>
      <Header />
      <Styles.Container>
      {children}
      </Styles.Container>
      <Footer />
   </Styles.MainLayout>
  )
}

export default MainLayout