import React from 'react'
import useForm  from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = (submitForm) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate)

  return (
     <div className='form-content-right' onSubmit={handleSubmit}>
         <form className='form'>
             <h1>Get Started with us and Login now</h1>
             <div className='form-input'>
                 <label htmlFor='username' className='form-label'>
                    Username
                 </label>
                 <input 
                 id='username' 
                 type='text' 
                 name='username' 
                 value={values.username} 
                 onChange={handleChange} 
                 className='form-input' 
                 placeholder='Enter your username' />
                 {errors.username && <p>{errors.username}</p>}
             </div>
             <div className='form-input'>
                 <label htmlFor='email' className='form-label'>Email
                 </label>
                 <input 
                 id='email' 
                 type='email' 
                 name='email' 
                 value={values.email} 
                 onChange={handleChange} 
                 className='form-input' 
                 placeholder='Enter your email' />
                 {errors.email && <p>{errors.email}</p>}
             </div>
             <div className='form-input'>
                 <label htmlFor='password' className='form-label'>Password
                 </label>
                 <input 
                 id='password' 
                 type='password' 
                 name='password' 
                 value={values.password} 
                 onChange={handleChange} 
                 className='form-input' 
                 placeholder='Enter your password' />
                 {errors.password && <p>{errors.password}</p>}
             </div>
             <div className='form-input'>
                 <label htmlFor='password2' className='form-label'>Confirm your password
                 </label>
                 <input 
                 id='password2' 
                 type='password' 
                 name='password2' 
                 value={values.password2} 
                 onChange={handleChange} 
                 className='form-input' 
                 placeholder='Confirm your password' />
                 {errors.password2 && <p>{errors.password2}</p>}
             </div>
             <button className='form-input-btn' type='submit'>Sign up</button>
             <span className='form-input-login'>
                Already have an acount? Login <a href='#'>here</a>
             </span>
         </form>
     </div>
  )
}

export default FormSignup