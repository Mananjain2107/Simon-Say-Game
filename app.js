let colors=["red","blue","green","yellow"];
let started=false;
let level=0;
let h4=document.querySelector("h4");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    level++;
    h4.innerHTML=`level ${level}`;

    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=colors[randomindex];
    let randombtn=document.querySelector(`.${randomcolor}`);
    console.log(randomindex);
    console.log(randomcolor);
    console.log(randombtn);
    btnFlash(randombtn);

}