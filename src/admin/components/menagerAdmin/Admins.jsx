import React, {useState} from 'react'
import "./admins.css"
import { AiOutlineLeft,AiOutlineRight  } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import user from '../../../img/users.png'
import AdminMenu from '../adminMenu/AdminMenu';
import users from '../../../img/users.png'
import { Link, useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';


const Admins = () => {
    const [admins, setAdmins] = useState([
        { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 5, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 6, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 7, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // send ID of admin
    const [id, setId] = useState();

    const handleUserID = (id) => {
        setId(id);
        navigate("/admins/admin/", { state: { id: id } });
    }

     // Filter user based on search 
    const filteredadmin = admins.filter((admin) => {
        const nameMatch = admin.adminName.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
    });

    // prev next button user in react
    const [currentPage, setCurrentPage] = useState(1) 
    const recordsPerPage = 4
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredadmin.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredadmin.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1) 

  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_users'>
                    <div className='box_users'>
                        <div className='box_add_admin'>
                            <Link to="/addadmin/" className='btn_addadmin'>
                                <BiPlus id="icon_add_admin"/>
                                Add Admin
                            </Link>
                        </div>
                        
                        <form className="search">
                            <div className="search-box_menageruser">
                                <input 
                                    type="text" 
                                    placeholder="Search ..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    </div>

                    {filteredadmin && records.map((admin) => (
                        <div key={admin.adminID}>
                            <div className='box_users_admin' onClick={() => handleUserID(admin.adminID)}>
                                <div className='box_admin_text'>
                                    <img src={users} alt='img'></img>
                                    <div className='container_chat_name'>
                                        <p>Name: {admin.adminName}</p>
                                        <p>Eamil: {admin.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='box_next_admin'>
                        <button className='box_prev_next_admin' onClick={prePage}>
                            <AiOutlineLeft id="box_prev_next_icon"/>
                            <p>Prev</p>
                        </button>

                        <div className='box_num_admin'>
                            {
                                numbers.map((n, i) => (
                                    <div className={`page-link ${currentPage === n? 'active' : ''}`} key={i}>
                                        <div className='num_admin'>
                                            <p onClick={()=> changeCPage(n)} >{n}</p>
                                        </div> 
                                    </div>
                                ))
                            }
                        </div>
                        
                        <button className='box_prev_nexts_admin' onClick={nextPage}>
                            <p>Next</p>
                            <AiOutlineRight id="box_prev_next_icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
  function prePage() {
    if(currentPage !== 1) {
        setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if(currentPage !== npage) {
        setCurrentPage(currentPage + 1)
    }
  }
  function changeCPage(userID) {
    setCurrentPage(userID)
  }
}

export default Admins;