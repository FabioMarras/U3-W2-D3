import { Form, NavDropdown } from "react-bootstrap";
import Img from "../data/avatar.png";

const Profile = () => {
  return (
    <div id="PG-CenterDiv" className="d-flex flex-column justify-content-center align-items-start">
      <div>
        <h1 className="PGh1">Edit Profile</h1>
      </div>
      <div className="d-flex border-top">
        <div className="me-4 mt-3 position-relative">
          <img src={Img} alt="" width="100px" />
          <span id="changeImg" className="position-absolute p-1 bg-warning border rounded-circle"></span>
        </div>
        <div>
          <div className="d-flex flex-column border-bottom mt-3">
            <Form action="">
              <input className="opacity-50" type="text" placeholder="Scrivi il tuo nickname" />
            </Form>
            <NavDropdown title="Change language" id="basic-nav-dropdown" className="my-4 text-white ">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Italiano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Russian</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="border-bottom mt-3">
            <p>Maturity Settings:</p>
            <button className="mb-2 btn bg-black text-white border">ALL MATURITY RATINGS</button>
            <p>show tittles of all maturrity rating for this profile.</p>
            <button className="btn bg-black text-white border opacity-75 mb-3">EDIT</button>
          </div>
          <div>
            <p className="mt-3">Autoplay controls</p>
            <input className="checkbox" type="checkbox" /> Autoplay next episode in a series on all devices
            <br />
            <input className="checkbox mb-3" type="checkbox" /> Autoplay previews while browsing on all devices
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-self-stretch border-top">
        <button className="w30 btn btn-light mt-3">SAVE</button>
        <button className="w30 btn bg-black text-white border opacity-75 mt-3">CANCEL</button>
        <button className="w30 btn bg-black text-white border opacity-75 mt-3">DELETE PROFILE</button>
      </div>
    </div>
  );
};
export default Profile;
