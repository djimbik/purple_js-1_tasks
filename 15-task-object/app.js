// HW - 15


const ToDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
    ],

    addTask(title, priority) {
        const newId = (Math.max(...this.tasks.map(task => task.id)) || 0) + 1;

        this.tasks.push({
            title,
            priority,
            id: newId,
        });
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    refreshTask(id, newTitle = null, newPriority = null) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    title: newTitle === null ? task.title : newTitle,
                    priority: newPriority === null ? task.priority : newPriority,
                }
            }
            return task;
        })
    },

    sortTasks() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
}

ToDoList.addTask('Решить 5 задач по JS', 1);
ToDoList.addTask('Сходить в магазин за едой', 3);
ToDoList.addTask('Сходить на тренировку', 2);
ToDoList.addTask('Погулять по лесу', 4);
ToDoList.deleteTask(3);
ToDoList.refreshTask(4, null, 9);
ToDoList.sortTasks();
console.log(ToDoList.tasks)