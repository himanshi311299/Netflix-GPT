import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {

    const dispatch = useDispatch();

    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const clearInputs = () => {
        if (email.current) email.current.value = "";
        if (password.current) password.current.value = "";
        if (fullname.current) fullname.current.value = "";
      };

    const toggleSignInForm = () => {
            setIsSignInForm(!isSignInForm);
            setErrorMessage("");
            clearInputs();
    }

    const handleButtonClick = () => {
        //Validate the form data
        
        const message = checkValidData(email.current.value, password.current.value, !isSignInForm ? fullname.current.value : null);
        setErrorMessage(message);
        if(message) return;

        //Sign In Sign Up Form

        if(!isSignInForm){
            //Sign Up Form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR,
            }).then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            }).catch((error) => {
                setErrorMessage(error.message);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage)
        });
        }
        else{
        //Sign In Form

        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage)
        });
        }

}

    return(
        <div>
            
            <div className="relative bg-black h-screen overflow-x-hidden">
            <Header />
                <img className="hidden lg:block absolute"
                src = {BG_URL}
                alt = "backround-image of netflix" />
    
             <form onSubmit={(e) => e.preventDefault() } className="absolute lg:w-3/12 bg-black p-12 mx-auto my-10 right-0 left-0 text-white rounded-lg bg-opacity-80 sm:w-full lg:my-36">
                <h1 className="font-bold text-3xl py-4">
                    { isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                 <input 
                 ref = {fullname}
                 type ="text" 
                 placeholder="Full Name" 
                 className="p-3 my-4 w-full  bg-gray-900 rounded-sm" />
                )}
               
                <input 
                ref = {email}
                type = "email" 
                placeholder="Email Address" 
                className="p-3 my-4 w-full bg-gray-900 rounded-sm" />
                <input 
                ref = {password}
                type ="password" 
                placeholder="Password" 
                className="p-3 my-4 w-full bg-gray-900 rounded-sm" />
                <p className="text-red-600 font-bold my-2">{errorMessage}</p>
                <button 
                className="p-2 my-4 w-full bg-red-700 rounded-lg font-bold"
                onClick = {handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>

                <p className="my-4">{ isSignInForm ? "New to Netflix? " : "Already Registered? "}
                    <span
                     className="font-bold cursor-pointer"
                     onClick={toggleSignInForm}>
                        { isSignInForm ? "Sign Up now." : "Sign In now."}
                    </span>
                </p>
            </form>

            </div>

        </div>
        
    )

};
export default Login;