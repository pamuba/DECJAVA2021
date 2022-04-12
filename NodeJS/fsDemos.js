var fs = require('fs')

// fs.readFile('data.txt', 'utf-8', (err, data)=>{
//     if(err!==null)
//         console.log(data)
//     else
//         console.log(err.message)    
//     fs.writeFile('write.txt', data, (err)=>{
//         if(err!== null)
//             console.log(err)
//     })
// })


// try{
//     let data = fs.readFileSync('daa.txt', 'utf-8')
//     console.log(data)
//     fs.writeFileSync('write1.txt', data)
// }
// catch(err)
// {
//     console.log(err.message)
// }

// let data = "Some dummy data"
// // let data = fs.readFileSync('daa.txt', 'utf-8')
// fs.writeFile('data2.txt', data, {encoding:"utf-8", flag:"w"}, (err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Written Successfully")
//         console.log(fs.readFileSync('data2.txt', 'utf-8'))
//     }
// })

//append to the file///////////////////
// let content = "\nHello World!!!"
// fs.writeFile('data2.txt', content, {flag:'a'},(err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Written Successfully")
//         console.log(fs.readFileSync('data2.txt', 'utf-8'))
//     }
// })

/////rename a file ///////////////////
