interface NoMusicProps {
    error: boolean
}

export function NoMusic({error}:NoMusicProps) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            {!error 
                ?   
                    <p className="text-zinc-400 h-80 text-lg md:text-2xl flex flex-col text-center justify-center gap-3">
                        Por favor 
                        <span className="text-zinc-200 flex gap-1">
                            selecione uma música ♫
                        </span> para começar!
                    </p>
                : 
                    null
            }

        </div>
    )
}