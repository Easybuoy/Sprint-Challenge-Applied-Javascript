let tl = new TimelineLite();
class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.carouselImages = document.querySelectorAll('.carousel img');
        this.prevIndex = null;
        this.nextIndex = null;
        this.showImage();
        this.slideLeft();
        this.slideRight();
    }

    slideLeft() {
        this.leftButton.addEventListener('click', () => { 
            if (this.prevIndex > 0) {
                this.carouselImages.forEach(image => image.style.display = 'none');
                this.nextIndex --;
                this.prevIndex = this.nextIndex - 1;
                this.carouselImages[this.prevIndex].style.display = 'flex';
                tl.from(this.carouselImages[this.prevIndex], 1, {opacity:0, scaleX: 1, ease: Power2.easeIn});

                if (this.nextIndex >= this.carouselImages.length) {
                    this.nextIndex = 0;
                }
            }
            this.leftButton.classList.add('disabled');
        });
    }

    slideRight() { 

        this.rightButton.addEventListener('click', () => { 
            this.leftButton.classList.remove('disabled');

            if (this.nextIndex === this.carouselImages.length) {
                this.nextIndex = 0;
                this.prevIndex = this.carousel.length - 1;
                this.leftButton.classList.add('disabled');
            }

            this.carouselImages.forEach(image => image.style.display = 'none');
            this.carouselImages[this.nextIndex].style.display = 'flex';
            
            tl.from(this.carouselImages[this.nextIndex], 1, {opacity:0, scaleX: 1, ease: Power2.easeIn});

            this.nextIndex ++;
            this.prevIndex = this.nextIndex - 1;
        });
    }

    showImage() {
        this.carouselImages.forEach((image,i) => {
            if (i === 0) {
                image.style.display = 'flex';
                this.nextIndex = 1;
                this.prevIndex = this.nextIndex - 1;
                this.leftButton.classList.add('disabled');
            }

            
        });
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
