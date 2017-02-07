var User = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

User.prototype.getFullName = function(){
	return this.firstName + " " + this.lastName;
}

var john = new User('John', 'Doe');
console.log(john.getFullName());