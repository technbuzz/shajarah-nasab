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
    li.innerHTML = `
      <div class="person">
        <img src="img/user.png" width="64">
        <h3 class="person__name">${title} ${firstName} ${lastName}</h3>
        <p>${item.description.ur}</p>
      </div>
    `

    persons.appendChild(li)
  })

  
  
  
  

}
