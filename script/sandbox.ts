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

// var arrayLocations: (string | number | any)[] = [];
var arrayLocations = [];
class Locations {
    image: string;
    city: string;
    zipCode: number;
    address: string;

    constructor(image, city, zipCode, address) {
        this.image = image;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        arrayLocations.push(this);
    }

    display() {
        //this HTML generation is split into 2 functions. The div is opened in this function and closed in the one below. It is a card from Bootstrap
        let generator = `
        <div class="card" style="width: 18rem;">
                    <img src="${this.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${this.city}</h5>
                        <p class="card-text">
                        ${this.zipCode}, ${this.address}
                        </p>
                        <!-- <a href="#!" class="btn btn-primary">Button</a> -->
                    </div>
                </div>
              `; // elements are dynamically typed with   .this   keyword
        return generator;
    }
    closingDiv() {
        return `<a href="#" class="btn btn-success d-flex justify-content-center"><span class="price">Show Price</span></a>
        </div>
      </div>`;
    }
}



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
class Restaurants extends Locations {
    phoneNumber: number;
    typeOfRestaurant: string;
    typeOfCuisine: string;
    typeoFService: string;

    constructor(image, city, zipCode, address, Phone, Cuisine, Service) {
        super(image, city, zipCode, address);
        this.phoneNumber = Phone;
        this.typeOfCuisine = Cuisine;
        this.typeoFService = Service;
    }

    display() {
        let generator = `${super.display()}
        <p class="card-text">PS: Number: ${this.phoneNumber}</p>
        <p class="card-text">PS: Type of restaurat: ${this.typeOfRestaurant}</p>
        <p class="card-text">PS: Type of cuisine ${this.typeOfCuisine}</p>
        <p class="card-text">PS: Type of service ${this.typeoFService}</p>
        `; //splitting the card into two functions allows for less repeating code, only   ${super.generateHTML()} is called here because the closingDiv() function is inherited from the Vehicles Class
        return generator;
    }
}
// generateHTML(){
new Restaurants("../img/image7.jpeg", "Vienna", "1040", "Strasse in 4. Bezirk", 06768521463, "kitaiski", "Chinese");

// Declaring a new restaurant-a new child element


class Events extends Locations {
    EventDate: number;
    EventTime: string;
    EventLocation: string;

    constructor(image, city, zipCode, address, EventDate, EventTime, EventLocation) {
        super(image, city, zipCode, address);
        this.EventDate = EventDate;
        this.EventTime = EventTime;
        this.EventLocation = EventLocation;
    }
}
// Declaring a new event-a new child element
    //  generateHTML(){