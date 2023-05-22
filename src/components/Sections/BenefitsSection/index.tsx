import { Row, Col } from 'antd'
import styles from './styles.module.scss'
import container from '@/components/SectionContainer/styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import BenefitCard from '@/components/BenefitCard';

const benefitItems = [
  {
    title: 'Torne sua operação de Marketing Digital mais produtiva',
    description: 'Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.',
    icon: '/icons/icon.svg'
  },
  {
    title: 'Crie facilmente campanhas que funcionam',
    description: 'É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.',
    icon: '/icons/icon-1.svg'
  },
  {
    title: 'Construa jornadas personalizadas e gere vendas em escala',
    description: 'Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.',
    icon: '/icons/icon-2.svg'
  },
  {
    title: 'Encontre automaticamente as melhores oportunidades',
    description: 'Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.',
    icon: '/icons/icon-3.svg'
  },
  {
    title: 'Saia da incerteza e comprove resultados',
    description: 'Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.',
    icon: '/icons/icon-4.svg'
  },
  {
    title: 'Suporte ágil e na sua língua',
    description: 'Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.',
    icon: '/icons/icon-5.svg'
  }
];

function BenefitsSection() {
  return (
    <div className={styles.background}>
      <div className={styles.mainSection}>
        <Row gutter={[16, 16]}>

          <Col span={24}>
            <div className={styles.title}>
              A ferramenta de Automação de Marketing líder na América Latina
            </div>
          </Col>
          <div className={styles.desktopCards}>
            {
              benefitItems.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <BenefitCard data={item} />
                </Col>
              ))
            }
          </div>
          <div className={styles.mobileCards}>
            123123
          </div>
          
        </Row>
      </div>
    </div>
  );
}

export default BenefitsSection;