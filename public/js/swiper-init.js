document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: false, // Disable looping
        autoplay: {
            delay: 3000, // Time in ms before switching to the next slide
            disableOnInteraction: false, // Allows autoplay to continue after user interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>'; // Customize bullet rendering if needed
            },
        },
        on: {
            init: function () {
                this.autoplay.start(); // Start autoplay on initialization
                this.slides[this.activeIndex].querySelector('.content').style.opacity = '1'; // Make content visible
                this.slides[this.activeIndex].querySelector('.content').style.transform = 'translateY(0) scale(1)'; // Show initial content
            },
            slideChangeTransitionStart: function () {
                const previousSlide = this.slides[this.previousIndex].querySelector('.content');
                const currentSlide = this.slides[this.activeIndex].querySelector('.content');
                previousSlide.style.opacity = '0'; // Fade out previous content
                previousSlide.style.transform = 'translateY(50px) scale(0.9)'; // Move down and shrink
                currentSlide.style.opacity = '0'; // Start hidden
                currentSlide.style.transform = 'translateY(50px) scale(0.9)'; // Position it down and smaller

                // Trigger the animation for the new slide
                setTimeout(() => {
                    currentSlide.style.opacity = '1'; // Make content visible
                    currentSlide.style.transform = 'translateY(0) scale(1)'; // End position
                }, 100); // Delay slightly to allow transition
            }
        },
    });
});
