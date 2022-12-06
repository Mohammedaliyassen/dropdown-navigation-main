const kid1 = document.getElementById('kid1');
const kid2 = document.getElementById('kid2');
const arrow = document.getElementById('down');
const arrow1 = document.getElementById('down1');
const burg = document.getElementById('burg');
const burgList = document.getElementById('burgList');
document.getElementById('fea').addEventListener('click' , ()=>{
    kid1.classList.toggle('coo')? arrow.style.cssText="transform: rotate(180deg);" :arrow.style.cssText="transform: rotate(0deg);"
} )

document.getElementById('comp').addEventListener('click' , ()=>{
    kid2.classList.toggle('coo')? arrow1.style.cssText="transform: rotate(180deg);" :arrow1.style.cssText="transform: rotate(0deg);"
} )

document.getElementById('log').addEventListener('mouseover', ()=>{
    document.getElementById('log').style.cssText=( 'border-Bottom: 3px solid black;border-radius: 0px; transition:0.1s; color: #000;')
})
document.getElementById('log').addEventListener('mouseleave', ()=>{
    document.getElementById('log').style.cssText=( 'border-Bottom: 0px solid black;border-radius: 0px; transition:0.1s;color: #3b3b3ba2;')
})
document.getElementById('reg').addEventListener('mouseover', ()=>{
    document.getElementById('reg').style.cssText=( 'border: 0px solid black; transition:0.1s;color: #000;')
})
document.getElementById('reg').addEventListener('mouseleave', ()=>{
    document.getElementById('reg').style.cssText=( 'border: 3px solid black; transition:0.1s;color: #3b3b3ba2;')
})
 
burg.addEventListener('click',()=>{
    burgList.style.cssText = 'display: inline-block; transform: scale(1); transform-origin: top right;'   
    burg.style.display='none';
    document.getElementById('bob').style.display='inline';
    document.getElementById('closeburg').style.display='inline';

})
document.getElementById('closeburg').addEventListener('click',()=>{
    burgList.style.cssText = 'display: inline-block; transform: scale(0); transform-origin: top right;'  
    burg.style.display='inline';
    document.getElementById('bob').style.display='none';
    document.getElementById('closeburg').style.display='none';
})
function closeIt(){
    burgList.style.cssText = 'display: inline-block; transform: scale(0); transform-origin: top right;'  
    document.getElementById('bob').style.display='none';
    document.getElementById('closeburg').style.display='none';
    burg.style.display='inline';
}


