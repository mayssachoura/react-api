import axios from "axios";
import { useState } from "react";

import React from "react";

const UserList = () => {


    const [listofuser,setlistofuser]=useState(

        []
    );

  
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setlistofuser(response.data);
    });
  }, []);



    return (

        <div>

       <ul style={{textDecoration:"none"}}>  { listofuser.map(e => <li>  {e.name} </li>)}</ul>
        
        
        </div>
      );
}
 
export default UserList;