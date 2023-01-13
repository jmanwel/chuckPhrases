const url_categories = 'https://api.chucknorris.io/jokes/categories'
const row = document.querySelector('.row');
const template = document.querySelector('template');
const answer = document.querySelector('#answer');

const select = document.querySelector("#categories");    

async function getDataFromUrl(u){
    try {
        const response = await fetch (u);
        const data = await response.json();
        return data;
        } catch (error) {
        console.log('Something wrong => ' + error.message); // Error de prueba
    }    
}

getDataFromUrl(url_categories).then((value)=>{
    for (let i = 0; i < value.length; i++){
        let option = document.createElement("option");
        option.text = value[i];
        select.add(option);
    }
});

select.addEventListener('change', (e) => {
    let v = select.options[select.selectedIndex].text;
    const url_by_category = 'https://api.chucknorris.io/jokes/random?category=' + v;    
    getDataFromUrl(url_by_category).then((value)=>{
        answer.textContent = value.value;
        console.log(value.value);
    });
    e.preventDefault();
});

{/* <a href="https://www.clipartmax.com/middle/m2i8m2G6A0m2K9A0_chuck-norris-by-normantweeter-clipartlook-chuck-norris-cartoon-face/" target="_blank">Chuck Norris By Normantweeter Clipartlook - Chuck Norris Cartoon Face @clipartmax.com</a> */}
{/* <a href="https://www.clipartmax.com/middle/m2H7i8Z5d3K9d3b1_chuck-norris-chuck-norris-birthday-card/" target="_blank">Chuck Norris - Chuck Norris Birthday Card @clipartmax.com</a> */}
