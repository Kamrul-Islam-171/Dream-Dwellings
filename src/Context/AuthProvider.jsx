import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

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

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const userLogOut = () => {
        return signOut(auth);
    }

    const udpateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const data = { CreateUser, GoogleLogin, user, userLogOut, udpateUserProfile, SignInUser }
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;