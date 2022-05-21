


document.getElementById("play").addEventListener('click',function(){
    let x = Math.ceil(Math.random()*6);
    let y = Math.ceil(Math.random()*6);
    console.log(x);
    document.getElementById("p1").setAttribute('src',`${x}.png`);
    document.getElementById("p2").setAttribute('src',`${y}.png`);
    const elem = document.getElementById("heading");
    if(x>y){
        elem.textContent="Player 1 Won!!";
       
    }
    else if(x<y){
        elem.textContent="Player 2 Won!!"; 
      
    }
    else{
        elem.textContent="Draw!!";
    }
})