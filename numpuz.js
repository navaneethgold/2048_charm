const gi_i=document.querySelectorAll(".box")
const gi=[
    [gi_i[0],gi_i[1],gi_i[2],gi_i[3]],
    [gi_i[4],gi_i[5],gi_i[6],gi_i[7]],
    [gi_i[8],gi_i[9],gi_i[10],gi_i[11]],
    [gi_i[12],gi_i[13],gi_i[14],gi_i[15]]
]
let score=0
let score_board=document.querySelector(".board")
const ua=document.querySelector(".ua")
const da=document.querySelector(".da")
const la=document.querySelector(".la")
const ra=document.querySelector(".ra")
const start=document.querySelector(".start")
var audio=new Audio('cardboard_sound.mp3')
var start_game=new Audio('start game sound.wav')
let count=[0,0,0,0]
let count2=[0,0,0,0]
let count3=[0,0,0,0]
let count4=[0,0,0,0]
//functions for moving up down left and right
function moving_up(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(gi[i][j].innerText !=="" && i!==0 && gi[i][j].innerText===gi[i-1][j].innerText && count[j]==0){
                
                gi[i-1][j].innerText=parseInt(gi[i][j].innerText)*2
                score+=parseInt(gi[i][j].innerText)*2
                score_board.innerText=score
                audio.play()
                colors(i-1,j,parseInt(gi[i][j].innerText)*2)
                gi[i][j].style.backgroundColor="rgb(186, 133, 71)"
                gi[i][j].innerText=""
                count[j]++
                
            }
            if(gi[i][j].innerText !=="" && i!==0 && gi[i-1][j].innerText!="" && gi[i][j].innerText!==gi[i-1][j].innerText){
                //..
            }
            if(gi[i][j].innerText !=="" && i!==0 && gi[i-1][j].innerText===""){
                // gi[i-1][j].innerText=gi[i][j].innerText
                // gi[i][j].innerText="none"
                for(let k=i-1 ;k>=0;k--){
                    if(gi[k][j].innerText===""){
                        gi[k][j].innerText=gi[k+1][j].innerText
                        audio.play()
                        colors(k,j,parseInt(gi[k+1][j].innerText))
                        gi[k+1][j].style.backgroundColor="rgb(186, 133, 71)"
                        gi[k+1][j].innerText=""
                        
                    }
                    if(gi[k][j].innerText===gi[k+1][j].innerText && gi[k][j].innerText!=="" && count[j]==0){
                        gi[k][j].innerText=parseInt(gi[k+1][j].innerText)*2
                        colors(k,j,parseInt(gi[k+1][j].innerText)*2)
                        score+=parseInt(gi[k+1][j].innerText)*2
                        score_board.innerText=score
                        audio.play()
                        gi[k+1][j].style.backgroundColor="rgb(186, 133, 71)"
                        gi[k+1][j].innerText=""
                        count[j]++
                        
                    }
                }
                // count=0
            }

        }
    }
    count=[0,0,0,0]
}




function moving_down(count2){
    for(let i=3;i>=0;i--){
        for(let j=3;j>=0;j--){
            if(gi[i][j].innerText !=="" && i!==3 && gi[i][j].innerText===gi[i+1][j].innerText && count2[j]==0){
                audio.play()
                gi[i+1][j].innerText=parseInt(gi[i][j].innerText)*2
                colors(i+1,j,parseInt(gi[i][j].innerText)*2)
                score+=parseInt(gi[i][j].innerText)*2
                score_board.innerText=score
                // console.log(j)
                gi[i][j].innerText=""
                gi[i][j].style.backgroundColor="rgb(186, 133, 71)"
                count2[j]++
                
            }
            if(gi[i][j].innerText !=="" && i!==3 && gi[i+1][j].innerText!="" && gi[i][j].innerText!==gi[i+1][j].innerText){
                //..
            }
            if(gi[i][j].innerText !=="" && i!==3 && gi[i+1][j].innerText===""){
                // gi[i-1][j].innerText=gi[i][j].innerText
                // gi[i][j].innerText="none"
                for(let k=i+1 ;k<=3;k++){
                    if(gi[k][j].innerText===""){
                        gi[k][j].innerText=gi[k-1][j].innerText
                        audio.play()
                        colors(k,j,parseInt(gi[k-1][j].innerText))
                        gi[k-1][j].innerText=""
                        
                        gi[k-1][j].style.backgroundColor="rgb(186, 133, 71)"
                    }
                    if(gi[k][j].innerText===gi[k-1][j].innerText && gi[k][j].innerText!=="" && count2[j]==0){
                        gi[k][j].innerText=parseInt(gi[k-1][j].innerText)*2
                        colors(k,j,parseInt(gi[k-1][j].innerText)*2)
                        score+=parseInt(gi[k-1][j].innerText)*2
                        score_board.innerText=score
                        gi[k-1][j].innerText=""
                        audio.play()
                        gi[k-1][j].style.backgroundColor="rgb(186, 133, 71)"
                        count2[j]++
                    }
                    if(k==3){
                        // moving_down(count2)
                    }
                }
                // count=0
            }

        }
    }
    // moving_down(count2)
    // count2=[0,0,0,0]
}

function moving_left(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(gi[i][j].innerText !=="" && j!==0 && gi[i][j].innerText===gi[i][j-1].innerText && count3[i]==0){
                
                gi[i][j-1].innerText=parseInt(gi[i][j].innerText)*2
                score+=parseInt(gi[i][j].innerText)*2
                score_board.style.innerText=score
                colors(i,j-1,parseInt(gi[i][j].innerText)*2)
                gi[i][j].style.backgroundColor="rgb(186, 133, 71)"
                audio.play()
                gi[i][j].innerText=""
                count3[i]++
                
            }
            if(gi[i][j].innerText !=="" && j!==0 && gi[i][j-1].innerText!="" && gi[i][j].innerText!==gi[i][j-1].innerText){
                //..
            }
            if(gi[i][j].innerText !=="" && j!==0 && gi[i][j-1].innerText===""){
                // gi[i-1][j].innerText=gi[i][j].innerText
                // gi[i][j].innerText="none"
                for(let k=j-1 ;k>=0;k--){
                    if(gi[i][k].innerText===""){
                        colors(i,k,parseInt(gi[i][k+1].innerText))
                        audio.play()
                        gi[i][k+1].style.backgroundColor="rgb(186, 133, 71)"
                        gi[i][k].innerText=gi[i][k+1].innerText
                        gi[i][k+1].innerText=""
                        
                    }
                    if(gi[i][k].innerText===gi[i][k+1].innerText && gi[i][k].innerText!=="" && count3[i]==0){
                        gi[i][k].innerText=parseInt(gi[i][k+1].innerText)*2
                        colors(i,k,parseInt(gi[i][k+1].innerText)*2)
                        score+=parseInt(gi[i][k+1].innerText)*2
                        score_board.innerText=score
                        gi[i][k+1].style.backgroundColor="rgb(186, 133, 71)"
                        audio.play()
                        gi[i][k+1].innerText=""
                        count3[i]++
                        
                    }
                }
                // count=0
            }

        }
    }
    count3=[0,0,0,0]
}


function moving_right(count4){
    // console.log(count4[3])
    for(let i=3;i>=0;i--){
        for(let j=3;j>=0;j--){
            if(gi[i][j].innerText !=="" && j!==3 && gi[i][j].innerText===gi[i][j+1].innerText && count4[i]===0){
                
                gi[i][j+1].innerText=parseInt(gi[i][j].innerText)*2
                score+=parseInt(gi[i][j].innerText)*2
                score_board.style.innerText=score
                colors(i,j+1,parseInt(gi[i][j].innerText)*2)
                gi[i][j].innerText=""
                audio.play()
                gi[i][j].style.backgroundColor="rgb(186, 133, 71)"
                // console.log(count4[3])
                count4[i]++
            }
            if(gi[i][j].innerText !=="" && j!==3 && gi[i][j+1].innerText!="" && gi[i][j].innerText!==gi[i][j+1].innerText){
                //..
            }
            if(gi[i][j].innerText !=="" && j!==3 && gi[i][j+1].innerText===""){
                // gi[i-1][j].innerText=gi[i][j].innerText
                // gi[i][j].innerText="none"
                for(let k=j+1 ;k<=3;k++){
                    if(gi[i][k].innerText===""){
                        gi[i][k].innerText=gi[i][k-1].innerText
                        colors(i,k,parseInt(gi[i][k].innerText))
                        audio.play()
                        gi[i][k-1].innerText=""
                        gi[i][k-1].style.backgroundColor="rgb(186, 133, 71)"
                    }
                    if(gi[i][k].innerText===gi[i][k-1].innerText && gi[i][k].innerText!=="" && count4[i]===0){
                        gi[i][k].innerText=parseInt(gi[i][k-1].innerText)*2
                        score+=parseInt(gi[i][k-1].innerText)*2
                        score_board.innerText=score
                        colors(i,k,parseInt(gi[i][k-1].innerText)*2)
                        gi[i][k-1].innerText=""
                        gi[i][k-1].style.backgroundColor="rgb(186, 133, 71)"
                        audio.play()
                        count4[i]++
                        console.log(count4[3])
                    }
                    // if(k==3){
                    //     moving_right(count4)
                    // }
                }
                // count=0
            }

        }
    }
    // moving_right(count4)
    // count4=[0,0,0,0]
}


function random_box(){
    console.log("came")
    let a=Math.floor(Math.random()*4)
    let b=Math.floor(Math.random()*4)
    console.log(a)
    console.log(b)
    if(gi[a][b] instanceof Element && gi[a][b].innerText === ""){
        gi[a][b].innerText="2"
        gi[a][b].style.backgroundColor="rgb(171, 144, 97)"
    }
    else{
        random_box()
    }
}


function colors(a, b, c) {
    switch (c) {
        case 2:
            gi[a][b].style.backgroundColor = "rgb(171, 144, 97)";
            break;
        case 4:
            gi[a][b].style.backgroundColor = "rgb(191, 150, 78)";
            break;
        case 8:
            gi[a][b].style.backgroundColor = "rgb(117, 87, 34)";
            break;
        case 16:
            gi[a][b].style.backgroundColor = "rgb(209, 107, 44)";
            break;
        case 32:
            gi[a][b].style.backgroundColor = "rgb(209, 182, 44)";
            break;
        case 64:
            gi[a][b].style.backgroundColor = "rgb(162, 209, 44)";
            break;
        case 128:
            gi[a][b].style.backgroundColor = "rgb(88, 209, 44)";
            break;
        case 256:
            gi[a][b].style.backgroundColor = "rgb(28, 212, 175)";
            break;
        // default:
        //     gi[a][b].style.backgroundColor = ""; // Set default background color
        //     break;
    }
}
















//event listners
start.addEventListener("click",()=>{
    random_box()
    random_box()
    start_game.play()
})  
ua.addEventListener("click",()=>{
    moving_up()
    random_box()
})
da.addEventListener("click",()=>{
    count2=[0,0,0,0]
    moving_down(count2)
    random_box()
})
la.addEventListener("click",()=>{
    moving_left()
    random_box()
})
ra.addEventListener("click",()=>{
    count4=[0,0,0,0]
    moving_right(count4)
    random_box()
})