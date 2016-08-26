angular.module('umbraco').controller('ContentPickerDemo.Controller', function ($scope, dialogService) {

    if (!$scope.model.value) {
        $scope.model.value = {
            items: []
        };
    }

    $scope.addSingle = function () {
        dialogService.contentPicker({
            callback: function (item) {
                $scope.model.value.items.push({
                    id: item.id,
                    icon: item.icon,
                    name: item.name
                });
            }
        });
    };

    $scope.addMultiple = function () {
        dialogService.contentPicker({
            multiPicker: true,
            callback: function (items) {
                angular.forEach(items, function (item) {
                    $scope.model.value.items.push({
                        id: item.id,
                        icon: item.icon,
                        name: item.name
                    });
                });
            }
        });
    };

    $scope.remove = function(index) {
        $scope.model.value.items.splice(index, 1);
    };

});