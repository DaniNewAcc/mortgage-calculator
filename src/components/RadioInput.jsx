const RadioInput = ({ id, type, label, value, name, calcType, onChangeInput }) => {
  return (
      <label className="w-full p-3 lg:p-2 mt-3 rounded-md border border-slate700 cursor-pointer hover:border-lime has-[:checked]:border-lime has-[:checked]:bg-lime has-[:checked]:bg-opacity-30" htmlFor={id}>
        <div className="flex items-center gap-5 ms-2">
            <input className="relative w-4 h-4 border-2 border-slate700 rounded-full peer appearance-none checked:border-lime" type={type} name={name} id={id} value={value} checked={calcType} onChange={onChangeInput} />
            <div className='absolute w-2 h-2 ms-1 rounded-full peer-checked:bg-lime'></div>
            <p className='text-slate900 font-bold'>{label}</p>
        </div>
      </label>
  )
}

export default RadioInput