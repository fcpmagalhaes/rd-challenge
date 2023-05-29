import { useState } from 'react';
import { MenuItems } from './MenuItems';
import styles from './styles.module.scss';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? `${styles.dropdownMenu} ${styles.clicked}` : styles.dropdownMenu}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
