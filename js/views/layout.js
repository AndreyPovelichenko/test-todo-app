define([
    'underscore',
    'backbone',
    'collections/tasks',
    'views/addTask',
    'views/taskList',
    'views/controls'
], function(_, Backbone, TasksCollection, AddTaskView, TaskListView, ControlsView) {

    var mockData = [
        {title: 'Test task 1'},
        {title: 'Test task 2'},
        {title: 'Test task 3'},
        {title: 'Test task 4'}
    ];

    var LayoutView = Backbone.View.extend({
        id: 'taskManager',

        initialize: function() {
            this.createChildren();
            this.render();
        },

        createChildren: function() {
            var tasksCollection = new TasksCollection(mockData);
            this.regions = [
                new AddTaskView(),
                new TaskListView({collection: tasksCollection}),
                new ControlsView()
            ];
        },

        render: function() {
            var elements = _.pluck(this.regions, 'el');
            this.$el.html(elements);
        }
    });

    return LayoutView;
});