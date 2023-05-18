import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import container from '@/components/SectionContainer/styles.module.scss'


function FormSection() {
  return (
    <>
      <Row className={styles.mainSection}>
        <div className={container.sectionContainer}>
        <Col xs={24} sm={20} md={12}>
              <div className={styles.title}>
                Gere mais <span className={styles.primaryColor}>oportunidades</span> para seu negócio
              </div>
              <div className={styles.subtitle}>
                O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.
              </div>
            </Col>
        </div>
      </Row>

      <Row className={styles.secondSection}>
        <div className={container.sectionContainer}>
          <Col xs={24} sm={20} md={12}>
              <div className={styles.title}>
                Estaremos juntos desde o primeiro passo!
              </div>
              <div className={styles.subtitle}>
                Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. <b>O RD Station Marketing</b> é mais que uma ferramenta, nos importamos com os seus resultados.
                <br/>
                <br/>
                <b>Estaremos com você do planejamento até a prática!</b>
              </div>
            </Col>
        </div>
      </Row>
    </>
  );
}

export default FormSection;