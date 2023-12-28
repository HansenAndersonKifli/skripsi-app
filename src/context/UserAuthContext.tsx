// import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
//   getAuth,
//   User,
//   // User,
// } from "firebase/auth";
// import { SignOutUser, auth, userStateListener } from "../firebase/firebaseSetup";
// import firebase from 'firebase/compat/index';
// import { Navigate, useNavigate } from "react-router-dom";

// // interface AuthState {
// //   currentUser: User | null;
// //   logout: () => Promise<void>;
// // }

// // interface User {
// //   email: string;
// //   password: string;
// // }

// // const defaultValue: User = {
// //   email: "",
// //   password: "",
// // };

// export const AuthContext = createContext({
//   // "User" comes from firebase auth-public.d.ts
//   currentUser: {} as User | null,
//   setCurrentUser: (_user:User) => {},
//   signOut: () => {}
// });

// // const userAuthContext = createContext<AuthState>({} as AuthState);
// // const userAuthContext = createContext(defaultValue);
// // const userAuthContext = React.createContext<firebase.User | null>(null);

// interface Props {
//   children: ReactNode;
// }

// const logIn = (email: string, password: string) => {
//   return signInWithEmailAndPassword(auth, email, password);
// }
// const signUp = (email: string, password: string) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// }
// const logOut = () => {
//   return signOut(auth);
// }
// //   type AuthContextData = {
// //     user: User | null;
// //     logIn: typeof logIn; // copies type from method itself
// //     signUp: typeof signUp; // copies type from method itself
// //     logOut: typeof logOut; // copies type from method itself
// //   }
  
// //   const AuthContext = createContext<AuthContextData>({
// //     user,
// //     logIn,
// //     signUp,
// //     logOut
// //   });

// export const AuthProvider  = ({ children }: Props) => {
//   // const [user, setUser] = useState({});
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   // const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const navigate = useNavigate();

//   // function logIn(email: string, password: string) {
//   //   return signInWithEmailAndPassword(auth, email, password);
//   // }
//   // function signUp(email: string, password: string) {
//   //   return createUserWithEmailAndPassword(auth, email, password);
//   // }
  
//   // const logIn = (email: string, password: string) => {
//   //   return signInWithEmailAndPassword(auth, email, password);
//   // }
//   // const signUp = (email: string, password: string) => {
//   //   return createUserWithEmailAndPassword(auth, email, password);
//   // }
//   // const logOut = () => {
//   //   return signOut(auth);
//   // }
//   // type AuthContextData = {
//   //   user: User | null;
//   //   logIn: typeof logIn; // copies type from method itself
//   //   signUp: typeof signUp; // copies type from method itself
//   //   logOut: typeof logOut; // copies type from method itself
//   // }
  
//   // const AuthContext = createContext<AuthContextData>({
//   //   user,
//   //   logIn,
//   //   signUp,
//   //   logOut
//   // });
//   // function logOut() {
//   //   return signOut(auth);
//   // }
//   // const logout = async () => {
//   //   await signOut(auth);
//   //   setCurrentUser(null);
//   // };

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
//   //     console.log("Auth", currentuser);
//   //     setCurrentUser(currentuser);
//   //   });

//   //   return () => {
//   //     unsubscribe();
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   const auth = getAuth();
//   //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//   //     if (currentUser) {
//   //       setCurrentUser(currentUser);
//   //     }
//   //   });

//   //   return () => {
//   //    unsubscribe();
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       setCurrentUser(user);
//   //     }
//   //   });

//   //   return unsubscribe;
//   // }, [currentUser]);

//   useEffect(() => {
//     const unsubscribe = userStateListener((user) => {
//       if (user) {
//         setCurrentUser(user)
//       }
//     });
//     return unsubscribe
//   }, [setCurrentUser]);

//   const signOut = () => {
//     SignOutUser()
//     setCurrentUser(null)
//     navigate("/")
//   }

//   // const value: AuthContextData = {
//   //   user,
//   //   logIn,
//   //   logOut,
//   //   signUp
//   // };

//   // return (
//   //   <userAuthContext.Provider
//   //     value={{ currentUser, logIn, signUp, logout }}
//   //   >
//   //     {children}
//   //   </userAuthContext.Provider>
//   // );

//   // return (
//   //   <userAuthContext.Provider
//   //     value={{ currentUser, login, signup, logout }}
//   //   >
//   //     {children}
//   //   </userAuthContext.Provider>
//   // );
  
//   // const value = useMemo(
//   //   () => ({ currentUser, logout }),
//   //   [currentUser]
//   // );

//   // return (
//   //   <userAuthContext.Provider
//   //     value={{ currentUser, logout }}
//   //   >
//   //     {children}
//   //   </userAuthContext.Provider>
//   // );
//   // return (
//   //   <userAuthContext.Provider
//   //     value={{
//   //       currentUser,
//   //       logIn,
//   //       signUp,
//   //       logOut
//   //     }}
//   //   >
//   //     {children}
//   //   </userAuthContext.Provider>
//   // );

//   const value = {
//     currentUser, 
//     setCurrentUser,
//     signOut
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

//   // return <userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>;
//   // return <userAuthContext.Provider value={currentUser}>{children}</userAuthContext.Provider>;
// }

// // export function useUserAuth() {
// //   return useContext(userAuthContext);
// // }


import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect, ReactNode } from "react";
import { SignOutUser, userStateListener } from "../firebase/Firebase";

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  // "User" comes from firebase auth-public.d.ts
  currentUser: {} as User | null,
  setCurrentUser: (_user:User) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user)
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  // As soon as setting the current user to null, 
  // the user will be redirected to the home page. 
  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser, 
    setCurrentUser,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
