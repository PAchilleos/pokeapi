(function () {

    var myCtrl = function ($scope, $http) {
        console.log("this bit is running");

        $scope.init = function () {

            $http.get('http://pokeapi.co/api/v2/pokemon/' + $scope.pokeNumber + '/')
                .then(function (result) {
                    return $scope.poke = result.data;
                });

        }


    };
    angular.module('app').controller('getPokemon', ['$scope', '$http', myCtrl]);
}());