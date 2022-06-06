// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

class Person {
  constructor(attributes)  {
   this.name = attributes.name
   this.age = attributes.age  
   this.hobby = attributes.hobby  
  }

  speak(){
    console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}`)
  }
}


const sadia = new Person({
name: 'sadia',
age: 22,
hobby: 'travel'
})

sadia.speak()

// Extend Person class and create one class for each member of your family. 

class Mom extends Person{
    constructor(momAttributes){
        super(momAttributes)
        this.job = momAttributes.job
    }
 do(){
     console.log(`I work as a ${this.job}`)
 }
}

const familyMemberOne = new Mom({
name: 'farxiya',
age: 44,
hobby: 'cocking delicious food',
job: 'CEO of my House ):'
})


familyMemberOne.do()

class Sister extends Mom{
  constructor(sisAttributes){
      super(sisAttributes)
      this.job = sisAttributes.job
  }
do(){
   console.log(`I'm ${this.job}`)
}
}


const familyMemberTwo = new Sister({
  name: 'hafsa',
  age: 24,
  hobby: 'Hiking',
  job: 'unemployed'
  })

familyMemberTwo.do()



class Brother extends Sister{
  constructor(broAttributes){
      super(broAttributes)
      this.job = broAttributes.job
  }
work(){
   console.log(`I'm ${this.job}`)
}
}


const familyMemberThree = new Brother({
  name: 'mohamed',
  age: 26,
  hobby: 'Football',
  job: 'trader'
  })

familyMemberThree.speak()


class YoungSis extends Brother{
constructor(youngSisAttributes){
  super(youngSisAttributes)
  this.school = youngSisAttributes.school
  this.favoriteSubject = youngSisAttributes.favoriteSubject 
  this.friends = youngSisAttributes.friends
}
speakNaima(){
  console.log(`my favorite subject is ${this.favoriteSubject} this is some of my best friends ${this.friends}`)
}
}

const familyMemberFour = new YoungSis({
  name: 'naima',
  age: 20,
  hobby: 'Art',
  favoriteSubject: 'English',
  friends: ['aisha','anab','sara']
  })

  familyMemberFour.speakNaima()