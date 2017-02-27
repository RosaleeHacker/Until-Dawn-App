angular.module('starter.controllers', [])

.controller('StoryCtrl', function($scope) {})

.controller('ScenariosCtrl', function($scope) {})

.controller('CluesCtrl', function($scope, Totems) {
	$scope.totems = Totems.all();
})

.controller('TotemDetailCtrl', function($scope, $stateParams, Totems) {
	$scope.totem = Totems.get($stateParams.totemId);
	})

.controller('ButterflyCtrl', function($scope) {})

.controller('CharactersCtrl', function($scope, Characters) {
  $scope.characters = Characters.all();
  })

.controller('CharacterDetailCtrl', function($scope, $stateParams, Characters) {
  $scope.character = Characters.get($stateParams.characterId);
});
