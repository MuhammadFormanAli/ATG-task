import { Nav } from "react-bootstrap";

const PostCategory = () => {
  return (
    <div className="d-flex justify-content-between p-0 mb-3 ">
      <div className="">
        <Nav
          className="m-0  "
          variant="tabs"
          defaultActiveKey="#"
        >
          <Nav.Item>
            <Nav.Link href="#">All Post(21)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1">Article</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2"> Event</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3"> Job</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4"> Education</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <button className="btn bg-black fw-medium rounded-2 bg-opacity-10">Write a Post <img src="/src/assets/arrow_drop_down.png" alt="" /></button>
        <button className="btn bg-primary fw-medium rounded-2 bg-opacity-75"> <img src="/src/assets/group_add.png" alt="" /> Join Groups </button>
        
      </div>
    </div>
  );
};

export default PostCategory;
