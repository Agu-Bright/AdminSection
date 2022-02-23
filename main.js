//This code add hovered in selected list items
var list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered')
}


list.forEach((item) => item.addEventListener('mouseover', activeLink));




//This is the code for the menue toggle
var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');
var main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active1');
}


//Toggling between different main colors
const dice = document.getElementById('dice');
var colors =['#789180', '#24e461', '#292e2b', '#2368cf','#d31fa6','#db205e' ];
var r = document.querySelector(':root');
length = colors.length;





function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}



dice.addEventListener('click', function(){
    //Get random number between 0 - 4;

    const randomNumber = getRandomNumber();
    
    
    var rs = getComputedStyle(r);
    

    r.style.setProperty('--blue', colors[randomNumber]);
    
})




