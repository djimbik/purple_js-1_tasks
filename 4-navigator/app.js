// HW - 1

const addressLat = 100;
const addressLong = 79;
const positionLat = 10;
const positionLong = 12;

const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(`Из точки А в точку B нам потребуется преодолеть расстояние ${distance}`);
