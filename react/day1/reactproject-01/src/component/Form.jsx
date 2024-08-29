import React from 'react'
import { useState } from 'react'
function Form() {
    const [Username, setUsername] = useState(' ');
    const [Password, setPassword] = useState(' ');
    const handleUsernamechange = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    return (
        <div>
            <form>
                <label htmlfor='username'>username</label>
                <input type='text' id='username' />
                <label htmlfor='password'>password</label>
                <input type='text' id='password' />
                <button type='submit'>submit</button>

            </form>
            <div>{Username}</div>
        </div>
    )
}

export default Form;