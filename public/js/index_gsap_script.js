////// AI //////

gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		allEll = toArray('.ell'),
		colorArr = ['#359EEE', '#FFC43D','#EF476F','#03CEA4']

let colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, {
	visibility: 'visible'
})

function animate (el, count) {
	let tl = gsap.timeline({
	defaults: {
		ease: 'sine.inOut'
	},
		repeat: -1
});
	gsap.set(el, {
		opacity:1- count/(allEll.length),
		stroke: colorInterp(count/(allEll.length))
	})

	tl.to(el, {
	attr: {
		ry: `-=${count*2.3}`,
		rx: `+=${count*1.4}`
	},
	ease: 'sine.in'
})
.to(el, {
	attr: {
		ry: `+=${count*2.3}`,
		rx: `-=${count*1.4}`
	},
	ease: 'sine'
})
.to(el, {
	duration: 1,
	rotation: -180,
	transformOrigin: '50% 50%'
}, 0).timeScale(0.5)
}
allEll.forEach((c, i) => {
	gsap.delayedCall(i/(allEll.length-1), animate, [c, i+1])
})
gsap.to('#aiGrad', {
	duration: 4,
	delay: 0.75,
	attr: {
		x1: '-=300',
		x2: '-=300'
	},
	scale: 1.2,
	transformOrigin: '50% 50%',
	repeat: -1,
	ease: 'none'
})
 gsap.to('#ai', {
	duration: 1,
	scale: 1.1,
	transformOrigin: '50% 50%',
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut'
})

gsap.to("#box1 #boxInside",{
    x:1000,
    opacity: 1,
    rotate:360,
    duration: 2,
    scale:2
})

/////^ AI ^/////

////// WHERE TO START //////

gsap.timeline({
	scrollTrigger:{
        trigger:"#where_to_start_container",
        scroller:"html",
        markers:false,
        start:"top bottom",
        end:"top center",
        scrub:2
    }
})
.from(".where_to_start div",{
	x:-100,
	opacity:0
})
.from(".where_to_start img",{
	x:100,
	opacity:0
})

/////^ WHERE TO START ^/////

////// HOW WE WORK //////

gsap.timeline({
	scrollTrigger:{
        trigger:".howWeWorkContainer",
        scroller:"html",
        markers:false,
        start:"top bottom",
        end:"top center",
        scrub:2
    }
})

.from(".howWeWorkContainer h2",{
	opacity:0,
	y:100,
	duration:1
})

/////^ HOW WE WORK ^/////

////// OUR STATS //////

gsap.timeline({
	scrollTrigger:{
        trigger:"#our_stats_container",
        scroller:"html",
        markers:false,
        start:"top bottom",
        end:"top center",
        scrub:2
    }
})

.from(".stat_block",{
	opacity:0,
	y:100,
	duration:1,
	stagger:1
})

.from(".stat_block > h3 > span", {
  textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1
});

/////^ OUR STATS ^/////

////// AI SLIDES //////

gsap.to("header",{
	backgroundColor:"#000000",
	color:"#ffffff",
	scrollTrigger:{
		trigger:'#ai_details',
		scroller:'html',
		start:'top bottom',
		end:'top center',
		markers:false,
		scrub:2
	}
})

gsap.to("body",{
	backgroundColor:"#000000",
	color:"#ffffff",
	scrollTrigger:{
		trigger:'#ai_details',
		scroller:'html',
		start:'top bottom',
		end:'top center',
		markers:false,
		scrub:2
	}
})

var aiAnimation = gsap.timeline({
	scrollTrigger:{
		trigger: "#ai_details",
		scroller:"html",
		markers:false,
		start:"top 0%",
		end:"top -500%",
		pin: true,
		scrub: 2,
	}
});

aiAnimation.from("#ai_svg_1",{
	opacity:0,
	scale:0
},"<")

aiAnimation.to("#ai_svg_1",{
	opacity:.5,
	scale:2
},"<")

aiAnimation.from("#ai_text_container_1 h3",{
	opacity:0,
	scale:0
})
aiAnimation.to("#ai_text_container_1 h3",{
	opacity:0,
	scale:3
})
aiAnimation.from("#ai_text_container_2 h3",{
	opacity:0,
	scale:0
},"<")
aiAnimation.to("#ai_text_container_2 h3",{
	opacity:0,
	scale:3
})
aiAnimation.from("#ai_text_container_3 h3",{
	opacity:0,
	scale:0
},"<")
aiAnimation.to("#ai_text_container_3 h3",{
	opacity:0,
	scale:3
})
aiAnimation.from("#ai_text_container_4 h3",{
	opacity:0,
	scale:0
},"<")
aiAnimation.to("#ai_text_container_4 h3",{
	opacity:0,
	scale:3
})
aiAnimation.from("#ai_text_container_5 h3",{
	opacity:0,
	scale:0
},"<")
aiAnimation.to("#ai_text_container_5 h3",{
	opacity:0,
	scale:3
})

aiAnimation.from("#ai_text_container h2",{
	opacity:0,
	y:100,
	stagger:0.5,
	duration:1,
	ease:"back"
})

aiAnimation.to({}, {duration: 2})

aiAnimation.to("#ai_svg_1",{
	opacity:1,
	scale:1
},"<")

aiAnimation.to("#ai_text_container h2",{
	opacity:0,
	y:-100,
	duration:1,
	stagger:0.5,
	ease:"back"
})

aiAnimation.to("#ai_text_container h2",{
	scale:0
},"<")

aiAnimation.to("#ai_svg_1",{
	opacity:0,
	scale:0
},"<")

aiAnimation.from("#ai_svg_2",{
	opacity:0,
	scale:0
},"<")

aiAnimation.to("#ai_svg_2",{
	opacity:0,
	scale:0
})

aiAnimation.to("#ai_svg_1",{
	opacity:.1,
	scale:3
},"<")

aiAnimation.from(".services_Circle",{
	rotation: -60,
	x: -250,
	duration: 1,
	opacity: 0
},"<")

aiAnimation.from(".home_services_content",{
	x: 250,
	duration: 1,
	opacity: 0
},"<")

aiAnimation.to({}, {duration: 2})

aiAnimation.to(".home_services_container",{
	scale:0,
	duration: 1,
	opacity: 0,
})

aiAnimation.to("#ai_svg_1",{
	opacity:0,
	scale:5
},"<")

aiAnimation.to("header",{
	backgroundColor:"#ffffff",
	color:"#000000"
},"<")

aiAnimation.to("body",{
	backgroundColor:"#ffffff",
	color:"#000000"
},"<")

aiAnimation.to("#ai_details",{
	backgroundColor:"#ffffff",
	color:"#000000"
},"<")

aiAnimation.from("#clients_container",{
	scale:0,
	duration: 1,
	opacity: 0
},"<")

aiAnimation.from("#clients_container > h2",{
	duration:1,
	y:-100,
	opacity:0
},"<")

aiAnimation.from(".client_details > li",{
	stagger:.5,
	y:-100,
	opacity:0,
	duration: 1
})

aiAnimation.to({}, {duration: 2})

/////^ AI SLIDES ^/////