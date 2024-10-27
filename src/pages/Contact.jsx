import React from 'react'
import Input from '../Component/Input'

const Contact = () => {
  return (
    <section className='p-5 space-y-10'>
      <h1 className='text-5xl font-extrabold'>Contact</h1>
        <h4 className='font-bold text-2xl capitalize tracking-wide'>Fill the form</h4>
      <form className=' grid grid-cols-1 md:grid-cols-2 m-5 gap-5'>
        <div className='flex flex-col gap-y-1'>
          <label htmlFor="name" className='font-semibold text-lg'>Name</label>
          <Input type={'name'} placeholder={'Enter Your Name'} />
        </div>
        <div className='flex flex-col gap-y-1'>
          <label htmlFor="Email" className='font-semibold text-lg'>Email</label>
          <Input type={'Email'} placeholder={'Enter Your Name'} />
        </div>
        <div className='flex flex-col  gap-y-1'>
          <label htmlFor="Message" className='font-semibold text-lg'>Messages</label>
          <Input type={'text'} placeholder={'Enter Your Name'} />
        </div>
      </form>
      <button className='bg-black text-white px-20 font-semibold tracking-wide py-2'>Post</button>
    </section>
  )
}

export default Contact