import dynamic from "next/dynamic"
import Image from "next/image"

import Logo from '../../public/Images/Logo_White.svg'

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false})

export default function Home() {
  return (
  <div style={{
    display: "flex",
    flexDirection: 'column',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      padding: 20
    }}>
      <h1>Translink SkyTrain Expo Line and Millennium Line</h1>
      <Image src={Logo} alt="Personal Logo" width={70} />
    </div>
    <DynamicMap />
  </div>
  )
}