app.controller('ProductDetailsCtrl', function ($scope, $state, ProductsSrv) {

  // Get Product for Product View
  $scope.getProduct = ProductsSrv.getProduct($state.params.id)
    .then(function(response) {
      $scope.product = response.data;
    });

});
