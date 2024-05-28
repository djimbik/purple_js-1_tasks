// HW - 15
let lastId = 1;

const ToDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
    ],

    addTask(data) {
        if (!data) {
            return this
        }

        data.id = ++lastId;
        this.tasks.push(data);

        return this
    },

    deleteTask(id) {
        const isExitsts = this.tasks.some(({id: taskId}) => taskId === id);
        if (!isExitsts) {
            return `Задача c ${id} не найдена`;
        }

        this.tasks = this.tasks.filter(task => task.id !== id);
        return this;
    },

    refreshTask(id, newData) {
        const taskIndex = this.tasks.findIndex(({id: taskId}) => taskId === id);

        if (taskIndex === -1) {
            return this
        }

        this.tasks[taskIndex] = {...this.tasks[taskIndex], ...newData};

        return this;
    },

    sortTasks() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        return this;
    }
}

ToDoList.addTask({title: 'Решить 5 задач по JS', priority: 1});
ToDoList.addTask({title: 'Сходить в магазин за едой', priority: 3});
ToDoList.addTask({title: 'Сходить на тренировку', priority: 2});
ToDoList.addTask({title: 'Погулять по лесу', priority: 4});
ToDoList.deleteTask(3);
ToDoList.refreshTask(4, {title: 'Сходить на тренировку', priority: 9});
ToDoList.sortTasks();
console.log(ToDoList.tasks)