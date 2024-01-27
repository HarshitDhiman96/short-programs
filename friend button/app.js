let friend = document.getElementById("add");
let heart = document.getElementById("heartimg");
let img = document.getElementById("imagetag");
let heading5 = document.querySelector("h5");

let flag = 0
friend.addEventListener("click", function () {
    if (flag == 0) {
        heading5.innerHTML = "FRIENDS"
        heading5.style.color = "blueviolet"
        friend.innerHTML="Remove friend"
        flag = 1
    }
    else {
        heading5.innerHTML = "Stranger"
        heading5.style.color = "red"
        friend.innerHTML="Add friend"
        flag = 0
    }
})

heart.addEventListener("click", function(){
    gsap.to("#heartimg",{
        scale:0,
        duration:0.25,
        yoyo:true,
        repeat:1
    })
})
imagetag.addEventListener("dblclick", function(){
    gsap.to("#heartimg",{
        scale:0,
        duration:0.25,
        yoyo:true,
        repeat:1
    })
})


