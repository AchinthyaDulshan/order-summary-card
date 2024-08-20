import React from 'react'
import OrderSummaryCard from './components/OrderSummaryCard'

const App = () => {
  return (
    <div className='h-dvh w-dvw flex justify-center items-center md:bg-[url("assets/images/pattern-background-desktop.svg")] bg-[url("assets/images/pattern-background-mobile.svg")] bg-top bg-no-repeat bg-contain bg-Pale-blue'>
      <OrderSummaryCard/>
    </div>
  )
}

export default App