// HW - 16
let lastId = 1;

const toDoList = {
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
        const isExists = this.tasks.some(({id: taskId}) => taskId === id);
        if (!isExists) {
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
        this.tasks.sort((a, b) => a.order - b.order);
        return this;
    }
}

const newTasks = {
    tasks: [
        {
            name: 'Помыть посуду',
            id: 1,
            description: 'Описание',
            order: 0,
        },
    ],
}

newTasks.addTask = toDoList.addTask.bind(newTasks);
newTasks.deleteTask = toDoList.deleteTask.bind(newTasks);
newTasks.refreshTask = toDoList.refreshTask.bind(newTasks);
newTasks.sortTasks = toDoList.sortTasks.bind(newTasks);

newTasks.addTask({title: 'Решить 5 задач по JS', priority: 1, order: 1});
newTasks.addTask({title: 'Сходить в магазин за едой', priority: 3, order: 2});
newTasks.addTask({title: 'Сходить на тренировку', priority: 2, order: 3});
newTasks.addTask({title: 'Погулять по лесу', priority: 4, order: 4});
newTasks.deleteTask(3);
newTasks.refreshTask(4, {title: 'Сходить на тренировку', priority: 9, order: 3});
newTasks.sortTasks();
console.log(newTasks.tasks)
