
// modules 

// 1- core modules 
 
  // const fs = require("fs")

  // fs.writeFileSync( "data1.txt" , "Reem" )

//   console.log(fs.readFileSync("data1.txt").toString())

  // fs.appendFileSync("data1.txt" , " , Taiz")

//   console.log(fs.readFileSync("data1.txt").toString())

  // fs.appendFileSync("data1.txt" , " , abdu")


///////////////////////////////////////////////////////////////////////////////////////////////

  // const x = require("./allData")

  // console.log(x)
  // console.log(x.lName)
  // console.log(x.city)
  // console.log(x.age)
  // console.log(x.fun1(7,6))


  ////////////////////////////////////////////////////////////////////////////////////////////

  // 2  npm :

  const validator = require("validator")


    
 const data10 = require("./data10")
const yargs = require("yargs")

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      data10.addPerson(x.id , x.fname , x.lname,x.age , x.city)
    }
})


// const person1 = {
//   fname : "Mohammed",
//   lname: "Abdu",
//   age:"27",
//   city : "Taiz"
// }

// console.log(person1)
// console.log(person1.lname)

//    const person1Json = JSON.stringify(person1)
//    console.log(person1Json)

//    const person1Obj = JSON.parse(person1Json)
//    console.log(person1Obj)


//    fs.writeFileSync("data10.json" , person1Json )




yargs.command({
  command : "delete",
  describe : "to delete an item",
  handler:(x)=> {
     data10.deleteData(x.id)
  }

})

yargs.command({
    command: "read",
    describe : "to read data",
    builder : {
       id : {
         describe : "this is id desc in read command",
         demandOption : true,
         type : "string"
       }
    },
    handler: (x)=> {
       data10.readData(x.id)
    }
})

  yargs.command ({
    command : "list",
    describe : "to list data" ,
    handler : () => {
      data10.listData()
    }
  })


yargs.parse()


  








 