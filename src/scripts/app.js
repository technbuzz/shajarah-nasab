addEventListener('DOMContentLoaded', async () => {
  console.log('app is ready')
  const response = await fetch('data.json')
  const persons = await response.json()
  
  loadPersons(persons)
  console.log(persons)
})

/** 
* @description
* Renders the list items and append to the unordered list
* @param {Array} data 
* */
function loadPersons(data) {
  const persons = document.querySelector('.person-list');
  data.forEach(item => {
    const li = document.createElement('li')
    const { title, firstName, lastName } = item.name.ur
    li.textContent = `${title} ${firstName} ${lastName}`
    persons.appendChild(li)
  })

  
  
  
  

}
