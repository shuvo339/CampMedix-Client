import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic= useAxiosPublic();

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const profileUpdate = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
     }

       // Get token from server
  const getToken = async email => {
    const { data } = await axiosPublic.post(
      '/jwt',
      { email },
      { withCredentials: true }
    )
    return data
  }

   // save user
   const saveUser = async user => {
    const currentUser = {
      email: user?.email,
      role: 'participant'
    }
    const { data } = await axiosPublic.put(
      '/user',
      currentUser
    )
    return data
  }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                getToken(currentUser.email)
                saveUser(currentUser)
                const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
               }else{
                    //remove token
                    localStorage.removeItem('access-token')
               }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const AuthInfo={
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        loading,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;