/* global $ */
// the above line is to temporarily prevent eslint from complaing about $ from jQuery
const PEN_COLORS = ['#657b83', '#cb4b16', '#2aa198', '#b58900',
      '#6c71c4', '#dc322f', '#268bd2', '#d33682', '#859900'];
const SPACE_KEYCODE = 32;
let counter = 0;
let canDraw = false;


function addChildren(target, numChildren) {
  const child = '<div class="square"></div>';
  for (let i = 0; i < numChildren; i++) {
    target.append(child);
  }
}

function update(n = 50) {
  const smallerSide = Math.min($(window).innerWidth(), $(window).innerHeight());
  const childSide = smallerSide / n;
  $('#container').width(smallerSide);
  $('#container').height(smallerSide);
  $('#container').empty();

  addChildren($('#container'), n * n);
  $('.square').width(childSide);
  $('.square').height(childSide);
  $('.square').hover(function draw() {
    if (canDraw) {
      $(this).css('background-color',
          PEN_COLORS[counter % PEN_COLORS.length]);
    }
  });
}
function addEventListeners() {
  $(window).resize(() => update());
  $('#container').click(() => { canDraw = !canDraw; });
  $(document).keydown(event => {
    if (event.which === SPACE_KEYCODE) {
      $('.square').css('background-color', '#fdf6e3');
      canDraw = false;
      counter++;
    }
  });
}

function init() {
  update();
  addEventListeners();
}
$(init());
