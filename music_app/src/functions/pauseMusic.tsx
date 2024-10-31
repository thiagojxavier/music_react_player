export function pauseMusic(audio: HTMLAudioElement) {
    if(!audio.paused) {
        audio.pause();
        // setIsMusicPlaying(false);
    }
}