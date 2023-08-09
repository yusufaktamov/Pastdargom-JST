var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 4){
        counter = 1;
    }
}, 5000)

document.getElementById('fotogalereyaBtn').click


let valueDisplays = document.querySelectorAll(".num");
let interval = 100;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});