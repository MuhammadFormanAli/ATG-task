const PostCard = () => {
  return (
    <div className="mb-5">
      {/* for single card  */}

      {/* card One  */}
      <div className="border rounded mb-2 ">
        <div>
          <img className="w-100" src="/src/assets/cart-img-1.png" alt="" />
          <div className="px-4">
          <p className="py-3 m-0"> ✍️ Article</p>
          <div className="d-flex justify-content-between align-items-baseline ">
            <h5 className="w-75 m-0">
              What if famous brands had regular fonts? Meet Regular Brands!
            </h5>
            <select>
              <option value="volvo">Edit</option>
              <option value="saab">Report</option>
            </select>
          </div>
          <p className="py-3 fs-6 m-0">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                className="rounded-circle"
                src="/src/assets/profile-pic 1.png"
                alt=""
              />
              <p className="m-0">Sarthak Kamra</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="/src/assets/visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img
                className="m-0 d-block"
                src="/src/assets/share-icon.png"
                alt=""
              />
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* card 2  */}
      <div className="border rounded mb-2 ">
        <div>
          <img className="w-100" src="/src/assets/cart-img-3.png" alt="" />
          <div className="p-4">
          <p className="m-0 py-3">🔬️ Education</p>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="w-75 m-0">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h5>
            <select>
              <option value="volvo">Edit</option>
              <option value="saab">Report</option>
            </select>
          </div>
          <p className=" py-3 fs-6 m-0">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                className="rounded-circle"
                src="/src/assets/profile-pic 2.png"
                alt=""
              />
              <p className="m-0">Sarah West</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="/src/assets/visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img
                className="m-0 d-block"
                src="/src/assets/share-icon.png"
                alt=""
              />
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* card three  */}
      <div className="border rounded mb-2 ">
        <img className="w-100" src="/src/assets/cart-img-2.png" alt="" />
        <div className="px-4">
          <p className=" m-0 py-3">🗓️ Meetup </p>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="w-75 m-0">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h5>
            <select>
              <option value="volvo">Edit</option>
              <option value="saab">Report</option>
            </select>
          </div>
          <div className="w-75 my-2 d-flex align-items-center justify-content-between fw-bold fs-6">
            <p> <img src="/src/assets/date-icon.png" alt="" /> Fri, 12 Oct, 2018</p>
            <p> <img src="/src/assets/location-icon.png" alt="" /> Ahmedabad, India</p>
          </div>
          <button className=" btn btn-outline-dark text-danger fw-bold w-100 fs-6 my-3 bg-opacity-10">
            Visit Website
          </button>

          <div className="d-flex align-items-center justify-content-between py-3 ">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                className="rounded-circle"
                src="/src/assets/profile-pic 3.png"
                alt=""
              />
              <p className="m-0">Ronal Jones</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="/src/assets/visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img
                className="m-0 d-block"
                src="/src/assets/share-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* card four  */}
      <div className="border rounded mb-2 ">
        <div className="px-4">
       
          <p className=" m-0 py-3">💼️ Job</p>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="w-75 m-0">
            Software Developer
            </h5>
            <select>
              <option value="volvo">Edit</option>
              <option value="saab">Report</option>
            </select>
          </div>
          <div className="w-75 my-2 d-flex align-items-center justify-content-between fw-bold fs-6">
            <p> <img src="/src/assets/date-icon.png" alt="" /> Innovaccer Analytics Private Ltd.</p>
            <p> <img src="/src/assets/location-icon.png" alt="" /> Ahmedabad, India</p>
          </div>
          <button className=" btn btn-outline-dark text-info fw-bold w-100 fs-6 my-3 bg-opacity-10">
          Apply on Times jobs
          </button>
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                className="rounded-circle"
                src="/src/assets/profile-pic 4.png"
                alt=""
              />
              <p className="m-0">Joseph Gray</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="/src/assets/visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img
                className="m-0 d-block"
                src="/src/assets/share-icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
