let dragItem = null

const dragElems = document.querySelectorAll('.drag-elem')

for (let index = 0; index < dragElems.length; index++) {
  dragItem = dragElems[index]

  dragItem.addEventListener('dragstart', (ev) => {
    ev.target.style.opacity = '1'
  })
}
