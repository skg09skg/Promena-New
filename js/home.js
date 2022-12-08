window.onbeforeunload = function() {
    if (window.location.host != "localhost:8080" && window.location.host != "localhost") {
        window.scrollTo(0, 0);
    }
};
var anim2, anim2Trigger, animLion, animLionDir, controllerMid;
var docHeight, bodyStyles, durationCommon, dotBoxLiWidth, lionAnimDuration, tlWorkEnter, tlWorkProgress, wrkTriggerEnd, tlExpertiseDirection;
var serviceAnim1, serviceAnim2, serviceAnim3;
var serviceAnim1Dark, serviceAnim2Dark, serviceAnim3Dark;
var blgWidth, blg1Left, blg1Top, blg2Left, blg2Top, blg3Left, blg3Top, blg4Top;

var tlInitDot, tlServ1;
var hsServiceOpacity = 0.2;

function ready() {
console.log($('.exp1').offset().top + 'px');
anim2Trigger = false;
controllerMid = new ScrollMagic.Controller();
var windowInitWidth = $(window).width();
    $(window).resize(function() {
        if (windowInitWidth != $(window).width()) {
            if (window.location.host != "localhost:8080" && window.location.host != "localhost") {
                location.reload(true);
            }
        }
    });
    docHeight = $(window).height(),
        bodyStyles = window.getComputedStyle(document.body),
        durationCommon = bodyStyles.getPropertyValue('--durationCommon'),
        dotBoxLiWidth = bodyStyles.getPropertyValue('--dotBoxLiWidth'),
        lionAnimDuration = $('.lionAnimTriggerEnd').offset().top - $('.lionAnimTriggerStart').offset().top,
        tlWorkEnter = false,
        tlWorkProgress = 0,
        wrkTriggerEnd = $('.workTriggerEnd').offset().top - $('.workTriggerStart').offset().top,
        wwrAnimation = $('.wwr-animation').offset().top;
    animationSet = false;
    if ($(window).width() > 800) {
        serviceAnim1 = lottie.loadAnimation({
            container: document.getElementById('hs-service-1-canvas'),
            path: './json/design.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        serviceAnim1Dark = lottie.loadAnimation({
            container: document.getElementById('hs-service-1-canvas-dark'),
            path: './json/design-dark.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });

        serviceAnim2 = lottie.loadAnimation({
            container: document.getElementById('hs-service-2-canvas'),
            path: './json/tech.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        serviceAnim2Dark = lottie.loadAnimation({
            container: document.getElementById('hs-service-2-canvas-dark'),
            path: './json/tech-dark.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });

        serviceAnim3 = lottie.loadAnimation({
            container: document.getElementById('hs-service-3-canvas'),
            path: './json/marketing.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        serviceAnim3Dark = lottie.loadAnimation({
            container: document.getElementById('hs-service-3-canvas-dark'),
            path: './json/marketing-dark.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        // 
        
        serviceAnim4 = lottie.loadAnimation({
            container: document.getElementById('hs-service-4-canvas'),
            path: './json/blockchain.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        serviceAnim4Dark = lottie.loadAnimation({
            container: document.getElementById('hs-service-4-canvas-dark'),
            path: './json/blockchain-dark.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        // 
    } 
}

function load() {
    $('.lazy').Lazy();

 if ($(window).width() > 800) {
        tlInitDot = gsap.timeline();
        var tlServInit = gsap.timeline();
        tlServInit
       
            
            .to('.hsdot', {
                duration: 0.01,
                opacity: 1
            })
            .to('.dots', {
                duration: 0.01,
                opacity: 0
            });

        new ScrollMagic.Scene({
                triggerElement: ".hs-service-1",
                triggerHook: 0.8,
                duration: docHeight / 4,
            })
        var tlServBounce = gsap.timeline({
            paused: true
        });
        

        var tlhsImgActive01 = gsap.timeline({
            paused: true
        });
        tlhsImgActive01
            .to('.hs-img-box-up .hs-line', {
                duration: 1,
                ease: Power4.easeInOut,
               
            })
            .to('.hs-img-box-up .hs-ellipse', {
                duration: 1,
                ease: Power4.easeInOut,
                
            }, 0.1);

        var tlhsImgActive02 = gsap.timeline({
            paused: true
        });
        tlhsImgActive02
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
              
            })
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
              
            })
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
              
            });
        var tlhsImgActive03 = gsap.timeline({
            paused: true
        });
        tlhsImgActive03
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
             
            })
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
             
            })
            .to('.hs-img-box-up .hs-line', {
                duration: 0.3,
                ease: Power4.easeInOut,
              
            });
        tlServ1 = gsap.timeline();
        tlServ1
            .to('.hsTrigBtn', {
                duration: 0.2,
                opacity: 0,
                y: 50
            })
            .to('.hs-service-1 h4 b', {
                duration: 0.2,
                opacity: hsServiceOpacity
            }, 0)
            .staggerFrom(".h-serv-ul-dummy", 0.8, {
                autoAlpha: 0,
            });

        new ScrollMagic.Scene({
                triggerElement: ".hs-service-1",
                triggerHook: 0.12,
                // reverse: false
            })
            .on("enter leave", function(e) {
                if (e.type == "enter") {
                    tlhsImgActive01.play();

                    TweenMax.staggerTo(".h-serv-ul-1 li", 0.35, {
                        autoAlpha: 1,
                        marginLeft: 0
                    }, 0.1);

                    gsap.to('.hs-1-img', {
                        duration: 0.2,
                        opacity: 1
                    });
                    serviceAnim1.setDirection(1);
                    serviceAnim1.setSpeed(1);
                    serviceAnim1.play();
                    serviceAnim1Dark.setDirection(1);
                    serviceAnim1Dark.setSpeed(1);
                    serviceAnim1Dark.play();

                } else if (e.type == "leave") {
                    tlhsImgActive01.reverse();
                    TweenMax.staggerTo(".h-serv-ul-1 li", 0.35, {
                        autoAlpha: 0,
                        marginLeft: -50
                    }, 0.1);

                    serviceAnim1.setDirection(-1);
                    serviceAnim1.setSpeed(3);
                    serviceAnim1.play();
                    serviceAnim1Dark.setDirection(-1);
                    serviceAnim1Dark.setSpeed(3);
                    serviceAnim1Dark.play();

                }
            })
            .setTween(tlServ1)
            .addTo(controllerMid);
        var tlServ2 = gsap.timeline();
        tlServ2
            .to('.hs-img', {
                duration: 0.2,
                opacity: 0
            }, 0)
            .to('.hs-2-img', {
                duration: 0.2,
                opacity: 1
            }, 0)
            .to('.hs-service-2 h4 b', {
                duration: 0.2,
                opacity: hsServiceOpacity
            }, 0);

        new ScrollMagic.Scene({
                triggerElement: ".hs-service-2",
                triggerHook: 0.12,
            })
            .on("enter leave", function(e) {
                if (e.type == "enter") {
                    tlhsImgActive02.play();
                    TweenMax.staggerTo(".h-serv-ul-2 li", 0.35, {
                        autoAlpha: 1,
                        marginLeft: 0
                    }, 0.1);

                    tlServBounce.restart();

                    serviceAnim2.goToAndStop(0, true);
                    serviceAnim2.play();
                    serviceAnim2Dark.goToAndStop(0, true);
                    serviceAnim2Dark.play();

                } else if (e.type == "leave") {
                    tlhsImgActive02.reverse();
                    TweenMax.staggerTo(".h-serv-ul-2 li", 0.35, {
                        autoAlpha: 0,
                        marginLeft: -50
                    }, 0.1);

                    tlServBounce.restart();

                    serviceAnim1.goToAndStop(0, true);
                    serviceAnim1.play();
                    serviceAnim1Dark.goToAndStop(0, true);
                    serviceAnim1Dark.play();

                }

            })
            .setTween(tlServ2)
            .addTo(controllerMid);
        var tlServ3 = gsap.timeline();
        tlServ3
            .to('.hs-img', {
                duration: 0.2,
                opacity: 0
            }, 0)
            .to('.hs-3-img', {
                duration: 0.2,
                opacity: 1
            }, 0)
            .to('.hs-service-3 h4 b', {
                duration: 0.2,
                opacity: hsServiceOpacity
            }, 0);

        new ScrollMagic.Scene({
                triggerElement: ".hs-service-3",
                triggerHook: 0.12,
            })
            .on("enter leave", function(e) {
                if (e.type == "enter") {
                    
                    tlhsImgActive03.play();
                    TweenMax.staggerTo(".h-serv-ul-3 li", 0.35, {
                        autoAlpha: 1,
                        marginLeft: 0
                    }, 0.1);

                    tlServBounce.restart();

                    serviceAnim3.goToAndStop(0, true);
                    serviceAnim3.play();
                    serviceAnim3Dark.goToAndStop(0, true);
                    serviceAnim3Dark.play();

                } else if (e.type == "leave") {
                  
                    tlhsImgActive03.reverse();
                    TweenMax.staggerTo(".h-serv-ul-3 li", 0.35, {
                        autoAlpha: 0,
                        marginLeft: -50
                    }, 0.1);

                    tlServBounce.restart();

                    serviceAnim2.goToAndStop(0, true);
                    serviceAnim2.play();
                    serviceAnim2Dark.goToAndStop(0, true);
                    serviceAnim2Dark.play();

                }

            })
            .setTween(tlServ3)
           
            .addTo(controllerMid);
            // 
    
            // 
    

        var hsServiceImgHeight = $('.hs-service-in').height();           
}

}
$.when(ready()).done(function() {
    if (window.location.host != "localhost:8080" && window.location.host != "localhost") {

        window.scrollTo(0, 0);
        $('window').scrollTop(0);
    }
    $(window).on('load', function() {
        load();
    });
});
