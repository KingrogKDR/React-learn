import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
}){
    const amountId = useId()
    return(
        <div className='bg-white p-5 rounded flex flex-wrap'>
            <div className='w-1/2'>
                <label htmlFor={amountId} className='w-full text-black/40 mb-2 inline-block'>
                    {label}
                </label>
                <input 
                className='w-full p-3 focus:outline-gray-200'
                placeholder='amount' type="number" value={amount} id={amountId}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='w-full text-black/40 mb-2'>Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;
