// import React, { createContext, useState } from "react";

// const AuthContext = createContext(false)

// const AuthProvider = (props) => {
//     const [isAuth, setIsAuth] = useState(true)
//     const toggleAuth = () => {
//         setIsAuth(!isAuth)
//     }

//     return(
//         <div>
//             <AuthContext.Provider value={{ isAuth, toggleAuth }}>
//                 {props.children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export {AuthContext, AuthProvider};