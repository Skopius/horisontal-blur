function overflowBlur(element) {
    let sWidth = element.scrollWidth,
        sPosition = element.scrollLeft,
        width = element.offsetWidth;

    if (sPosition > 0) {
        element.parentNode.querySelector('.leftBlur').classList.add('show');
    } else {			
        element.parentNode.querySelector('.leftBlur').classList.remove('show');
    }

    console.log(sPosition, sWidth, width);

    if (sPosition < sWidth - width) {			
        element.parentNode.querySelector('.rightBlur').classList.add('show');
    } else {
        element.parentNode.querySelector('.rightBlur').classList.remove('show');
    }
}


$('.prodecor-overflow').on('scroll', function() {
    overflowBlur(this);
})