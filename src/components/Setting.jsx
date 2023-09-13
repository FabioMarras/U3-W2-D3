import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const Setting = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" width={"100px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Tv shows
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                My list
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="black" id="dropdown-basic" className="text-white">
                  Setting & Edit Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="text-black">
                    Setting
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="text-black">
                    Edit profile
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <article className="bgWhite container">
        <div>
          <h1 className="PGh1">Account</h1>
        </div>
        <div className="SettingPageStart d-flex border-top border-bottom">
          <div className="SettingPageStart2 w20 d-flex flex-column mt-3">
            <p>Mermership & billing</p>
            <button className="x">Cancel Mermbership</button>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between w-100 mt-3 ">
              <p className="ps-3">student@strive.school</p>
              <a href="/">Change account email</a>
            </div>
            <div className="d-flex justify-content-between w-100 ">
              <p className="ps-3">Password: ******</p>
              <a href="/">Change password</a>
            </div>
            <div className="d-flex justify-content-between border-bottom w-100 ">
              <p className="ps-3">Phone: 321 044 1279</p>
              <a href="/">Change phone number</a>
            </div>
            <div className="d-flex justify-content-between w-100  border-bottom">
              <p className="ps-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-paypal"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                </svg>
                Paypal admin@strive.school
              </p>
              <div className="d-flex flex-column align-items-end">
                <a href="/">Update payment info </a>
                <a href="/">Biling details</a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end  w-100">
              <a href="/">Redeem gift card or promo code</a>
              <a href="/">Where to buy gift cards</a>
            </div>
          </div>
        </div>

        <div className="d-flex border-top border-bottom">
          <div className="w20 d-flex flex-column mt-3">
            <p>PLAN DETAILS</p>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between w-100 mt-3 ">
              <p className="ps-3">
                premium <button id="ultraBtn">ULTRA HD</button>
              </p>
              <a href="/">Change plan</a>
            </div>
          </div>
        </div>

        <div className="d-flex border-top border-bottom">
          <div className="w20 d-flex flex-column mt-3">
            <p>SETTINGS</p>
          </div>
          <div className="w-100">
            <div className="d-flex flex-column justify-content-between w-100 mt-3 ">
              <a href="/">Parental controls</a>
              <a href="/">Test partecipation</a>
              <a href="/">Manage download devices</a>
              <a href="/">Activate a device</a>
              <a href="/">Recent device straming activity</a>
              <a className="mb-3" href="/">
                Sign out of all devices
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex border-top border-bottom">
          <div className="w20 d-flex flex-column mt-3">
            <p>MY PROFILE</p>
          </div>
          <div className="w-100">
            <div className="d-flex flex-column justify-content-between w-100 mt-3 ">
              <div className="settingPageMobile d-flex justify-content-between">
                <div>
                  <img src="./Netflix-assets/assets/avatar.png" alt="" width="50px" /> Strive student
                </div>
                <div className="settingPageMobile d-flex flex-column mt-4">
                  <a href="/">Manage download devices</a>
                  <a href="/">Activate a device</a>
                </div>
              </div>
              <div className="settingPageMobile d-flex mt-3 gap150">
                <a href="/">Language</a>
                <a href="/">Viewing activity</a>
              </div>
              <div className="settingPageMobile d-flex mt-2 gap104">
                <a href="/">Playback setting</a>
                <a href="/">Ratings</a>
              </div>
              <div className="d-flex mt-2">
                <a href="/">Subtitle appearance</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Setting;
