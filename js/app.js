var photos = [ {"file": "balloons.jpg",
                "description": "Palloncini colorati.",
                "tags": "palloncini giallo rosso verde colori"},
 
               {"file": "cards.jpg",
                "description": "Asso di cuori.",
                "tags": "carte da gioco asso di cuori"},
              
               {"file": "watchmaker.jpg",
                "description": "L'orologiaio.",
                "tags": "orologio orologiaio occhi"}];
 
function PhotoDetailCtrl($scope, $routeParams) {
  $scope.photo = photos[$routeParams.id - 1];
}


