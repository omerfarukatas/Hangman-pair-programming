// Fetching the data from the API
fetch("https://random-word-api.herokuapp.com/word?number=1").then(response => response.json())
.then(data=> {
    functionality(data)
});
function FirstMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 150);
    ctx.lineTo(150, 150);
    ctx.stroke();
}
function SecondMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(10, 0);
    ctx.lineTo(10, 600);
    ctx.stroke();
}
function ThirdMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 5);
    ctx.lineTo(70, 5);
    ctx.stroke();
}
function FourthMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(60, 5);
    ctx.lineTo(60, 15);
    ctx.stroke();
}
function FifthMistake() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(60, 25, 10, 0, 2 * Math.PI,true);
    ctx.stroke();
}
function SixthMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(60, 36);
    ctx.lineTo(60, 70);
    ctx.stroke();
}
function SeventhMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(60, 46);
    ctx.lineTo(100, 50);
    ctx.stroke();
}
function EigthMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(60, 46);
    ctx.lineTo(20, 50);
    ctx.stroke();
}
function NinthMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(60, 70);
    ctx.lineTo(100, 100);
    ctx.stroke();
}
function TenthMistake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'black ';
    ctx.moveTo(60, 70);
    ctx.lineTo(20, 100);
    ctx.stroke();
}
function functionality(data){
    //console.log(data[0])
    const wordLength = data[0].length;
    let livesLeft=10;
    document.getElementsByClassName("livesLeft")[0].innerHTML ="Lives left: "+livesLeft;
    const ArrayOfFunctions=[FirstMistake,SecondMistake,ThirdMistake,FourthMistake,FifthMistake,
        SixthMistake,SeventhMistake,EigthMistake,NinthMistake,TenthMistake]
    let losecounter=0;
    let wincounter=0;
    //Creating blanks
    for (let i=0; i < wordLength; i++){
        const blankSpan = document.createElement("span");
        blankSpan.innerHTML = " "+"_";
        document.getElementsByClassName("blanks")[0].appendChild(blankSpan);
    }
    for(let i=0; i < 26; i++){
        const letterBtn = document.getElementsByClassName("letterBtn")[i]
        letterBtn.addEventListener("click", function(){
            let found = false;
            let location = -1;
            for(let i=0; i < wordLength; i++){
                if(letterBtn.value === data[0][i]){
                    found = true;
                    location = i;
                    document.getElementsByClassName("blanks")[0].children[location].innerHTML =" "+letterBtn.value;
                    letterBtn.disabled = true;
                    wincounter+=1;
                    if(wincounter==wordLength)
                    {
                    for(let i=0; i < 26; i++)
                    {
                        const letterBtn = document.getElementsByClassName("letterBtn")[i]
                        letterBtn.disabled=true
                    }
                        document.getElementsByClassName("livesLeft")[0].innerHTML ="YOU HAVE WIN";
                    }
                }
            }
            if (found === false) {
                livesLeft -= 1;
                letterBtn.disabled = true;
                document.getElementsByClassName("livesLeft")[0].innerHTML ="Lives left: "+livesLeft;
                ArrayOfFunctions[losecounter]()
                losecounter+=1;
                if(livesLeft==0)
                {
                    losecounter-=1;
                    ArrayOfFunctions[losecounter]()
                    for(let i=0; i < 26; i++)
                    {
                        const letterBtn = document.getElementsByClassName("letterBtn")[i]
                        letterBtn.disabled=true
                    }
                    document.getElementsByClassName("livesLeft")[0].innerHTML ="YOU HAVE LOST";
                }
            }
            
        })
    }
    const playAgainbtn=document.querySelector(".again");
    playAgainbtn.addEventListener("click",function(){
        location.reload();
    })
}