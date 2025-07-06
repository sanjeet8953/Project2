let p = document.querySelector('button')
let h1= document.querySelector('h1');
p.addEventListener('click', function() {
   alert('Hello, World!');
  changeColor()
});
function changeColor() {
   h1.style.color = 'blue';
}