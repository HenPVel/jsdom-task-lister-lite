document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.querySelector("#tasks") //this is the task ul
  const formElement = document.querySelector("#create-task-form")
  let taskElement = document.getElementById("new-task-description")

  formElement.addEventListener("submit", function(event) {
      event.preventDefault()

    newTaskDescription = taskElement.value
    const newLiToAdd = document.createElement('li')
    newLiToAdd.innerText = newTaskDescription
   
    taskList.appendChild(newLiToAdd)
    // console.log(newLiToAdd)

  })

});
