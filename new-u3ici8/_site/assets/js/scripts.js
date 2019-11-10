(function() {
    // faq
    var faqs = document.querySelectorAll('[id^=faq-]');
    var answers = document.querySelectorAll('[id^=answer-]');

    faqs.forEach(function(el, idx) {
        answers[idx].classList.add('hide');

        el.addEventListener('click', function(e) {
           e.preventDefault();

           faqs[idx].classList.toggle('rotate');
           answers[idx].classList.toggle('hide');
        });
    });

    // team
    if (window.innerWidth < 1024) {
        var membersDescriptions = document.querySelectorAll('[id^=member-description-]');
        var membersSocs = document.querySelectorAll('[id^=member-socs-]');
        var membersArrow = document.querySelectorAll('[id^=member-arrow-]');

        membersArrow.forEach(function(el, idx) {
            membersDescriptions[idx].classList.add('hide');
            membersSocs[idx].classList.add('hide');

            el.addEventListener('click', function(e) {
                e.preventDefault();

                membersArrow[idx].classList.toggle('rotate');
                membersDescriptions[idx].classList.toggle('hide');
                membersSocs[idx].classList.toggle('hide');
            });
        });
    }


    // email form
    var form = document.getElementById('email-form');
    var emailInput = document.querySelector('#email-form input[type=email]');
    var errorMessage = document.querySelector('.form-status-error');
    var submitButton = document.querySelector('#email-form button[type=submit]');
    var regex = /^[^ ]+@[^ ]+\.[^ ].+$/;

    form.addEventListener('submit', function(e) {
        if (regex.test(emailInput.value)) {
            errorMessage.style.display = 'none';
            submitButton.classList.remove('error');
            submitButton.querySelector('span').style.display = 'block';
            submitButton.querySelector('.error').style.display = 'none';

            setTimeout(function () {
                emailInput.value = '';
            }, 1000);
        } else {
            e.preventDefault();

            errorMessage.style.display = 'block';
            submitButton.classList.add('error');
            submitButton.querySelector('span').style.display = 'none';
            submitButton.querySelector('.error').style.display = 'block';
        }
    });


    // animate gif's
    window.onload = function() {
        var gifs = document.querySelectorAll('img[src*=gif]');

        if (gifs.length) {
            for (var i = 0; i < gifs.length; i++) {
                if (i === 1) {
                    // for plug and play image
                    new Waypoint({
                        element: gifs[1],
                        handler: function() {
                            var plugAndPlayPreview = document.querySelector('.plug-and-play-preview');
                            plugAndPlayPreview.style.display = 'none';
                            this.element.setAttribute('src', 'assets/images/plug-and-play.gif');
                            this.destroy();
                        },
                        offset: '50%',
                    });
                } else {
                    new Waypoint({
                        element: gifs[i],
                        handler: function() {
                            this.element.setAttribute('src', this.element.getAttribute('src'));
                            this.destroy();
                        },
                        offset: '50%',
                    })
                }
            }
        }
    };
})();