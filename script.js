
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

}

function OverviewViewModel() {
    let self = this;
    self.ausleihen = ["Auto 1", "Auto 2"];

    //Aufgabe 1: Anstelle der Strings sollten hier Objekte rein (Rental?) rein, welches mehr Eigenschaften hat (z.B. Wann ausgeliehen wurde, wer usw.)
    //Tabelle schön machen und alle Eigenschaften anzeigen

}


function RentalViewModel() {

}

//Weitere ViewModels für die restlichen zwei Navigation Items erstellen
//Eventuell dieses auch mit Tabellen ausstatten...  


ko.applyBindings(new MainViewModel());




/*
 

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



let x = new ViewModel("Planet", "Earth")

ko.applyBindings(x); // This makes Knockout get to work
*/

//https://www.npmjs.com/package/knockout-validations-extender


