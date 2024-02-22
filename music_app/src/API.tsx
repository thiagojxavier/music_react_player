export async function RequestAPI() {
    const response = await fetch("./src/json/api.json");
    const responseJSON = await response.json();
    return responseJSON
}