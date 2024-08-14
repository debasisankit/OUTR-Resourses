import React from 'react'
import { useForm } from "react-hook-form"


function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <dialog id="" className="modal">
    <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      
      <h3 className="font-bold text-lg">Contact Us</h3>
      <div className='mt-4 space-y-2'>
          <span>Name</span>
          <br />
          <input type="name" 
          placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
          
      </div>
      <div className='mt-4 space-y-2'>
          <span>Email</span>
          <br />
          <input type="email" 
          placeholder='Email address' className='w-80 px-3 py-1 border rounded-md outline-none'/>
          
          
  
          
      </div>
      <div className='mt-4 space-y-2'>
          <span>Message</span>
          <br />
          <input type="message" 
          placeholder='Type your message' className='w-80 px-3 py-1 border rounded-md outline-none'/>
          
  
          
      </div>
      <div className='flex justify-around mt-6'>
          <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
              Submit
          </button>
          
      </div>
      </form>
    </div>
  </dialog>
  )
}

export default Contact
