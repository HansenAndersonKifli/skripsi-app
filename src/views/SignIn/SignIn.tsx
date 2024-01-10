import React, {Component, useState} from 'react';
import { connect } from 'react-redux'
import {  getAuth, signInWithEmailAndPassword, signOut   } from 'firebase/auth';
import { auth } from '../../firebase/firebaseSetup';
import { NavLink, useNavigate } from 'react-router-dom'
import "./SignIn.css"

// class SignIn extends Component<SignInProps, SignInState>{
//     constructor(props:SignInProps){
//         super(props);
//         this.state = {
//             isLogin: false,
//         };
//     }

//     onLogin = () => {

//     }

//     render() {
//         const {
          
//         } = this.state;
    
//         return (
//           <>
    
//           </>
//         )
//       }


// }

//     const mapStateToProps = (state: any) => ({
//         auth: state.auth.res,
//     });

//     export default connect(mapStateToProps)(SignIn);

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [login, setLogin] = useState(true);
    
    const onLogin = (e: any) => {
        // setLogin(false);
        e.preventDefault();

        // Validasi email
        if (!email.endsWith('@gmail.com')) {
            alert('Email harus diakhiri dengan "@gmail.com"');
            return;
        }

        // Validasi password
        if (password.length < 6 || !/\d/.test(password)) {
            alert('Password harus memiliki setidaknya 6 karakter dan mengandung angka');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
            console.log("email: ", user.email)
            // console.log(setLogin);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Akun tidak terdaftar. Silakan sign up terlebih dahulu.');
            
            console.log(errorCode, errorMessage)
        });
    }

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign out successful
          navigate("/");
          console.log("Signed out successfully")
        }).catch((error) => {
        // error
          console.log("error")
        });
    }

//     return (
//         <div>
// {
//         login ? (
//                 <>
//                 <main >        
//                     <section>
//                         <div>                                  
//                             <form>                                              
//                                 <div>
//                                     <label htmlFor="email-address">
//                                         Email address
//                                     </label>
//                                     <input
//                                         id="email-address"
//                                         name="email"
//                                         type="email"                                    
//                                         required                                                                                
//                                         placeholder="Email address"
//                                         onChange={(e)=>setEmail(e.target.value)}
//                                     />
//                                 </div>
        
//                                 <div>
//                                     <label htmlFor="password">
//                                         Password
//                                     </label>
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"                                    
//                                         required                                                                                
//                                         placeholder="Password"
//                                         onChange={(e)=>setPassword(e.target.value)}
//                                     />
//                                 </div>
                                                        
//                                 <div>
//                                     <button onClick={onLogin} >      
//                                         Login                                                                  
//                                     </button>
//                                 </div>                               
//                             </form>
                               
//                             <p className="text-sm text-black text-center">
//                                 No account yet? {' '}
//                                 <NavLink to="/signup">
//                                     Sign up
//                                 </NavLink>
//                             </p>
                                                           
//                         </div>
//                     </section>
//                 </main>
//                 </>
            
//         ) : (
//             <div>
//                 <button onClick={handleLogout}>
//                         Logout
//                 </button>
//             </div>
//         )
//     }
//         </div>
//     )
 
    return(
        <>
        {/* <main >        
            <section>
                <div>                                  
                    <form>                                              
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"                                    
                                required                                                                                
                                placeholder="Email address"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                                                
                        <div>
                            <button onClick={onLogin} >      
                                Login                                                                  
                            </button>
                        </div>                               
                    </form>
                       
                    <p className="text-sm text-black text-center">
                        No account yet? {' '}
                        <NavLink to="/sign-up">
                            Sign up
                        </NavLink>
                    </p>
                                                   
                </div>
            </section>
        </main> */}
        <main className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Sign In</h1>

                <div className="form-floating pb-3">
                    <label htmlFor="floatingInput">Email address</label>
                    <input
                        id="floatingInput"
                        name="email"
                        type="email"  
                        className="form-control"
                        required                                                                                
                        placeholder="Email address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                
                <div className="form-floating pb-3">
                    <label htmlFor="floatingPassword">Password</label>
                    <input
                        id="floatingPassword"
                        name="password"
                        type="password"  
                        className="form-control"
                        required                                                                                
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={onLogin}>Sign in</button>
            </form>
            <p className="text-sm text-black text-center">
                Belum Punya Akun? {' '}
                <NavLink to="/sign-up">Sign up</NavLink>
            </p>
        </main>
        </>
    )
}
 
export default Login