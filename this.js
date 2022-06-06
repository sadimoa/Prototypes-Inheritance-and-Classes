/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding
* 2. implicit binding
* 4. new binding
* 3. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this)
function myFun(){
    return this
}
// code example for Window Binding

// Principle 2
const obj = {
name: 'sadia',
loc: 'somalia',
hobby: "travel",
aboutSadia: function(){
  console.log(`my name is ${this.name} and I'm from ${this.loc} I like to ${this.hobby} around the world`)
}
}
obj.aboutSadia()

// code example for Implicit Binding

// Principle 3
function Fun2(name,loc,hobby){
this.name = name;
this.loc =  loc
this.hobby = hobby
this.about = function(){
    console.log(`my name is ${this.name} and I'm from ${this.loc} I like to play ${this.hobby}`)
}
}

const aisha = new Fun2('Aisha','Turkey','chess')
aisha.about()

function Fun3(attributes){
    this.name = attributes.name;
    this.loc =  attributes.loc
    this.hobby = attributes.hobby
    this.aboutAli = function(){
        console.log(`my name is ${this.name} and I'm from ${this.loc} I like to play ${this.hobby}`)
    }
}

const ali = new Fun3({
  name: 'ali',
  loc: 'Kenya',
  hobby: 'football', 
})

ali.aboutAli()

// code example for New Binding

// Principle 4
 function fun4(){
  console.log(`my name is ${this.name} and I'm ${this.age} years old  from ${this.loc}`)
 }

const arday1 = {
name: 'abdi',
age: 22,
loc: 'somalia'
}

const ardayKowaad = fun4.bind(arday1)
//fun4.call(arday1)
ardayKowaad()


// code example for Explicit Binding 