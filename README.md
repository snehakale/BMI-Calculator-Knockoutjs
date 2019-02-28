## Project Title
**BMI Calculator**

This project performs operations to calculate one's Body Mass Index. This uses Knockout JS framework along with HTML and CSS to make more effective UI. 

## Pre-Requisites and Installation
1. Download / Clone the given Github Project.
2. Unzip the folders and files.
3. Run **index.html** file.

## Code Examples 
1. **index.html :** 
This file contains HTML code along with data-bindings (knockout bindings) to take inputs and display the desired outputs.
For Example : ` <input type="text" data-bind="value:weight" name="weight" size="15"
              class="table-input-item"/>`

2. **style.css :** 
This file contains rules for different selectors in order to apply styles on the given html elements.
For Example : `.table-input-item {
  border: 2px solid #95AFF1;
  border-radius: 3px; ...`

3. **app.js :** 
This file conatains a JavaScript code to perform opearations on given inputs in order to calculate one's BMI. It uses Knockout JS Framework which consists of view model and bindings code.
For Example : ` self.weightInKg = ko.computed(function(){
    return(
      Number(self.weight()) * 0.45
    ) ...`

## References
1. [Knockout JS Framework Introduction](https://knockoutjs.com/documentation/introduction.html)
2. [Knockout: The text Binding](https://knockoutjs.com/documentation/text-binding.html)

## Author
Sneha Kale
