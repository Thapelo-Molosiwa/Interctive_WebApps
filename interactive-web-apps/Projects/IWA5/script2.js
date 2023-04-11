const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
const FREE_WARNING = 'Free shipping only applies to single orders';
const customers = 1;




let currency = null // let currency be null
let shipping = 400
let shoes = 300 * 1
let toys = 100 * 7;
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED    
let price =  shirts + shoes + batteries + toys + pens + shipping   //Added items as price






if (location === 'RSA' ) {
    shipping = 400
    currency === 'RSA'


    }else if (location === 'NAM') {          //for Namibia
    shipping = 600
    currency == '$'



    }else if (location === "NK" ) {
    shipping = null
    currency = null
    console.log(BANNED_WARNING)

    }else {       //for other countries
    shipping = 800
    currency === '$'
}


if (price >= 1000) {
    if(customers === 1 && (location === 'RSA' || location === 'NAM') )
    shipping = 0

}


console.log('R' , price )