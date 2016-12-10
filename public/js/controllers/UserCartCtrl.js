app.controller('UserCartCtrl', function($scope, UserCartSrv) {

    // Get Cart Items
  $scope.cart = UserCartSrv.getCart();

  // Cart Quantity
  $scope.cartQty = () => {
    return $scope.cart.reduce((previous, current) => +current.productQty + previous, 0);
  };

  // Update Quantity & Pricing
  $scope.updateQty = () => {
    UserCartSrv.updateCart($scope.cart);
    $scope.subtotal();
    $scope.tax();
    $scope.grandtotal();
  };


  // Remove Cart Items
  $scope.removeItem = ($index) => {
    UserCartSrv.removeItem($index);
  };

  // Get Subtotal
  $scope.subtotal = () => {
    return UserCartSrv.subtotal();
  };

  $scope.tax = () => {
    return UserCartSrv.tax();
  };

  // Grand Total
  $scope.grandtotal = () => {
    return UserCartSrv.grandtotal();
  };

});
