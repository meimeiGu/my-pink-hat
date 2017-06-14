/*(function () {
    var app = angular.module("UsedgoodsModule", []);

    app.config(function ($controllerProvider) {
        app.controller = $controllerProvider.register;
    });
})();*/


/*angular.module("UsedgoodsModule").directive("appLoader", ["$http", "$compile", function ($http) {
    return function (scope, element, attrs) {
        var module = attrs.module;
        var url = attrs.url;
        var scripts = attrs.scripts.split(",") || [];

        try {
            var m = angular.module(module);
        }
        catch (ex) {
            angular.module(module, []);
        }

        $script(scripts, function () {
            scope.$apply(function () {
                $http.get(url).success(function (result) {
                    var elem = angular.element(result);
                    angular.bootstrap(elem, [module]);
                    element.append(elem);
                });
            });
        });
    };
}]);*/
