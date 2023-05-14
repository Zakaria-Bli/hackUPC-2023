import { Link } from "react-router-dom"
import Container from "../components/UI/Container"

import Logo from "../assets/logovl.png"
import onGroundBtn from "../assets/onGroundBtn.png"
import searchBtn from "../assets/searchBtn.png"
import fire from "../assets/fire.png"
import card from "../assets/barcelona.png"

const OnGroundHome = () => {
  return (
    <>
      <Container className="relative flex justify-around items-center">
        <div className="grow-[10] ml-4">
          <img className="w-48 py-3" src={Logo} alt="Vueling Logo" />
          <div>
            <form className="search-form relative">
              <input
                className="border-[1px] border-[#efefef] border-solid w-full outline-none px-4 py-2 rounded-lg"
                type="text"
                id="destination"
                name="destination"
                placeholder=" "
              />
              <label
                className="absolute top-1/2 left-4 translate-y-[-50%]"
                htmlFor="destination"
              >
                From...
              </label>
              <img
                className="absolute top-1/2 right-4 translate-y-[-50%] w-7"
                src={searchBtn}
                alt=""
              />
            </form>
          </div>
        </div>

        <div>
          {/* <img className="" src={notificationBtn} alt="" /> */}
          <Link to="/inflight" className="">
            <img className="h-40" src={onGroundBtn} alt="" />
          </Link>
        </div>
      </Container>
      <Container>
        <h1 className="text-2xl uppercase font-bold ml-4">
          H<img className="inline" src={fire} alt="" />t destination
        </h1>
        <div>
          <img src={card} alt="" />
        </div>
        <h2>What getaway you prefer</h2>
      </Container>
    </>
  )
}

export default OnGroundHome
