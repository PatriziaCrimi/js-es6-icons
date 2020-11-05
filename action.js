/* ASSIGNMENT
Milestone 1
Definire un array di oggetti; ogni oggetto rappresenta un'icona,
che è caratterizzata da un nome, prefisso, tipo e famiglia.
Utilizzando la funzione forEach e il template literal,
visualizzare in pagina tutte le icone
con il proprio nome.
*/

$(document).ready(function() {
  // Creating icons array (array of objects)
  let icons_list = [
    {
      name : 'cat',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'crow',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'dog',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'dove',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'dragon',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'horse',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'hippo',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'fish',
      prefix : 'fa-',
      type : 'animal',
      family : 'fas',
    },
    {
      name : 'carrot',
      prefix : 'fa-',
      type : 'vegetable',
      family : 'fas',
    },
    {
      name : 'apple-alt',
      prefix : 'fa-',
      type : 'vegetable',
      family : 'fas',
    },
    {
      name : 'lemon',
      prefix : 'fa-',
      type : 'vegetable',
      family : 'fas',
    },
    {
      name : 'pepper-hot',
      prefix : 'fa-',
      type : 'vegetable',
      family : 'fas',
    },
    {
      name : 'user-astronaut',
      prefix : 'fa-',
      type : 'user',
      family : 'fas',
    },
    {
      name : 'user-graduate',
      prefix : 'fa-',
      type : 'user',
      family : 'fas',
    },
    {
      name : 'user-ninja',
      prefix : 'fa-',
      type : 'user',
      family : 'fas',
    },
    {
      name : 'user-secret',
      prefix : 'fa-',
      type : 'user',
      family : 'fas',
    },
  ];
  console.log('The array of icons is:' , icons_list);

  // -------------------- Printing on screen the icons & names --------------------

  // Scanning the array of icons
  icons_list.forEach((icon) => {

    // *********** SOLUTION 1 - DESTRUCTURING ***********
    // Destructuring the icons' properties
    const {name, prefix, type, family} = icon;
    // Printing output using the new variables created through destructuring
    $('#icons-container').append(`
      <i class="${family} ${prefix}${name}"></i>
    `);
    /*
    // *********** SOLUTION 2 - DOT NOTATION ***********
    // Printing output without destructuring the objects (dot notation)
    $('#icons-container').append(`
      <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
    `);
    */
  });
});
