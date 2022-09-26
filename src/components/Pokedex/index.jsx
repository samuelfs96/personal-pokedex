import { useEffect, useState } from "react"
import './styles.css'
import Screen from './Screen'
import Controls from './Controls'

const Index = () => {
  const [pokemons, getPokemons] = useState(null)
  useEffect(() => {
    
  }, [])
    return (
    <div className="flex justify-center h-[32rem] items-end">
        <div className="h-full border border-pk-dark-red bg-pk-red w-96 p-4 rounded-l-3xl overflow-hidden flex justify-evenly items-center flex-col">
            <Screen />
            <Controls />
        </div>
        <div className="border border-pk-dark-red bg-pk-red w-80 h-5/6 slice-top-right">
        </div>
    </div>
  )
}

export default Index