app.controller('ProductsCtrl', function($scope, $state, ProductsSrv, UserCartSrv, UserCheckoutSrv) {

    $scope.getProduct = ProductsSrv.getProduct($state.params.id).then(function(response) {
        $scope.productID = response.data;
        console.log('derp');

    });

    $scope.getAllProducts = ProductsSrv.getAllProducts().then(function(response) {
        $scope.products = response.data;
        console.log('derp');

    });

    $scope.productQty = 1;

    // Send Product to Cart
    $scope.addToCart = (item) => {
        item.productQty = $scope.productQty;
        $scope.cartstorage = UserCartSrv.cartStorage(item);

    };

});
