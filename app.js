anime.timeline({
    easing: 'easeOutExpo'
})
.add({
    targets: '.hero',
    translateX: ['-100%', '0%'],
    scale: [0.4, 0.7],
    opacity: [0, 1],
    duration:1500
})
.add({
    targets: '.hero',
    scale: [0.75, 0.6, 1],
    duration:500
})
.add({ // add animation for the text
    targets: '.text span',
    durataion: 500,
    opacity: [0,1],
    delay: anime.stagger(50)
}) 
.add({ // animation for the left block bottom
    targets: '.hidden-blockOne',
    translateY: ['100%', '0%'],
    translateX: ['-100%', '0%'],
    scale: [0, 1],
    opacity: [0, 1],
    duration: 1000
})
.add({
    targets: '.hidden-blockTwo',
    translateY: ['-100%', '0%'],
    // translateX: ['100%', '0%'],
    // scale: [0, 1],
    opacity: [0, 1],
    duration: 1000
})
