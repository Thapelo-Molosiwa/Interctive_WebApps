// const STATUS_MAP = {
//     shelf: {
//         color: 'green',
//         canReserve: true,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     reserved: {
//         color: 'blue',
//         canReserve: false,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     overdue: {
//         color: 'red',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     },
//     checkedOut: {
//         color: 'orange',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     }
// }

// // Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'







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
    }
  };
  
  // Select all the necessary elements
  const statusElements = document.querySelectorAll('.status');
  const reserveButtons = document.querySelectorAll('.reserve');
  const checkoutButtons = document.querySelectorAll('.checkout');
  const checkinButtons = document.querySelectorAll('.checkin');
  
  // Update each book's status, buttons, and color based on STATUS_MAP
  statusElements.forEach((statusElement, i) => {
    const bookStatus = statusElement.textContent.trim();
    const statusData = STATUS_MAP[bookStatus];
    
    // Update status color
    statusElement.style.color = statusData.color;
    
    // Disable/enable reserve button based on status
    reserveButtons[i].disabled = !statusData.canReserve;
    
    // Disable/enable checkout button based on status
    checkoutButtons[i].disabled = !statusData.canCheckout;
    
    // Disable/enable checkin button based on status
    checkinButtons[i].disabled = !statusData.canCheckIn;
    
    // Set button colors to black and grayscale
    reserveButtons[i].style.color = 'black';
    checkoutButtons[i].style.color = 'black';
    checkinButtons[i].style.color = 'black';
    reserveButtons[i].style.filter = statusData.canReserve ? 'grayscale(0%)' : 'grayscale(100%)';
    checkoutButtons[i].style.filter = statusData.canCheckout ? 'grayscale(0%)' : 'grayscale(100%)';
    checkinButtons[i].style.filter = statusData.canCheckIn ? 'grayscale(0%)' : 'grayscale(100%)';
  });
  