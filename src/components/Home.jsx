import React from 'react';

const Home = ({setUserDetails}) => {
    let handleLogout=()=>{
        setUserDetails(null)
        sessionStorage.clear();
    }
    return (  
        <div>
            <h1>Home page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
 
export default Home ;