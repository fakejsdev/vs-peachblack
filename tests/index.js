// index.js - Test zmiennych i funkcji
const greeting = "Hello World";
let count = 42;

/**
 * Przykładowa funkcja
 * @param {string} name 
 */
function welcomeUser(name) {
  const message = `${greeting}, ${name}!`;
  console.log(message);
  
  if (count > 0) {
    return true;
  }
  return false;
}

welcomeUser("Dev");