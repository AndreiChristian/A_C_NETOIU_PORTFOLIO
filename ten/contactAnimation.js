export const contactLinks = gsap.timeline()
// twitter
.from(".twitter .one", {
    xPercent: 51.25,
    duration: 2,
    delay: 1,
  })
.from(".twitter .two", {
  xPercent: -40,
  duration: 2,
},"<")
// gmail 
.from(".gmail .one", {
    xPercent: 51.25,
    duration: 2,
    
  })
.from(".gmail .two", {
  xPercent: -40,
  duration: 2,
},"<")
// LINKED IN
.from(".linkedin .one", {
    xPercent: 51.25,
    duration: 2,
    
  })
.from(".linkedin .two", {
  xPercent: -40,
  duration: 2,
},"<")
// PORTOFOLIO
.from(".showcase .one", {
    xPercent: 51.25,
    duration: 2,
    
  })
.from(".showcase .two", {
  xPercent: -40,
  duration: 2,
},"<")
