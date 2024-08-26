gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();


tl.to(".wrapper",5,{x:-window.innerWidth})
// .from(".section2 h1",4,{opacity:0, scale:3})


tl.to(".wrapper",5,{x:-window.innerWidth*2})
// .from(".section3 h1",4,{opacity:0, scale:3, skewX:50})


tl.to(".wrapper",5,{x:-window.innerWidth*3})
// .from(".section4 h1",4,{opacity:0, scale:3, skewX:-50})


ScrollTrigger.create({
	animation:tl,
	trigger:".wrapper",
	start:"center center",
	end:"+=1000",
	scrub:true,
	pin:true
})




// Smooth
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)










