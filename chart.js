(function(){
  
    var app = angular.module("chart",[]);
    app.controller("chartController",["$scope","$window",function($scope,$window){
         //stages
         $scope.stages = ["stage1","stage2","stage3","stage4","stage5","stage6"];
         //many stages
         $scope.manystages = ["app1","app2","app3","app4","app5","app6","app7","app8","app9","app10","app11","app12",
         "app13","app14","app15","app16","app17","app18","app19","app20","app21","app22","app23","app24",
         "app25","app26","app27","app28","app29","app30","app31","app32"]

         angular.element(window).on('resize', function() {
            $scope.$apply();
         });
        
        
         //get the bar width
        $scope.barStyle = function(index){
               var maxLength = window.innerWidth - 400;
               var count = $scope.stages.length;
               var division = Math.round(maxLength/count);
               var width = division*(count - index);
               return { 'width': width};
        };

        $scope.barManyStyle = function(index){
            var maxLength = window.innerWidth - 400;
            var minLength = Math.round(maxLength/4);
            var d = (minLength - maxLength)/($scope.manystages.length - 1);
            
            var width = maxLength + index*d;
            return { 'width': width};
       };

    }]);

}());