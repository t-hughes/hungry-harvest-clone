app.controller('ProductDetailsCtrl', function($scope) {

    $scope.productQty = 1;

    // Send Product to Cart
    $scope.addToCart = (item) => {
      item.productQty = $scope.productQty;
      $scope.cartstorage = UserCartSrv.cartStorage(item);
  }
});
