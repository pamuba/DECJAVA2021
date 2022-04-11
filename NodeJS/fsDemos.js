var fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data)=>{
    if(err!==null)
        console.log(data)
    else
        console.log(err.message)    
    fs.writeFile('write.txt', data, (err)=>{
        if(err!== null)
            console.log(err)
    })
})


try{
    let data = fs.readFileSync('daa.txt', 'utf-8')
    console.log(data)
    fs.writeFileSync('write1.txt', data)
}
catch(err)
{
    console.log(err.message)
}