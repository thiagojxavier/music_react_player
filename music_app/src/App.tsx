import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Music } from './components/Music'
import { RequestAPI } from './API'
import { NoMusic } from './components/NoMusic'
import { MusicSelected } from './components/MusicSelected'
import { useState } from 'react'

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
  const [musicClicked, setMusicClicked] = useState<Item | undefined>();
  const [IsMusicPlaying, setIsMusicPlaying] = useState(false);
  // Trabalhar com ao clicar no pause mude para o play e no play pro pause

  musicClicked ? playMusic() : null;

  function playMusic() {
    if(!musicClicked) return

    if(musicClicked.src){
      if(!audio.paused) {
        audio.pause();
      }

      audio.src = musicClicked.src;
    }

    if(!musicClicked.src) {
      audio.src = musicClicked.src;
    }     

    const executeMusic = async(audio: HTMLAudioElement) => {
      try {
        await audio.play();
      } catch(e) {
        throw Error(`${e}`)
      }
    }

    audio.addEventListener('canplaythrough', () => {
      executeMusic(audio);
    });
    
  }
    
  return (
    <div className="bg-zinc-900 w-full min-h-screen flex flex-col">
      <Header/>
      
      <main className='flex flex-wrap flex-1 overflow-y-hidden p-4 gap-3 justify-center'>

        <div id='playlist' className='w-1/5 bg-gray-700 rounded-xl max-w-lg p-4 flex flex-col gap-3'>

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
                musicClickedFunc={setMusicClicked}
                />)}
            </ul>

          </div>

        </div>

        <div id='music-area' className='w-3/4 bg-gray-700 rounded-xl max-w-4xl overflow-hidden'>
              {musicClicked 
                ? 
                  <MusicSelected cover={musicClicked.cover} duration={musicClicked.duration} name={musicClicked.name} src={musicClicked.src} />
                : 
                  <NoMusic/>
              }
        </div>

      </main>

      <Footer />

    </div>

  )
}