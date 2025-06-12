// import React, { createContext, useState } from "react";

// const AuthContext = createContext(false)

// const AuthProvider = (props) => {
//     const [isAuth, setIsAuth] = useState(true)
//     const toggleAuth = () => {
//         setIsAuth(!isAuth)
//     }

    // const fetchUser = async () => {
    //     const currentSession = await supabase.auth.getSession()

    //     console.log(currentSession)
    // }
    // useEffect(() => {
    //     fetchUser()
    // })

//     return(
//         <div>
//             <AuthContext.Provider value={{ isAuth, toggleAuth }}>
//                 {props.children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export {AuthContext, AuthProvider};