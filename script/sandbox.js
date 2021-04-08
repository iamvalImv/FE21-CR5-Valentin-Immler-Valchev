/*I. Create base-parent class Locations
Holding the following info: teaser-image, City, ZipCode, address
and a add a "display" () method;
II. Create two children classes - Restaurants && Events
1.The Restaurants class inherits the teaser-image, City, ZipCode, address and
in addition to the Restaurants class - tel.number, type of cuisine, (Vegan, Chinese..etc.);
update the display function of the Restaurant;
2.Events class-inherits the teaser-image, City, ZipCode, address &&
additional props like EventDate ("") and EventTime("")
display () must be updated;*/
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
//Definition of Classes, Methods, etc...
// Creation of Parent class and defining the properties
var Locations = /** @class */ (function () {
    // Parent class constructor
    function Locations(image, city, zipCode, address) {
        this.dateTimeVisited = new Date();
        this.image = image;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        arrayLocations.push(this);
    }
    // Display func
    Locations.prototype.display = function () {
        var myDate = this.randomDate('02/13/2016', '01/01/2019');
        // let formattedDate = this.formatDate(this.dateTimeVisited);
        // this HTML generation is split into 2 functions. The div is opened in this function and closed in the one below. It is a card from Bootstrap
        var generator = "\n        <div class =\"col-6 col-sm-4 col-md-3 p-2\">\n                <div class=\"card h-100\">\n                    <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\" />\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.city + "</h5>\n                        <p class=\"card-text\">\n                        " + this.zipCode + " " + this.address + "\n                        </p>                  \n                        <p class=\"card-text\">" + myDate + "</p>  \n              "; // elements are dynamically typed with   .this   keyword
        return generator;
    };
    Locations.prototype.randomDate = function (date1, date2) {
        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970';
        var date2 = date2 || this.formatDate(new Date());
        date1 = new Date(date1).getTime();
        date2 = new Date(date2).getTime();
        if (date1 > date2) {
            return this.formatDate(new Date(randomValueBetween(date2, date1)));
        }
        else {
            return this.formatDate(new Date(randomValueBetween(date1, date2)));
        }
    };
    Locations.prototype.formatDate = function (date) {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    };
    // Closing div function
    Locations.prototype.closeCardDiv = function () {
        return "</div>\n            </div>\n        </div>";
    };
    return Locations;
}());
// Extension of Restaurants child class
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(image, city, zipCode, address, Phone, TypeOfRestaurant, Cuisine, Service) {
        var _this = _super.call(this, image, city, zipCode, address) || this;
        _this.phoneNumber = Phone;
        _this.typeOfRestaurant = TypeOfRestaurant;
        _this.typeOfCuisine = Cuisine;
        _this.typeoFService = Service;
        return _this;
    }
    // Display additional properties
    Restaurants.prototype.display = function () {
        var generator = _super.prototype.display.call(this) + "\n                <p class=\"card-text\">Number: " + this.phoneNumber + "</p>\n                <p class=\"card-text\">Type of restaurant: " + this.typeOfRestaurant + "</p>\n                <p class=\"card-text\">Type of cuisine: " + this.typeOfCuisine + "</p>\n                <p class=\"card-text\">Type of service: " + this.typeoFService + "</p>\n        ";
        return generator + _super.prototype.closeCardDiv.call(this);
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, city, zipCode, address, EventDate, EventTime, EventLocation) {
        var _this = _super.call(this, image, city, zipCode, address) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.EventLocation = EventLocation;
        return _this;
    }
    // Display additional properties
    Events.prototype.display = function () {
        var generator = _super.prototype.display.call(this) + "\n            <p class=\"card-text\">Date: " + this.EventDate + "</p>\n            <p class=\"card-text\">Time: " + this.EventTime + "</p>\n            <p class=\"card-text\">Location: " + this.EventLocation + "</p>        \n            ";
        return generator + _super.prototype.closeCardDiv.call(this);
    };
    return Events;
}(Locations));
// Generating the main HTML doc--loading the whole var arrayLocations and returning the result /console.
function generateHtml() {
    var result = "";
    arrayLocations.forEach(function (element) {
        if (element instanceof Restaurants || element instanceof Events) {
            // console.log("Restaurants or Events");
            result += element.display();
        }
        else {
            // console.log("Locations");
            // Apply the closecardDiv func to all elements =>
            result += (element.display() + element.closeCardDiv());
        }
    });
    // console.log(result);
    return result;
}
function setMainHtml() {
    document.getElementById("contentDiv").innerHTML = generateHtml();
}
//-------FlowChart----------
// Creating new array for storing our objects
var arrayLocations = [];
// Create new Locations
new Locations("../img/image7.jpeg", "Vienna", "1010", "Clementinengasse 28");
new Locations("../img/music2.jpeg", "Salzburg", "5000", "Mainastrasse 2");
new Locations("../img/image6.jpeg", "Linz", "4500", "Mariahilfer 129");
new Locations("../img/image6.jpeg", "Linz", "4500", "Mariahilfer 129");
// Creating a new Rest object 
new Restaurants("../img/image7.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "Local Deli", "Selbst");
new Restaurants("../img/image2.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "Handmade", "Selbst");
new Restaurants("../img/image1.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "Handmade", "Selbst");
new Restaurants("../img/image1.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "Handmade", "Selbst");
// Creating a new event
new Events("../img/image7.jpeg", "Event", "1040", "Strasse in 4. Bezirk", "EventDate", "EventTime", "EventLocation");
new Events("../img/image7.jpeg", "Event", "1040", "Strasse in 4. Bezirk", "EventDate", "EventTime", "EventLocation");
new Events("../img/image7.jpeg", "Event", "1040", "Strasse in 4. Bezirk", "EventDate", "EventTime", "EventLocation");
new Events("../img/image7.jpeg", "Event", "1040", "Strasse in 4. Bezirk", "EventDate", "EventTime", "EventLocation");
//Call on load document
// Function direct to main HTML file 
setMainHtml();
