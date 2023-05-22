import styles from './styles.module.scss'
import Image from 'next/image';

export interface BenefitType {
  data: {
    title: string;
    description: string;
    icon: string;
  }
}

function BenefitCard({data}: BenefitType) {
  const { title, description, icon } = data;

  return (
    <div className={styles.container}>
      <div className={styles.roundBackground}>
        <Image 
        src={icon}
        alt="Icon"
        width={32}
        height={32}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );

}

export default BenefitCard;