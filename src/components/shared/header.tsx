import { Menu } from 'lucide-react'
import styles from './header.module.css'
import { Button } from './Button'
import { useState } from 'react'

export function Header() {
  const [mobileMenu, setMobileMenu] = useState<string>('closed')

  function toggleMenu () {
    setMobileMenu((prev) => {
      console.log(prev === styles.open)
      return prev === styles.open ? 'closed' : styles.open
    })
  }

  return (
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
          
          <Button variant='primary' href='/'>Registrar-se</Button>
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
