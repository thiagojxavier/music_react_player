import { CirclePause, CirclePlay, FastForward, Rewind } from "lucide-react";


interface MusicSelectedProps {
    cover: string,
    duration: string,
    name: string,
    src: string,
}

export function MusicSelected({cover, duration, name}:MusicSelectedProps) {


    return (
        <div className="w-full h-full relative">
            <div>
                <p className="absolute top-0 p-4 font-extrabold text-slate-100 text-shadow-md shadow-slate-300 text-2xl">{name}</p>
            </div>
            <img className="w-full h-full object-cover" src={cover} alt={name} />
            <div className="absolute bottom-0 p-8 bg-gray-700 w-full flex items-center justify-around">
                <div className="absolute w-full bg-slate-100 h-3 top-0">
                    <div className="w-[20%] h-full bg-blue-700"></div>
                </div>
                <div>
                    <p className="font-bold text-zinc-300">0:00</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Rewind size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300"/>
                    <CirclePlay size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300"/>
                    <CirclePause size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300"/>
                    <FastForward size={50} className="cursor-pointer text-zinc-200 hover:text-zinc-950 transition-colors duration-300"/>
                </div>
                <div>
                    <p className="font-bold text-zinc-300">{duration}</p>
                </div>
            </div>
        </div>
    )
}