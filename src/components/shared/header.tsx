import { Menu } from 'lucide-react'
import styles from './header.module.css'
import { Button } from './Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Modal } from './Modal'


export function Header() {
  const [mobileMenu, setMobileMenu] = useState<string>('closed')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const { user } = useAuth()

  function openModal() {
    setModalIsOpen((prev) => !prev)
  }

  function closeModal() {
    setModalIsOpen((prev) => !prev)
  }

  function toggleMenu () {
    setMobileMenu((prev) => {
      console.log(prev === styles.open)
      return prev === styles.open ? 'closed' : styles.open
    })
  }

  const path = window.location.pathname !== '/'

  return (
    <>
      {user && path
        ? (
          <header className={styles['header-authenticated']}>
            <div className={styles.container}>
              <div className={styles['brand-menu']}>
                <Menu onClick={toggleMenu} className={styles['hamburger-icon']} color='hsla(216, 18%, 34%, 1)' />
                <Link to={`/`}>
                  <h2 className={styles.brand}>QURIOS</h2>
                </Link>
              </div>

              <nav>
                <ul>
                  <li>
                    <a href="/questions">Perguntas</a>
                  </li>
                  <li>
                    <a href="/profile">Perfil</a>
                  </li>
                </ul>
              </nav>

              <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />

              <Button onClick={openModal} variant='primary'>Perguntar</Button>
            </div>

            <div>
              <ul className={`${styles['mobile-menu']} ${mobileMenu}`}>
                <li>
                  <a href="/">Produto</a>
                </li>
                <li>
                  <a href="/">Preços</a>
                </li>
                <li>
                  <a href="/">Sobre</a>
                </li>
              </ul>
            </div>
          </header>
        )
        : (
          <header className={styles.header}>
            <div className={styles.container}>
              <h2 className={styles.brand}>QURIOS</h2>
              
              <nav>
                <ul>
                  <li>
                    <a href="/">Produto</a>
                  </li>
                  <li>
                    <a href="/">Preços</a>
                  </li>
                  <li>
                    <a href="/">Sobre</a>
                  </li>
                </ul>
                
                <Link to={`/app/register`}>
                  <Button variant='primary'>Registre-se</Button>
                </Link>
              </nav>

              <Menu onClick={toggleMenu} className={styles['hamburger-icon']} color='hsla(216, 18%, 34%, 1)' />
            </div>

            <div>
              <ul className={`${styles['mobile-menu']} ${mobileMenu}`}>
                <li>
                  <a href="/">Produto</a>
                </li>
                <li>
                  <a href="/">Preços</a>
                </li>
                <li>
                  <a href="/">Sobre</a>
                </li>
              </ul>
            </div>
          </header>
        )
      }
    </>
  )
}
