import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";

import "./text.css";
const Text = () => {
  return (
    <>
      <Header></Header>
      <section id="bill">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
            <div className="boxhead_container">
              <div className="box_coustomer">
                <h3>Customer Support Center</h3>
                <p>TEL 1688-</p>
                <p>FAX 031-:</p>
                <p>Weekdays 09:00 AM ~ 17:30 PM</p>
                <p>Closed on Sundays and public holidays</p>
                <p>Return shipping address</p>
                <p>Gyeonggi-do</p>
              </div>
              <div className="box_notice">
                <h3>Notice board</h3>
                <p>Announcement</p>
                <p>Event</p>
                <p>Product inquiry</p>
                <p>Product Reviews</p>
                <p>Real life story</p>
                <p>Frequently Asked Questions</p>
                <p>Contact us 1:1</p>
              </div>
              <div className="box_favorite">
                <h3>Favorite Menu</h3>
                <p>Event</p>
                <p>Shopping basket</p>
                <p>Favorite products</p>
                <p>Order inquiry</p>
                <p>My page</p>
              </div>
              <div className="box_contact">
                <h3>Information on bankless account</h3>
                <p>Woori Bank 1005-980-</p>
                <p>Kookmin Bank 821301-0</p>
                <p>Account holder: Juice</p>
              </div>
            </div>
      </section>
      <Menu />
    </>
  );
};

export default Text;
