// 視差滾動
// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

// //without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger, TextPlugin);//註冊我們額外引入的 ScrollTrigger 與 TextPlugin 套件

//比賽說明
// const raceContainer=document.querySelector(".race-container");
// ScrollTrigger.create({
//   //以container作為觸發時機
//   trigger:raceContainer,
//   markers:true,
// })
// //文字打字效果
// // const timeline2 = gsap.timeline()
// // timeline2.to('.box5', {x: 100, duration:1}).to('.box6', {x: 100, duration:1})
// // gsap.timeline().to(".typing-1",{
// //     text:"區區修煉已經無法滿足了嗎？",//text屬性將自動為DOM元素嵌入輸入的文字
// //     duration:3,
// //     scrollTrigger:{
// //       trigger:".typing-1",
// //       toggleActions:"play pause resume reset",
// //     }
// //   }).to(".typing-2",{
// //       text:"還有比賽等著你！",
// //       duration:3,
// //       scrollTrigger:{
// //         trigger:".typing-2",
// //         toggleActions:"play pause resume reset",
// //       }
// //     })
// gsap.to(".typing-1",{
//   text:"區區修煉已經無法滿足了嗎？",//text屬性將自動為DOM元素嵌入輸入的文字
//   duration:3,
//   scrollTrigger:{
//     trigger:".typing-1",
//     toggleActions:"play pause resume reset",
//   }
// })
// gsap.to(".typing-2",{
//   text:"還有比賽等著你！",
//   duration:3,
//   scrollTrigger:{
//     trigger:".typing-2",
//     toggleActions:"play pause resume reset",
//   }
// })

//常見問答
const common=document.querySelector(".common");
const UI=document.querySelector(".UI");
const frontEnd=document.querySelector(".frontEnd");
const group=document.querySelector(".group");
const QAselect=document.querySelector(".QA-select");
const QAcontent=document.querySelector(".QA-content");
common.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap common active");
QAselect.addEventListener("click",function(e){
  if(e.target.textContent==="一般常見問答"){
    common.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap common active");
    UI.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap UI");
    frontEnd.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap frontEnd");
    group.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap group");
    QAcontent.innerHTML=`<li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：可以，有投稿表示你還會持續努力在這次活動上。
    </p>
  </li>`;
  }else if(e.target.textContent==="UI 設計師"){
    common.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap common");
    UI.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap UI active");
    frontEnd.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap frontEnd");
    group.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap group");
    QAcontent.innerHTML=`<li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：一定要上傳「線上標示文件」嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：不能使用 PS、Illustrator 設計嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：當每週一題目出來後，我有一些設計進度也可以先投稿嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。
    </p>
  </li>`;
  }else if(e.target.textContent==="前端工程師"){
    common.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap common");
    UI.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap UI");
    frontEnd.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap frontEnd active");
    group.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap group");
    QAcontent.innerHTML=`<li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：前端介面一定要長得一模一樣嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：不用，依照自己的想法來開發也可以。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好。
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
    </p>
  </li>`;
  }else if(e.target.textContent==="團體組"){
    common.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap common");
    UI.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap UI");
    frontEnd.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap frontEnd");
    group.setAttribute("class","btn btn-white text-primary rounded-0 w-100 h-100 fs-4 text-nowrap group active");
    QAcontent.innerHTML=`<li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
    Q：請問團體組最多幾人？
    </p>
    <p class="text-white mb-0 h6 lh-base">
    A：最多 4 人，投稿作品時請派一位組長來投稿即可。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。
    </p>
  </li>
  <li class="mb-50">
    <p class="text-info mb-1 h6 lh-base">
      Q：團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？
    </p>
    <p class="text-white mb-0 h6 lh-base">
      A：A:不能，預設是不能讓『個人組-前端工程師』採用。
    </p>
  </li>`;
  }
})




const scrollTL=gsap.timeline({
  scrollTrigger:{
    trigger:".section-week",
    start: 'bottom 65%', // 決定動畫開始點的位置
    pin:true,//重要! pin虛設為true
    markers:true,
    scrub:true,
  }
});

scrollTL.to(".week1", {xPercent: "-100" });
scrollTL.to(".week2",{xPercent:"-100"});


// __webpack_require__.r(__webpack_exports__);
// /* harmony import */ var _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/gsap/all.js */ "./node_modules/gsap/all.js");
// /* harmony import */ var _node_modules_gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/gsap/ScrollTrigger.js */ "./node_modules/gsap/ScrollTrigger.js");
// /* harmony import */ var _node_modules_gsap_TextPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/gsap/TextPlugin.js */ "./node_modules/gsap/TextPlugin.js");




// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_node_modules_gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger, _node_modules_gsap_TextPlugin_js__WEBPACK_IMPORTED_MODULE_2__.TextPlugin);

// // heroBanner動畫效果
// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.from(".heroBanner",{y:1080 , duration:3});

// setTimeout(function(){
//   $('.login').find('a').addClass("active");
// },3500)

// $(".textLogin p").on("mouseenter",function(){
//   $(this).find("a").addClass("active");
//   $(this).siblings().find("a").removeClass("active");
// })
// // 三格對話框動畫
// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(".animation-wrapper").forEach((element) => {
//   if (
//     element.classList.contains("from-left") ||
//     element.classList.contains("from-right")
//   ) {
//   hide(element); // 每個元素一進來都必須先隱藏

//     _node_modules_gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({   //每一個元素遍歷都會創造對應的ScrollTrigger物件
//      trigger: element,
//       markers: false,
//       onEnter: function () {
//         animated(element); 
//       },
//       onEnterBack: function () {
//         animated(element);
//       },
//       onLeave: function () {
//         hide(element);
//       },
//     });
//   }else if (element.classList.contains("text")){
//     const typing1Content = "羨慕別人的酷酷網頁動畫...";
//     const typing2Content = "滿足不了同事的許願...";
//     const typing3Content = "動畫技能樹太雜無從下手...";
//     const typing1_1Content = "I’m cool !";
//     const typing2_1Content = "!@#$%...";

//     _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".text-1", {
//       text: typing1Content,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: ".text-1",
//         toggleActions: "play pause resume reset",
//       },
//     });
//     _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".text-1-1", {
//       text: typing1_1Content,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: ".text-1-1",
//         toggleActions: "play pause resume reset",
//       },
//     });
//     _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".text-2", {
//       text: typing2Content,
//       duration: 1.5,
//      scrollTrigger: {
//        trigger: ".text-2",
//         toggleActions: "play pause resume reset",
//       },
//     });
//     _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".text-2-1", {
//       text: typing2_1Content,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: ".text-2-1",
//         toggleActions: "play pause resume reset",
//       },
//     });
//     _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".text-3", {
//       text: typing3Content,
//       duration: 1.5,
//       scrollTrigger: {
//         trigger: ".text-3",
//         toggleActions: "play pause resume reset",
//       },
//     });
//   } 


// });

// function animated(element){
//   let x = 0;
//   if(element.classList.contains("from-left")){
//     x = -100;
//   }else if(element.classList.contains("from-right")){
//     x = 100;
//   }
//   element.style.transform = `translate(${x}px, 0px)`
  
//   _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(
//   element,{
//     x: x, y: 0, opacity: 0, visibility: "hidden"
//   },{
//     duration: 1,
//       delay: 0.2,
//       x: 0,
//       y: 0,
//       visibility: "visible",
//       opacity: "1",
//       ease: "expo", // 元素的運動速度變化
//       overwrite: "auto",
//   })
// }

// function hide(element) {
//   _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.set(element, { opacity: 0, visibility: "hidden" });
// }

// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(
//   ".cursor",
//   0,
//   {
//     visibility: "hidden",
//   },
//   {
//     visibility: "visible",
//     repeat: -1,
//     yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
//     repeatDelay: 0.3, // 下一次repeat的delay時間
//   }
// );

// // 互動式網頁設計
// const mql = window.matchMedia("(max-width:768px)"); 
// const scrollTL1 = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".section2-bg",
//     pin: true,
//     markers: false,
//     scrub: true,
//   }
// });
// scrollTL1.to(".box-bg-1",{opacity: "0"});
// scrollTL1.to(".title",{
//   yPercent:'-80',
// },"<")
// scrollTL1.to(".bg-1",{
//   yPercent:'10',
// },"<")
// scrollTL1.to(".bg-2",{
//   yPercent:'50',
// },"<")
// scrollTL1.to(".bg-3",{
//   yPercent:'50',
// },"<")
// scrollTL1.to(".box-bg-2",{opacity: "0"});
// scrollTL1.to(".title",{
//   yPercent:'-100',
// },"<")
// scrollTL1.to(".bg-1",{
//   yPercent:'50',
// },"<")
// scrollTL1.to(".bg-2",{
//   yPercent:'100',
// },"<")
// scrollTL1.to(".bg-3",{
//   yPercent:'100',
// },"<")
// if(mql.matches){
//   scrollTL1.to(".box-bg-1",{opacity: "0"});
//   scrollTL1.to(".title",{
//     yPercent:'-150',
//   },"<")
//   scrollTL1.to(".bg-1",{
//     yPercent:'10',
//   },"<")
//   scrollTL1.to(".bg-2",{
//     yPercent:'50',
//   },"<")
//   scrollTL1.to(".bg-3",{
//     yPercent:'50',
//   },"<")
//   scrollTL1.to(".box-bg-2",{opacity: "0"});
//   scrollTL1.to(".title",{
//     yPercent:'-300',
//   },"<")
//   scrollTL1.to(".bg-1",{
//     yPercent:'50',
//   },"<")
//   scrollTL1.to(".bg-2",{
//     yPercent:'100',
//   },"<")
//   scrollTL1.to(".bg-3",{
//     yPercent:'100',
//   },"<")
// }

// // 每周活動介紹動畫
// const scrollTL = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".section3",
//     pin: true,
//     markers: false,
//     scrub: true,
//   }
// });
// scrollTL.to(".gate-1",{xPercent:"-100"});
// scrollTL.to(".gate-2",{xPercent:"-100"});
// // 活動流程
// const scrollTL4_1 = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".step1",
//     markers: false,
//     scrub: true,
//     start: 'top 90%', // 決定動畫開始點的位置
//     end: 'top 30%',
//   }
// });
// scrollTL4_1.from(".section4-icon-hidden1",{opacity:0})

// const scrollTL4_2 = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".step2",
//     markers: false,
//     scrub: true,
//     start: 'top 90%', // 決定動畫開始點的位置
//     end: 'top 30%',
//   }
// });
// scrollTL4_2.from(".section4-icon-hidden2",{opacity:0})
// const scrollTL4_3 = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".step3",
//     markers: false,
//     scrub: true,
//     start: 'top 90%', // 決定動畫開始點的位置
//     end: 'top 30%',
//   }
// });
// scrollTL4_3.from(".section4-icon-hidden3",{opacity:0})
// const scrollTL4_4 = _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
//   scrollTrigger:{
//     trigger:".step4",
//     markers: false,
//     scrub: true,
//     start: 'top 80%', // 決定動畫開始點的位置
//     end: 'top 65%',
//   }
// });
// scrollTL4_4.from(".section4-icon-hidden4",{opacity:0})

// // 比賽說明

// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".section5-text-1",{
//   text: "區區修煉已經無法滿足了嗎？",
//   duration: 1.5,
//   scrollTrigger:{
//     trigger:".section5",
//     toggleActions: "play pause resume reset",
//   }
// });

// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".section5-text-2",{
//   text: "還有比賽等著你！",
//   duration: 1.5,
//   delay:1.5,
//   scrollTrigger:{
//     trigger:".section5",
//     toggleActions: "play pause resume reset",
//   }
// });


// // 贊助商
// _node_modules_gsap_all_js__WEBPACK_IMPORTED_MODULE_0__.gsap.to(".loop",{
//   xPercent:"-100",
//   ease:"none",
//   duration:15,
//   repeat:-1
// })

// //# sourceURL=webpack://thef2eweek01/./js/all.js?