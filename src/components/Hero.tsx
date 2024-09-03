import styles from './Hero.module.scss'
import appstore from '../assets/appstore.png'
import googlePlay from '../assets/google-play.png'
import reviewsMo from '../assets/reviews_mo.png'
import reviewsPc from '../assets/reviews_pc.png'
import { useMediaQuery } from 'usehooks-ts'
import coin from '../assets/coin.png'
import deal from '../assets/deal.png'

export default function Hero() {
  const pc = useMediaQuery('(min-width: 1080px)')

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title />
        <div className={styles.buttons}>
          <button>
            <div className={styles.buttonIcon}>
              <img src={appstore} />
            </div>
            <p>App Store</p>
          </button>
          <button>
            <div className={styles.buttonIcon}>
              <img src={googlePlay} />
            </div>
            <p>Google Play</p>
          </button>
        </div>
        <div className={styles.reviews}>
          {pc ? <img src={reviewsPc} /> : <img src={reviewsMo} />}
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
