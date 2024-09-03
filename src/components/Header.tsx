import styles from './Header.module.scss'
import titleLogo from '../assets/dealscount.svg'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={titleLogo} />
      </div>
    </div>
  )
}
