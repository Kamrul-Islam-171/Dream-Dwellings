import { createContext, useEffect, useState } from "react";
import auth from "../Utilities/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
import PropTypes from 'prop-types'; // ES6


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setLoading(false);
            setUser(CurrentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    // console.log(user)

    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const GithubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const udpateUserProfile = (name, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const data = { CreateUser, GoogleLogin,GithubLogin, loading, user, setUser,userLogOut, udpateUserProfile, SignInUser }
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;