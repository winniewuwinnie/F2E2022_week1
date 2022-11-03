// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// //without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger, TextPlugin);//註冊我們額外引入的 ScrollTrigger 與 TextPlugin 套件

const srollTL=gsap.timeline({
  scrollTrigger:{
    trigger:".section-week",
    pin:true,//重要! pin虛設為true
    markers:true,
    scrub:true,
  }
});

srollTL.to(".week1", { xPercent: "-100" });
srollTL.to(".week2",{xPercent:"-100"});
