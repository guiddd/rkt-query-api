import React from 'react'
import { useState } from 'react'
import { useAddUserMutation, useGetUsersQuery } from '../services/pokeApi'

const Form = () => {
  const [addUser] = useAddUserMutation()
  
  const info = [{name:'', age:'', job:''}]
  const [input,setInput] = useState(info)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await addUser(input)
    setInput(info)
    window.location.reload()
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Nombre' 
          onChange={(e)=>setInput({...input, name:e.target.value})}
          value={[input.name]}/>
          <input type="number" placeholder='Edad' 
          onChange={(e)=>setInput({...input, age:e.target.value})}
          value={[input.age]}/>
          <input type="text" placeholder='Ocupación' 
          onChange={(e)=>setInput({...input, job:e.target.value})}
          value={[input.job]}/>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form