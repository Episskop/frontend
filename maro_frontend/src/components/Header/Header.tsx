import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLanguage } from '../Language'
import './Header.css'
import usePreventBodyScroll from '@/hooks/usePreventBodyScroll'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const { language } = useLanguage()
  const router = useRouter()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    setButtonClicked(!buttonClicked)
  }

  const { disableScroll, enableScroll } = usePreventBodyScroll()

  useEffect(() => {
    if (menuOpen) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [menuOpen])

  const isHomePage = router.pathname === '/'

  return (
    <div>
      {menuOpen && (
        <div className='menu'>
          <ul>
            <li>
              <Link href='/#about' passHref>
                <a onClick={toggleMenu}>
                  {language === 'ru' ? 'О нас' : 'About us'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio' passHref>
                <a onClick={toggleMenu}>
                  {language === 'ru' ? 'Портфолио' : 'Portfolio'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/#services' passHref>
                <a onClick={toggleMenu}>
                  {language === 'ru' ? 'Услуги' : 'Services'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/#selection' passHref>
                <a onClick={toggleMenu}>
                  {language === 'ru' ? 'Подбор мебели' : 'Furniture selection'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/#contacts' passHref>
                <a onClick={toggleMenu}>
                  {language === 'ru' ? 'Контакты' : 'Contacts'}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div
        className={
          isHomePage ? 'header' : isSticky ? 'sticky-header' : 'header-not-main'
        }
      >
        <a href='/'>
          <div className='main-logo'>
            <img src='/img/logo.svg' alt='logo-on-main-page' />
          </div>
        </a>
        <div className='menu-controls'>
          <Link href='/' passHref>
            <a style={{ textDecoration: 'none' }}>
              <span
                className={isHomePage ? 'phone-number' : 'sticky-phone-number'}
              >
                <img
                  src={isHomePage ? '/img/phone.svg' : '/img/black-phone.svg'}
                  alt='phone'
                  className='phone-icon'
                />
                <p style={{ margin: 0, fontSize: '1.1vw', fontWeight: 200 }}>
                  382 69 772-002
                </p>
              </span>
            </a>
          </Link>
          <button
            className={isHomePage ? 'menu-button' : 'sticky-menu-button'}
            onClick={toggleMenu}
          >
            {buttonClicked ? (
              <img
                src={isHomePage ? '/img/x-mark.png' : '/img/x-mark-black.png'}
                alt='menu-icon'
                className={isSticky ? 'x-mark-black' : 'x-mark'}
              />
            ) : (
              <svg
                className='menu-icon'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 9H27M5 16H16M5 23H27'
                  stroke={isHomePage ? '#FFFFFF' : isSticky ? 'black' : 'black'}
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
