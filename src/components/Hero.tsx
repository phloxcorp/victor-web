import styles from './Hero.module.scss'
import appstore from '../assets/appstore.png'
import googlePlay from '../assets/google-play.png'
import reviewsMo from '../assets/reviews_mo.png'
import reviewsPc from '../assets/reviews_pc.png'
import { useMediaQuery } from 'usehooks-ts'
import coin from '../assets/coin.png'
import deal from '../assets/deal.png'
import { appDownloadLink } from '../constant'
import { motion } from 'framer-motion'

export default function Hero() {
  const pc = useMediaQuery('(min-width: 1080px)')
  const d = 80

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title />
        <div className={styles.buttons}>
          <a href={appDownloadLink}>
            <div className={styles.buttonIcon}>
              <img src={appstore} />
            </div>
            <p>App Store</p>
          </a>
          <a href={appDownloadLink}>
            <div className={styles.buttonIcon}>
              <img src={googlePlay} />
            </div>
            <p>Google Play</p>
          </a>
        </div>
        <div className={styles.reviewScroll}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: d,
              delay: -d,
              repeatType: 'loop',
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <div className={styles.reviews}>
              {pc ? <img src={reviewsPc} /> : <img src={reviewsMo} />}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: '-200%' }}
            transition={{
              duration: d,
              repeatType: 'loop',
              ease: 'linear',
              repeat: Infinity,
              delay: -d / 2,
            }}
          >
            <div className={styles.reviews}>
              {pc ? <img src={reviewsPc} /> : <img src={reviewsMo} />}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Title = () => {
  const pc = useMediaQuery('(min-width: 1080px)')
  return (
    <>
      {pc ? (
        <div className={styles.title}>
          <div className={styles.coin}>
            <img src={coin} />
          </div>
          <h1>
            Track prices &<br />
            show deals instantly!
          </h1>
          <div className={styles.deal}>
            <img src={deal} />
          </div>
        </div>
      ) : (
        <h1>
          Track prices &<br />
          show deals
          <br />
          instantly!
        </h1>
      )}
    </>
  )
}
