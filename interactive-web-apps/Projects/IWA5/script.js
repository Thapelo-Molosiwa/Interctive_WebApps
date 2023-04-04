const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let location = 'RSA';
let currency = 'R';
let customers = 1;
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

// calculate shipping cost based on location
if (location === 'RSA') {
  shipping = 400;
} else if (location === 'NAM') {
  shipping = 600;
} else if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
}

// apply free shipping if applicable
if (shoes + toys + shirts + batteries >= 1000 && customers === 1) {
  if (location === 'RSA' || location === 'NAM') {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

// show a warning if free shipping is applied to multiple customers
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

// calculate total cost including shipping
const total = shoes + toys + shirts + batteries + pens + shipping;

// show the total cost
console.log('price:', currency, total);