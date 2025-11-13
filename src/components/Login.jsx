import React, { useState,useRef } from 'react'
import Header from './common/Header';
import { checkValidData } from '../utils/validate';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const Login = () => {
    const [isSignInVisible, setIsSignInVisible] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    // const auth = getAuth();

    const handleButtonClick = (e) => {
        
        // e.preventDefault();

        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const nameValue = name.current ? name.current.value : null;

        
        const message = checkValidData(emailValue, passwordValue, nameValue);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInVisible){
            // Handle sign-up logic here
        }else{  

        }
        // Handle sign-in logic here
    }


    const toggleSignInform = (e) => {
        isSignInVisible ? setIsSignInVisible(false) : setIsSignInVisible(true);
        e.preventDefault();
        const signInForm = document.querySelector('.signinform');
        signInForm.classList.toggle('hidden');
        setIsSignInVisible(!isSignInVisible);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg" alt="Netflix Login" />
            </div>
            <div className='w-3/12 absolute p-12 max-w-md my-34 mx-auto bg-black/70 rounded-md text-black right-0 left-0'>
                <form onSubmit={()=>e.preventDefault()}>
                    <h1
                        className='text-3xl font-bold text-white mb-9 py-4'
                    >{isSignInVisible ? 'Sign In' : 'Sign Up'}
                    </h1>
                    {!isSignInVisible
                        &&
                        <input type='text' ref={name}
                            placeholder='Full Name'
                            className='p-4 my-4 w-2xs bg-white/70 rounded-md' />
                    }
                    <input
                        ref={email}
                        type="text"
                        placeholder='Email or phone number'
                        className='p-4 my-4 w-2xs bg-white/70 rounded-md' />
                    
                    <input ref={password}
                        type="password"
                        placeholder='Password'
                        className='p-4 my-4 w-2xs  bg-white/70 rounded-md' />
                    {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
                    <button
                        type='submit' onClick={handleButtonClick}
                        className='p-4 my-4 bg-red-600 text-white w-2xs rounded-md'>
                        {isSignInVisible ? 'Sign In' : 'Sign Up'}
                    </button>
                    <button className='w-full text-left' onClick={toggleSignInform}>
                        <p className='text-white'>
                            <span className='text-white-600 cursor-pointer'>{isSignInVisible ? 'New to Netflix? Sign Up' : ' Already a user? Sign In'}.</span>
                        </p>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login;
