import { CirclePause, CirclePlay, FastForward, Rewind } from "lucide-react";
import { pauseMusic } from "../functions/pauseMusic";
import { playMusic } from "../functions/playMusic";
import { findMusicData } from "../functions/findMusicData";

interface MusicSelectedProps {
    cover: string,
    duration: string,
    name: string,
    MusicPlaying: boolean,
    audio: HTMLAudioElement,
    setIsMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorAudio: React.Dispatch<React.SetStateAction<boolean>>,
    errorAudio: boolean,
    timeMusic: string,
    percentage: string
}

export function MusicSelected({cover, duration, name, MusicPlaying, audio, setIsMusicPlaying, setErrorAudio, errorAudio, timeMusic, percentage}:MusicSelectedProps) {
    function handleButtonPause() {
        pauseMusic(audio);
        setIsMusicPlaying(false);
    }

    function handleButtonResume() {
        audio.currentTime
        playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio});
        setIsMusicPlaying(true);
    }

    function handleButtonForward() {
        const currentMusic = Number(audio.id) + 1 > 10 ? 1 : Number(audio.id) + 1;
        const nextMusic = findMusicData(String(currentMusic));

        setIsMusicPlaying(false);

        if(!nextMusic) return

        audio.src = nextMusic.src;
        audio.title = nextMusic.name;
        audio.id = nextMusic.id;

        playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio});
    }

    function handleButtonRewind() {
        if (audio.currentTime > 5) {
            audio.currentTime = 0
            return
        }

        const currentMusic = Number(audio.id) - 1 < 1 ? 1 : Number(audio.id) - 1;
        const previousMusic = findMusicData(String(currentMusic));

        setIsMusicPlaying(false);

        if(!previousMusic) return

        audio.src = previousMusic.src;
        audio.title = previousMusic.name;
        audio.id = previousMusic.id;

        playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio});
    }

    return (
        <div className="w-full h-full relative">
            <div>
                <p className="absolute top-0 p-4 font-extrabold text-slate-100 text-shadow-md shadow-slate-300 text-2xl">{name}</p>
            </div>
            <img className="w-full h-full object-cover" src={cover} alt={name} />
            <div className="absolute bottom-0 px-0 pb-2 pt-6 md:p-8 bg-gray-700 w-full flex items-center justify-around">
                <div className="absolute w-full bg-slate-100 h-3 sm:h-2 top-0">
                    <div style={{width: `${percentage}%`}} className="h-full bg-blue-700"></div>
                </div>
                <div>
                    <p className="font-bold text-zinc-300">{timeMusic}</p>
                </div>
                <div className="flex justify-center gap-4 sm:gap-1">
                    <Rewind size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300" onClick={handleButtonRewind}/>
                    { MusicPlaying 
                        ? 
                            <CirclePause size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300" onClick={handleButtonPause}/>
                        : 
                            <CirclePlay size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300" onClick={handleButtonResume}/>
                    }
                    
                    <FastForward size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300" onClick={handleButtonForward}/>
                </div>
                <div>
                    <p className="font-bold text-zinc-300">{duration}</p>
                </div>
            </div>
        </div>
    )
}