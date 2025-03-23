// for in 

const my_obj = {
    game1:"NFS",
    game2:"gta"
}
for (const key in my_obj) {
    // console.log(`${key} is abbreviation for ${my_obj[key]}`);
}
const programming=["js","rb","py","java","cpp"]

for (const element in programming){
    // console.log(programming[element]);  
}
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const [key] in map) {
    //console.log(key); //prints nothing not applicable
}
