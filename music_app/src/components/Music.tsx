export function Music(props)  {
    return (
        <li className="text-slate-300 flex flex-col gap-1">
            <button className="flex flex-wrap justify-between items-center">
                <img className="w-1/5" src={props.cover} alt="Cover song"/>
                <span>{props.name}</span>
                <span>{props.duration}</span>
            </button>
            <div className="h-px w-full bg-slate-300"></div>
        </li>
    )
}

