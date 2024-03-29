import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({ 
  text,
  link,
  className,
  loading,
  size = 'md',
  ...props
}) => {
  const navigate = useNavigate();

  const sizes = {
    sm: 'px-4 py-2 text-xs font-medium',
    md: 'px-6 pb-2 pt-2.5 font-medium'
  }

  return (
    <button
      type="button"
      className={`
        relative inline-block rounded bg-primary500 uppercase leading-normal text-primary-700 
        transition duration-200 ease-in-out
        ${loading ? 
          'cursor-auto'
        : `
          hover:bg-primary600 hover:shadow-primary600
          focus:bg-primary600
          active:bg-primary700
        `}
        ${sizes[size]}
        ${className}
      `}
      {...link && {
        onClick: () => navigate(link)
      }}
      {...props}
      disabled={loading}
    >
      {loading && (
        <span className='absolute top-0 left-0 bottom-0 right-0 bg-primary300 flex justify-center items-center'>
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      {text}
    </button>
  )
}

export default Button