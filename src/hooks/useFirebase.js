import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const createAccout = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
    }
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        error,
        name,
        email,
        password,
        isSignUp,
        isLoading,
        updateUser,
        setUser,
        setIsSignUp,
        setName,
        setEmail,
        setPassword,
        loginWithGoogle,
        createAccout,
        loginWithEmailPassword,
        logOut
    }
}

export default useFirebase;