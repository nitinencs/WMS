//Classes
var User = function(){
	var user = this;

	//Properties
	this.id =  uuidv4();
	this.bio = '';
	this.type = ''; // generator, procurer, transporter
	this.first_name = '';
	this.last_name = '';
	this.company_name = '';
	this.designation = '';
	this.mobile_number = '';
	this.office_number = '';
	this.email = '';
	this.verified = false;
	this.username = '';
	this.password = '';
	this.country = '';
	this.state = '';
	this.city = '';


	//Methods
	user.logout = function(){

	}

	user.update = function(){

	}
}

var Waste = function(){
	var waste = this;
	this.name = '';
	this.description = '';
	this.industry = ''; //optional information, dropdown
	this.state = '' //solid/liquid/semi solid
	this.flammable = false;
	this.calorific_value = 1000 //SI units
	this.hazardous = false;
	this.quantity = 100 // kg
	this.frequency = '' //dropdown
	this.due_date = '' //date calendar
	this.image = {};
	this.analysis_report = {};
	this.status = ''	//pending, suggested and complete

}

var DisposalFacility = function(){
	var facility = this;
}


//Sub Classes
var Generator = function(){
	var generator = this;

	//Properties
	this.wastes = [];


	//Methods
	this.addWaste = function(){
		this.wastes.push(new Waste());
	}

	this.removeWaste = function(value){
		removeValue(this.wastes,value)
	}
}

var Procurer = function(){
	var procurer = this;

	//Properties
	this.procurement_type = '' //Recycler or Disposal Facility
	this.facilities = [];
	this.required_wastes = [];


	//Methods
	this.addFacility = function(){
		this.facilities.push(new DisposalFacility());
	}

	this.removeFacility = function(value){
		removeValue(this.facilities,value)
	}

	this.addWaste = function(){
		this.required_wastes.push(new Waste());
	}

	this.removeWaste = function(value){
		removeValue(this.required_wastes,value)
	}
}

var Transporter = function(){
	var transporter = this;

	//Properties
	this.from_city = '';
	this.to_city ='';
	this.vehicle_type = '';//Truck/DCM/Big Truck/Tanker/Lorry
	this.number_of_tyres = ''; //8/10/12/16/20/22/24
	this.capacity = ''; //in tonnes 20/40/60 etc
	this.make = '';

	//Methods

}

demiurge.extend(Generator, User);
demiurge.extend(Procurer, User);
demiurge.extend(Transporter, User);

/******
SQL TABLES

1. Accounts
2. Wastes
3. Disposal Facilities

JSONs

1. Country/State/Cities/Towns/Villages of India
2. Industries
3. State (solid/liquid)


*******/

//General Utility Functions
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function(c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  })
}

function removeValue(arr, value) {
	for(var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] === value) {
			arr.splice(i, 1);
		}
	}
}
