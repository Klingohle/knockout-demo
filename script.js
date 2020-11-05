
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
 
ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work


//https://www.npmjs.com/package/knockout-validations-extender