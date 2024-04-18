const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#result')

  if(height === '' || height < 0 || isNaN(height)) {
    result.value = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.value = `Please give a valid weight ${height}`;
  } else {
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2)
    // result.innerHTML = `<span>${bmi}</span>`
    document.querySelector('#result').value = bmi;
  }

})