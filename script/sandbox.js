// I. Create base-parent class Locations
//Holding the following info: teaser-image, City, ZipCode, address 
//and a add a "display" () method;
// II. Create two children classes - Restaurants && Events
// 1.The Restaurants class inherits the teaser-image, City, ZipCode, address and 
// in addition to the Restaurants class - tel.number, type of cuisine, (Vegan, Chinese..etc.);
//update the display function of the Restaurant;
// 2.Events class-inherits the teaser-image, City, ZipCode, address &&
// additional props like EventDate ("") and EventTime("") 
// display () must be updated;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var arrayLocations: (string | number | any)[] = [];
var arrayLocations = [];
var Locations = /** @class */ (function () {
    function Locations(image, city, zipCode, address) {
        this.image = image;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        arrayLocations.push(this);
    }
    Locations.prototype.display = function () {
        //this HTML generation is split into 2 functions. The div is opened in this function and closed in the one below. It is a card from Bootstrap
        var generator = "\n        <div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\" />\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.city + "</h5>\n                        <p class=\"card-text\">\n                        " + this.zipCode + ", " + this.address + "\n                        </p>\n                        <!-- <a href=\"#!\" class=\"btn btn-primary\">Button</a> -->\n                    </div>\n                </div>\n              "; // elements are dynamically typed with   .this   keyword
        return generator;
    };
    Locations.prototype.closingDiv = function () {
        return "<a href=\"#\" class=\"btn btn-success d-flex justify-content-center\"><span class=\"price\">Show Price</span></a>\n        </div>\n      </div>";
    };
    return Locations;
}());
new Locations("../img/music1.jpeg", "Vienna", "1010", "Na baba ti far4iloto");
// function listItem(item) {
//     for var i = 0; i < item.array.length; i++{
//         var list = item.array[i];
//         document.createElement("li");
//         document.getElementByClass('box').appendChild(list);
//         console.log(list);
//     }
// }
// Extension of Restaurants child class
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(image, city, zipCode, address, Phone, Cuisine, Service) {
        var _this = _super.call(this, image, city, zipCode, address) || this;
        _this.phoneNumber = Phone;
        _this.typeOfCuisine = Cuisine;
        _this.typeoFService = Service;
        return _this;
    }
    Restaurants.prototype.display = function () {
        var generator = _super.prototype.display.call(this) + "\n        <p class=\"card-text\">PS: Number: " + this.phoneNumber + "</p>\n        <p class=\"card-text\">PS: Type of restaurat: " + this.typeOfRestaurant + "</p>\n        <p class=\"card-text\">PS: Type of cuisine " + this.typeOfCuisine + "</p>\n        <p class=\"card-text\">PS: Type of service " + this.typeoFService + "</p>\n        "; //splitting the card into two functions allows for less repeating code, only   ${super.generateHTML()} is called here because the closingDiv() function is inherited from the Vehicles Class
        return generator;
    };
    return Restaurants;
}(Locations));
// generateHTML(){
new Restaurants("../img/image7.jpeg", "Vienna", "1040", "Strasse in 4. Bezirk", 0676, 8521463, "kitaiski", "Chinese");
// Declaring a new restaurant-a new child element
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, city, zipCode, address, EventDate, EventTime, EventLocation) {
        var _this = _super.call(this, image, city, zipCode, address) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.EventLocation = EventLocation;
        return _this;
    }
    return Events;
}(Locations));
// Declaring a new event-a new child element
//  generateHTML(){
