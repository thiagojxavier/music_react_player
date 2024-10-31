interface playMusicProps {
    audio: HTMLAudioElement,
    setIsMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorAudio: React.Dispatch<React.SetStateAction<boolean>>,
    errorAudio: boolean
}

export async function playMusic({audio, setIsMusicPlaying, setErrorAudio, errorAudio}:playMusicProps) {
    await audio.play().then(() => {
        if(errorAudio) {
            setErrorAudio(false);
        }
        
        setIsMusicPlaying(true);
    }).catch(() => {
        setErrorAudio(true);
    })
}