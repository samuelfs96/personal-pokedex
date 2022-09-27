import React from 'react'

const Index = ({
  pokemon,
  loading
}) => {
  return (
    <div className='w-11/12 h-32 bg-pk-black rounded-lg p-2 text-xs text-pk-yellow'>
      <p>Type: {pokemon?.types?.map(({type}) => (
        <span key={type} className="p-1" >{type.name}</span>
      ))}</p>
      {
        pokemon?.stats?.map(({stat, base_stat}) => (
          <p className="capitalize" key={stat}>{`${stat.name}: ${base_stat}`}</p>
        ))
      }
    </div>
  )
}

export default Index