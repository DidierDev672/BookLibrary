import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <Fragment>
      <Container>
        <div className="card-box">
            <form>
                <label className="title-login">Book Library</label>
                <div className="flex-column">
                    <div className="group-box">
                        <label>Email address</label>
                        <input type="email" className="input-text"  placeholder="email" />
                    </div>
                    <div className="group-box">
                        <label>Password</label>
                        <input type="password" className="input-text" placeholder="password" />
                    </div>
                </div>
            </form>
        </div>
      </Container>
    </Fragment>
  );
}
