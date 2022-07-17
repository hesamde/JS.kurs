let dicee = [Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1)]
let imageName = ["./images/dice"+dicee[0]+".png","./images/dice"+dicee[1]+".png"]
document.getElementsByClassName("img1")[0].setAttribute("src",imageName[0])
document.getElementsByClassName("img2")[0].setAttribute("src",imageName[1])

if (dicee[0] < dicee[1]) {
    document.querySelector("h1").innerHTML="Player 2 win"   
}else if(dicee[0] > dicee[1]) {
    document.querySelector("h1").innerHTML="Player 1 win"
}else{
    document.querySelector("h1").innerHTML="equal"
}





















console.log(dicee)