// viewModel
var ViewModel = function() {
  var self = this;

  // weight
  self.weight = ko.observable("");
  // height in feet
  self.heightInFeet = ko.observable("");
  // height in inches
  self.heightInInches = ko.observable("");
  // bmi
  //self.bmi = ko.observable("");
  // result
  //self.result = ko.observable("");

  // calculations
  // weight in pounds to kg
  self.weightInKg = ko.computed(function(){
    return(
      Number(self.weight()) * 0.45
    )
  }, self);

  // height in feet converted to inches
  self.heightInFeetConverted = ko.computed(function(){
    return(
      Number(self.heightInFeet() * 12)
    )
  },self);

  // sum for heights
  self.heightsTotal = ko.computed(function(){
    return(
      Number(self.heightInFeetConverted()) + Number(self.heightInInches())
    )
  }, self);

  // height converted to meters
  self.heightInMeters = ko.computed(function(){
      return(
        Number(self.heightsTotal() * 0.025)
      )
  }, self);

  // square of height in meters
  self.heightFinal = ko.computed(function(){
      return(
        Number(self.heightInMeters()) * Number(self.heightInMeters())
      )
  }, self);

  // bmi value
  self.bmi = ko.computed(function(){
      return(
         Number(self.weightInKg()) / Number(self.heightFinal())
      )
  }, self);

  // result
  self.result =ko.computed(function() {
    if(self.bmi() > 25){
      return "Overweight";
    }
    else if(self.bmi() < 20){
      return "Underweight";
    }
    else{
      return "Normal";
    }
  }, self);

}

// binding
ko.applyBindings(new ViewModel());
