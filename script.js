


document.getElementById("play").addEventListener('click',function(){
    let x = Math.ceil(Math.random()*6);
    let y = Math.ceil(Math.random()*6);
    document.getElementById("p1").setAttribute('src',`${x}.png`);
    document.getElementById("p2").setAttribute('src',`${y}.png`);
    const elem = document.getElementById("heading");
    if(x>y){
        setTimeout(function(){
            elem.textContent="Player 1 Won!!";
        },100);
        
       
    }
    else if(x<y){
        setTimeout(function(){
            elem.textContent="Player 2 Won!!";
        },1000);
      
    }
    else{
        setTimeout(function(){
            elem.textContent="Draw!!";
        },1000);
    }
})
