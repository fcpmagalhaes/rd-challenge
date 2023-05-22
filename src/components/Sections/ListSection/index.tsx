import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import container from '@/components/SectionContainer/styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';

function ListSection() {
  return (
    <div className={styles.background}>
      <div className={styles.mainSection}>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24, order: 1}} md={{ span: 10, order: 2}}>
            <div className={styles.title}>
              Resultados previsíveis e mais clientes para sua empresa
            </div>
            <div className={styles.subtitle}>
              Torne sua atuação no Marketing Digital mais eficaz
            </div>

            <ul className={styles.list}>
              <li>
                <span><i className={'fas fa-check'}/></span>   
                <b>Ferramentas intuitivas</b> e com modelos prontos, vídeos explicativos e passo a passo guiado
              </li>
              <li>
                <span><i className={'fas fa-check'}/></span>
                <b>Implementação com especialistas</b> focada em planejamento e prática (nos planos Marketing Pro e Enterprise)
              </li>
              <li>
                <span><i className={'fas fa-check'}/></span>
                <b>Time de especialistas em Sucesso do Cliente</b> para apoiar na otimização da estratégia em cada fase da sua jornada (nos planos Marketing Pro e Enterprise)
              </li>
              <li>
                <span><i className={'fas fa-check'}/></span>
                <b>Suporte técnico</b> em português, espanhol e inglês para tirar dúvidas, <b>com 97% de satisfação</b> entre nossos clientes
              </li>
              <li>
                <span><i className={'fas fa-check'}/></span>
                <b>Muito conteúdo educativo,</b> eventos, cursos da <Link href='' className={styles.primaryColor}>RD University</Link> e comunidades para você continuar evoluindo
              </li>
            </ul>
          </Col>
              
          <Col xs={{ span: 24, order: 2}} md={{ span: 14, order: 1}}>
          
            <div className={styles.image}>
              <img
                src='/images/img-rdoer.png'
                alt="Rdoer"
                width={325}
                height={325}
                className={styles.imageContent}
              />  
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListSection;