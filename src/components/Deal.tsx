import styles from './Deal.module.scss'
import dealBlue from '../assets/deal-blue.png'
import appstore from '../assets/appstore.png'
import googlePlay from '../assets/google-play.png'
import { useEffect, useRef, useState } from 'react'
import loadingData from '../assets/loading.json'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { AnimatePresence, motion } from 'framer-motion'
import confettiData from '../assets/confetti.json'
import { appDownloadLink } from '../constant'

export default function Deal({ src }: { src: string }) {
  const [showDelayedContent, setShowDelayedContent] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedContent(true)
    }, 1500)
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, []) // Empty dependency array means this effect runs once on mountkkkk

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true)
    }, 2000)
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, []) // Empty dependency array means this effect runs once on mountkkkk

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{
          opacity: 0,
          filter: 'blur(6px)',
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            delay: 1.8,
            duration: 0.5,
          },
        }}
        className={styles.graph}
      >
        <img src={src} />
        {showConfetti && <Confetti />}
      </motion.div>
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
      <AnimatePresence>
        {!showDelayedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
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
    <div className={styles.confetti}>
      <Lottie
        animationData={confettiData}
        loop={false}
      ></Lottie>
    </div>
  )
}
