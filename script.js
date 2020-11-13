
ko.extenders.logChange = function(target, text) {
    target.subscribe(function(newValue) {
       console.log(text + ": " + newValue);
    });
    return target;
};

// Here's my data model
function MainViewModel() {
    let self = this;
    
    self.navItems = ["Übersicht", "Ausleihe", "Rückgabe", "Autoverwaltung"];
    self.selectedNavItem = ko.observable("Übersicht"); //Standardwert beim Start des Programs

    self.overviewViewModel = ko.observable(new OverviewViewModel());
    self.rentalViewModel = ko.observable(new RentalViewModel());

    /* Event when clicked on a navigation item */
    self.navItemClicked = function (navItemName) {
        self.selectedNavItem(navItemName);
        console.log("Current SelectedNavItem", self.selectedNavItem());
    };

    // Array mit Fahrzeugtypen
    /*Fahrzeugtyp-Objekt enthält jeweils: Typ als key und als value ein Array 
    mit Marke, Personenzahl, Anzahl verfügbarer Wagen, Verbrauch, Kosten/Stunde€ */
    var cars = ko.observableArray([
        {"Typ1": ["Mazda", 5, 10, 5.2, 8]}, 
        {"Typ2": ["Volvo", 5, 10, 5.2, 8]}, 
        {"Typ3": ["Opel", 5, 10, 5.2, 8]}
    ]);

    //
    
	//Eintrag erstellen
    
    
    //Eintrag abspeichern
    
    
    //Eintrag löschen

}

function OverviewViewModel() {
    let self = this;
    self.ausleihen = ["Auto 1", "Auto 2"];

}


function RentalViewModel() {

}

ko.applyBindings(new MainViewModel());











/*
 
let x = new ViewModel("Planet", "Earth")

ko.applyBindings(x); // This makes Knockout get to work
*/

//https://www.npmjs.com/package/knockout-validations-extender


