// scripts.js

const STATUS_MAP = {
  shelf: {
    color: 'green',
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: 'blue',
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: 'red',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: 'orange',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

const statusElements = document.querySelectorAll('.status');   // all status are named the same all other tags/divs
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

statusElements.forEach((statusElement, index) => {
  const status = statusElement.textContent.trim().toLowerCase();
  const { color, canReserve, canCheckout, canCheckIn } = STATUS_MAP[status];

  statusElement.style.color = color;
  reserveButtons[index].disabled = !canReserve;    // This line of code sets the "disabled" property of a button to either "true" or "false" depending on the value of a variable called "canReserve".
  checkoutButtons[index].disabled = !canCheckout;
  checkinButtons[index].disabled = !canCheckIn;
  reserveButtons[index].style.filter = canReserve ? '' : 'grayscale(100%)';
  checkoutButtons[index].style.filter = canCheckout ? '' : 'grayscale(100%)';
  checkinButtons[index].style.filter = canCheckIn ? '' : 'grayscale(100%)';
});







