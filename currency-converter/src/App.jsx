import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0)
  if(amount < 0){
    setAmount(0)
  }

  const [fromCurr, setFromCurr] = useState("usd")
  const [toCurr, setToCurr] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurr)

  const options = Object.keys(currencyInfo)

  const convert = () => (
    setConvertedAmt(amount * currencyInfo[toCurr])
  )

  const swap = () => {
    setFromCurr(toCurr)
    setToCurr(fromCurr)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }

  return (
    <>
      <div className='w-full h-screen bg-no-repeat bg-cover flex flex-wrap justify-center items-center'
      style={{backgroundImage : `url(https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50'>
            <form onSubmit={(e) =>{ 
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox 
                label="From"
                selectCurrency={fromCurr}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromCurr(currency)}
                />  
              </div>
              <div className='w-full relative h-0.5'>
                <button type="button" className='bg-blue-500 px-2 py-0.5 text-white/80 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 text-base rounded text-center border-2 border-white'
                onClick={swap}
                >swap</button>
              </div>
              <div>
                <InputBox
                label="To"
                selectCurrency={toCurr}
                currencyOptions={options} 
                amount={convertedAmt}
                onCurrencyChange={(currency) => setToCurr(currency)}
                />  
              </div>
              <div className='mt-2'>
                <button className='w-full p-4 bg-blue-600 text-white hover:opacity-80 hover:border-blue-900 hover:border-1 active:opacity-65 shadow-sm shadow-blue-300'>Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
