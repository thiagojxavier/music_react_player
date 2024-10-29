import { Dispatch, SetStateAction } from "react"
import { Item } from "../App"
import { findMusicData } from "../functions/FindMusicData"

interface MusicProps {
    id: string
    cover: string,
    name: string,
    duration: string
    musicClickedFunc: Dispatch<SetStateAction<Item | undefined>>
}

export function Music({id, cover, name, duration, musicClickedFunc}:MusicProps)  {
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const dataMusicSelected = findMusicData(event.currentTarget.id)

        musicClickedFunc(dataMusicSelected);
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

