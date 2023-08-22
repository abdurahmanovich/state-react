import React, { useState } from 'react'

function App() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        name:'',
        desc:''

    })
    const addFormHandler = ()=>{
        setUsers([...users, user])
        setUser({
            name:'',
            desc:''
        })
        console.log(user);
    }
    const changeInput = (key, event)=>{
        setUser({...user, [key]: event.target.value})
    }
  return (
    <>
      <div style={{width:300}}>
        <input type="text" name='' id='' value={user.name} onChange={(e) => changeInput('name', e)} />
        <textarea name="" id="" value={user.name} cols="30" rows="10" onChange={(e) => changeInput(desc, e )}></textarea>
        <button onClick={addFormHandler}>create User</button>

      </div>
      <ul>
        {user.map((item,index) => (
            <li key={index}>{item.name}</li>
        ))}
      </ul>
         
    </>
  )
}

export default App