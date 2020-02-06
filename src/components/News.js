import React from "react"
import { Col } from "antd"

const devlog = (title, date, text) => (
    <div style={{ margin: 'auto', textAlign: 'center', width: "100%", maxWidth: 400, padding: "0 24px"}}>
      <h4 style={{fontSize: 20, color: "#434343", fontWeight: 'bold', marginBottom: 2, marginTop: 10}}>
        {title}
      </h4>
      <h4 style={{fontSize: 14, color: "#434343", fontStyle: "italic",  marginBottom: 16}}>
        {date}
      </h4>
      {text}
    </div>
)

const News = () => {

  return(
    <div className="Wrapper" style={{fontFamily: "Spectral", fontSize: 14}}>
      {
        devlog(
          "First devlog!",
          "30 Dec 2019",
          <p style={{fontSize: 14, textAlign: "left"}}>
            With the release of Rivernotch version 0.2.3 I would say
            that the game is finally good enough to deserve its own
            devlog!
            <br/>
            <br/>
            The game has now been in development for about 4 months
            and the majority of that time has gone towards planning
            and laying the foundation for the game. So the game is quite
            primitive at this point.
            <br/>
            <br/>
            A few things you can do however are:
            <br/>
            <br/>
            - Explore our procedurally generated world
            <br/>
            - Play, fight and chat with friends by just joining the game
            <br/>
            - Interact with the world be hitting things with left click,
            gathering items with right click and placing items by opening your
            inventory with the TAB key and then dragging them out!

          </p>
        )
      }
    </div>
  )
}

export default News
