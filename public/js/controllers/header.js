'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];


    $scope.isActive = function (viewLocation) { 
    	console.log('lior' + $location.path());
        return viewLocation === $location.path();
    };
    
    $scope.isCollapsed = false;
}]);