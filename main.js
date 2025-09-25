const date = '20220201'; 


const BASE_URL = 'https://bank.gov.ua';
const API_PATH = '/NBUStatService/v1/statdirectory/res';


function constructURL() {
    
    const url = new URL(API_PATH, BASE_URL);
    
    
    url.searchParams.append('date', date);
    url.searchParams.append('json', ''); 
    
    return url.toString();
}


const constructedURL = constructURL();
console.log(constructedURL);