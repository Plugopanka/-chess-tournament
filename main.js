(()=>{"use strict";function t(e,s){var o=document.getElementById(e);this.crslRoot=o||document.querySelector(".carousel"),this.crslList=this.crslRoot.querySelector(".carousel__list"),this.crslElements=this.crslList.querySelectorAll(".carousel__element"),this.crslElemFirst=this.crslList.querySelector(".carousel__element"),this.leftArrow=this.crslRoot.querySelector("div.carousel__arrow-left"),this.rightArrow=this.crslRoot.querySelector("div.carousel__arrow-right"),this.indicatorDots=this.crslRoot.querySelector("div.carousel__dots"),this.countText=this.crslRoot.querySelector(".carousel__count"),this.defaults=s,this.options=this.defaults,t.initialize(this),console.log(1)}t.prototype.elemPrev=function(t){if(t=t||1,this.options.dots&&this.dotOn(this.currentElement),this.currentElement-=t,this.currentElement<0&&(this.currentElement=this.dotsVisible-1),this.options.dots&&this.dotOff(this.currentElement),this.options.loop){for(var e,s,o=this,i=0;i<t;i++)s=(e=this.crslList.lastElementChild).cloneNode(!0),this.crslList.insertBefore(s,this.crslList.firstElementChild),this.crslList.removeChild(e);this.crslList.style.marginLeft="-"+this.elemWidth*t+"px",window.getComputedStyle(this.crslList).marginLeft,this.crslList.style.cssText="transition:margin "+this.options.speed+"ms ease;",this.crslList.style.marginLeft="0px",setTimeout((function(){o.crslList.style.cssText="transition:none;"}),this.options.speed)}else this.currentOffset+=this.elemWidth*t,this.crslList.style.marginLeft=this.currentOffset+"px",0==this.currentElement?(this.leftArrow.style.pointerEvents="none",this.leftArrow.style.backgroundColor="#D6D6D6",this.touchPrev=!1):this.leftArrow.style.backgroundColor="#313131",this.rightArrow.style.pointerEvents="auto",this.rightArrow.style.backgroundColor="#313131",this.touchNext=!0},t.prototype.elemNext=function(t){if(t=t||1,this.options.dots&&this.dotOn(this.currentElement),this.currentElement+=t,this.currentElement>=this.dotsVisible&&(this.currentElement=0),this.options.dots&&this.dotOff(this.currentElement),this.options.loop){var e,s,o=this;this.crslList.style.cssText="transition:margin "+this.options.speed+"ms ease;",this.crslList.style.marginLeft="-"+this.elemWidth*t+"px",setTimeout((function(){o.crslList.style.cssText="transition:none;";for(var i=0;i<t;i++)e=o.crslList.firstElementChild,s=e.cloneNode(!0),o.crslList.appendChild(s),o.crslList.removeChild(e);o.crslList.style.marginLeft="0px"}),this.options.speed)}else this.currentOffset-=this.elemWidth*t,this.crslList.style.marginLeft=this.currentOffset+"px",this.currentElement==this.dotsVisible-1?(this.rightArrow.style.pointerEvents="none",this.rightArrow.style.backgroundColor="#D6D6D6",this.touchNext=!1):this.rightArrow.style.backgroundColor="#313131",this.leftArrow.style.pointerEvents="auto",this.leftArrow.style.backgroundColor="#313131",this.touchPrev=!0},t.prototype.dotOn=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#BBB; cursor:pointer;"},t.prototype.dotOff=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#556; cursor:default;"},t.initialize=function(t){t.elemCount=t.crslElements.length,t.dotsVisible=t.elemCount;var e,s,o,i,r,n,l=window.getComputedStyle(t.crslElemFirst);t.elemWidth=t.crslElemFirst.offsetWidth+parseInt(l.marginLeft)+parseInt(l.marginRight),t.currentElement=0,t.currentOffset=0,t.touchPrev=!0,t.touchNext=!0;var c=h();function h(){return(new Date).getTime()}function a(){t.autoScroll=setInterval((function(){var e=h();e-c+10>t.options.interval&&(c=e,t.elemNext())}),t.options.interval)}if(t.elemCount<=t.options.elemVisible&&(t.options.auto=!1,t.options.touch=!1,t.options.arrows=!1,t.options.dots=!1,t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.options.loop?t.options.auto&&(a(),t.crslList.addEventListener("mouseenter",(function(){clearInterval(t.autoScroll)}),!1),t.crslList.addEventListener("mouseleave",a,!1)):(t.dotsVisible=t.elemCount-t.options.elemVisible+1,t.leftArrow.style.pointerEvents="none",t.leftArrow.style.backgroundColor="#D6D6D6",t.rightArrow.style.backgroundColor="#313131",t.touchPrev=!1,t.options.auto=!1),t.options.touch&&(t.crslList.addEventListener("touchstart",(function(t){e=parseInt(t.touches[0].clientX),s=parseInt(t.touches[0].clientY),r=h()}),!1),t.crslList.addEventListener("touchmove",(function(l){e&&s&&(o=e-parseInt(l.touches[0].clientX),i=s-parseInt(l.touches[0].clientY),n=h(),Math.abs(o)>15&&Math.abs(o)>Math.abs(i)&&n-r<75&&(r=0,t.touchNext&&o>0?(c=n,t.elemNext()):t.touchPrev&&o<0&&(c=n,t.elemPrev())))}),!1)),t.options.arrows?(t.options.loop||(t.crslList.style.cssText="transition:margin "+t.options.speed+"ms ease;"),t.leftArrow.addEventListener("click",(function(){var e=h();e-c>t.options.speed&&(c=e,t.elemPrev())}),!1),t.rightArrow.addEventListener("click",(function(){var e=h();e-c>t.options.speed&&(c=e,t.elemNext())}),!1)):(t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.options.dots){for(var u,d="",p=0;p<t.dotsVisible;p++)d+='<span class="dot"></span>';t.indicatorDots.innerHTML=d,t.indicatorDotsAll=t.crslRoot.querySelectorAll("span.dot");for(var m=function(e){t.indicatorDotsAll[e].addEventListener("click",(function(){u=Math.abs(e-t.currentElement),e<t.currentElement?(c=h(),t.elemPrev(u)):e>t.currentElement&&(c=h(),t.elemNext(u))}),!1)},f=0;f<t.dotsVisible;f++)m(f);t.dotOff(0);for(var y=1;y<t.dotsVisible;y++)t.dotOn(y)}},new t("stages-carousel",{elemVisible:1,loop:!1,auto:!1,interval:4e3,speed:750,touch:!0,arrows:!0,dots:!0}),new t("cards-carousel",{elemVisible:3,loop:!0,auto:!0,interval:4e3,speed:750,touch:!0,arrows:!0,dots:!1})})();
//# sourceMappingURL=main.js.map