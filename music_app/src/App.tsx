import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Music } from './components/Music'
import { RequestAPI } from './API'
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

const storedResult = await RequestAPI();

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
      
      <main className='flex sm:flex-col-reverse flex-1 overflow-y-hidden p-4 gap-3 justify-center'>

        <div id='playlist' className='w-72 sm:mx-auto bg-gray-700 rounded-xl p-4 flex flex-col gap-3'>

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

        <div id='music-area' className='w-2/3 sm:w-72 sm:mx-auto bg-gray-700 rounded-xl max-w-4xl overflow-hidden p-2'>
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