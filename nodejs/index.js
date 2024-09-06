// // ^ => 1.X.X  => X 2.0.0
// //~ => 1.2.X => X 1.3.0

const fs =  require('fs') ;
const os = require('os')
const path = require('path')
// //NOTE readFileSync

// //NOTE BLOCKING CODE 
// // console.log('..syncronouse file read started')
// // const data = fs.readFileSync('./text.txt' , 'utf-8')

// // console.log(data)
// // console.log('..syncronouse file read ended')

// //NOTE readFile

// //NOTE NON-BLOCKING CODE 
// console.log('..asyncronouse file read started')

//__dirname variable gives current directory absolute path .

console.log('dr',__dirname)
const filePath = path.join(__dirname , index.txt)
fs.readFile(filePath,'utf-8', (err,data)=>{
console.log(data)
})

// console.log('..asyncronouse file read ended')

// //NOTE writeFileSync
// const writeData = 'this data is written using writeFileSync'

// //synchrnous version
// fs.writeFileSync('./example.txt', writeData)

// //asynchrnous version
// //NOTE writeFile
// fs.writeFile('./index.txt','text data',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data written successfully')
//     }
// })

// //appendFile , appendFileSync
// fs.appendFile('./text.txt',' added by using appendfile function ',(err)=>{
//    console.log('data added successfull') 
// })

// //used to delete any file
// fs.unlink('./example.txt', (err)=>{
// if(err) {
//     console.log(err)
// } else {
//     console.log('file deleted')
// }
// })

//used to rename specific file
// fs.renameSync('text.txt','example.txt')

//Operating System module 

console.log(os.hostname())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())



// nodemon index.js
console.log(path.dirname('C:/Users/Desktop/batchfirstNode')) ;


console.log(path.extname('C:/Users/Desktop/batchfirstNode/index.js')) ;

console.log(path.basename('C:/Users/Desktop/batchfirstNode/index.js'))

console.log(path.parse('C:/Users/Desktop/batchfirstNode/index.js'))

console.log(path.join('Users','local' , 'bin' , 'index.js'))

console.log(path.resolve('Users','local' , 'bin' , 'index.js'))
