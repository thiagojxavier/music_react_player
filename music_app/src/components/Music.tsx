import { findMusicData } from "../functions/findMusicData"
import { pauseMusic } from "../functions/pauseMusic"
import { playMusic } from "../functions/playMusic"

interface MusicProps {
    id: string
    cover: string,
    name: string,
    duration: string,
    audio: HTMLAudioElement,
    setIsMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    isMusicPlaying: boolean,
    setErrorAudio: React.Dispatch<React.SetStateAction<boolean>>,
    errorAudio: boolean
}

export function Music({id, cover, name, duration, audio, setIsMusicPlaying, isMusicPlaying, setErrorAudio, errorAudio}:MusicProps)  {
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        let dataMusicSelected = findMusicData(event.currentTarget.id);

        if(isMusicPlaying) {
            setIsMusicPlaying(false);
        }

        if(!dataMusicSelected) return

        if(dataMusicSelected.id === audio.id) return

        if(audio.id) {
            pauseMusic(audio);
        }

        audio.src = dataMusicSelected.src;
        audio.title = dataMusicSelected.name;
        audio.id = dataMusicSelected.id;

        playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio});

        audio.addEventListener('ended', () => {
            if(!dataMusicSelected) return
            if(dataMusicSelected.id === '10') return

            const idNextMusic = Number(dataMusicSelected.id) + 1;
            const nextMusic = findMusicData(String(idNextMusic));

            dataMusicSelected = nextMusic

            setIsMusicPlaying(false);

            if(!nextMusic) return

            audio.src = nextMusic.src;
            audio.title = nextMusic.name;
            audio.id = nextMusic.id;

            playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio});
        })
    }

    return (
        <li className="text-slate-300 flex flex-col gap-1 border-b-2 border-b-slate-300">
            <button className="flex flex-wrap justify-between items-center py-4" onClick={handleClick} id={id}>
                <img className="w-8" src={cover} alt="Cover song"/>
                <span>{name}</span>
                <span>{duration}</span>
            </button>
        </li>
    )
}

