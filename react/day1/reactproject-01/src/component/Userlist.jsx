import React from "react";

function Userlist(){
    const User=['ritesh','nikhil','karan'];
    return(
        <div>
            <ul>
                {
                    User.map((listitem)=>(
                        <li>{listitem}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Userlist;