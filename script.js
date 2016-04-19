var PEN_COLORS = ['#657b83', '#cb4b16', '#2aa198', '#b58900',
      '#6c71c4', '#dc322f', '#268bd2', '#d33682', '#859900'];
var SPACE_KEYCODE = 32;
var counter = 0;
var canDraw = false;
$(init());

function addEventListeners() {
    $(window).resize(function () {
        update();
    });
    $('#container').click(function () {
        canDraw = !canDraw;
    });
    $(document).keydown(function(e) {
        // clear the drawing if the user presses space, cycle colors
        if (e.which === SPACE_KEYCODE) {
            $('.square').css('background-color', '#fdf6e3');
            canDraw = false;
            counter++;
        }
    });
}

function addChildren(target, numChildren) {
    var child = '<div class="square"></div>';
    for (var i = 0; i < numChildren; i++) {
        target.append(child);
    }
}

function update(n=50) {
    var smallerSide = Math.min($(window).innerWidth(), $(window).innerHeight());
    var childSide = smallerSide / n;
    $('#container').width(smallerSide);
    $('#container').height(smallerSide);
    $('#container').empty();

    addChildren($('#container'), n * n);
    $('.square').width(childSide);
    $('.square').height(childSide);
    $('.square').hover(function () {
        if (canDraw) {
            $(this).css('background-color',
                PEN_COLORS[counter % PEN_COLORS.length]);
        }
    });
}

function init() {
    update();
    addEventListeners();
}

