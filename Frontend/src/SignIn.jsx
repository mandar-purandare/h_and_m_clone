import React, { useContext, useState } from "react";
import './SignIn.css';
import api from "./Config/Axios.config.js";
import toast, {Toaster} from "react-hot-toast";
import { AuthContext } from "./Context/Auth.context.js";

function SignIn({display, setDisplay, appBlur, setAppBlur}){

    let displayValue = display;

    const [modalType, setModalType] = useState('sign-in');

    const [user, setUser] = useState({email:'', password:'', dob:''});

    const {Login} = useContext(AuthContext);

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    async function userLogin(){
        try{
            const response = await api.post('/auth/login', {...user});
            if(response.data.success){
                toast.success(response.data.message);
                localStorage.setItem('h&m-user-token', response.data.token);
                // console.log(response.data.user);
                Login(response.data.user);
                setTimeout(() => {
                    closeModal();
                },2000);
                
            } 
       }catch(error){
            toast.error(error.response.data.message);
       }
    }

    async function register(){
       try{
            const response = await api.post('/auth/register', {...user});
            if(response.data.success){
                toast.success(response.data.message);
                setTimeout(() => {
                    closeModal();
                },2000);
            } 
       }catch(error){
            toast.error(error.response.data.message);
       }
    }

    function closeModal(){
        setDisplay(displayValue => !displayValue);
        setAppBlur(appBlur => appBlur = 'App')
    }

    function showMemberModal(){
        setModalType(modalType => modalType = 'become-a-member');
    }

    function showSignInModal(){
        setModalType(modalType => modalType = 'sign-in');
    }


    return(
        <div className="sign-in">
           <p>{displayValue? 
                <div className='sign-in-modal'>
                    <div className="title-and-close-button">
                        {modalType === 'sign-in'? <h2>Sign In</h2>:<h2 id="become-member-title">BECOME A MEMBER</h2>}
                        {/* <h2>Sign In</h2> */}
                        <div onClick={closeModal}>x</div>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                    <label>Email<span>*</span></label><br/>
                    <input id="email" type="email" name='email' onChange={handleChange}/><br/><br/>
                    <label>{modalType === 'sign-in'? 'Password':'Create a password'}<span>*</span></label><br/>
                    <div className="password-flex-div">
                        <input id="password" type="password" name='password' onChange={handleChange}/>
                        <div id="show-password" className="hover">SHOW</div>
                    </div>
                    
                    {modalType === 'sign-in'? 
                        <div>
                            <div className="forgot-password">
                                <div>
                                    <input className="hover" type="checkbox"/>
                                    <p>Remember me</p>
                                </div>
                                <p className="hover underline">Forgot password?</p>
                            </div>
                            <button className="sign-in-button" onClick={userLogin}>Sign in</button>
                            <button className="become-a-member-button hover" onClick={showMemberModal}>Become a member</button>
                            <p className="hover underline">Membership info</p>
                        </div>:
                        <div className="become-a-member-block">
                            <p className="create-password-rules">8 characters1 lowercase1 uppercase1 number</p>
                            <label>Date of birth<span>*</span></label><br/>
                            <input type="date" className="date-of-birth" name='dob' onChange={handleChange}/><br/>
                            <p className="birthday-gift-message">H&M wants to give you a special treat on your birthday</p>
                            <div className="add-more-get-more"><p>ADD MORE & GET MORE</p><p>V</p></div><br/>
                            <div className="mailing-service"><input type="checkbox"/><p>Yes, email me offers, style updates, and special invites to sales and events.</p></div><br/>
                            <p className="newsletter">Wish your inbox was more stylish? No problem, just subscribe to our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight to your inbox!</p>
                            <br/>
                            <p className="newsletter">By clicking ‘Become a member’, I agree to the H&M Membership</p>
                            <p className="newsletter underline">Terms & conditions</p><br/>
                            <p className="newsletter">To give you the full membership experience, we will process your personal data in accordance with the H&M's<span className="underline"> Privacy Notice</span></p>
                            <button className="sign-in-button" onClick={showSignInModal}>Sign in</button>
                            <button className="become-a-member-button hover" onClick={register}>Become a member</button>
                        </div>
                    }
                    
                </div>
                :
                <div></div>
            }</p>
            <Toaster/>
        </div>
    )
}

export default SignIn;