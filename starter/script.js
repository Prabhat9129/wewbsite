'use strict';
const dfultsrg = function (
  flightnum,
  pasangernum = 1,
  price = 200 * pasangernum
) {
  const bookings = [];
  flightnum = flightnum || 1;
  pasangernum = pasangernum || 4;
  const booking = {
    flightnum,
    pasangernum,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

dfultsrg('F23CD', 34);
