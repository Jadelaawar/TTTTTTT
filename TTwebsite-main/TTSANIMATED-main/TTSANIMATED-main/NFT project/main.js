const tl = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text1 = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text2 =gsap.timeline({defaults: {duration: 1, ease: "power1.out"}})
const text3 =gsap.timeline({defaults: {duration: 2, ease: "power1.out"}})
const person1 =gsap.timeline({defaults: {duration: 3, ease: "power1.out"}})

tl.fromTo('.text', {opacity: 0, y: 125}, {opacity:1, y: 0})
text1.fromTo('.text1', {opacity: 0, x:125}, {opacity: 1, x:0})
text2.fromTo('.text2', {opacity: 0, x:-125}, {opacity: 1, x:0})
text3.fromTo('.text3', {opacity: 0, x:125}, {opacity: 1, x:0})
text3.fromTo('.person1', {opacity: 0, y:300}, {opacity: 1, y:0})

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.text1',
    duration: 500,
    triggerHook: 0.5
})
.setTween(text1)
.addTo(controller);

const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.text2',
    duration: 500,
    triggerHook: 0.5
})
.setTween(text2)
.addTo(controller1);

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.text3',
    duration: 1500,
    triggerHook: 0.5
})
.setTween(text3)
.addTo(controller2);

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.person1',
    duration: 3000,
    triggerHook: 0.5
})
.setTween(person1)
.addTo(controller3);




