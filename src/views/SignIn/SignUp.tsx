import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, getAuth  } from 'firebase/auth';
import { auth } from '../../firebase/firebaseSetup';
import "./SignIn.css"
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e: any) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    // <main >        
    //     <section>
    //         <div>
    //             <div>                                                                                           
    //                 <form>                                                                                            
    //                     <div>
    //                         <label htmlFor="email-address">
    //                             Email address
    //                         </label>
    //                         <input
    //                             type="email"
    //                             // label="Email address"
    //                             value={email}
    //                             onChange={(e) => setEmail(e.target.value)}  
    //                             required                                    
    //                             placeholder="Email address"                                
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="password">
    //                             Password
    //                         </label>
    //                         <input
    //                             type="password"
    //                             // label="Create password"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)} 
    //                             required                                 
    //                             placeholder="Password"              
    //                         />
    //                     </div>                                             
                        
    //                     <button
    //                         type="submit" 
    //                         onClick={onSubmit}                        
    //                     >  
    //                         Sign up                                
    //                     </button>
                                                                     
    //                 </form>
                   
    //                 <p>
    //                     Already have an account?{' '}
    //                     <NavLink to="/login" >
    //                         Sign in
    //                     </NavLink>
    //                 </p>                   
    //             </div>
    //         </div>
    //     </section>
    // </main>
    <main className="form-signin w-100 m-auto">
        <form>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

            <div className="form-floating pb-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                    id="floatingInput"
                    name="email"
                    className="form-control"
                    type="email"
                    // label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    required                                    
                    placeholder="Email address"                                
                />
            </div>
            
            <div className="form-floating pb-3">
                <label htmlFor="password">Password</label>
                <input
                    id="floatingPassword"
                    name="password"
                    className="form-control"
                    type="password"
                    // label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required                                 
                    placeholder="Password"              
                />
            </div>
            <button 
                className="btn btn-primary w-100 py-2" 
                type="submit" 
                onClick={onSubmit} >
                    Sign in
            </button>
        </form>
        <p className="text-sm text-black text-center">
            Already have an account?{' '}
            <NavLink to="/sign-in" >Sign in</NavLink>
        </p>  
    </main>
  )
}
 
export default Signup