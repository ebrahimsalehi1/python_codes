const text =
  'Contact me at ebrahimsalehi@yahoo.com';
const regex =
  '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';

const emails = text.match(regex);
console.log(emails);
