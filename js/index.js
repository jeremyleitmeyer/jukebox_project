var songs = [
  { title: "The End For Which The World Was Made",
    artist: "Celebration Symphony Orchestra",
    src: "music/Celebration_Symphony_Orchestra_-_04_-_The_End_For_Which_The_World_Was_Made.mp3"
  },
  { title: "Small, Bent, and Ugly",
    artist: "Crucial Dudes",
    src: "music/Crucial_Dudes_-_Small_Bent_and_Ugly.mp3"
  },
  { title: "Exit This Earth's Atmosphere",
    artist: "Camellia",
    src: "music/Camellia_-_EXiT_this_Earths_Atomosphere.mp3"
  }
]


class Jukebox {
  constructor(index) {
    this.song = songs[index]
    this.template = `
  <marquee speed="8">Now Playing: "{{song.title}}"</marquee><br> <p>by {{song.artist}}</p>
  <audio autoplay>
   <source src="{{song.src}}" type="audio/mpeg" >
   </audio>
  <br>
  <button class="plpa" onclick="Jukebox.playControl()">Play</button>
  <button class="plpa" onclick="Jukebox.pauseControl()">Pause</button>
  <button class="plpa" onclick="Jukebox.stopControl()">Stop</button>
 `
  }

  static playSong(index){
    var jukebox = new Jukebox(index)
    return jukebox.render()
  }
  
  static pauseControl() {
    var audio = document.querySelector("audio")
    audio.pause()
    }
  
  static playControl() {
    var audio = document.querySelector("audio")
    audio.play()
  }
  
  static stopControl() {
    var audio = document.querySelector("audio")
    audio.currentTime = 0
    audio.pause()
  }
  
  render() {
    var jb = document.getElementById('jukebox')
    jb.innerHTML = Mustache.render(this.template, this)
  }
}

