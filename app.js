const grid = document.querySelector('#grid-container');

grid.onclick = handleClick;

function handleClick(e) {
  if (e.target.matches(':not(li)')) return;
  
  const item = e.target;
  
  item.classList.toggle('selected');
}

