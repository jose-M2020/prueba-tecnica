import React, { useEffect, useRef } from 'react'
import Button from './Button'

const Modal = ({title, children, isOpen = false, onClose}) => {
  const refModal = useRef(null);

  // Handle click outside
  useEffect(() => {
    const clickOutside = e => {
      if (isOpen && refModal.current && !refModal.current.contains(e.target)) {
        onClose();
      }
    }

    if(isOpen){ 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", clickOutside)

    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  }, [isOpen])

  return (
    <div
      className={`
      bg-gray-200/70 fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none
        ${isOpen ? 'block' : 'hidden'}  
      `}>
      <div
        className={`
          pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center 
          transition-all duration-300 ease-in-out 
          min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}>
        <div
          className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
          ref={refModal}
        >
          <div
            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            {/* Modal title */}
            {title && (
              <h5
                className="text-xl font-medium leading-normal text-slate-600">
                {title}
              </h5>
            )}
            {/* Close button */}
            <button
              onClick={() => onClose()}
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal body */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal