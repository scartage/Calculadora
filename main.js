const display = document.getElementById("showScreen");
const numberButtons = document.getElementsByClassName(number);

for (let index = 0; index < numberButtons.length; index++) {
    numberButtons[i].addEventListener('click', function(event){
    const value = event.target.innerText;
    console.log(value);
    });
}