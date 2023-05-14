import Container from "../components/UI/Container"

import { Link } from "react-router-dom"

import Logo from "../assets/logovl.png"

const Sign = () => {
  return (
    <Container className="flex items-end absolute top-0 left-0 bottom-0 right-0 bg-[url('./assets/bg.png')]">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={Logo} alt="vueling Logo" />
        <Link
          to="/inflight"
          className="uppercase text-white font-bold bg-Color-Yellow px-10 rounded-3xl py-4 text-xl mb-10 mt-3"
        >
          Get Started
        </Link>
      </div>
    </Container>
  )
}

export default Sign
