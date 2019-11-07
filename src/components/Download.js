import React from "react"
import Button from "./Button.js"
import rivernotch_mac from "../resources/Rivernotch_Mac.zip"

const Download = () => {

  return(
      <div className="Wrapper">
        <h2>For Mac</h2>
        <div style={{textAlign: "justify"}}>
          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 1:</b> Press the button below to start the download.
          </p>

          <a href={rivernotch_mac} download="Rivernotch_Mac.zip">
            <Button>
              <p style={{
                fontSize: 20,
                fontFamily: 'IM Fell DW Pica SC',
                color: "rgba(255,255,255,0.9)",
                marginTop: 12,
                marginLeft: 30
              }}>
               Download for Mac
              </p>
            </Button>
          </a>

          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 2:</b> When the download is completed, go to your "Downloads" folder and double click the downloaded file "Rivernotch_Mac.zip" to unzip it and get the game.
          </p>

          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 3:</b> Since we aren't <i>indentified developers</i> yet your Mac won't allow you to run our game straight away. To run the game anyways you must first double click the Rivernotch icon.
            A warning will show up. Now, go to your "Security and Privacy" settings and at the bottom of the "General" tab press the "Open Anyway" button to open the game.
          </p>

          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 4:</b> Drag and drop the Rivernotch icon to your application folder, desktop or wherever. Then, double click the icon to start the game. Enjoy!
          </p>
        </div>

        <h2 style={{marginTop: 60}}>For Windows</h2>
        <div style={{textAlign: "justify"}}>
          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 1:</b> Press the button below to start the download.
          </p>
          <Button>
          <p style={{
            fontSize: 16,
            fontFamily: 'IM Fell DW Pica SC',
            color: "rgba(255,255,255,0.9)",
            marginTop: 15,
            marginLeft: 29
          }}>
           Download for Windows
          </p>
          </Button>
          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 2:</b> When the download is completed, go to your "Downloads" folder and double click the downloaded file "Rivernotch_Mac.zip" to unzip it and get the game.
          </p>
          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 3:</b> Drag and drop the Rivernotch icon to your application folder, desktop or wherever. Then, double click the icon to start the game. Enjoy!
          </p>
        </div>
      </div>
  )
}

export default Download
