define([
    'underscore',
    'backbone',
    'collections/tasks',
    'views/addTask',
    'views/taskList',
    'views/controls',
    'views/highcharts',
    'text!templates/layout.html'
], function(_, Backbone, TasksCollection, AddTaskView, TaskListView, ControlsView, HighchartsView, BaseMarkup) {

    var LayoutView = Backbone.View.extend({
        el: '#taskManager',

        initialize: function() {
            this.buildWrapper();
            this.createDependencies();
            this.waitDependencies();
        },

        buildWrapper: function() {
            this.$el.html(BaseMarkup);
        },

        createDependencies: function() {
            this.collection = new TasksCollection();
        },

        waitDependencies: function() {
            var self = this;
            self.collection.fetch({
                success: function() {
                    self.buildLayout();
                }
            });
        },

        buildLayout: function() {
            this.createChildren();
            this.bindChildrenEvents();
            this.render();
        },

        createChildren: function() {
            this.regions = {
                addTask: new AddTaskView({collection: this.collection}),
                taskList: new TaskListView({collection: this.collection}),
                controls: new ControlsView({collection: this.collection}),
                highcharts: new HighchartsView({collection: this.collection})
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
            if (this.collection.isEmpty()) {
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