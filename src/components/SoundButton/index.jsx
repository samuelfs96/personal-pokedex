import { SpeakerWaveIcon, SpeakerXMarkIcon, ForwardIcon } from '@heroicons/react/24/solid'
import { useCallback, useEffect, useState } from 'react'
import ST1 from './audio/cinnabar_island_ost.mp3'
import ST2 from './audio/ssanne_ost.mp3'

const Index = () => {

  const [active, setActive] = useState(false)
  const [ost, setOst] = useState({})
  const [currentOst, setCurrentOst] = useState('audio1')

  const handlePlay = () => {
    setActive(!active);
  }

  const reset = useCallback(() => {
    if(ost[currentOst]){
        ost[currentOst].pause();
        ost[currentOst].currentTime = 0;
    }
  }, [ost, currentOst])

  const handleNext = useCallback(() =>{
    reset();
    if(currentOst === 'audio1'){
        setCurrentOst('audio2')
    }else if(currentOst === 'audio2'){
        setCurrentOst('audio1')
    }
  }, [currentOst, reset])

  useEffect(() =>{
    setOst({
        audio1: new Audio(ST1),
        audio2: new Audio(ST2)
    })
  }, [])

  useEffect(() => {
    if(ost[currentOst]){
        if(active){
            ost[currentOst].play();
            ost[currentOst].loop = true;
        }else{
            reset()
        }
    }
  }, [active, ost, currentOst, reset])

  return (
    <div className="m-8 cursor-pointer text-pk-black absolute top-0 right-0 flex space-x-4">
        <ForwardIcon onClick={() => handleNext()} className='h-10 w-10' />
        <div onClick={() => handlePlay()}>
            {
                active ? 
                <SpeakerWaveIcon className='h-10 w-10'/>
                :
                <SpeakerXMarkIcon className='h-10 w-10'/>
            }
        </div>
    </div>
  )
}

export default Index