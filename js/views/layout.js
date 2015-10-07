define([
    'backbone',
    'collections/tasks',
    'views/addTask',
    'views/taskList',
    'views/controls',
    'text!templates/layout.html'
], function(Backbone, TasksCollection, AddTaskView, TaskListView, ControlsView, TMPL) {

    var mockData = [
        //{title: 'Test task 1'},
        //{title: 'Test task 2'},
        //{title: 'Test task 3'},
        //{title: 'Test task 4'}
    ];

    var LayoutView = Backbone.View.extend({
        id: 'taskManager',

        wrapper: TMPL,

        initialize: function() {
            this.createChildren();
            this.bindChildrenEvents();
            this.render();
        },

        createChildren: function() {
            var tasksCollection = new TasksCollection(mockData);
            this.regions = {
                addTask: new AddTaskView({collection: tasksCollection}),
                taskList: new TaskListView({collection: tasksCollection}),
                controls: new ControlsView({collection: tasksCollection})
            };
        },

        bindChildrenEvents: function() {
            this.listenTo(this.regions.taskList, "taskList:new", this.showList);
            this.listenTo(this.regions.taskList, "taskList:empty", this.hideList);
        },

        render: function() {
            var addTask = this.regions.addTask,
                taskList = this.regions.taskList,
                controls = this.regions.controls;

            this.$el.html([addTask.el, this.wrapper, controls.el]);
            this.$(".content").append(taskList.el);

            if (taskList.collection.isEmpty()) {
                this.hideList();
            }
        },

        showList: function() {
            var taskList = this.regions.taskList,
                controls = this.regions.controls;
            taskList.$el.show();
            controls.$el.show();
            this.$(".empty").hide();
        },

        hideList: function() {
            var taskList = this.regions.taskList,
                controls = this.regions.controls;
            taskList.$el.hide();
            controls.$el.hide();
            this.$(".empty").show();
        }
    });

    return LayoutView;
});