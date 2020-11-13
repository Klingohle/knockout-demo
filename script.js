
ko.extenders.logChange = function(target, text) {
    target.subscribe(function(newValue) {
       console.log(text + ": " + newValue);
    });
    return target;
};

// Here's my data model

var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last).extend({logChange: "last name has changed"});;
 
    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);

};

function MainViewModel() {
    this.navItems = ["Übersicht", "Ausleihe", "Rückgabe", "Autoverwaltung"];
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

ko.applyBindings(new MainViewModel());
/*
 
let x = new ViewModel("Planet", "Earth")

ko.applyBindings(x); // This makes Knockout get to work
*/

//https://www.npmjs.com/package/knockout-validations-extender