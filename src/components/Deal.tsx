import styles from './Deal.module.scss'
import dealBlue from '../assets/deal-blue.png'
import appstore from '../assets/appstore.png'
import googlePlay from '../assets/google-play.png'
import { useEffect, useRef, useState } from 'react'
import loadingData from '../assets/loading.json'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { AnimatePresence, motion } from 'framer-motion'
import confettiData from '../assets/confetti.json'

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.3,
    },
  },
}

const child = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Deal({ src }: { src: string }) {
  const [showDelayedContent, setShowDelayedContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedContent(true)
    }, 1500)
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, []) // Empty dependency array means this effect runs once on mountkkkk

  return (
    <div className={styles.wrapper}>
      {showDelayedContent ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parent}
          style={{
            position: 'relative',
          }}
        >
          <img src={src} />
          <HBar />
          <div className={styles.footer}>
            <Icon src={dealBlue} />
            <div className={styles.content}>
              <h1>Download</h1>
              <p>
                Track prices on Amazon
                <br />
                instantly with Dealscount!
              </p>
            </div>
          </div>
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
          <motion.div variants={child}>
            <Confetti />
          </motion.div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
          >
            <Loading />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

const HBar = () => <div className={styles.hBar}></div>

const Icon = ({ src }: { src: string }) => (
  <div className={styles.icon}>
    <img src={src} />
  </div>
)

const Loading = () => {
  const ref = useRef<LottieRefCurrentProps | null>(null)
  useEffect(() => {
    ref.current?.setSpeed(3)
  }, [])

  return (
    <div className={styles.loading}>
      <Lottie
        animationData={loadingData}
        loop={true}
        lottieRef={ref}
      />
    </div>
  )
}

const Confetti = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%',
        pointerEvents: 'none',
      }}
    >
      <Lottie
        animationData={confettiData}
        loop={true}
      ></Lottie>
    </div>
  )
}
