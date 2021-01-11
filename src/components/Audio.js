import React, { Component } from "react"
import '../App.css'

<<<<<<< HEAD
=======


>>>>>>> 5d070094d2b982899fc7eb83571adf75030b5f65
export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
<<<<<<< HEAD

  render() {
    return (
      <div>
<iframe className="widget" allow="autoplay" width="200" height="50" src="https://www.iheart.com/artist/drake-44512/?embed=true" frameborder="5"></iframe>
      </div>
      
=======
  render() {

    return (
      <div>
        <iframe className="widget" allow="autoplay" width="60%" height="50px" src="https://www.iheart.com/artist/calvin-harris-60352/?embed=true" frameborder="0"></iframe>
      </div>
>>>>>>> 5d070094d2b982899fc7eb83571adf75030b5f65
    )
  }
}

