var container = document.getElementById('container');
var outline = document.getElementById('outline');
var loading = document.querySelector('.loading');

TweenMax.set([container, 'svg'], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
})

var tl = new TimelineMax({
    repeatDelay: 0.5,
    repeat: -1
});
tl.timeScale(1.3);
tl.set(tick, {
    drawSVG: '58% 58%',
    alpha: 0
})
tl.to(outline, 4, {
    drawSVG: '49.9% 50.1%',
    onUpdate: function() {
        loading.textContent = Math.floor((tl.time() / 4) * 100) + '%';
    },
    ease: Linear.easeNone
})

.to(outline, 0.4, {
    y: '-=10',
    ease: Power1.easeOut
}, '-=0.05')

.to(outline, 0.4, {
    y: '+=108',
    ease: Power2.easeIn
})

.to(loading, 0.4, {
        alpha: 0,
        ease: Power2.easeIn
    }, '-=0.4')
    .set(outline, {
        alpha: 0
    })

.set(tick, {
        alpha: 1
    })
    .to(tick, 0.4, {
        drawSVG: '7% 87%',
        y: '-=3',
        ease: Back.easeOut.config(2)
    })

.to(tick, 0.6, {
    alpha: 0,
    delay: 1
})

.set(outline, {
        y: 0,
        alpha: 1
    })
    .to(outline, 1, {
        drawSVG: true,
        ease: Power3.easeInOut
    })
    .to(loading, 1, {
        onStart: function() {
            loading.textContent = '0%'
        },
        alpha: 1,
        ease: Power3.easeInOut
    }, '-=0.5');