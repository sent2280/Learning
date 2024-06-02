var objDemo = {
    firstName: 'senthil',
    lastName: 'kumar',
    age: 26,
    //older version
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    //ES6 Std
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    get fName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set changeFirstName(firstName){
        this.firstName = firstName;
    },
    set changeLastName(lastName){
        this.lastName = lastName;
    }
}

console.log('firstName = ' + objDemo.firstName);
console.log('lastName = ' + objDemo.lastName);
console.log('age = ' + objDemo.age);
//objDemo.firstName = 'test1234';
//console.log('first name after modification = ' + objDemo.firstName );
console.log("Using method.. Full name = " + objDemo.getFullName());
console.log("Using method..But trying to access like property..  Full name = " + objDemo.getFullName);
console.log("Using getters  fName = " + objDemo.fName);
console.log('latest version of function in javascript .... ' + objDemo.fullName());
objDemo.changeFirstName = "Senthil";
objDemo.changeLastName = "Kumar";
console.log("Updated full name " + objDemo.fName);