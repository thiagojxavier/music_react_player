import { Item } from "../App";

const storedResult = [
    {
        "id": "1",
        "name": "Battle of the dragons",
        "cover": "./src/assets/cover/music-1-bg.jpg",
        "src": "./src/assets/musics/battle-of-the-dragons.mp3",
        "duration": "3:57"
    },
    {
        "id": "2",
        "name": "Embrace",
        "cover": "./src/assets/cover/music-2-bg.jpg",
        "src": "./src/assets/musics/embrace.mp3",
        "duration": "2:59"
    },
    {
        "id": "3",
        "name": "Unlock-me-amapiano",
        "cover": "./src/assets/cover/music-3-bg.jpg",
        "src": "./src/assets/musics/unlock-me-amapiano.mp3",
        "duration": "3:05"
    },
    {
        "id": "4",
        "name": "Forest lullaby",
        "cover": "./src/assets/cover/music-4-bg.jpg",
        "src": "./src/assets/musics/forest-lullaby.mp3",
        "duration": "2:18"
    },
    {
        "id": "5",
        "name": "Into the night",
        "cover": "./src/assets/cover/music-5-bg.jpg",
        "src": "./src/assets/musics/into-the-night.mp3",
        "duration": "2:20"
    },
    {
        "id": "6",
        "name": "Just relax",
        "cover": "./src/assets/cover/music-6-bg.jpg",
        "src": "./src/assets/musics/just-relax.mp3",
        "duration": "2:20"
    },
    {
        "id": "7",
        "name": "Sedative",
        "cover": "./src/assets/cover/music-7-bg.jpg",
        "src": "./src/assets/musics/sedative.mp3",
        "duration": "3:01"
    },
    {
        "id": "8",
        "name": "Town",
        "cover": "./src/assets/cover/music-8-bg.jpg",
        "src": "./src/assets/musics/town.mp3",
        "duration": "3:02"
    },
    {
        "id": "9",
        "name": "Tvari Tokyo cafe",
        "cover": "./src/assets/cover/music-9-bg.jpg",
        "src": "./src/assets/musics/tvari-tokyo-cafe.mp3",
        "duration": "2:33"
    },
    {
        "id": "10",
        "name": "Whip",
        "cover": "./src/assets/cover/music-10-bg.jpg",
        "src": "./src/assets/musics/whip.mp3",
        "duration": "2:44"
    }
  ];

const cloneResult:Item[] = [...storedResult];

export function findMusicData(id: string) {
    const dataMusicSelected = cloneResult.find((musicData) => musicData.id === id)

    return dataMusicSelected
}