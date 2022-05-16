console.log('js landed')

// DATA TYPES PRIMITIVE - single values do not retain value of original when copied
let string = "hello word"
let number = 5.5
let boolean = false
let nothing = null
let unknown = undefined


// REFERENCE TYPES when using these types they 'keep' reference of the original when copied
// NOTE Arrays are collections of data stored by a position/index 0, 1, 2, 3
let arr = ['hey', [1,'hello',3], 'sup']
// NOTE Objects are collections of data stored by a KEY/Value pair
let obj = {
    greeting: 'hey',
    password: 'secret-sauce'
  }
  
  let keyword = 'password'

  // user object
  let teacher = {
    name: 'mick',
    skill: 5,
    dogs: 2,
    hasCats: false ,
  }

// NOTE math +  -  /  *  %
  let x = 5
  x = x + 10
  x += 10

  x -= 10  // x = x - 10
  x *= 2  // x = x * 2
  x /=3  // x = x / 3
  x %=7  // x = x % 7


  // NOTE string operator
  let word = "howdy"
  word = word + ' partner'
  word += ' Pam'

  // NOTE Comparison operators
  //  <  less than
  let result = x < 20
  if(result){
    console.log('x is less than 20')
  }

  // > greater than
  // >= greater than or equal
  // <= less than or equal
  // == is equal
  // === is equal and of same data type?
  // != is not equal
  // || OR
  // && AND



  function doThing(){
    // NOTE number is a block scoped variable (meaning it's definition here is used instead of the 'number' outside)

    console.log('hey what up from the function')
    number ++
    console.log(number);
  }

  doThing()

  function cowSays(){
    // window.alert('Moo!')
   let animal =  document.getElementById('animal')
   let says =  document.getElementById('says')
   console.log(animal);
   animal.innerText = " Cow "
   says.innerText = " Moo! "
  }

  function duckSays(){
    // window.alert('Quack!')
    let animal = document.getElementById('animal')
    let says = document.getElementById('says')

    animal.innerText = ' Duck '
    says.innerText = ' Quack! '
  }

  function crocSays(){
    // window.alert('hshshshshhshshshshshshshsss')
    let animal = document.getElementById('animal')
    let says = document.getElementById('says')

    animal.innerText = ' Crocodile '
    says.innerText = ' hshshshshshshs '
    // says.innerHTML = '<em> hshshshshshshs </em>'
  }

  let animals = {
    cow: {name: 'Bessy the Cow', sound: 'Moo!'},
    duck: {name: 'Dean the Duck', sound: 'Quack!'},
    croc: {name: 'Jimmy the Crocodile', sound: 'hshshshshshshs'}
  }

  function animalSays(animalName){
    // alias for the animal in animals you clicked on
    let animal = animals[animalName]
// always console log your alias after you get it to make sure it's what you thought it was
    console.log('animal you clicked on', animal)
    let name = document.getElementById('animal')
    let says = document.getElementById('says')

    name.innerText = animal.name
    says.innerText = animal.sound
    // WITHOUT alias
    // name.innerText = animals[animalName].name
    // says.innerText = animals[animalName].sound
  }


