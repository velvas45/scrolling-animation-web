// Setup GSAP
gsap.registerPlugin(ScrollTrigger);

// setup split type library
const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, idx) => {
  // get dataset from element
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  // Using split type library for manipulate dom with class reveal-type to word and char type
  const text = new SplitType(char, { types: "chars,words" });

  // animation element text after the split
  //   gsap.from(text.chars, {
  //     scrollTrigger: {
  //       trigger: char,
  //       start: "top 80%",
  //       end: "top 20%",
  //       scrub: false,
  //       markers: false,
  //     },
  //     // opacity: 0.2,
  //     scaleY: 0,
  //     y: -20,
  //     transformOrigin: "top",
  //     stagger: 0.1,
  //     duration: 0.5,
  //   });

  gsap.fromTo(
    text.chars,
    {
      color: bg,
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
    },
    {
      color: fg,
      scaleY: 1,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});

// Lenis Setup
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  //   console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
