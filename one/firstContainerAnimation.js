const letterDuration = 0.3;

 const nameTitleAnimation = gsap
  .timeline()
  .to("#andrei", {
    text: "ANDREI",
    ease: "power1.in",
    duration: letterDuration * 6,
  })
  .to("#christian", {
    text: "CHRISTIAN",
    ease: "power1.in",
    delay: 1,
    duration: letterDuration * 9,
  })
  .to("#netoiu", {
    text: "NETOIU",
    ease: "power1.in",
    duration: letterDuration * 6,
  })
  .to("#portofolio", {
    text: "PORTOFOLIO PRESENTATION",
    ease: "power1.in",
    duration: 3,
  })
  .from(".one .subheader div", {
    // scrollTrigger: {
    //   trigger: ".one .subheader",
    //   start: "top 45%",
    //   end: "bottom 40%",
    //   scrub: true,
    //   toggleActions: "play reverse play reverse",
    // },
    opacity: 0,
    stagger: {
      each: 4,
    },
  });

export default nameTitleAnimation;