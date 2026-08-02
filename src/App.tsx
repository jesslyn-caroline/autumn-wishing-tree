import { motion, useAnimate } from "framer-motion"
import Tree from "./assets/Tree"
import Card from "./components/Card"
import Overlay from "./components/Overlay"
import WishCard from "./components/WishCard"
import { useState } from "react"

function App() {
  const [scopeOpenWishCard, animateOpenWishCard] = useAnimate()
  const [scopeAddWishCard, animateAddWishCard] = useAnimate()

  const [selectedFlower, setSelectedFlower] = useState<string>('')

  const openWishCard = (flower: string) => {
    animateOpenWishCard(scopeOpenWishCard.current, { opacity: 1 }, { duration: 0.5 })
    setSelectedFlower(flower)
  }

  const closeWishCard = async () => {
    await animateOpenWishCard(scopeOpenWishCard.current, { opacity: 0 }, { duration: 0.5 })
    setSelectedFlower('')
  }

  const addWish = async () => {
    const flowerElement = document.getElementById(selectedFlower)
    const flowerRect = flowerElement!.getBoundingClientRect()

    const flowerCenterX = flowerRect.left + flowerRect.width / 2
    const flowerCenterY = flowerRect.top + flowerRect.height / 2

    const wishCardElement = document.getElementById('wish-card')
    const wishCardRect = wishCardElement!.getBoundingClientRect()

    const wishCardCenterX = wishCardRect.left + wishCardRect.width / 2
    const wishCardCenterY = wishCardRect.top + wishCardRect.height / 2

    const x = wishCardCenterX - flowerCenterX
    const y = wishCardCenterY - flowerCenterY

    await animateAddWishCard(scopeAddWishCard.current, { top: -y, left: -x, scale: 0 }, { duration: 0.5 })
    animateAddWishCard(scopeAddWishCard.current, { top: 0, left: 0, scale: 1 }, { duration: 0.5 })
    
    closeWishCard()
  }
 
  return (
  <main>
    <div className={`absolute w-full h-full`}>
      {/* Card for Background */}
      <div className={`w-full absolute top-45/100 left-70/100 origin-bottom-left rotate-5`}>
        <Card />
      </div>

      {/* Sliding Window */}
      <div className={`w-full h-full grid grid-cols-2`}>
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '0' }}
          transition={{ delay: 2, duration: 1 }}
          className={`sliding-window-left`} 
        />
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '0' }}
          transition={{ delay: 2, duration: 1 }}
          className={`sliding-window-right`} 
        />
      </div>

      {/* Tree */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '0' }}
        transition={{ delay: 2, duration: 1 }}
        className={`w-full h-full left-0 bottom-0 absolute z-10`}
      >
        <Tree openWishCard={openWishCard} />
      </motion.div>

      {/* Wish Card */}
      <motion.div initial={{ opacity: 0 }} ref={scopeOpenWishCard} className={`w-full h-full`}>
        <Overlay />
        <div className={`w-full absolute z-30 top-1/2 left-1/2`}>
          <WishCard scope={scopeAddWishCard} onClose={closeWishCard} addWish={addWish} />
        </div>
      </motion.div>
    </div>
  </main>
)}

export default App