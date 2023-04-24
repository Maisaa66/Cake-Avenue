import React from "react";
import Image from "next/image";
import img from "../../public/Images/dessert.jpg";
import github from "../../public/Images/github.svg"
const Login = () => {
  return (
      <div className="card mb-3 m-auto shadow mt-2" style={{ maxWidth: "900px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Image src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 m-auto justify-content-center ">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label fw-bold" style={{fontFamily:"var(--textFont)"}}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control w-50"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text fw-bold" style={{fontFamily:"var(--textFont)"}}>
                    Well never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label fw-bold" style={{fontFamily:"var(--textFont)"}}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control w-50"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="exampleInputPassword1" className="form-label fw-bold" style={{fontFamily:"var(--textFont)"}}>
                    Login with:
                  </label>
                  <Image src={github} style={{width:"30px", height:"30px", cursor:"pointer"}}></Image>
                </div>
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
