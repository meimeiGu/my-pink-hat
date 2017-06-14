<?php if (!defined('THINK_PATH')) exit();?> <!DOCTYPE html>
 <html lang="en">
 <head ng-app="app" ng-controller="controller">
    <meta charset="UTF-8">
    <title>Document</title>
 </head>
 <body>
    <script type="text/javascript" src="/admin1/Public/Js/angular.min.js"></script>
    <script type="text/javascript" src="/admin1/Public/Js/function/handle.js"></script>
    <script type="text/javascript" src="/admin1/Public/Js/angular-cookies.min.js"></script>
    <script>
        var app = angular.module('app',['ngCookies']);
        app.controller('controller',function($scope,$http,$cookies,$window){ 

            $scope.entity={
                gbgoods_id:2,
                gbsku_id:1,
                gbsingleorder_price:2,
                gbsingleorder_num:2,
                userId:4
            } 
            console.log($scope.entity);
            $http.post('/admin1/index.php/Index/inputfdata',$scope.entity)
               .success(function(data){
                console.log(data);
           })

        });
    </script>
    <script type="text/javascript" src="/admin1/Public/Js/function/angularConfig.js"></script>
 </body>
 </html>