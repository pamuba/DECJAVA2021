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
// fs.rename('data.txt', 'new.txt', (err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Written Successfully")
//     }
// })

///delete a file////////////////////////
// fs.unlink('new.txt', (err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Written Successfully")
//     }
// })

/////////////copy a file///////////////////////
// var source = "data2.txt"
// var destination = "copy.txt"

// fs.copyFile(source, destination, (err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Written Successfully")
//     }
// })


///////copy a folder//////////////
// var path = require('path')
// var source = "folderA"
// var destination = "folderB"

// function copyFolder(from , to){
//     fs.mkdirSync(to);
//     fs.readdirSync(from).forEach(file => {
//         fs.copyFileSync(path.join(from, file), path.join(to, file))
//     })
// }
// copyFolder(source, destination)

//////////////////delete a folder///////////////
// fs.rm("folderA",{recursive:true}, (err)=>{
//     if(err){
//     console.log(err.message)
//     }
//     else{
//         console.log("Folder removed Successfully")
//     }
// })


//////truncate a file/////////////////////
// fs.unlink('data2.txt', (err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("File Deleted Successfully")
//     }
// })