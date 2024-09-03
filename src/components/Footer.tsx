import styles from './Footer.module.scss'
import titleLogo from '../assets/dealscount.svg'
import appstore from '../assets/appstore-white.png'
import googlePlay from '../assets/google-play.png'
import { appDownloadLink } from '../constant'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <img
          src={titleLogo}
          className={styles.img}
        />
      </div>
      <div className={styles.buttons}>
        <a href={appDownloadLink}>
          <div className={styles.buttonIcon}>
            <img
              src={appstore}
              className={styles.img}
            />
          </div>
          <p>App Store</p>
        </a>
        <a href={appDownloadLink}>
          <div className={styles.buttonIcon}>
            <img
              src={googlePlay}
              className={styles.img}
            />
          </div>
          <p>Google Play</p>
        </a>
      </div>
      <div className={styles.links}>
        <a href="https://phlox.notion.site/Dealscount-Privacy-Policy-1ec3077ea53d4a57825d80ee5694fd7e?pvs=4">
          Privacy Policy
        </a>
        <a href="https://phlox.notion.site/Dealscount-Terms-Conditions-c052442858bc4e909b834478c26e6919?pvs=4">
          Terms of Service
        </a>
      </div>

      <p className={styles.copyRight}>© 2024 Dealscount</p>
    </div>
  )
}
