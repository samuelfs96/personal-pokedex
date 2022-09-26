const Index = ({children}) => {
  return (
    <div className="border border-pk-dark-red bg-pk-red w-80 h-5/6 slice-top-right flex flex-col justify-end items-center">
        <div className="flex flex-col justify-center gap-4 items-center h-auto w-5/6 mb-8">
            {children}
        </div>
    </div>
  )
}

export default Index