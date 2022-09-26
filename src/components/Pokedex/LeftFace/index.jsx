const Index = ({children}) => {
    return (
        <div className="h-full border border-pk-dark-red bg-pk-red w-96 p-4 rounded-l-3xl overflow-hidden">
            <div className="flex gap-2 items-center justify-start w-full">
            <div className="w-10 h-10 bg-pk-blue rounded-full border-white border-4"></div>
            <div className="w-5 h-5 bg-pk-dark-red rounded-full"></div>
            <div className="w-5 h-5 bg-pk-yellow rounded-full"></div>
            <div className="w-5 h-5 bg-pk-yellow rounded-full"></div>
            </div>
            <div className="h-full flex justify-evenly items-center flex-col">
                {children}
            </div>
        </div>
    )
  }
  
  export default Index