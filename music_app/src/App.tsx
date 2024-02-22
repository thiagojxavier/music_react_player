import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Music } from './components/Music'
import { RequestAPI } from './API'

interface Item {
  id: string,
  name: string,
  cover: string,
  src: string,
  duration: string
}

const storedResult = await RequestAPI();

const cloneResult:Item[] = [...storedResult];

export function App() {
  return (
    <div className="bg-zinc-900 h-svh w-full flex flex-col">
      <Header/>
      
      <main className='flex flex-wrap flex-1 overflow-y-hidden p-4 gap-3 justify-center'>

        <div id='playlist' className='w-1/5 h-5/6 bg-gray-700 rounded-xl max-w-lg p-4 flex flex-col gap-3'>

          <div id='playlist__title' className='text-slate-100 font-semibold text-lg'>

            <h2>Playlist</h2>

          </div>

          <div id='playlist__music'>

            <ul className='flex flex-col gap-2'>
              {cloneResult.map((item) => <Music 
                key={item.id} 
                cover={item.cover} 
                name={item.name} 
                duration={item.duration} />)}
            </ul>

          </div>

        </div>

        <div id='music-area' className='w-3/4 bg-slate-700 rounded-xl max-w-4xl'>

        </div>

      </main>

      <Footer />

    </div>

  )
}