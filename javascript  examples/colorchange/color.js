
const getcolor = () => {
    const randomnumber = Math.floor(Math.random()*1677215);
    const randomcode="#"+randomnumber.toString(16);
    document.body.style.backgroundColor=randomcode;
    // console.log(randomnumber,randomcode);
    document.getElementById('color_code').innerText=randomcode;
    
    navigator.clipboard.writeText(randomcode);
}
//add listener call
document.getElementById('btn').addEventListener('click', getcolor);



// init call
getcolor();


