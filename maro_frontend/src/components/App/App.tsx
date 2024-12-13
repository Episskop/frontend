import React from 'react'
import { LanguageProvider } from '../Language'
import { useMediaQuery } from 'react-responsive'
import Layout from '../Layout/Layout'
import LayoutMobile from '../Layout/LayoutMobile'
import Main from '@/pages/Main/Main'
import MainMobile from '@/pages/Main/MainMobile'
import Portfolio from '@/pages/Portfolio/Portfolio'
import PortfolioMobile from '@/pages/Portfolio/PortfolioMobile'
import SocialResponsibility from '@/pages/SocialResponsibility/SocialResponsibility'
import SocialResponsibilityMobile from '@/pages/SocialResponsibility/SocialResponsibilityMobile'
import Guarantees from '@/pages/Guarantees/Guarantees'
import GuaranteesMobile from '@/pages/Guarantees/GuaranteesMobile'
import FAQ from '@/pages/FAQ/FAQ'
import FAQMobile from '@/pages/FAQ/FAQMobile'
import Cooperation from '@/pages/Cooperation/Cooperation'
import CooperationMobile from '@/pages/Cooperation/CooperationMobile'
import RealEstateDetails from '@/pages/RealEstateDetails/RealEstateDetails'
import RealEstateDetailsMobile from '@/pages/RealEstateDetails/RealEstateDetailsMobile'
import Link from 'next/link'

function DesktopApp(): JSX.Element {
  return (
    <LanguageProvider>
      <Layout>
        <Main />
        <Portfolio />
        <RealEstateDetails />
        <SocialResponsibility />
        <Guarantees />
        <FAQ />
        <Cooperation />
      </Layout>
    </LanguageProvider>
  )
}

function MobileApp(): JSX.Element {
  return (
    <LanguageProvider>
      <LayoutMobile>
        <MainMobile />
        <PortfolioMobile />
        <RealEstateDetailsMobile />
        <SocialResponsibilityMobile />
        <GuaranteesMobile />
        <FAQMobile />
        <CooperationMobile />
      </LayoutMobile>
    </LanguageProvider>
  )
}

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

  return isMobile ? <MobileApp /> : <DesktopApp />
}

export default App
