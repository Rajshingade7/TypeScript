let msg:string="hello";
console.log(msg);
//@ts-ignore
let firstname:string="raj";
let lastname:string="shingade";
let fullname:string=firstname.concat(lastname);
console.log(fullname);

let sentence:string="hello brother raj this side";
let sentencelength=sentence.length;
console.log(sentencelength);


let text:string="Hello I am here to do the task and doing the next also"

let uppercaseText:string=text.toUpperCase();
let lowercaseText:string=uppercaseText.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);


let longtext:string="hello I am raj shingade";
let shortText:string=longtext.slice(0,10);
let substring:string=longtext.substring(0,10);
console.log(shortText);
console.log(substring);


let str1:string="hello brother";
let str2:string="hello sister";
let result:boolean=str1==str2;
console.log(result);


let product:string="acer laptop";
let price:number=10000;
let productdetails:string=`the product name is ${product} and the price is ${price}`;
console.log(productdetails);

