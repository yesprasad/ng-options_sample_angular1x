var app = angular.module("countryApp",[]);

app.controller("countryController",function($scope){
   
    var countriesList = ["India","Germany","USA","Australia","France","Canada","Singapore"];
    
    let countryWithCapitalList = [{ "country" : "India", "capital" : "New Delhi"},
                         { "country" : "Germany", "capital" : "Berlin"},
                         { "country" : "USA", "capital" : "Washington DC"},
                         { "country" : "Australia", "capital" : "Canberra"},
                         { "country" : "France", "capital" : "Paris"},
                         { "country" : "Canada", "capital" : "Toronto"},
                         { "country" : "Singapore", "capital" : "Singapore"}];
    
    var countryCapitalList = [{"India": "New Delhi"} ,{"USA": "Washington DC"},{"Germany":"Berlin"}]
    $scope.countryWithCapitalList = countryWithCapitalList;
    
});


