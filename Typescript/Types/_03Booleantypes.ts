//True of false only
let isMyNameraj:boolean=true;
isMyNameraj=false;
// isMyNameraj="yes";//It is not possible for this type
function isEven(num:number):boolean{
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(3));