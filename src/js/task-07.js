let slider = document.getElementById("font-size-control");

let text = document.getElementById("text");

slider.oninput = function() {
  text.style.fontSize = slider.value + "px";
};
