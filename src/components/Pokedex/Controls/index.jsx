
const Index = () => {
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
            <div className="track-btn up rounded-md shadow-[2px_2px_1px_2px_rgba(0,0,0,1)]"></div>
            <div className="track-btn left rounded-md shadow-[2px_-2px_1px_2px_rgba(0,0,0,1)]"></div>
            <div className="track-btn right rounded-md shadow-[2px_-2px_1px_2px_rgba(0,0,0,1)]"></div>
            <div className="track-btn bottom rounded-md shadow-[2px_2px_1px_2px_rgba(0,0,0,1)]"></div>
        </div>
    </div>
  )
}

export default Index