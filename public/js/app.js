var app = angular.module('farmerMarket', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
        })

    .state('products', {
        url: '/products',
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
    })

    .state('productDetails', {
        url: '/productDetails',
        templateUrl: 'views/productDetails.html',
        // controller: ''
    })

    .state('userCart', {
        url: '/userCart',
        templateUrl: 'views/userCart.html',
         controller: 'UserCartCtrl'
    })

    .state('userCheckout', {
        url: '/userCheckout',
        templateUrl: 'views/userCheckout.html',
        // controller: ''
    });

});
