import React from 'react';

import "../styles/signin.scss";
const SignIn = () => {
    return(
        <div className="container py-5">
            <div className="box-card-sign-in">
                <form className="form-sign-in">
                    <div className="item-title-sign-in">
                        <label className="title-sign-in">Sign In</label>
                    </div>
                    <div className="item-form-sign-in">
                        <label for="email">Email</label>
                        <input type="email" id="email"
                        class="text-input" placeholder="Example@example.com"
                        required/>
                    </div>
                    <div className="item-form-sign-in">
                        <label for="pwd">Password</label>
                        <input type="password" id="pwd"
                        class="text-input" placeholder="****************"
                        required/>
                    </div>
                    <div className="item-form-sign-in">
                        <button type="button" className="btn-sign-in">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;