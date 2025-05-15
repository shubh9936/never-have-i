import React, { useState } from 'react'

function CreateRoom() {
    const[members,setMembers]=useState('');
    const[passkey,setPasskey]=useState('');
  return (
     <form action="">
        <label htmlFor="members">Select number of members</label><br/>

        <label htmlFor="passkey">Genrate Passkey for room</label><br/>
        <input type="number" onChange={setPasskey}/>
     </form>
  )
}

export default CreateRoom