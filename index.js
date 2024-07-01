

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Fonction pour ajouter une nouvelle tâche
    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            deleteBtn.className = 'delete';
            li.appendChild(deleteBtn);

            todoList.appendChild(li);

            // Réinitialiser l'input
            todoInput.value = '';
        }
    }

    // Événement pour le bouton "Add"
    addBtn.addEventListener('click', addTodo);

    // Événement pour la touche "Enter"
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // Événement pour la suppression des tâches
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});