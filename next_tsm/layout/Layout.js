import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { AppContainer } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <AppContainer>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </AppContainer>
  )
}
