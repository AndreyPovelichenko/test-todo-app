define([
    '../../bower_components/underscore/underscore',
    'backbone',
    'collections/tasks',
    'views/addTask',
    'views/taskList',
    'views/controls',
    'views/highcharts',
    'text!templates/layout.html'
], function(_, Backbone, TasksCollection, AddTaskView, TaskListView, ControlsView, HighchartsView, BaseMarkup) {

    var mockData = [
        {title: 'Test task 1'},
        {title: 'Test task 2'},
        {title: 'Test task 3'},
        {title: 'Test task 4'}
    ];

    var LayoutView = Backbone.View.extend({
        el: '#taskManager',

        initialize: function() {
            this.buildWrapper();
            this.createChildren();
            this.bindChildrenEvents();
        },

        buildWrapper: function() {
            this.$el.html(BaseMarkup);
        },

        createChildren: function() {
            var tasksCollection = new TasksCollection(mockData);
            this.regions = {
                addTask: new AddTaskView({collection: tasksCollection}),
                taskList: new TaskListView({collection: tasksCollection}),
                controls: new ControlsView({collection: tasksCollection}),
                highcharts: new HighchartsView({collection: tasksCollection})
            };
        },

        bindChildrenEvents: function() {
            this.listenTo(this.regions.taskList, "taskList:empty", this.hideList);
            this.listenTo(this.regions.taskList, "taskList:new", this.showList);
        },

        render: function() {
            _.each(this.regions, function(view) {
                view.render();
            });
            if (this.regions.taskList.collection.isEmpty()) {
                this.hideList();
            }
        },

        _filterRegionsExclude: function(key) {
            return _.omit(this.regions, key);
        },

        hideList: function() {
            var regions = this._filterRegionsExclude('addTask');
            _.each(regions, function(view) {
                view.$el.hide();
            });
            this.$(".emptyList").show();
        },

        showList: function() {
            var regions = this._filterRegionsExclude('addTask');
            _.each(regions, function(view) {
                view.$el.show();
            });
            this.$(".emptyList").hide();
        }
    });

    return LayoutView;
});