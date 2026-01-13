
import React, { useState } from "react";

const context = React.createContext({isLoggedIn:false, onLoggOut:undefined});

export function ContextProvider(props){

    let [login,setLoggedIn] = useState(false);
    return (
      <context.Provider value={{ isLoggedIn: login,onLoggOut:setLoggedIn }}>
        {props.children}
      </context.Provider>
    );
}

export default context;