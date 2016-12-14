app.controller('ProductsCtrl', function($scope, ProductsSrv, UserCartSrv) {

    $scope.getAllProducts = ProductsSrv.getAllProducts()
      .then(function(response) {
        $scope.products = response.data;
    });

    $scope.productQty = 1;

    // Send Product to Cart
    $scope.addToCart = (item) => {
      item.productQty = $scope.productQty;
      $scope.cartstorage = UserCartSrv.cartStorage(item);
    };


    

});
