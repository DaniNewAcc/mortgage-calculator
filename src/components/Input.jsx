import { useState } from "react"

const Input = ({ id, type, value, name, label, symbol, errors, onChangeInput }) => {
    const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="w-full flex flex-col relative">
        <label className='text-slate700 text-sm mb-2' htmlFor={id}>{label}</label>
        <div className="">
            <span className={`${errors && !isFocused ? 'border-red bg-red text-white' : isFocused ? 'border-lime bg-lime text-slate900' : 'border-slate700 bg-slate100 text-slate700'} ${id === 'amount' ? 'rounded-l-md border-l' : 'right-0 rounded-r-md border-r'} absolute px-4 py-3 border-y text-[.925rem] font-bold lg:py-[.6rem]`}>{symbol}</span>
            <input className={`${id === 'amount' ? 'ps-14' : 'ps-4 pe-14'} ${errors ? 'border-red' : 'border-slate700'} w-full py-3 rounded-md border text-[.925rem] text-slate900 font-bold [&::-webkit-inner-spin-button]:appearance-none hover:border-slate900 focus:border-lime focus:outline-none focus:ring-0 lg:py-[.6rem]`} type={type} name={name} value={value} id={id} onChange={onChangeInput} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
        </div>
        {errors && <small className="mt-2 text-red">{errors}</small>}
    </div>
  )
}

export default Input