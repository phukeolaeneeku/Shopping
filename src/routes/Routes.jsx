import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Account from "../user/components/account/Account";
import General from "../user/components/account/General";
import Contact from "../user/components/account/Contact";
import Password from "../user/components/account/Password";
import Payment from "../user/components/cart/Payment";
import SuccessfulBuy from "../user/components/cart/SuccessfulBuy";
import Cart from "../user/components/cart/Cart";
import Contacts from "../user/components/contact/Contact";
import Bill from "../user/components/order/Bill";
import Dashboard from "../admin/Dashboard";
import Post from "../admin/components/post/Post";
import Calendar from "../user/components/calenndar/Calendar";

/* ============================== */
import Order from "../user/components/order/Order";
import ProductDetails from "../user/components/products/ProductDetails";
import OrderPage from "../admin/components/orderPage/OrderPage";
import OrderBill from "../admin/components/orderPage/OrderBill";
import Product from "../admin/components/products/Product";
import Text from "../user/components/order/Text";
import ForgotPassword from "../user/components/login_register/ForgotPassword";
import AlertLogin from "../user/components/login_register/AlertLogin"
import AlertRegister from "../user/components/login_register/AlertRegister"
import Login from "../user/components/login_register/Login"
import Register from "../user/components/login_register/Register"



// ===============================
import User from "../admin/components/menagerUser/User";
import Users from "../admin/components/menagerUser/Users"
import Admin from "../admin/components/menagerAdmin/Admin"
import Admins from "../admin/components/menagerAdmin/Admins";
import AddAdmin from "../admin/components/menagerAdmin/AddAdmin";
import Admin_acount from "../admin/components/menagerAdmin/Admin_acount";
import Store from "../admin/components/stores/Store";


const Links = () => {
    return(
        <Router>
            <Routes>
                {/*====================== */}
                <Route exact path="/" Component={Home}/>
                <Route exact path="/account" Component={Account}/>
                <Route exact path="/account/general" Component={General}/>
                <Route exact path="/account/contact" Component={Contact}/>
                <Route exact path="/account/password" Component={Password}/>
                <Route exact path="/cart/payment" Component={Payment}/>
                <Route exact path="/contacts" Component={Contacts}/>
                <Route exact path="/order" Component={Order}/>
                <Route exact path="/order/bill" Component={Bill}/>
                <Route exact path="/cart/successfulBuy" Component={SuccessfulBuy}/>
                <Route exact path="/text" Component={Text}/>
                <Route exact path="/calendar" Component={Calendar}/>

                {/*====================== */}
                <Route exact path="/productdetails" Component={ProductDetails}/>
                <Route exact path="/cart" Component={Cart}/>
                <Route exact path="/forgotpassword" Component={ForgotPassword}/>
                <Route exact path="/alertlogin" Component={AlertLogin}/>
                <Route exact path="/alertregister" Component={AlertRegister}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>


                {/* Admin routes */}
                <Route exact path="/dashboard" Component={Dashboard}/>
                <Route exact path="/post" Component={Post}/>
                <Route exact path="/orderpage" Component={OrderPage}/>
                <Route exact path="/orderbill" Component={OrderBill}/>
                <Route exact path="/product" Component={Product}/>
                <Route exact path="/user" Component={User}/>
                <Route exact path="/users" Component={Users}/>
                <Route exact path="/admins" Component={Admins}/>
                <Route exact path="/admins/admin" Component={Admin}/>
                <Route exact path="/addadmin" Component={AddAdmin}/>
                <Route exact path="/adminacount" Component={Admin_acount}/>
                <Route exact path="/store" Component={Store}/>
            </Routes>
        </Router>
    );
};

export default Links;