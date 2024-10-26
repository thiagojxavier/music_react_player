export function NoMusic() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-zinc-400 text-2xl flex gap-3">
                Por favor 
                <span className="text-zinc-200 flex gap-1">
                    selecione uma música ♫
                </span> para começar!
            </p>
            <span></span>
        </div>
    )
}