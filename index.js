var btn = document.getElementById('roll-button');
var img = document.getElementById('dice-image');
btn.onclick = function() {
  var r = Math.random()*6;
  r = Math.round(r);
  if (r==1)
  img.src = "images/1.png";
  if (r==2)
  img.src = "images/2.png";
  if (r==3)
  img.src = "images/3.png";
  if (r==4)
  img.src = "images/4.png";
  if (r==5)
  img.src = "images/5.png";
  if (r==6)
  img.src = "images/6.png";

}
