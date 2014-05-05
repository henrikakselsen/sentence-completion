'use strict';

angular.module('sentenceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.sentences = [];

    $scope.addSentence = function(){
      $scope.sentences.push($scope.currentStem + ' ' + $scope.newSentence);
      $scope.newSentence = '';
    };

    $scope.saveAll = function(){
      var blob = new Blob($scope.sentences, {type: 'text/plain;charset=utf-8'});
      saveAs(blob, $scope.currentStem + '.txt');
    };
  });
