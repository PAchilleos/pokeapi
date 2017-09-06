(function () {

    var myCtrl = function ($scope, $http) {
        console.log("this bit is running");

        $scope.init = function () {

            $http.get('http://pokeapi.co/api/v2/pokemon/' + $scope.pokeNumber + '/')
                .then(function (result) {
                    return $scope.poke = result.data;
                });

        }

        $scope.addStuff =function () {

            var x = document.getElementById("mySelect");
            var option = document.createElement("option");
            option.text = $scope.poke.name;
            x.add(option);
        }




    };
    angular.module('app').controller('getPokemon', ['$scope', '$http', myCtrl]);
}());

