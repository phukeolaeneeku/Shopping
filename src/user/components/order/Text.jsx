import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";

import "./test.css";
const Test = () => {
  return (
    <>
      <Header></Header>
      <section id="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
            <div className="boxhead_container">
              <div className="box_coustomer">
                <h3>Customer Support Center</h3>
              </div>
              <div className="box_notice">
                <h3>Notice board</h3>
              </div>
              <div className="box_favorite">
                <h3>Favorite Menu</h3>
              </div>
              <div className="box_contact">
                <h3>Information on bankless account</h3>
              </div>
            </div>
      </section>
      <Menu />
    </>
  );
};

export default Test;
