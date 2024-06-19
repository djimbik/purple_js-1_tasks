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

        if (!this.tasks) {
            this.tasks = [];
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

const newTasks = {};
let data = {
    title: 'Новая для теста',
    description: 'Тестовое описание',
    order: 10,
    priority: 10,
};

toDoList.addTask.call(newTasks, data);
toDoList.addTask.bind(newTasks, {title: 'Решить 5 задач по JS', priority: 1, order: 1})();
toDoList.addTask.apply(newTasks, [{title: 'Сходить на тренировку', priority: 2, order: 3}]);
toDoList.addTask.apply(newTasks, [{title: 'Погулять по лесу', priority: 4, order: 4}]);
console.log(newTasks.tasks);
toDoList.deleteTask.call(newTasks, 4);
console.log(newTasks.tasks);
toDoList.refreshTask.apply(newTasks, [2, {title: 'Почитать книгу'}]);
console.log(newTasks.tasks);
toDoList.sortTasks.bind(newTasks)();
console.log(newTasks.tasks);
