const {readFile, writeFile} = require('fs')

readFile('./content/test1.txt','utf8', (err,res) => {
    if(err){
        console.log(err);
        return        
    }
    console.log(res);
    writeFile('./content/subContent/test2.txt', 'utf8', 
        'Wait im goated',
        {flag:'a'}
    )
    
})


//there is an issue in this code, I am unable to write to the file. I can read it tho. 

