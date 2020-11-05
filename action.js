/* ASSIGNMENT
Milestone 1.
Definire un array di oggetti; ogni oggetto rappresenta un'icona,
che è caratterizzata da un nome, prefisso, tipo e famiglia.
Utilizzando la funzione forEach e il template literal,
visualizzare in pagina tutte le icone
con il proprio nome.

Milestone 2.
Definire un array di colori
e associare ad ogni tipo di icona un colore.
Visualizzare le icone di colore diverso in base al tipo.
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

  // -------------------- Milestone 1 - Printing on screen --------------------

  // Scanning the array of icons
  icons_list.forEach((icon) => {

    // *********** SOLUTION 1 - DESTRUCTURING ***********
    // Destructuring the icons' properties
    const {name, prefix, type, family} = icon;
    // Printing output using the new variables created through destructuring
    $('#icons-container').append(`
      <div class="icon">
        <i class="${family} ${prefix}${name}"></i>
        <h2>${name}</h2>
      </div>
    `);
    /*
    // *********** SOLUTION 2 - DOT NOTATION ***********
    // Printing output without destructuring the objects (dot notation)
    $('#icons-container').append(`
      <div class="icon">
        <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
        <h2>${icon.name}</h2>
      <div>
    `);
    */
  });

  // -------------------- Milestone 2 - Colors --------------------

  // Creating array of colors (length of this aerray must be the same as the number of the different icon types)
  const colors_list = ['lightcoral', 'green', 'purple'];
  console.log('The array of colors is:' , colors_list);
  // Creating array of types (lenght of this array must be the same as the number of colors)
  let types_list = [];
  // Scanning the array of icons to check the types
  icons_list.forEach((icon) => {
    const {type} = icon;
    /*
    const type = icon.type; // --> with dot notation (without destructuring)
    */
    if(!types_list.includes(type)) {
      types_list.push(type);
    }
  });
  console.log('The array of types is:' , types_list);
});
