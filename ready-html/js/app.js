gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.3,
        effects: true,
    })


    gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '920',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -150 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1100',
				end: '-500',
				scrub: true
			}
		})
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: '-100',
				scrub: true
			}
		})
    });


}

