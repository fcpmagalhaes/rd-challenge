import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import LeadForm from '@/components/LeadForm'


function FormSection() {
  return (
    
    <>
    <div className={styles.background}>
      <div className={styles.mainSection}>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={14}>
            <div className={styles.title}>
              Gere mais <span className={styles.primaryColor}>oportunidades</span> para seu negócio
            </div>
            <div className={styles.subtitle}>
              O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.
            </div>
          </Col >
          <Col sm={24} md={10} className={styles.alignFormMobile}>
            <LeadForm />
          </Col>
        </Row>
      </div>
    </div>
     
    <div id='second-section' className={styles.backgroundTwo} >
      <div className={styles.secondSection}>
        <Row>
          <Col xs={24} md={14}>
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
        </Row>
      </div>
    </div>
    
    </>
  );
}

export default FormSection;