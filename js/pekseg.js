var app = new angular.module('pekseg', ['ngRoute']);

app.run(function($rootScope, $locale) {
    $locale.NUMBER_FORMATS.GROUP_SEP = ".";
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";

    $rootScope.title = "Házi Pékség";
    $rootScope.subtitle = "Szoftverfejleszttő és tesztelő Viszgafeladat";
    $rootScope.company = "Bajai SZC Türr István Technikum";
    $rootScope.author = "dechev Dániel Ivanov";
    $rootScope.penznem = "Ft";

    $rootScope.rendelesek = [];
    if (sessionStorage.getItem('peksegUser')) {
        $rootScope.loggedIn = true;
        $rootScope.loggedUser = angular.fromJson(sessionStorage.getItem('peksegUser'));
    } else {
        $rootScope.loggedIn = false;
        $rootScope.loggedUser = "";
    }
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/termeklista.html',
        controller: 'productCtrl'
    })
    .when('/reg', {
        templateUrl: 'views/regisztracio.html',
        controller: 'loginCtrl'
    })
    .when('/kosar', {
        templateUrl: 'views/kosar.html',
        controller: 'carCtrl'
    })
    .when('/termekek', {
        templateUrl: 'views/termekek.html',
        controller: 'productCtrl',
    })
    .when('/felhasznalok', {
        templateUrl: 'views/felhazsnalok.html',
        controller: 'userCtrl',
    })
    .when('/rendelesek', {
        templateUrl: 'views/rendelesek.html',
        controller: 'orderCtrl',
    })
    .when('/stat', {
        templateUrl: 'views/statisztika.html',
        controller: 'statCtrl',
    })
});