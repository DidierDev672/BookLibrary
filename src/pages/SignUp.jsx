import React from 'react';

import "../styles/signup.scss";

const SignUp = () => {
    return(
        <div className="container py-3">
            <div className="box-sign-up">
                <div className="header-sign-up">
                    <h3>Sign Up</h3>
                </div>
                <div className="flex-sign-up">
                    <div className="item-sign-up">
                        <label for="email">Email</label>
                        <input type="email" className="text-input" id="email" placeholder="example@example.com"/>
                    </div>
                    <div className="item-sign-up">
                        <label for="pwd">Password</label>
                        <input type="password" className="text-input" id="pwd" placeholder="***********"/>
                    </div>
                </div>
                <div className="item-sign-up p-3">
                    <button type="button" className="btn-sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;