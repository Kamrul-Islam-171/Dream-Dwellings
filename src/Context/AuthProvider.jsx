import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

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

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const userLogOut = () => {
        return signOut(auth);
    }

    const udpateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName : name, 
            photoURL: photoUrl
        })
    }

    const data = { CreateUser , user, userLogOut, udpateUserProfile, SignInUser}
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;