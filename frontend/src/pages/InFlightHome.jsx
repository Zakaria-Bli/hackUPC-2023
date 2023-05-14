import Header from "../components/layouts/Header"

import Container from "../components/UI/Container"

import chess from "../assets/chess.png"
import videoGame from "../assets/video-game.png"

const InFlightHome = () => {
  return (
    <Container className="h-100vh">
      <Header />
      <div className="my-5">
        <img className="w-[375px] mx-auto" src={chess} alt="" />
      </div>
      <div>
        <img className="w-[375px] mx-auto" src={videoGame} alt="" />
      </div>
    </Container>
  )
}

export default InFlightHome
