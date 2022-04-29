const fs=require('fs')
const readline=require("readline-sync")
var data=[{Name:"kirtee patil",Location:"Pune",College:"Lanonde",Hobbies:"Drawing"},
{Name:"aabiru rashid",Location:"Kashmir",Cllege:"Elied highar SEC",Hobbies:"Dansing"},
{Name:"Kanchan patil",Location:"Palghar",College:"Dandekar college palghar",Hobbies:"Singing"},
{Name:"jabbina bano",Location:"jammu kashmir",College:"KPS college kashmir",Hobbies:"Dancing"}]
fs.writeFileSync('dummy.json',JSON.stringify(data,null,2));
buf_data=fs.readFileSync('dummy.json',"utf-8");
console.log(buf_data)
let user=readline.question("enter the user name do you want")
// const names=buf_data;
// console.log(names)
var newnames=data.filter((a)=>{
    if ((a.Name).includes(user)){
        return a.Name
    }
});
console.log(newnames)