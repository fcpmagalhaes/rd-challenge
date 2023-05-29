import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'antd'
import styles from './styles.module.scss'

function Footer() {
  return (

    <div className={styles.background}>
      <div className={styles.mainSection}>
        <Row justify="end">
          <Col xs={{ span: 24, order: 1}} md={{ span: 12, order: 1}}>
            <div className={styles.rdLogo}>
              <Image 
                src='/images/logo-rd-2.svg'
                alt="Rd logo"
                width={174}
                height={32}
              />
            </div>
          </Col>
          <Col xs={{ span: 24, order: 3}} md={{ span: 12, order: 2}}>
            <div className={styles.listContainer}>
              <ul className={styles.icons}>
                <li>
                  <Link href='' className={styles.icon}>
                    <Image
                      src='/icons/twitter.svg'
                      alt="Rd twitter"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='' className={styles.icon}>
                    <Image
                      src='/icons/facebook.svg'
                      alt="Rd facebook"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='' className={styles.icon}>
                    <Image
                      src='/icons/linkedin.svg'
                      alt="Rd linkedin"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='' className={styles.icon}>
                    <Image
                      src='/icons/instagram.svg'
                      alt="Rd instagram"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link href='' className={styles.icon}>
                    <Image
                      src='/icons/youtube.svg'
                      alt="Rd youtube"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={{ span: 24, order: 2}} md={{ span: 24, order: 3}}>
            <div className={styles.divider}/>
          </Col>
          <Col xs={{ span: 24, order: 4}} md={{ span: 12, order: 4}}>
          <div className={styles.privacity}>
            <div>
              © 2023 <b>Developed by:</b> <a href='https://www.linkedin.com/in/fcpmagalhaes/' target="_blank" className={styles.privacyLink}>Felipe Magalhães</a>
            </div>
            <div>
              © 2021 <b>RD Station.</b> <a href=' https://legal.rdstation.com/pt/privacy-policy/' target="_blank"className={styles.privacyLink}>Política de Privacidade</a>
            </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}


export default Footer;