// gsap animations
gsap.registerPlugin(ScrollTrigger);

// the animation for the intro

gsap
  .timeline()
  .to(".click .npm:nth-child(1)", {
    text: "npm init -y",
    ease: "power1.in",
    duration: 2,
    delay: 3,
  })
  .to(".click .npm:nth-child(2)", {
    text: "npm install andrei-christian-netoiu-porfolio",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  })
  .to(".click .npm:nth-child(3)", {
    text: "[***************]",
    ease: "power1.in",
    duration: 0.2,
    delay: 1,
  })
  .to(".click .npm:nth-child(4)", {
    text: "npm install fancy-animations",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  })
  .to(".click .npm:nth-child(5)", {
    text: "[***************]",
    ease: "power1.in",
    duration: 0.2,
    delay: 1,
  })
  .to(".click .npm:nth-child(6)", {
    text: "npm install night-mode",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  })
  .to(".click .npm:nth-child(7)", {
    text: "[***************]",
    ease: "power1.in",
    duration: 0.2,
    delay: 1,
  })
  .to(".click .npm:nth-child(8)", {
    text: "npm install sarcasm",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  })
  .to(".click .npm:nth-child(9)", {
    text: "[***************]",
    ease: "power1.in",
    duration: 0.2,
    delay: 1,
  })
  .to(".click .npm:nth-child(10)", {
    text: "WARNING! This webite is pretty sweet! The viewers are advised to share it with friends, collgeagus and their boss! Please proceed with caution!",
    ease: "power1.in",
    duration: 0.5,
    delay: 1,
  })
  .to(".click .npm:nth-child(11)", {
    text: "npm run dev",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  })
  .to(".click .npm:nth-child(12)", {
    text: "Development server is now live!",
    ease: "power1.in",
    duration: 2,
    delay: 2,
  })
  .to(".click .npm:nth-child(13)", {
    text: "Click anywhere to start",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  });

// the second part of the animation

const hipnoticIntro = gsap
  .timeline({ paused: true })
  .to(".click .npm:nth-child(14)", {
    text: "clear",
    ease: "power1.in",
    duration: 1,
    delay: 1,
  })
  .to(".container.click", {
    opacity: 0,
    display: "none",
    duration: 0.2,
    delay: 0.3,
  })
  .to(
    ".container.intro",
    {
      display: "flex",
      duration: 0.001,
    },
    "<"
  )
  .from(".container.intro .intro_space ", {
    opacity: 0,
    delay: 1,
    duration: 0.5,
  })
  .to("#central", {
    width: "99vw",
    height: "99vh",
    duration: 2.5,
    ease: "linear",
    backgroundColor: "transparent",
    // backgroundColor: "white",
  })
  .to(".container.intro", {
    opacity: 0,
    display: "none",
    duration: 0.5,
  });

const npmAnimation = document.querySelector(".container.click");

npmAnimation.addEventListener("click", () => hipnoticIntro.play());

// animation for the typerwriter effect

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

ScrollTrigger.create({
  animation: nameTitleAnimation,
  trigger: ".container.one ",
  start: "top 0%",
  end: "+4000",
  scrub: true,
  pin: true,
  pinSpacing: true,
});

// animation for making the subheader of the first
// container come to live

const blurAnimation = gsap.timeline().from(".container.two .text", {
  opacity:0,
  stagger: 0.1,
  x:-100
}).
to(
  ".le_menu",
  {
    opacity:1,
    duration: 0.4,
  },
  1
);


ScrollTrigger.create({
  animation: blurAnimation,
  trigger: ".container.two ",
  start: "top 0%",
  end: "+500vh",
  // end: " bottom 0%",
  pin: true,
  scrub: true,
  pinSpacing: false,
  toggleActions: "play reverse play reverse",
  // i dont see any reason why setting pin spacing to false solves the problem but it does
  // soooooo under no circumstances do not change it
  //  it works, that s the only thing that matters

  // pinnedContainer: '.container.two', doesnt do shit
  // pinSpacing:"100vh", this is by the far the bost solution so far but it still does not work
  // with out pin spacing set, so if we go for the default one, it still does not work
});

// third container
gsap.to(".container.threee", {
  scrollTrigger: {
    trigger: ".container.threee div",
    start: "top 80%",
    end: "bottom 40%",
    toggleActions: "play reverse play reverse",
  },
  backgroundColor: "white",
});

// fourth container

gsap.from(".four .questions div", {
  scrollTrigger: {
    trigger: ".four .questions div",
    start: "top 60%",
    end: "bottom 40%",
    toggleActions: "play reverse play reverse",
    // markers: true,
    // pin:true,
    // pinSpacing:true,
    // scrub:true
  },
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,
});

// fifth container - the one with front end and creative dev

// the animations from frontend and creative dev,
// front end slides from the left and creative dev from the right

const frontEndCreativeDevAnimation = gsap
  .timeline()
  .from(".front_end", {
    //   scrollTrigger: {
    //     trigger: ".creative_dev",
    //     start: "top 80%",
    //     end: "bottom 10%",
    //     toggleActions: "play reverse play reverse",
    //   },
    x: -400,
    duration: 0.6,
    stagger: {
      each: 0.3,
    },
  })
  .from(
    ".creative_dev",
    {
      //   scrollTrigger: {
      //     trigger: ".creative_dev",
      //     start: "top 60%",
      //     end: "bottom 20%",
      //     toggleActions: "play reverse play reverse",
      //   },
      x: 400,
      duration: 0.6,
      stagger: {
        each: 0.3,
        from: "end",
      },
    },
    "<"
  );

ScrollTrigger.create({
  animation: frontEndCreativeDevAnimation,
  trigger: ".container.five",
  start: "top 1%",
  end: "bottom 1%",
  pin: true,
  scrub: true,
  pinSpacing: true,
});

// the animation for the programming languages
// they will start as a mess, the letters will all
// over the place but while you scroll, they will
// group and 1 sec after they will start glowing

// first, setting the colors for the box shadow

const htmlShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px red,1px 1px 12px red, 1px 1px 14px red, 1px 1px 16px red,1px 1px 22px red, 1px 1px 23px red, 1px 1px 27px red,1px 1px 30px red, 1px 1px 34px red, 1px 1px 35px red";

const cssShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px blue,1px 1px 12px blue, 1px 1px 14px blue, 1px 1px 16px blue,1px 1px 22px blue, 1px 1px 23px blue, 1px 1px 27px blue,1px 1px 30px blue, 1px 1px 34px blue, 1px 1px 35px blue";

const jsShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px yellow,1px 1px 12px yellow, 1px 1px 14px yellow, 1px 1px 16px yellow,1px 1px 22px yellow, 1px 1px 23px yellow, 1px 1px 27px yellow,1px 1px 30px yellow, 1px 1px 34px yellow, 1px 1px 35px yellow";

const reactShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px lightskyblue,1px 1px 12px lightskyblue, 1px 1px 14px lightskyblue, 1px 1px 16px lightskyblue,1px 1px 22px lightskyblue, 1px 1px 23px lightskyblue, 1px 1px 27px lightskyblue,1px 1px 30px lightskyblue, 1px 1px 34px lightskyblue, 1px 1px 35px lightskyblue";

const threeShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px white,1px 1px 12px white, 1px 1px 14px white, 1px 1px 16px white,1px 1px 22px white, 1px 1px 23px white, 1px 1px 27px white,1px 1px 30px white, 1px 1px 34px white, 1px 1px 35px white";

const fiberShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px purple,1px 1px 12px purple, 1px 1px 14px purple, 1px 1px 16px purple,1px 1px 22px purple, 1px 1px 23px purple, 1px 1px 27px purple,1px 1px 30px purple, 1px 1px 34px purple, 1px 1px 35px purple";

const gsapShadow =
  "1px 1px 4px white, 1px 1px 5px white, 1px 1px 6px white,1px 1px 7px white, 1px 1px 9px white, 1px 1px 10px greenyellow,1px 1px 12px greenyellow, 1px 1px 14px greenyellow, 1px 1px 16px greenyellow,1px 1px 22px greenyellow, 1px 1px 23px greenyellow, 1px 1px 27px greenyellow,1px 1px 30px greenyellow, 1px 1px 34px greenyellow, 1px 1px 35px greenyellow";

// dont forget to remove the delay

const randomLetters = gsap
  .timeline()
  // setting the html letter
  // .from(".html .s", {
  //   x: Math.floor(Math.random() * 300) - 150,
  //   y: Math.floor(Math.random() * 300) - 150,
  //   rotate: Math.floor(Math.random() * 360),
  //   duration: 1.5,
  //   delay: 0.3,
  // })
  .from(
    ".html .h",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
      delay: 0.3,
    },
    "<"
  )
  .from(
    ".html .t",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".html .m",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".html .l",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting css
  .from(
    ".css .c",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".css .s",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".css .ss",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting js
  .from(
    ".js .j",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".js .s",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting react
  .from(
    ".react .r",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".react .e",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".react .a",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".react .c",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".react .t",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting gsap
  .from(
    ".gsap .g",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".gsap .s",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".gsap .a",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".gsap .p",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting three
  .from(
    ".three .t",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".three .h",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".three .r",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".three .e",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".three .ee",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   seeting react three fiber
  .from(
    ".fiber .r",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".fiber .t",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  .from(
    ".fiber .f",
    {
      x: Math.floor(Math.random() * 300) - 150,
      y: Math.floor(Math.random() * 300) - 150,
      rotate: Math.floor(Math.random() * 360),
      duration: 1.5,
    },
    "<"
  )
  //   setting some colors for the neon effect
  .to(".html div", {
    textShadow: htmlShadow,
  })
  .to(".css div", {
    textShadow: cssShadow,
  })
  .to(".js div", {
    textShadow: jsShadow,
  })
  .to(".react div", {
    textShadow: reactShadow,
  })
  .to(".gsap div", {
    textShadow: gsapShadow,
  })
  .to(".three div", {
    textShadow: threeShadow,
  })
  .to(".fiber div", {
    textShadow: fiberShadow,
  })
  //   disabling the neon effect
  .to(".html div", {
    textShadow: "none",
    delay: 0.3,
    duration: 0.1,
  })
  .to(
    ".css div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  )
  .to(
    ".js div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  )
  .to(
    ".react div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  )
  .to(
    ".gsap div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  )
  .to(
    ".three div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  )
  .to(
    ".fiber div",
    {
      textShadow: "none",

      duration: 0.1,
    },
    "<0.05"
  );

//

ScrollTrigger.create({
  animation: randomLetters,
  trigger: ".container.eight",
  scrub: true,
  pin: true,
  pinSpacing: true,
  toggleActions: "play reverse play reverse",
});

// type writer effect for the languages

const languageTypeWriter = gsap
  .timeline()
  .to(".english", {
    text: "ENGLISH",
    ease: "power1.in",
    duration: 2,
    delay: 2,
  })
  .to(".german", {
    text: "GERMAN",
    ease: "power1.in",
    delay: 1,
    duration: 2,
  })
  .to(".french", {
    text: "FRENCH",
    ease: "power1.in",
    duration: 2,
    delay: 2,
  })
  .to(".romanian", {
    text: "ROMANIAN",
    ease: "power1.in",
    duration: 2,
    delay: 1,
  });

ScrollTrigger.create({
  animation: languageTypeWriter,
  trigger: ".container.nine",
  // start: "top top",
  start: "top 0%",
  // end: "+=4000",
  scrub: true,
  pin: true,
  pinSpacing: true,
  // anticipatePin: 1
});

// lets playa around with the scroll trigers

// more about me scroll trigger animation
const moreAboutMeAnimation = gsap
  .timeline()
  .from(".container.ten .card:nth-child(odd)", {
    xPercent: 100,
    duration: 2,
    stagger: 0.5,
  })
  .from(
    ".container.ten .card:nth-child(even)",
    {
      xPercent: -100,
      duration: 2,
      stagger: 0.5,
    },
    "<"
  );

ScrollTrigger.create({
  animation: moreAboutMeAnimation,
  trigger: ".container.ten",
  start: "top 0%",
  end: "+1000",
  scrub: 7,
  pin: true,
  pinSpacing: true,
});

// THE Q A page

// .to(".romanian", {
//     text: "ROMANIAN",
//     ease: "power1.in",
//     duration: 2,
//     delay: 1,
//   });

const qAndAanimation = gsap
  .timeline()
  .to(".container.eleven .message:nth-child(1) .text", {
    text: "Q:Intersting Website ... but do you know real programming?",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  })
  .to(".container.eleven .message:nth-child(2) .text", {
    text: "A:What do you mean by 'real programming'?",
    duration: 3,
    delay: 1,
    backgroundColor: "slateblue",
  })
  .to(".container.eleven .message:nth-child(3) .text", {
    text: "Q: You know ... real programming...",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  })
  .to(".container.eleven .message:nth-child(4) .text", {
    text: "A: Do you mean if i know ES6, OOP, a library like React with hooks for dynamically rendering components and extra tools such as Redux for state management and React Router for making SPA? Or do you mean data structures, algorithms? And on top of that tools such as GSAP or Three.js and React Three Fiber for making web experiences?",
    duration: 20,
    delay: 1,
    backgroundColor: "slateblue",
  })
  .to(".container.eleven .message:nth-child(5) .text", {
    text: "Q:Yeah... do you?",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  })
  .to(".container.eleven .message:nth-child(6) .text", {
    text: "A: Yes, I do!",
    duration: 3,
    delay: 1,
    backgroundColor: "slateblue",
  })
  .to(".container.eleven .message:nth-child(7) .text", {
    text: "Q:Good... Good... Can You tell me more about you?",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  })
  .to(".container.eleven .message:nth-child(8) .text", {
    text: "A: You mean what hobbies do I have?",
    duration: 3,
    delay: 1,
    backgroundColor: "slateblue",
  })
  .to(".container.eleven .message:nth-child(9) .text", {
    text: "Q: Precisesly!",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  })
  .to(".container.eleven .message:nth-child(10) .text", {
    text: "A: I could tell you ... but I think it is better to show you... Is that ok?",
    duration: 3,
    delay: 1,
    backgroundColor: "slateblue",
  })
  .to(".container.eleven .message:nth-child(11) .text", {
    text: "Q: I think it is ok",
    duration: 3,
    delay: 1,
    backgroundColor: "royalblue",
  });

ScrollTrigger.create({
  animation: qAndAanimation,
  trigger: ".container.eleven",
  start: "top 0%",
  end: "+4000",
  pin: true,
  scrub: true,
  pinSpacing: true,
});

// contact cards scroll triger -container twelve

const contactLinks = gsap
  .timeline()
  // twitter
  .from(".twitter .one", {
    xPercent: 51.25,
    duration: 2,
    delay: 1,
  })
  .from(
    ".twitter .two",
    {
      xPercent: -40,
      duration: 2,
    },
    "<"
  )
  // gmail
  .from(".gmail .one", {
    xPercent: 51.25,
    duration: 2,
  })
  .from(
    ".gmail .two",
    {
      xPercent: -40,
      duration: 2,
    },
    "<"
  )
  // LINKED IN
  .from(".linkedin .one", {
    xPercent: 51.25,
    duration: 2,
  })
  .from(
    ".linkedin .two",
    {
      xPercent: -40,
      duration: 2,
    },
    "<"
  )
  // PORTOFOLIO
  .from(".showcase .one", {
    xPercent: 51.25,
    duration: 2,
  })
  .from(
    ".showcase .two",
    {
      xPercent: -40,
      duration: 2,
    },
    "<"
  );

ScrollTrigger.create({
  animation: contactLinks,
  trigger: ".twelve ",
  // start: "top top",
  start: "top 0%",
  end: "bottom 0%",
  scrub: 3,
  pin: true,
  // pin: true,
  // anticipatePin: 1
});

// hpnotic logo

const hipnotic = gsap
  .timeline()
  .from(".two_hipnotic", {
    opacity: 0,
    duration: 1,
  })
  .to("#center", {
    width: "99vw",
    height: "99vh",
    duration: 20,
    ease: "linear",
    // backgroundColor: "white",
  })
  .fromTo(
    "#center .text",
    {
      color: "black",
      duration: 10,
    },
    {
      color: "white",
      duration: 10,
    }
  );

ScrollTrigger.create({
  animation: hipnotic,
  trigger: ".two_hipnotic",
  start: "top 0%",
  end: "+4000",
  // pinSpacing:1000,
  pin: true,
  scrub: 1,
  anticipatePin: 1,
});

// hobbies

const photoCarusel = gsap
  .timeline()
  .fromTo(
    ".hobbies .hobby:nth-child(1)",
    {
      xPercent: "-200",
      duration: 1,
    },
    {
      yPercent: "-70",
      xPercent: "+5",
    }
  )
  .fromTo(
    ".hobbies .hobby:nth-child(2)",
    {
      xPercent: "+200",
      duration: 1,
    },
    {
      yPercent: "-50",
      xPercent: "-2",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(3)",
    {
      xPercent: "-200",
      duration: 1,
    },
    {
      yPercent: "-30",
      xPercent: "3",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(4)",
    {
      xPercent: "200",
      duration: 1,
    },
    {
      yPercent: "-10",
      xPercent: "-4",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(5)",
    {
      xPercent: "-200",
      duration: 1,
    },
    {
      yPercent: "10",
      xPercent: "3",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(6)",
    {
      xPercent: "200",
      duration: 1,
    },
    {
      yPercent: "60",
      xPercent: "3",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(7)",
    {
      xPercent: "-200",
      duration: 1,
    },
    {
      yPercent: "80",
      xPercent: "2",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(8)",
    {
      xPercent: "200",
      duration: 1,
    },
    {
      yPercent: "110",
      xPercent: "-6",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(9)",
    {
      xPercent: "-200",
      duration: 1,
    },
    {
      yPercent: "130",
      xPercent: "3",
    },
    "<0.5"
  )
  .fromTo(
    ".hobbies .hobby:nth-child(10)",
    {
      xPercent: "200",
      duration: 1,
    },
    {
      yPercent: "150",
      xPercent: "-1",
    },
    "<0.5"
  );

// ScrollTrigger.create({
//   animation: photoCarusel,
//   trigger: ".two_hipnotic",
//   start: "top 0%",
//   end: "+100vh",
//   pin: true,
//   scrub: 1,
//   pinSpacing: false
// });

//

// ScrollTrigger.create({
//   animation: photoCarusel,
//   trigger: ".container.hobbies",
//   start: "top 0%",
//   end: "bottom 50%",
//   scrub: 1,
// });

ScrollTrigger.create({
  animation: photoCarusel,
  trigger: ".container.hobbies",
  start: "top 0%",
  end: "+800vh",
  // end: " bottom 0%",
  pin: true,
  scrub: true,
  pinSpacing: false,
});

// lets try the menu animation

const menuAnimation = gsap
  .timeline({ paused: true })
  .to("#dropdown_menu", {
    backgroundColor: "white",
    display: "flex",
    duration: 2,
  })
  .to("#dropdown_menu a:nth-child(1)", {
    text: "HOME",
    delay: 1,
    duration: 1,
    color: "black",
  })
  .to(
    "#dropdown_menu a:nth-child(2)",
    {
      text: "PORTFLIO",
      duration: 2,
      color: "black",
    },
    "<"
  )
  .to(
    "#dropdown_menu a:nth-child(3)",
    {
      text: "CONTACT",
      duration: 1.5,
      color: "black",
    },
    "<"
  )
  .to(
    "#dropdown_menu a:nth-child(5)",
    {
      text: "X",
      duration: 2,
      color: "black",
    },
    "<"
  )
  .to(
    "#dropdown_menu a:nth-child(4)",
    {
      text: "STATIC PAGE",
      duration: 2,
      color: "black",
    },
    "<"
  );

const toggleOnMenu = document.querySelector("#dropdown_menu a:nth-child(5)");
toggleOnMenu.addEventListener("click", () => menuAnimation.reverse());

const toggleOffMenu = document.querySelector(".le_menu");

toggleOffMenu.addEventListener("click", () => menuAnimation.play());
