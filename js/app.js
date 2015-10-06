define([
    'jquery',
    'models/task',
    'collections/tasks',
    'views/layout',
    'views/addTask',
    'views/taskList',
    'views/task',
    'views/controls'
], function($, Task, TasksCollection, LayoutView, AddTaskView, TaskListView, TaskView, ControlsView) {

    var App = {
        models: {
            Task: Task
        },
        collections: {
            Tasks: TasksCollection
        },
        views: {
            Layout: LayoutView,
            AddTask: AddTaskView,
            TaskList: TaskListView,
            Task: TaskView,
            Controls: ControlsView
        }
    };

    App.init = function() {
        var layout = new LayoutView();
        $('body').append(layout.el);
        console.log('Initialization is complete!');
    };

    return App;
});