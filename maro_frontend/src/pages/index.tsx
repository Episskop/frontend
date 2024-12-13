import React from 'react'
import App from '@/components/App/App'
import '@/index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components/Error/ErrorFallback'
import { LanguageProvider } from '@/components/Language'
import { PropertyProvider } from '@/API/Context'


const HomePage = () => {
  return (
    <LanguageProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </ErrorBoundary>
    </LanguageProvider>
  )
}

export default HomePage
