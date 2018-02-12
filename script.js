// cool button
var coolBtn = $('.coolBtn');

coolBtn.click(function() {
  if (!coolBtn.hasClass('coolActive')) {
    coolBtn.addClass('coolActive');
  }
})