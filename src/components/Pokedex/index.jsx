import { useEffect, useState } from "react"
import './styles.css'
import LeftFace from './LeftFace'
import RightFace from './RightFace'
import Screen from './Screen'
import StatsScreen from './StatsScreen'
import Controls from './Controls'

const Index = () => {
  const [pokemons, getPokemons] = useState(null)
  useEffect(() => {
    
  }, [])
    return (
    <div className="flex justify-center h-[32rem] items-end">
        <LeftFace>
          <Screen/>
          <Controls/>
        </LeftFace>
        <RightFace>
          <StatsScreen/>
          <div className="w-11/12 h-16 bg-pk-blue rounded-lg"></div>
          <div className="flex justify-between w-11/12">
            <div className="w-1/2 h-10 bg-white rounded-lg"></div>
            <div className="flex flex-col h-16 justify-between items-end">
              <div className="flex gap-2">
                <div className="w-10 h-3 bg-pk-black rounded-md"></div>
                <div className="w-10 h-3 bg-pk-black rounded-md"></div>
              </div>
              <div className="w-6 h-6 bg-pk-yellow rounded-full"></div>
            </div>
          </div>
        </RightFace>
    </div>
  )
}

export default Index