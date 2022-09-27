import { useCallback } from "react"

const Index = ({
  pokemonCount,
  activePokemon,
  setActivePokemon,
  loading
}) => {

  const handleNext = useCallback((count) => {
    if(activePokemon < pokemonCount && activePokemon+count <= pokemonCount)
      setActivePokemon(activePokemon+count)
  }, [pokemonCount, activePokemon, setActivePokemon])

  const handleBack = useCallback((count) => {
    if(activePokemon - count > 0 && !(activePokemon - count < 0))
      setActivePokemon(activePokemon-count)
  }, [activePokemon, setActivePokemon])

  return (
    <div className="flex justify-around w-full">
        <div className="flex flex-col gap-3 items-end">
            <div className="grid grid-cols-3 gap-2 items-center">
                <div className="w-10 h-10 bg-pk-black rounded-full shadow-[-2px_2px_1px_2px_rgba(0,0,0,1)]"></div>
                <div className="w-12 h-4 bg-pk-dark-red rounded-md"></div>
                <div className="w-12 h-4 bg-pk-dark-blue rounded-md"></div>
            </div>
            <div className="w-28 h-12 bg-pk-green rounded-md"></div>
        </div>
        <div className="trackpad transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <button onClick={() => handleBack(20)} disabled={loading} className="track-btn up rounded-md shadow-[2px_2px_1px_2px_rgba(0,0,0,1)]"></button>
            <button onClick={() => handleBack(1)} disabled={loading} className="track-btn left rounded-md shadow-[2px_-2px_1px_2px_rgba(0,0,0,1)]"></button>
            <button onClick={() => handleNext(1)} disabled={loading} className="track-btn right rounded-md shadow-[2px_-2px_1px_2px_rgba(0,0,0,1)]"></button>
            <button onClick={() => handleNext(20)} disabled={loading} className="track-btn bottom rounded-md shadow-[2px_2px_1px_2px_rgba(0,0,0,1)]"></button>
        </div>
    </div>
  )
}

export default Index