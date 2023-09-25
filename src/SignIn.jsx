import React from "react";
import './SignIn.css';

function SignIn({display, setDisplay}){
    let displayValue = display;

    function closeModal(){
        setDisplay(displayValue => !displayValue);
    }
    return(
        <div className="sign-in">
           <p>{displayValue? 
                <div className='sign-in-modal'>
                    <div className="title-and-close-button">
                        <h2>Sign In</h2>
                        <div onClick={closeModal}>x</div>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                    <label>Email<span>*</span></label><br/>
                    <input id="email" type="email"/><br/><br/>
                    <label>Password<span>*</span></label><br/>
                    <div className="password-flex-div">
                        <input id="password" type="password"/>
                        <div id="show-password">show</div>
                    </div>
                </div>
                :
                <div></div>
            }</p>
        </div>
    )
}

export default SignIn;