import styles from './Article.module.scss'
import amazon from '../assets/amazon.png'
import Lottie from 'lottie-react'
import arrowData from '../assets/arrow.json'
import item0 from '../assets/item0.png'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import deal0 from '../assets/deal0.png'
import deal1 from '../assets/deal1.png'
import deal2 from '../assets/deal2.png'
import deal3 from '../assets/deal3.png'
import deal4 from '../assets/deal4.png'
import deal5 from '../assets/deal5.png'
import close from '../assets/close.png'
import * as Dialog from '@radix-ui/react-dialog'
import Deal from './Deal'

export default function Article() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={amazon} />
      </div>
      <VSpace h={16} />
      <h1>Let's view the price history</h1>
      <div className={styles.h1WithIcon}>
        <h1>just click an item!</h1>
        <Arrow />
      </div>
      <ItemGrid />
    </div>
  )
}

const Arrow = () => (
  <div className={styles.arrow}>
    <Lottie
      animationData={arrowData}
      loop={true}
    />
  </div>
)

const VSpace = ({ h }: { h: number }) => (
  <div
    style={{
      height: `${h}px`,
    }}
  ></div>
)

type ItemData = {
  item: string
  deal: string
}

const items: ItemData[] = [
  {
    item: item0,
    deal: deal0,
  },
  {
    item: item1,
    deal: deal1,
  },
  {
    item: item2,
    deal: deal2,
  },
  {
    item: item3,
    deal: deal3,
  },
  {
    item: item4,
    deal: deal4,
  },
  {
    item: item5,
    deal: deal5,
  },
]

const ItemGrid = () => {
  return (
    <div className={styles.itemGrid}>
      {items.map((el, i) => (
        <Dialog.Root key={i}>
          <Dialog.Trigger asChild>
            <img src={el.item} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.DialogOverlay} />
            <Dialog.Content className={styles.DialogContent}>
              <Deal src={el.deal} />
              <Dialog.Close asChild>
                <button className={styles.DialogClose}>
                  <div className={styles.close}>
                    <img src={close} />
                  </div>
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  )
}
