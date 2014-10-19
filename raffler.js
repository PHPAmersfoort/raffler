function Raffler(attendees) {
    this.attendees = attendees;
    this.spins = 3;
    this.speed = 100;
    this.i = 0;
    this.draw = 0;
    this.elements = $();

    var raffler = this;

    (function() {
        $.each(raffler.attendees, function(index, attendee) {
            $('.attendees').append($('<div class="attendee"></div>').text(attendee));
        });

        raffler.elements = $('.attendees .attendee');
    })();

    this.start = function() {
        raffler.i = 0;
        raffler.draw = raffler.elements.length * raffler.spins + Math.round(Math.random()*10);
        raffler.next();
    };

    this.next = function() {
        if (raffler.i === raffler.draw) {
            $('.attendee:visible').addClass('drawn');
            return;
        }

        var elementIndex = raffler.i % raffler.elements.length;

        var element = $(raffler.elements[elementIndex]);
        raffler.elements.hide();
        element.show();
        setTimeout(function() {
            raffler.next();
        }, raffler.speed);
        if (elementIndex == 0) {
            raffler.speed += 100;
        }
        raffler.i++;
    };
}