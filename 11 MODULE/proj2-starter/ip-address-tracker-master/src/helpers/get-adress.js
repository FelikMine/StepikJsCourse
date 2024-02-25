export async function getAddress(ip='8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v2/country?apiKey=at_zTGiHZXMCZb9UXwH2iPIOI99KzlDz&ipAddress=${ip}`);
        
    return await response.json();

}