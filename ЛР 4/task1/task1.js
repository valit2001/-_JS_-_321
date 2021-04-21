function getResultsFromFormula(xValues) {
  const y = []

  xValues.forEach(xValue => {
    y.push(
      Math.pow(Math.sin(xValue), 2) + Math.tan(xValue)
    )
  })

  return y
}

function showHideEl(el) {
  let showCount = 0

  setInterval(() => {
    showCount % 2 === 0 ? el.style.display = 'flex' : el.style.display = 'none'
    showCount++
  }, 200)
}

function startMove(values, el) {
  values.forEach((value, index) => {
    const moveRight = (value * 100) < 0 ? (value * 100) : (value * 100) * (-1)
    const moveBottom = (value * 100) < 0 ? (value * 100) : (value * 100) * (-1)

    setTimeout(() => {
      el.style.right = moveRight + 'px'
      el.style.bottom = moveBottom + 'px'
    }, 500 * index);
  })
}

//Main.js
//task 1
const $el = document.getElementById('movingLine')
const movingValue = getResultsFromFormula([0.5, 23, 23, 43, 33, 21, 0.4, 0.8])

startMove(movingValue, $el)
showHideEl($el)