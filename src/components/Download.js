import React from "react"
import Button from "./Button.js"
import rivernotch_mac from "../resources/Rivernotch_Mac.zip"
import rivernotch_linux from "../resources/Rivernotch_Linux.zip"
import rivernotch_windows from "../resources/Rivernotch_Windows.exe"

const Download = () => {

  return(
      <div className="Wrapper">
        <h2>For Mac</h2>
        <div style={{textAlign: "justify"}}>

          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <i>If you get stuck with the download, try reading all the steps</i>
          </p>

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
            <b>Step 2:</b> When the download is completed, if you don't see the Rivernotch icon, double click the downloaded file "Rivernotch_Mac.zip" to unzip it and get the icon for the game.
          </p>

          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 3:</b> Since we aren't <i>identified developers</i> yet your Mac won't allow you to run our game straight away. To run the game anyway you must first double click the Rivernotch icon.
            A warning will show up telling you that we aren't identified developers, press the OK button. After that, go to your "Security and Privacy" settings by pressing the Apple icon at the top left corner,
            then select "System Preferences" and then choose "Security and Privacy". Finally, go into the "General" tab and press the "Open Anyway" button to open the game.
          </p>

          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 4:</b> Drag and drop the Rivernotch icon to your application folder, desktop or wherever. Then, double click the icon to start the game. Enjoy!
          </p>
        </div>

        <h2 style={{marginTop: 60}}>For Windows</h2>
        <div style={{textAlign: "justify"}}>

          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <i>If you get stuck with the download, try reading all the steps</i>
          </p>

          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            <b>Step 1:</b> Press the button below to start the download.
          </p>

          <a href={rivernotch_windows} download="Rivernotch_Setup.exe">
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
          </a>
          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 2:</b> Once the file "Rivernotch_Setup.exe" is downloaded double click it to start the setup. Your computer may not allow you to open the Rivernotch setup program however, to fix this, press the "More Information" button and then the "Run Anyway" button.
          </p>
          <p style={{fontFamily: "Spectral", fontSize: 16, marginTop: 20}}>
            <b>Step 3:</b> After you have allowed the Rivernotch setup begin simply follow the setup instructions to install and play the game. Enjoy!
          </p>
        </div>


        <h2 style={{marginTop: 60}}>For Linux</h2>
        <div style={{textAlign: "justify"}}>
          <p style={{fontFamily: "Spectral", fontSize: 16}}>
            Yeah you probably a hacker anyways, so inspect element and download the zip from src/resources ;)
          </p>
        </div>
      </div>
  )
}

export default Download

/*<h2 style={{marginTop: 60}}>For Linux</h2>
<div style={{textAlign: "justify"}}>

  <p style={{fontFamily: "Spectral", fontSize: 16}}>
    I don't have linux so I can't guide you on how to download Rivernotch. You guys are hackers anyway though so you will figure it out ;)
  </p>

  <a href={rivernotch_linux} download="Rivernotch_Linux.exe">
    <Button>
      <p style={{
        fontSize: 19,
        fontFamily: 'IM Fell DW Pica SC',
        color: "rgba(255,255,255,0.9)",
        marginTop: 13,
        marginLeft: 26
      }}>
       Download for Linux
      </p>
    </Button>
  </a>
</div>*/
