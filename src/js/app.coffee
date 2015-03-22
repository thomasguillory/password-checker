angular = require 'angular'
moment  = require 'moment'
require 'zxcvbn'
zxcvbn  = window.zxcvbn
delete window.zxcvbn

angular.module('app',[])
.controller 'AppController', ($scope) ->
  $scope.$watch 'password', (password) ->
    if password
      $scope.zxcvbnAnalysis = zxcvbn(password)
    else
      $scope.zxcvbnAnalysis = 0

  $scope.$watch 'zxcvbnAnalysis', (zxcvbnAnalysis) ->

    if zxcvbnAnalysis
      console.log zxcvbnAnalysis

      # Human computation duration
      $scope.crackTimeDisplay = if zxcvbnAnalysis.crack_time_display == 'instant'
        'instant'
      else
        moment.duration(zxcvbnAnalysis.crack_time, 'seconds').humanize()

      # Human entropy evaluation
      switch
        when zxcvbnAnalysis.entropy < 25
          $scope.ranking = 'bad'
        when zxcvbnAnalysis.entropy < 40
          $scope.ranking = 'medium'
        else
          $scope.ranking = 'good'

    else
      $scope.crackTimeDisplay = ''
      $scope.ranking = 'neutral'
