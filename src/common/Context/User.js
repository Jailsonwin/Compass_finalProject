import { createContext, useState } from 'react';
export const UserContext = createContext();
UserContext.displayName = "UserContext";
export const UserProvider = ({ children }) => {
    const [passValid, setPassValid] = useState(false);
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [error, setError] = useState(false);
    
    return (
        <UserContext.Provider value={ {
            email,setEmail, emailValid,setEmailValid,password,setPassword,passValid,setPassValid,user,setUser,error,setError
        }}>
            {children}
        </UserContext.Provider>
    )
}