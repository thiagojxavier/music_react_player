import { RequestAPI } from "../API";
import { Item } from "../App";

const storedResult = await RequestAPI();

const cloneResult:Item[] = [...storedResult];

export function findMusicData(id: string) {
    const dataMusicSelected = cloneResult.find((musicData) => musicData.id === id)

    return dataMusicSelected
}