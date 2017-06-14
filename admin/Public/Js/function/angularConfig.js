
app.config(['$compileProvider','$httpProvider', function($compileProvider,$httpProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|sms):/);
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
        for(name in obj) {
            value = obj[name];
            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
}]);
app.directive('loader', function($document, $window) {
    return{
        restrict:"AE",
        link:function(scope, element, attr) {
            var raw = element[0];
            //var loader = true;
            $document.bind( 'scroll', function() {
                if($window.scrollY<$window.innerHeight*0.3 ){
                    scope.setfalse();
                }
                if($window.scrollY>$window.innerHeight*0.3)
                    scope.settrue();
                //console.log($window.innerHeight+"--"+$window.scrollY+"--"+raw.scrollHeight);
                if(($window.innerHeight + $window.scrollY) > raw.scrollHeight-50) {  
                   scope.$apply(attr.howtoload);
                   //loader=false;
                  // setTimeout( function(){loader=true;},2000);
                }
            });
        }
    }
});
app.factory('utilConvertDateToString', ['$filter', function ($filter) {  
    return {  
        getDateToString: function (date, format) {  
            if (angular.isDate(date) && angular.isString(format)) {  
                return $filter('date')(date, format);  
            }  
        },  
        getStringToDate: function (string) {  
            if (angular.isString(string)) {  
                return new Date(string.replace(/-/g, "/"));  
            }  
        }  
    };  
}]);
app.directive('focusOn', function() {
    return function(scope, elem, attr) {
        scope.$on('focusOn', function(e, name) {
            if(name === attr.focusOn) {
                elem[0].focus();
            }
        });
    };
});

app.factory('focus', function ($rootScope, $timeout) {
    return function(name) {
        $timeout(function (){
            $rootScope.$broadcast('focusOn', name);
        });
    }
});
