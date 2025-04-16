import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

    const [open, setOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser);
    
        }).catch((error) => {
    
        });
    }

    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGptSearchView());
        setOpen(false);
    }

    const toggleHomePage = () => {
        setIsHomePage(!isHomePage);
    }

    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {  
                const { uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL}));
                navigate("/browse");
                
            } else {
                dispatch(removeUser());
                navigate("/");
            }
            });

            //unsubscribe when component unmounts
            return (() => unsubscribe());
        }, []);

    return (
       <div className="absolute w-screen  py-2 bg-gradient-to-b from-black flex justify-between z-20 sm:px-8">
            <img className="w-44"
            src = { LOGO }
            alt = "netflix logo"
            />
    
           { user && (
            
            <div>
               
                <div className="flex">
                <span className="font-bold text-white mt-4">{ user?.displayName }</span>
                <img
                    className="w-12 h-12 m-2"
                    alt= "usericon"
                    src= { user?.photoURL }
                />
    
                <div className="relative inline-block text-left">
      {/* Row with filename and arrow */}
                <div className="flex items-center text-white px-1 py-5  rounded shadow">
      

        {/* Arrow icon - only this is clickable */}
                <svg
                onClick={() => setOpen(!open)}
                className={`w-6 h-6 ml-2 cursor-pointer transition-transform duration-200 focus:outline-none focus-visible:outline-none ${
                    open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="white"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
                </svg>
      </div>

                {/* Dropdown menu */}
                {open && (
                    <div className="absolute mt-2 w-56 right-0 bg-[#202020b3]  shadow-lg z-10">
                    <button className="block w-full text-left px-6 py-2 font-semibold border-b-white text-white hover:bg-gray-600"
                            onClick= {() => {
                                handleGptSearchClick();
                                setIsHomePage(!isHomePage);
                              }}>
                        { isHomePage ? "GPT Search" : "Home"}
                    </button>
                     {/* White Divider Line */}
                    <div className="h-px bg-white opacity-40 mx-4" />
                    <button className="block w-full text-left px-6 py-2 text-md font-semibold text-white hover:bg-gray-600"
                            onClick= {handleSignOut}>
                        Sign Out
                    </button>
                    </div>
                )}
                
                </div>
                </div>
            </div>
           )}
            
       </div>

    )
};

export default Header;