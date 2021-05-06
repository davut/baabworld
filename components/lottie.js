import Lottie from 'react-lottie-player'

import lottieJson from '../vans.json'

export default function LottiePlayer() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "100%" }}
    />
  )
}