'use strict';

{
  
  ScrollReveal().reveal('.section-ttl', { 
    delay: 200,
    duration: 800, 
    origin: 'left', 
    distance: '2.5rem',
    reset: true,
    mobile: true,
    viewFactor: 0.5
  });

  ScrollReveal().reveal('.contents', { 
    delay: 200,
    duration: 600, 
    origin: 'right', 
    distance: '180rem',
    reset: true,
    mobile: false,
    viewFactor: 0.5
  });

  ScrollReveal().reveal('.contents2', { 
    duration: 900, 
    origin: 'right', 
    distance: '25rem',
    reset: true, 
    mobile: false,
    viewFactor: 0.5
  });

  ScrollReveal().reveal('.contents3', { 
    delay: 100,
    duration: 900, 
    origin: 'right', 
    distance: '5rem',
    reset: true,
    mobile: false,
    viewFactor: 0.5
  });

}