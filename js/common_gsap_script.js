////// INITIAL //////

// var initalAnim = gsap.timeline();

initalAnim.from("#header_logo",{
    x:100,
    opacity:0,
    duration:1
})

initalAnim.from("#header_list li",{
    y:100,
    opacity:0,
    duration:1,
    stagger:.25
})

initalAnim.from(".video-container",{
    scale:2,
    opacity:0,
    duration:1
})

initalAnim.from(".home-svg-down",{
    y:100,
    opacity:0,
    duration:1
})

initalAnim.from(".home-arrow-down",{
    y:100,
    opacity:0,
    duration:1
})

/////^ INITIAL ^/////