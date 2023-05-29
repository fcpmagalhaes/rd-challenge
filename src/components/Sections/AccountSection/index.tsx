import styles from './styles.module.scss'
import Button from '@/components/Button';


function AccountSection() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.box}> 
          <div className={styles.title}>
            Por que mais de 25.000 empresas escolheram o RD Station?
          </div>
          <div className={styles.description}>
            Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus resultados e um ecossistema que apoia o seu negócio do planejamento à prática.
          </div>
          <div className={styles.createAccount}>
            <a href='https://app.rdstation.com.br/signup' target="_blank">
              <Button
                  color="highligh"
                  width={215}
                  size="small"
                >
                  Criar conta gratuita
              </Button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default AccountSection;