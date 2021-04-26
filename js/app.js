'use strict'

 let price=[];
let cars = [];
// function for create random price 
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Car(carModel, modelYear, Manefacturer) {

    this.carModel = carModel;
    this.modelYear = modelYear;
    this.price = randomPrice(1500, 5000);
    this.Manefacturer = Manefacturer;
    cars.push(this);

    updateStorage();
}


// create table in globel

let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
//create header
function createHeader() {
   

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);


    let cellRow1 = document.createElement('th');
    headingRow.appendChild(cellRow1);
    cellRow1.textContent = 'carModel';


    let cellRow2 = document.createElement('th');
    headingRow.appendChild(cellRow2);
    cellRow2.textContent = 'modelYear';

    let cellRow3 = document.createElement('th');
    headingRow.appendChild(cellRow3);
    cellRow3.textContent = 'price';

    let cellRow4 = document.createElement('th');
    headingRow.appendChild(cellRow4);
    cellRow4.textContent = 'Manefacturer';

}
createHeader();


Car.prototype.render = function () {
    let carRows = document.createElement('tr');
    table.appendChild(carRows);
    let dataCell1 = document.createElement('td');
    carRows.appendChild(dataCell1);
    dataCell1.textContent = this.carModel;

    
let dataCell2=document.createElement('td');
carRows.appendChild(dataCell2);
dataCell2.textContent=this.modelYear;


let dataCell3=document.createElement('td');
carRows.appendChild(dataCell3);
dataCell3.textContent=this.price;


let dataCell4=document.createElement('td');
carRows.appendChild(dataCell4);
dataCell4.textContent=this.Manefacturer;
}

//create the form with event lisstner
 let form =document.getElementById('form');

 form.addEventListener('submit',submitter);

 function submitter(event){
    event.preventDefault();
let carModelForm= event.target.CarModel.value;
console.log(carModelForm);
let carModelYearForm=  parseInt(event.target.ModelYear.value);
console.log(carModelYearForm);

let carManufactrerForm = event.target.Manufactrer.value;
console.log(carManufactrerForm);

const newCar = new Car(carModelForm,carModelYearForm,carManufactrerForm);
newCar.render();




 }

 let sum= document.getElementById('sum');
 let total =document.createElement('p');
 sum.appendChild(total);
 
function sumTa(){
    let sumT=0
    sumT = sumT + price;
    total.textContent=sumT;

}
sumTa()

function updateStorage(){
    let arrayString = JSON.stringify(cars);
    localStorage.setItem('Cars',arrayString);
}


function gettingData(){
    let data=localStorage.getItem('Cars');
    let parseDate = JSON.parse(data);
    if (parseDate){
        for(let i=0;i<parseDate.length;i++){
            new Car(parseDate[i].carModel,parseDate[i].modelYear,parseDate[i].price,parseDate[i].Manefacturer);
            cars[i].render();
        }
    }

}
gettingData();
console.log('after',cars);