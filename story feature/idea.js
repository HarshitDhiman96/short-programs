let arr = [
    {
        dp: "https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMG1vZGVsfGVufDB8fDB8fHww", story: "https://plus.unsplash.com/premium_photo-1705883267788-4040699634c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1682124744308-a1df156dbe1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1671920090611-9a40303b52cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1706126218054-a9c83cad2d03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1706108439810-f887f16a22bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1705750164473-c0efa38c6005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1706026427244-3b3df84382d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1703159424431-a02e4890a8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
    },
]

let stories=document.querySelector(".stories")
let clutter =""
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
    <img  id="${idx}"src="${elem.dp}" alt="">
</div>`
})
stories.innerHTML=clutter

stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`


    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },2000)
})