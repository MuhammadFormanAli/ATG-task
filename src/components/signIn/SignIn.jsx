import { Col, Row } from "react-bootstrap";
import signUpPhoto from "/public/sign-up.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

const SignIn = () => {
  const { handleSignInShow, handleSignUpShow, showSignIn } =
    useContext(UserContext);

  return (
    <>
      <Modal
        show={showSignIn}
        size="lg"
        onHide={() => handleSignInShow(false)}
        backdrop="static"
        keyboard={false}
        className="p-0 "
      >
        <Modal.Header className="p-0" closeButton>
        </Modal.Header>
        <Modal.Body className="p-0 rounded-2">
          <div>
            <p className="nine-px text-center bg-success bg-opacity-10 p-3 text-success fw-medium">
              {" "}
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>

            <Row className=" m-0 px-2 p-md-3 p-lg-4 w-100 ">
              <Col sm={12} lg={6} className="">
                <p className="twenty-four-px fw-bold mt-2 lh-1">Sign In </p>
                <form className="border-1">
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
                  <p className="text-center fw-medium mt-3">Forgotten Password</p>
                </div>
              </Col>

              <Col sm={6} lg={6} className="d-none d-lg-block">
                <p className="text-center">
                  Don’t have an account?{" "}
                  <button
                    className="text-primary border-0 bg-transparent fw-medium"
                    onClick={() => handleSignUpShow(true)}
                  >
                    Create new for free!
                  </button>
                </p>
                <img className="w-100 h-75" src={signUpPhoto} alt="" />
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;
