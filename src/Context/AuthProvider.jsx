import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    // console.log(user)

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userLogOut = () => {
        return signOut(auth);
    }

    const data = { CreateUser , user, userLogOut}
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;