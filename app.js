
const todo  = document.querySelector('#do');
const add   = document.querySelector('#add');
const list  = document.querySelector('#list');

// add.addEventListener('click', function(){

//     list.innerHTML =`<li class="list-group-item">${todo.value}</li>`
    
// }); 


add.addEventListener('click', () => {
    
    let li       = document.createElement('li');
    li.className = ' list-group-item';
    li.innerText = todo.value;

    list.appendChild(li);

    todo.value = '';
});








// const todolist = ['ami','tumi','tumira'];


// add.addEventListener('click', () => {

// todolist.push(todo.value);

// todolist.map(data => {
// list.innerHTML +=`<li class="list-group-item">${data}</li>`;
// });

// });

