let Tabl = document.querySelectorAll(".drum")

//  dar in khat ba in code botton h ra dane be dane migirim
for (let i=0; i< Tabl.length; i++){
// addEventListener kare onclick dar HTML mikone va az tekrare code zadan jolo giri mikone
// ()=>{}   =   function() {}
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var clickButton = this.innerHTML;
        sound(clickButton)
        pressed(clickButton)
    })

}
document.addEventListener("keypress",function(event){
    sound(event.key)
    pressed(event.key)
})
function sound(key){
    switch(key){
        case "w":
            let sound1= new Audio("./sounds/tom-1.mp3")
            sound1.play() 
        break;
        case "a":
            let sound2= new Audio("./sounds/tom-2.mp3")
            sound2.play() 
        break;
        case "s":
            let sound3= new Audio("./sounds/tom-3.mp3")
            sound3.play() 
        break;
        case "d":
            let sound4= new Audio("./sounds/tom-4.mp3")
            sound4.play() 
        break;
        case "j":
            let sound5= new Audio("./sounds/snare.mp3")
            sound5.play() 
        break;
        case "k":
            let sound6= new Audio("./sounds/crash.mp3")
            sound6.play() 
        break;
        case "l":
            let sound7= new Audio("./sounds/kick-bass.mp3")
            sound7.play() 
        break;
    }
    
}
function pressed (key){
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")

    },100)
}