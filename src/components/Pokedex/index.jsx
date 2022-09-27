import { useCallback, useEffect, useState } from "react"
import './styles.css'
import LeftFace from './LeftFace'
import RightFace from './RightFace'
import Screen from './Screen'
import StatsScreen from './StatsScreen'
import Controls from './Controls'
import PokeApi from '../../api'

const Index = () => {
  const [pokemonCount, setPokemonCount] = useState(0)
  const [activePokemon, setActivePokemon] = useState(1)
  const [loading, setLoading] = useState(true)

  const [pokemon, setPokemon] = useState(null)
  const handleActivePokemon = useCallback(() =>{
    if(activePokemon){
      setLoading(true)
      PokeApi.getPokemon(activePokemon).then((data) =>{
        setPokemon(data)
        setLoading(false)
      })
    }
  }, [activePokemon, setLoading])

  useEffect(() => {
    PokeApi.getPokemons().then((data) =>{
      setPokemonCount(data.length)
    })
  }, [])

  useEffect(() => {
    handleActivePokemon()
  }, [handleActivePokemon])

    return (
    <div className="flex justify-center h-[32rem] items-end">
        <LeftFace>
          <Screen pokemon={pokemon} loading={loading}/>
          <Controls pokemonCount={pokemonCount} activePokemon={activePokemon} setActivePokemon={setActivePokemon} loading={loading} />
        </LeftFace>
        <RightFace>
          <StatsScreen pokemon={pokemon} loading={loading} />
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