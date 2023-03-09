import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>

      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
           {labelName}
        </label>
        {isSurpriseMe && (
            <button
             type="button"
             onClick={handleSurpriseMe}
             className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rouned-[5px] textr-black"
            
            >
            Surprie me

            </button>
        )}
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-800 border-gray-500 text-gray-1000 text-sm rounded-lg  focus:ring-red focus:border-red outline-none block w-full p-3'
      />
    </div>
    
  )
}

export default FormField