import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () =>{

  const [btname,setbtname] = useState('login')
  const onlineStatus = useOnlineStatus()
  return (
    <div className=" header flex justify-between bg-pink-100">
      <div className="logo w-16" >
        <img className="image" alt='mi'src={LOGO_URL}/>
    </div>
    <div className="list">
      <ul className="flex m-4 p-2">
        <li className="mr-2">OnlineStatus:{onlineStatus ? 'active' : 'inactive'}</li>
        <li className="mr-2"><Link to ="/">Home</Link></li>
        <li className="mr-2"> <Link to="/about"> About Us</Link> </li>
        <li className="mr-2"><Link to ="/contact">Contact Us</Link></li>
        <li className="mr-2">Cart</li>
        <button className="login" onClick={() => {
          btname=='login' ? setbtname('logout') : setbtname('login')
        }}>{btname}</button>
      </ul>
    </div>

    </div>
      
)}

export default Header
