let initialval=`M 10 100 Q 200 100 990 100`


let finalval=`M 10 100 Q 200 100 990 100`


 let curve=document.querySelector(".curve")

 curve.addEventListener("mousemove",function(dets){
   path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`

   gsap.to("svg path",{
    attr:{d : path},
    duration:0.3,
    ease:"power3.out"
   })
 })

 curve.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d :finalval},
        ease:"elastic.out(1.2,0.1)"
    })
 })
