let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach(valueDisplay => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("date-val"));
  let duration = Math.floor(interval / endValue); // 카운트업 간격 결정 -> 크기에 따라
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
