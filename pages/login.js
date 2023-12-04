import React from 'react'

const submitHandler = () => {
  
}

const login = () => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default login