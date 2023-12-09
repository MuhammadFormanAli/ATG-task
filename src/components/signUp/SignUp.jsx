import { Col, Row } from "react-bootstrap";
import signUpPhoto from "/public/sign-up.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

const SignUp = () => {
    const {handleSignUpShow, handleSignInShow, showSignUp}= useContext(UserContext)
    

    return (
  
      <>
        <Modal
          show={showSignUp}
          size="lg"
          onHide={()=>handleSignUpShow(false)}
          backdrop="static"
          keyboard={false}
          className="p-0"
        >
          <Modal.Header className="p-0" closeButton>
          </Modal.Header>
          <Modal.Body className="p-0 rounded-2">
            <div className="">
  
              <p className="nine-px text-center bg-success bg-opacity-10 p-3 text-success fw-medium">
                {" "}
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              
              </p>
  
              <Row className=" m-0 px-2 p-md-3 p-lg-4 w-100 ">
                <Col sm={12} lg={6} className="">
                  <p className="twenty-four-px fw-bold mt-2 lh-1">Create Account</p>
                  <form className="border-1">
                    <div className="d-flex">
                      <input
                        className="w-50 py-2 px-3 fw-medium input "
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="w-50 py-2 px-3 fw-medium input "
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
  
                    <input
                      className="w-100  py-2 px-3 fw-medium input "
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                    />
                    <input
                      className="w-100  py-2 px-3 fw-medium input "
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                    <input
                      className="w-100 py-2 px-3 fw-medium input "
                      type="password"
                      name=""
                      id=""
                      placeholder="Confirm Password"
                    />
                  </form>
                  <button className="w-100 btn btn-primary rounded-pill mt-4 mb-2">
                    Create Account
                  </button>
                  <div className="w-100 ">
                    <button className="w-100 btn-outline-light input  py-2 my-1 fw-medium">
                      Sign up with Facebook
                    </button>
                    <button className="w-100 btn-outline-light input py-2 my-1 fw-medium ">
                      Sign up with Google
                    </button>
                    <p className="text-center d-block d-lg-none">Already have an account? <button  className="text-primary border-0 bg-transparent fw-medium" onClick={()=>handleSignInShow(true)}>Sign In</button></p>
                  </div>
                </Col>
  
                <Col sm={6} lg={6} className="d-none d-lg-block">
                  <p className="text-center">Already have an account? <button  className="text-primary border-0 bg-transparent fw-medium" onClick={()=>handleSignInShow(true)}>Sign In</button></p>
                  <img className="w-100 h-75" src={signUpPhoto} alt="" />
                  <p className="nine-px text-center">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </Col>
  
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default SignUp;