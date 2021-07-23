const activeAdd = (cont,box) =>{
  const container = document.querySelector(`.${cont}`)
  container.addEventListener('click', function (e) {
    const items = document.querySelectorAll(`.${box}`)
    console.log(items)
    const target = e.target
    console.log(target)
    Array.from(items).forEach(item => {
      item.classList.remove(`${box}--active`)
    })
    target.classList.add(`${box}--active`)
  })
}
activeAdd('navigation','navigation__link')
activeAdd('side-navigation','side-navigation__link')
activeAdd('gallary-brands','card-brands__overlay')
