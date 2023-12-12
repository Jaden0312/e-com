import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaLock, FaUser, FaBlackTie } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup } from '../../Utiles/firebase';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            signUp: 'logreg-box',
            email: '',
            password: '',
        }
    }


    toggleSignUp = () => {
        this.setState({
            signUp: this.state.signUp === 'logreg-box' ? 'logreg-box active' : 'logreg-box',
        })
    }
    toggleSignIn = () => {
        this.setState({
            signUp: this.state.signUp === 'logreg-box active' ? 'logreg-box' : 'logreg-box active',
        })
    }
    setEmail = (event) => {
        console.log(event.target.value);
        this.setState({
            email: event.target.value,
        })
        console.log(this.state);
    }
    // setName = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //     })
    // }
    setPassword = (event) => {
        console.log(event.target.value)
        this.setState({
            password: event.target.value,
        })
        console.log(this.state);
    }
    // Sign Up(가입버튼) 눌렀을 시 정보 보내기
    pushSighUpInfo = (event) => {
        event.preventDefault();
        console.log('hi');
        console.log(this.state.email);
        console.log(this.state.password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                console.log(userCredential);
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    // Sign In(로그인버튼) 눌렀을 시 정보 보내기
    pushSignInInfo = (event) => {
        event.preventDefault();
        console.log('hi');
        console.log(this.state.email);
        console.log(this.state.password);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                console.log(userCredential);
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                console.log('fail');
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }


    render() {
        const loginGoogleUser = async() => {
            const result = await signInWithGooglePopup()
            console.log(result);
        }

        return (
            <>
                <div className='login-background'></div>
                <div className='login-container'>
                    <div className='content'>
                        <h2 className='login-logo'><FaBlackTie className='e-logo' />TheEcomes</h2>
                        <div className='text-sci'>
                            <h2>Welcome!<br />
                                <span>To Our Website</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, unde.
                            </p>
                            <div className='social-icons'>
                                <Link to=''><FaLinkedinIn className='social-i' size={20} color='#e4e4e4' /></Link>
                                <Link to=''><FaFacebookF className='social-i' size={20} color='#e4e4e4' /></Link>
                                <Link to=''><FaInstagram className='social-i' size={20} color='#e4e4e4' /></Link>
                                <Link to=''><FaXTwitter className='social-i' size={20} color='#e4e4e4' /></Link>
                            </div>
                        </div>
                    </div>

                    <div className={this.state.signUp}>
                        <div className='formbox-login login'>
                            <form action='#'>
                                <h2>Sign In</h2>
                                <div className='login-inputbox'>
                                    <span className='login-icon'><MdEmail /></span>
                                    <input type='email' required onChange={this.setEmail}></input>
                                    <label>Email</label>
                                </div>
                                <div className='login-inputbox'>
                                    <span className='login-icon'><FaLock /></span>
                                    <input type='password' required onChange={this.setPassword}></input>
                                    <label>Password</label>
                                </div>
                                <div className='remember-forgot'>
                                    <label><input type='checkbox'></input>Remember me</label>
                                    <Link to=''>Forgot password?</Link>
                                </div>
                                <button type='submit' className='login-btn' onClick={this.pushSignInInfo}>Sign In</button>
                                <button type='submit' className='login-btn' onClick={loginGoogleUser}>Google Sign In</button>
                                
                                <div className='login-register'>
                                    <p>Don't have an account? <Link to='' className='register-link' onClick={this.toggleSignUp}>Sign Up</Link></p>
                                </div>
                            </form>
                        </div>

                        <div className='formbox-login register'>
                            <form action='#' onSubmit={this.signUp}>
                                <h2>Sign Up</h2>

                                {/* <div className='login-inputbox'>
                                    <span className='login-icon'><FaUser /></span>
                                    <input type='text' required onChange={this.setName}></input>
                                    <label>Name</label>
                                </div> */}

                                <div className='login-inputbox'>
                                    <span className='login-icon'><MdEmail /></span>
                                    <input type='email' required onChange={this.setEmail}></input>
                                    <label>Email</label>
                                </div>

                                <div className='login-inputbox'>
                                    <span className='login-icon'><FaLock /></span>
                                    <input type='password' required onChange={this.setPassword}></input>
                                    <label>Password</label>
                                </div>

                                <div className='remember-forgot'>
                                    <label><input type='checkbox'></input>I agree to the terms & conditions</label>
                                </div>
                                <button type='submit' className='login-btn' onClick={this.pushSighUpInfo}>Sign Up</button>

                                <div className='login-register'>
                                    <p>Already have an account? <Link to='' className='login-link' onClick={this.toggleSignIn}>Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Login;