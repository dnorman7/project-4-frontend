import React, { Component } from "react"
import '../App.css'

export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
<iframe className="widget" allow="autoplay" width="200" height="50" src="https://www.iheart.com/artist/drake-44512/?embed=true" frameborder="5"></iframe>
      </div>
      
    )
  }
}

