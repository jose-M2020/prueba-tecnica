import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({ text, link, ...props }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      class={`
        inline-block rounded bg-primary500 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-gray-100 
        transition duration-200 ease-in-out
        hover:bg-primary600 hover:shadow-primary600
        focus:bg-primary600
        active:bg-primary700
        ${props.className}
      `}
      {...link && {
        onClick: () => navigate(link)
      }}
    >
      {text}
    </button>
  )
}

export default Button