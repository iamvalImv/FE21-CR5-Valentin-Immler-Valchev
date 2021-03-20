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

//Definition von Klassen, Methoden etc...
class Locations {
    image: string;
    city: string;
    zipCode: number;
    address: string;
    dateTimeVisited: Date = new Date();

    constructor(image, city, zipCode, address) {
        this.image = image;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        arrayLocations.push(this);
    }

    display() {
        let formattedDate = this.dateTimeVisited.getDate()+'.'+ (this.dateTimeVisited.getMonth()+ 1)+'.'+this.dateTimeVisited.getFullYear();
        // this HTML generation is split into 2 functions. The div is opened in this function and closed in the one below. It is a card from Bootstrap
        let generator = `
        <div class ="col-6 col-sm-4 col-md-3 p-2">
                <div class="card h-100">
                    <img src="${this.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${this.city}</h5>
                        <p class="card-text">
                        ${this.zipCode} ${this.address}
                        </p>                  
                        <p class="card-text">${formattedDate}</p>  
              `; // elements are dynamically typed with   .this   keyword

        return generator;
    }
// Closing div function applied to each card element
    closeCardDiv() {
        return `</div>
            </div>
        </div>`;
    }
}

// Extension of Restaurants child class
class Restaurants extends Locations {
    phoneNumber: number;
    typeOfRestaurant: string;
    typeOfCuisine: string;
    typeoFService: string;

    constructor(image, city, zipCode, address, Phone, TypeOfRestaurant, Cuisine, Service) {
        super(image, city, zipCode, address);
        this.phoneNumber = Phone;
        this.typeOfRestaurant = TypeOfRestaurant;
        this.typeOfCuisine = Cuisine;
        this.typeoFService = Service;
    }
// Display additional properties
    display() {
        let generator = `${super.display()}
                <p class="card-text">Number: ${this.phoneNumber}</p>
                <p class="card-text">Type of restaurant: ${this.typeOfRestaurant}</p>
                <p class="card-text">Type of cuisine: ${this.typeOfCuisine}</p>
                <p class="card-text">Type of service: ${this.typeoFService}</p>
        `;
        return generator + super.closeCardDiv();
    }
}

class Events extends Locations {
    EventDate: string;
    EventTime: string;
    EventLocation: string;

    constructor(image, city, zipCode, address, EventDate, EventTime, EventLocation) {
        super(image, city, zipCode, address);
        this.EventDate = EventDate;
        this.EventTime = EventTime;
        this.EventLocation = EventLocation;
    }
// Display additional properties
display() {
        let generator = `${super.display()}
            <p class="card-text">Date: ${this.EventDate}</p>
            <p class="card-text">Time: ${this.EventTime}</p>
            <p class="card-text">Location: ${this.EventLocation}</p>        
            `;
        return generator + super.closeCardDiv();
    }
}

// Generating the main HTML doc--loading the whole var arrayLocations and returning the result /console.
function generateHtml() {

    let result = "";

    arrayLocations.forEach((element) => {

        if (element instanceof Restaurants || element instanceof Events) {
            // console.log("Restaurants or Events");
            result += element.display();
        } else {
            // console.log("Locations");
            result += (element.display() + element.closeCardDiv());
        }
    });

    // console.log(result);

    return result;
}

function setMainHtml() {
    document.getElementById("contentDiv").innerHTML = generateHtml();
}

//-------Programmablauf----------

// Creating new array for storing our objects
var arrayLocations = [];

// Create new Locations
new Locations("../img/music1.jpeg", "Vienna", "1010", "Na baba ti far4iloto");
new Locations("../img/music2.jpeg", "Salzburg", "5000", "Mainastrasse 2");

// Creating a new Rest object 
new Restaurants("../img/image7.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "kitaiski", "Selbst");
new Restaurants("../img/image5.jpeg", "Restaurant", "1040", "Strasse in 4. Bezirk", "06768521463", "Selbstabholung", "kitaiski", "Selbst");

// Creating a new event
new Events("../img/image7.jpeg", "Event", "1040", "Strasse in 4. Bezirk", "EventDate", "EventTime", "EventLocation");

//Call on load document
// Function direct to main HTML file 
setMainHtml();
