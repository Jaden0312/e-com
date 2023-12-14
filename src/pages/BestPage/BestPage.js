import React from "react";
import { auth } from "../../Utiles/firebase";

function Best() {
    const loginUser = () => {

    }
    return(
        <>
            <div>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <button onClick={loginUser}>Login</button>
            </div>
        </>
    )
}

export default Best;