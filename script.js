const btn = document.querySelector(".b");
const code = document.getElementById("color-code");

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0;i<6;i++){
        color  +=  letters[Math.floor(Math.random()*16)];
    }
    return color;
}

btn.addEventListener('click',function (){
    const newColor  = getRandomColor();
    document.body.style.backgroundColor = newColor;
    code.textContent = `Background Color: ${newColor}`;
})