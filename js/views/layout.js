define([
    'underscore',
    'backbone',
    'collections/tasks',
    'views/addTask',
    'views/taskList',
    'views/controls',
    'text!templates/emptyList.html'
], function(_, Backbone, TasksCollection, AddTaskView, TaskListView, ControlsView, TMPL) {

    var mockData = [
        {title: 'Test task 1'},
        {title: 'Test task 2'},
        {title: 'Test task 3'},
        {title: 'Test task 4'}
    ];

    var LayoutView = Backbone.View.extend({
        id: 'taskManager',

        emptyList: TMPL,

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
            var elements = _.pluck(this.regions, 'el');
            this.$el.html(elements);
            if (this.regions.taskList.collection.isEmpty()) {
                this.hideList();
            }
        },

        showList: function() {
            var taskList = this.regions.taskList,
                controls = this.regions.controls;
            taskList.$el.show();
            controls.$el.show();
            this.$(".empty").remove();
        },

        hideList: function() {
            var taskList = this.regions.taskList,
                controls = this.regions.controls;
            taskList.$el.hide();
            controls.$el.hide();
            this.$el.append(this.emptyList);
        }
    });

    return LayoutView;
});