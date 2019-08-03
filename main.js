
function hello() {
    console.log('Hello World!');
}

function secondFun(fun) {
    fun();
}

secondFun(hello);

//=================================================

const jdObject = {
    name: 'nimal',
    age: 85,
    contact: 123456789
}

//=================================================

var vehicleName='Nissan';

function printVehicleName() {
    console.log(this.vehicleName);
}

var Vehicle = {
    vehicleName: 'Toyota',
    getVehicleName: printVehicleName
}

printVehicleName();
Vehicle.getVehicleName();

//=================================================

function taxpercentage(tax) {
    var percentage = tax;
    return function (amount) {
        return ((percentage/100)*amount)+amount;
    }
}

var calculator = taxpercentage(15);
console.log(calculator(10000));

//=================================================

function fetchUsers() {
    fetch('https://api.github.com/users').then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    });
}

fetchUsers()
