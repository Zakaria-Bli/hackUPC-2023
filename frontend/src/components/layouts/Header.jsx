import { Link } from "react-router-dom"

import Container from "../UI/Container"

import Logo from "../../assets/logovl.png"
import navBtn from "../../assets/inFlightBtn.png"

const Header = () => {
  return (
    <Container className="relative flex justify-around items-center">
      <div className="grow-[10] ml-4">
        <img className="w-48 py-3" src={Logo} alt="Vueling Logo" />
        <ul className="nav-link w-[80%] flex bg-[#efefef] rounded-3xl justify-between">
          <li>
            <Link to="/inflight">Rooms</Link>
          </li>
          <li>
            <Link to="/chatPage">Chat</Link>
          </li>
          <li>
            <Link>Fun</Link>
          </li>
        </ul>
      </div>

      <Link to="/on-ground" className="">
        <img className="h-40" src={navBtn} alt="" />
      </Link>
    </Container>
  )
}

export default Header
