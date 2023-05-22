import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import BenefitCard from '@/components/BenefitCard';
import { Carousel } from 'antd';



function AccountSection() {
  return (
    <div className={styles.background}>
      <div className={styles.mainSection}>
        <Row gutter={[16, 16]}>

          <Col span={24}>
            <div className={styles.title}>
              A ferramenta de Automação de Marketing líder na América Latina
            </div>
          </Col>
          
          
        </Row>
      </div>
    </div>
  );
}

export default AccountSection;