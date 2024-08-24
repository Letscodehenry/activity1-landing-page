ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400});

ScrollReveal().reveal('.info, .im2, .in2, .im4, .in4, .im6, .in6, .im8', { delay: 800, origin:'left' });
ScrollReveal().reveal('.in1, .img1, .im3, .in3, .im5, .in5, .im7, .in7', { delay: 800, origin:'right' });

ScrollReveal().reveal('.im2, .in2, .im4, .in4, .im6, .in6, .im8,.in1, .im3, .in3, .im5, .in5, .im7, .in7', { delay: 800, origin:'top' });
ScrollReveal().reveal('#footer', { delay: 800, origin:'bottom' });
