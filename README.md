# LeanClass
Super tiny "classic" class definition helper.

## Usage
```javascript
var Person = Class("Person", {
  constructor : function(name, surname){
    this.name = name;
    this.surname = surname;
  },
  sayHello : function(){
    console.log(["Hello!", "I am", this.fullName].join(" "));
  },
  get fullName(){
    return [this.name, this.surname].join(" ");
  }
});

var person = new Person("Erich", "Fromm");
person.sayHello();
//<- Hello!, I am Erich Fromm;
```
