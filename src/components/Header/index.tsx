import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import styles from './styles.module.scss'

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1156) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const showMenu = () => {
    if (click) return `${styles.navMenu} ${styles.navMenuActive}`
    return `${styles.navMenu}`
  }

  const Buttons = () => {
    return (
      <>
        <Button
            color="secondary"
            width={122}
            size="small"
          >
            Button
        </Button>

        <Button
            color="primary"
            width={122} 
            size="small"
          >
          Button 
          {/* <Image 
            src='/icons/right-arrow.svg'
            alt="Right arrow"
            width={20}
            height={20}
          /> */}
        </Button>
      </>
    )
  };

  return (
    
    
      <div className={styles.navbarContainer}>
        <Link href='/' onClick={closeMobileMenu}>
          <Image 
              src='/images/logo-rd.svg'
              alt="RD Station"
              width={136}
              height={25}
              className={styles.logo}
          />
        </Link>

        

        <div className={styles.rightArea}>

          <ul className={showMenu()}>
            <li className={styles.navItem}>
              <Link className={styles.navLinks} href='/' onClick={closeMobileMenu}>
                Menu 1
              </Link>
            </li>
            <li className={styles.navItem}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link className={styles.navLinks}
                href='/'
                onClick={closeMobileMenu}
              >
                Menu 2 
                {!click && 
                  <i className='fas fa-caret-down' />
                }
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLinks}
                href='/'
                onClick={closeMobileMenu}
              >
                Menu 3
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLinks}
                href='/'
                onClick={closeMobileMenu}
              >
                Menu 4
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLinks}
                href='/'
                onClick={closeMobileMenu}
              >
                Menu 5
              </Link>
            </li>
            <li className={styles.rightButtonsMobile}>
              <Buttons/>
            </li>
          </ul>
              
          <div className={styles.RightButtonsDesktop}>
            <Buttons/>
          </div>

        </div>

        <div className={styles.menuIcon} onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      
      </div>
  );
}

export default Header;
