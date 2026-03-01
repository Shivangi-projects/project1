let gameSeq=[];
let userSeq=[];
let colors=["pink","lightblue","yellow","navy"];
let started=false;
let h4=document.querySelector('h4');
let level=0;
let highest=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
            started=true;
        levelUp();
    }
    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`level ${level}`;
    let ranindex=(Math.floor(Math.random()*4));
    let randcolor=colors[ranindex]; 
    gameSeq.push(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`)
    btnFlash(randbtn);
}
function chkans(){
    let idx=userSeq.length-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h4.innerText=`Game over! your score is ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        let h2=document.querySelector('h2');
        if(level>highest){
            highest=level;
        }
        h2.innerText=`your highest score is ${highest}`;
        h4.prepend(h2);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.classList[0];
    userSeq.push(userColor);
    chkans();
}
let allbtns=document.querySelectorAll(".main div");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}