import React from "react"
import button from '../assets/button.png'
import { Link } from "react-router-dom"

// Styling
import "./Home.css"

const Home = () => {

  return(
    <div className="Wrapper" style={{textAlign: "justify", fontSize: 15}}>
      <p style={{fontSize: 20}}>
        <b>Rivernotch</b> is a digital world that is shaped by yours
        and other players' actions.
      </p>

      <p>
        Imagine this: You wake up on an empty meadow.
        Butterflies drift aimlessly amongst the autumn grass and
        the surroundings are yet untouched by modern society.
        <b> The world is your canvas - </b>Build a farm and take
        care of a few chickens, team up with some friends and
        explore the world as it once was
         or collaborate with other players and lay the
         foundation for a village, a city or even a mighty kingdom!
      </p>

      <p>
        <b>Rivernotch</b> is therefore an open world, crafting MMO
        where all players coexist in the same large, persistent server in real time.
        Our small team's vision is that <b>legends, cities and monuments</b> are
        all created by none other than the players. There are <b>no NPCs, quests or
        predetermined plots</b>, you will create those yourself.
      </p>

      <div className="Home-Button-Wrapper">
        <Link to={"/download"}>
          <div style={{position: 'relative', marginTop: 20}}>
            <img
              src={button}
              alt="button"/>
            <p style={{
              position: "absolute",
              top: 10,
              left: 38,
              fontSize: 22,
              fontFamily: 'IM Fell DW Pica SC',
              color: "rgba(255,255,255,0.9)"
            }}>
              Download now
            </p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Home
