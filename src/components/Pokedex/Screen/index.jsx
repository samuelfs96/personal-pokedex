import { useCallback, useEffect, useState } from "react"
import PokeApi from '../../../api'

const Index = ({activePokemon, setLoading, loading}) => {
  const [pokemon, setPokemon] = useState(null)
  const handleActivePokemon = useCallback(() =>{
    if(activePokemon){
      setLoading(true)
      PokeApi.getPokemon(activePokemon).then((data) =>{
        setPokemon(data)
        setLoading(false)
        console.log(data)
      })
    }
  }, [activePokemon, setLoading])

  useEffect(() => {
    handleActivePokemon()
  }, [handleActivePokemon])

  return (
    <div className="w-60 h-52 flex justify-center slice-bottom-left bg-pk-light-gray rounded-lg rounded-bl-none shadow-[-4px_4px_0px_4px_#6a6a72]">
        <div className="relative w-4/5 h-32 m-5 bg-pk-light-yellow border-pk-black rounded-lg flex flex-col justify-center items-center">
          {!loading && (
            <>
              <img src={pokemon?.sprites?.front_default} className="w-40" alt="poke" />
              <p className="capitalize font-bold absolute bottom-0">#{pokemon?.id} - {pokemon?.name}</p>
            </>
          )}
        </div>
    </div>
  )
}

export default Index