//regular function 
//          fuction name(){}

//arrow function 
//       const name=()=>{}


// synchronous from top to bottom
console.log(" I ")

console.log(" eat ")

console.log(" ice cream ")

console.log(" with a ")

console.log(" spoon ")


// Asynchronous
//setTimeout function allows to run a function after a specific time it is asynchronous fucn
//    setTimeout(function mostly use arrow fucn , time in milliseconds)  1000millisec=1sec

console.log(" I ")

console.log(" eat ")

setTimeout(()=>{
    console.log(" ice cream ")
},0) //this line of code is kinda jumped and the lines below executed this code is executed after 4 seconds 

console.log(" with a ")

console.log(" spoon ")

//Callback is calling a function in another function
//forms connection with functions

function one(call_two){
console.log("step 1 complete. Please call two")
call_two()//order is key
}

function two(){
    console.log("step 2")
}

one(two)


//lets make an ice cream
//1.order produce from farmer
//2.produce
//without 1 ,2 is not possible

let stocks={
    Fruits: ["grapes","apple","banana","strawberry"],
    Liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"],

}

//stocks.Fruits[0] to access specific item in the object fruit in the variable stocks

//to access what is stored in a variable us backticks dollar and curly brackets signs i.e `${name}`

//place order takes 2 sec
//production starts immediately
//cut the fruit takes 2 s
//add water and ice takes 1 sec
//start machine takes 1 sec
//select container takes 2 sec
//select toppings takes 3 sec
//serve ice cream takes 2 sec


let order=(fruit_name,call_production)=>{

  setTimeout(()=>{
    console.log(`${stocks.Fruits[fruit_name]} was selected `)

    call_production()
    },2000)//place order takes 2 sec

    
}

let production=()=>{
  setTimeout(()=>{
    console.log("production has strated")

    setTimeout(()=>{
        console.log("cutting the fruits complete")

        setTimeout(()=>{
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)

            setTimeout(()=>{
                console.log("machine started")

                setTimeout(()=>{
                    console.log(`${stocks.holder[0]} selected as the container/holder and ice cream added to it`)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} topped on the ${stocks.holder[0]}`)
 //the way callbacks appear i.e as a greater than sign is called callback hell                       
                        setTimeout(()=>{
                            console.log("icecream served")
                        },2000)//serve ice cream takes 2 sec

                    },3000)//select toppings takes 3 sec

                },2000)//select container takes 2 sec
            },1000)//start machine takes 1 sec
        },1000)//add water and ice takes 1 sec

    },2000)//cut the fruit takes 2 sec
  },0)
}

order(0,production)


