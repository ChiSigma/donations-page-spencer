var fade = document.querySelector('.fade');
    var topNav = document.querySelector('.top');
    var title = document.querySelector('.title');
    var icons = Array.prototype.slice.call(document.querySelectorAll('.icon'));

    var image = document.getElementsByTagName('img')[0];
    var aquarelle = new Aquarelle(image, 'img/mask.png', {
        autoplay: true,
        loop: false
    });
    
    function scrollReset() {
        var body = document.body;
        aquarelle.progress = body.scrollTop / (body.scrollHeight - window.innerHeight);
        aquarelle.reset();
    }
    
    aquarelle.addEventListener('created', function() {
        var canvas = this.getCanvas();
        canvas.removeAttribute('style');
        image.parentNode.insertBefore(canvas, image.nextSibling);
        image.parentNode.removeChild(image);
    });

    aquarelle.addEventListener('changed', function(event) {
        fade.style.opacity = this.transitionInRange(0, 1, 0, 1000);
        
//        fade.style.opacity = this.transitionInRange(1, 0, 7183, 7933);

        topNav.style.opacity = this.transitionInRange(0, 1, 4330, 5660);

        var canvas = this.getCanvas();
        canvas.style.webkitFilter = 'blur(' + this.transitionInRange(24, 0, 1500) + 'px)';
        canvas.style.webkitTransform = canvas.style.transform = 'translate(-50%, -50%) scale(' + this.transitionInRange(.75, 1) + ')';

        title.style.opacity = this.transitionInRange(0, 1, 0, 2016);
        title.style.webkitTransform = title.style.transform = 'scale(' + this.transitionInRange(.8, 1, 0, 5883) + ')';

        icons.forEach(function(icon) {
            icon.style.webkitFilter = 'blur(' + event.target.transitionInRange(4, 0, 3433, 4149) + 'px)';
            icon.style.opacity = event.target.transitionInRange(0, 1, 3433, 4266);
            icon.style.webkitTransform = icon.style.transform = 'scale(' + event.target.transitionInRange(1.3, 1, 3433, 4400) + ')';
        });
    });
    
    
//
//    aquarelle.addEventListener('created', function() {
//        var body = document.body;
//        var canvas = this.getCanvas();
//
//        canvas.removeAttribute('style');
//        body.appendChild(canvas);
//
//        scrollReset();
//    });
//    aquarelle.addEventListener('changed', function() {
//        document.body.style.webkitFilter = 'blur(' + this.transitionInRange(0, 8, 3000) + 'px)';
//
//        text.style.webkitFilter = 'blur(' + this.transitionInRange(0, 2, 0, 1000) + 'px)';
//        text.style.webkitTransform = text.style.transform = 'scale(' + this.transitionInRange(1, .95, 0, 1000) + ')';
//        text.style.opacity = this.transitionInRange(1, 0, 0, 1000);
//
//        var canvas = this.getCanvas();
//        canvas.style.webkitTransform = canvas.style.transform = 'translate(-50%, -50%) scale(' + this.transitionInRange(.75, 1) + ')';
//    });
//    document.addEventListener('DOMContentLoaded', scrollReset);
//    window.addEventListener('scroll', scrollReset);
//    window.addEventListener('resize', scrollReset);
