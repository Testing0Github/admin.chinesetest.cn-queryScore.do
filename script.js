let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  let platformMedia = gsap.matchMedia();

  platformMedia.add("(min-width: 1050px)", () => {
    // Platform Services
    let platformServices = gsap.timeline({
      scrollTrigger: {
        trigger: ".platform-services",
        start: "center center",
        end: "+=4000",
        scrub: true,
        pin: true,
      },
    });

    let scrollContainers = document.querySelectorAll(
      ".platform-services .scroll-section"
    );
    platformServices
      .to(scrollContainers[0].querySelector(".logo"), {
        width: "30%",
      })
      .to(
        scrollContainers[0].querySelector(".logo svg"),
        {
          width: "15vw",
        },
        "<"
      )
      .to(scrollContainers[0].parentElement, {
        xPercent: -100,
      })
      .to(scrollContainers[1].querySelector(".logo"), {
        width: "30%",
      })
      .to(
        scrollContainers[1].querySelector(".logo svg"),
        {
          width: "15vw",
        },
        "<"
      )
      .to(scrollContainers[1].parentElement, {
        xPercent: -200,
      })
      .to(scrollContainers[2].querySelector(".logo"), {
        width: "30%",
      })
      .to(
        scrollContainers[2].querySelector(".logo svg"),
        {
          width: "15vw",
        },
        "<"
      );
  });
});

// later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();
