import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Music } from './components/Music'
import { NoMusic } from './components/NoMusic'
import { MusicSelected } from './components/MusicSelected'
import { useState } from 'react'
import { findMusicData } from './functions/findMusicData'


export interface Item {
  id: string,
  name: string,
  cover: string,
  src: string,
  duration: string
}

const storedResult = [
  {
      "id": "1",
      "name": "Battle of the dragons",
      "cover": "./src/assets/cover/music-1-bg.jpg",
      "src": "./src/assets/musics/battle-of-the-dragons.mp3",
      "duration": "3:57"
  },
  {
      "id": "2",
      "name": "Embrace",
      "cover": "./src/assets/cover/music-2-bg.jpg",
      "src": "./src/assets/musics/embrace.mp3",
      "duration": "2:59"
  },
  {
      "id": "3",
      "name": "Unlock-me-amapiano",
      "cover": "./src/assets/cover/music-3-bg.jpg",
      "src": "./src/assets/musics/unlock-me-amapiano.mp3",
      "duration": "3:05"
  },
  {
      "id": "4",
      "name": "Forest lullaby",
      "cover": "./src/assets/cover/music-4-bg.jpg",
      "src": "./src/assets/musics/forest-lullaby.mp3",
      "duration": "2:18"
  },
  {
      "id": "5",
      "name": "Into the night",
      "cover": "./src/assets/cover/music-5-bg.jpg",
      "src": "./src/assets/musics/into-the-night.mp3",
      "duration": "2:20"
  },
  {
      "id": "6",
      "name": "Just relax",
      "cover": "./src/assets/cover/music-6-bg.jpg",
      "src": "./src/assets/musics/just-relax.mp3",
      "duration": "2:20"
  },
  {
      "id": "7",
      "name": "Sedative",
      "cover": "./src/assets/cover/music-7-bg.jpg",
      "src": "./src/assets/musics/sedative.mp3",
      "duration": "3:01"
  },
  {
      "id": "8",
      "name": "Town",
      "cover": "./src/assets/cover/music-8-bg.jpg",
      "src": "./src/assets/musics/town.mp3",
      "duration": "3:02"
  },
  {
      "id": "9",
      "name": "Tvari Tokyo cafe",
      "cover": "./src/assets/cover/music-9-bg.jpg",
      "src": "./src/assets/musics/tvari-tokyo-cafe.mp3",
      "duration": "2:33"
  },
  {
      "id": "10",
      "name": "Whip",
      "cover": "./src/assets/cover/music-10-bg.jpg",
      "src": "./src/assets/musics/whip.mp3",
      "duration": "2:44"
  }
];

const cloneResult:Item[] = [...storedResult];

const audio = new Audio();

export function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [errorAudio, setErrorAudio] = useState(false);
  const [timeMusic, setTimeMusic] = useState('');
  const [percentage, setPercentage] = useState('');

  const musicClicked = findMusicData(audio.id) ? findMusicData(audio.id) : null;

  function countingTime() {
    const getDuration = Number(audio.duration.toFixed(0));
    const getSeconds = Number(audio.currentTime.toFixed(0));
    const division = (getSeconds / getDuration) * 100;
    let minutes = 0;
    let seconds = 0;

    setPercentage(((division / 100) * 100).toFixed(2))

    if(getSeconds > 59) {
      const getMinutes = Math.floor(getSeconds / 60);

      minutes = Number(getMinutes.toFixed(0))
      seconds = getSeconds - (60 * minutes)
      setTimeMusic(`${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`);
      setTimeout(countingTime, 1000);
      return
    }
    
    setTimeMusic(`00:${getSeconds > 9 ? getSeconds : `0${getSeconds}`}`);
    setTimeout(countingTime, 1000);
    
  }

  setTimeout(() => {
    audio.id && countingTime()
  }, 10)
    
  return (
    <div className="bg-zinc-900 w-full min-h-screen flex flex-col">
      <Header/>
      
      <main className='flex flex-col-reverse md:flex-row md:justify-center flex-1 overflow-y-hidden p-4 gap-3 md:w-3/4 md:mx-auto'>

        <div id='playlist' className='w-72 mx-auto sm:w-96 md:w-72 sm:mx-auto bg-gray-700 rounded-xl p-4 flex flex-col gap-3'>

          <div id='playlist__title' className='text-slate-100 font-semibold text-lg'>

            <h2>Playlist</h2>

          </div>

          <div id='playlist__music'>

            <ul className='flex flex-col gap-2'>
              {cloneResult.map((item) => <Music 
                  key={item.id}
                  id={item.id} 
                  cover={item.cover} 
                  name={item.name} 
                  duration={item.duration} 
                  audio={audio}
                  setIsMusicPlaying={setIsMusicPlaying}
                  isMusicPlaying={isMusicPlaying}
                  setErrorAudio={setErrorAudio}
                  errorAudio={errorAudio}
                />)}
            </ul>

          </div>

        </div>

        <div id='music-area' className='w-72 sm:w-96 mx-auto md:w-2/3 md:h-auto bg-gray-700 rounded-xl max-w-4xl overflow-hidden p-2'>
              {musicClicked 
                ? 
                  <MusicSelected 
                    cover={musicClicked.cover}
                    duration={musicClicked.duration}
                    name={musicClicked.name}
                    setIsMusicPlaying={setIsMusicPlaying}
                    MusicPlaying={isMusicPlaying}
                    audio={audio}
                    setErrorAudio={setErrorAudio}
                    errorAudio={errorAudio}
                    timeMusic={timeMusic}
                    percentage={percentage}
                    />
                : 
                  <NoMusic error={errorAudio}/>
              }
        </div>

      </main>

      <Footer />

    </div>

  )
}