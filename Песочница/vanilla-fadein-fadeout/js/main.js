document.addEventListener("DOMContentLoaded", function(event) { 
    // работа fadeIn и fadeOut
    const fadeIn = (el, timeout, display) => {
        el.style.opacity = 0;
        el.style.display = display || 'block';
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        }, 10);
    };
    const fadeOut = (el, timeout) => {
        el.style.opacity = 1;
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0;

        setTimeout(() => {
            el.style.display = 'none';
        }, timeout);
    };


    // привязка fadeIn и fadeOut к конкретным классам
    const blocks = document.querySelectorAll('.block');
    const btns = document.querySelectorAll('.btn');
    let flags_blocks = [];
    
    for(let i = 0; blocks.length > i; i++){
        flags_blocks[i] = false;
        btns[i].addEventListener('click', (e) => {
            if (!flags_blocks[i]) {
                fadeIn(blocks[i], 1000, 'flex');
                flags_blocks[i] = true;
            } else {
                fadeOut(blocks[i], 1000);
                flags_blocks[i] = false;
            }
        });
    }
});