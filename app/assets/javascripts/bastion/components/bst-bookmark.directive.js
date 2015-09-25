/**
* @ngdoc directive
* @name Bastion.components.directive:bookmark
* @description
* Provides the bookmarked items for a dropdown menu
*/
angular.module('Bastion.components').directive('bstBookmark', ['$http', function ($http) {
    return {
        scope: {
            controllerName: '='
        },
        templateUrl: 'components/views/bst-bookmark.html',
        link: function (scope) {
            $http({
                method: 'GET',
                url: '/api/v2/bookmarks',
                params: {search: 'controller=' + scope.controllerName}
            }).then(function successCallback(response) {
                scope.bookmarks = response.data.results;
            }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            });
            scope.add = function () {
                scope.openModal();
            }
            scope.save = function () {
                $http({
                    method: 'POST',
                    url: '/api/v2/bookmarks',
                    data: {controller: scope.controllerName}
                }).then(function successCallback(response) {

                }, function errorCallback(response) {

                });
            }
        }
    };
}]);
