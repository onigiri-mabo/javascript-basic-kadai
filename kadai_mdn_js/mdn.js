const todaysDate = new Date();

const year = todaysDate.getFullYear();
const month = todaysDate.getMonth()+1;
const date = todaysDate.getDate();
console.log(year +'年' +month +'年' +date +'日');