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

Milestone 3.
Aggiungere una select per filtrare le icone in base al tipo.
Popolare le options della select dinamicamente e,
ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
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

  // -------------------- Milestone 2 - Colors & types --------------------

  // Creating array of colors (length of this array must be the same as the number of the different icon types)
  const colors_list = ['lightcoral', 'green', 'brown'];
  console.log('The array of colors is:' , colors_list);
  // Creating array of types (length of this array must be the same as the number of colors)
  let types_list = [];
  // Scanning the array of icons to check the types
  icons_list.forEach((icon) => {
    const {type} = icon; // --> with destructuring
    /*
    const type = icon.type; // --> with dot notation (without destructuring)
    */
    if(!types_list.includes(type)) {
      types_list.push(type);
    }
  });
  console.log('The array of types is:' , types_list);

  // -------------------- Milestone 1 - Printing on screen --------------------

  // Scanning the array of icons
  icons_list.forEach((this_icon) => {
    // Showing them on the screen --> with function
    showIcons(this_icon, types_list, colors_list);
  });

  // -------------------- Milestone 3 - Select & Options --------------------

  // Scanning all the icon types to add each type to the select options (from the types array)
  types_list.forEach((type) => {
    $('select.icons-filter').append(`
      <option value="${type}">${type}</option>
      `);
  });

  // *** Showing on screen the icons according to the type selected by the user ***

  // Checking what is the type selected by the user
  $('select.icons-filter').change(() => {
    let selected_type = $('select.icons-filter').val();
    // Removing all the icons from screen HTML
    $('#icons-container').empty();
    // Checking if the selection is NOT on "show all" icons (select value NOT empty)
    if (selected_type !== '') {
      // Creating a new array containing the icons with the selected type only
      const selected_icons = icons_list.filter((icon) => selected_type === icon.type);
      // Printing in console the results
      console.log('The icon type selected by the user is: ' + selected_type + '.');
      console.log('The array containing the icons with the selected type is: ' , selected_icons);
      // Scanning this new array to print on screen the icons with corresponding names and colors --> with function
      selected_icons.forEach((this_icon) => {
        showIcons(this_icon, types_list, colors_list);
      });
    } else {
      // Showing all icons on the screen
      icons_list.forEach((this_icon) => {
        showIcons(this_icon, types_list, colors_list);
      });
      console.log('The user selected \'Show all\'.');
    }
  });

});

// --------------------------------- FUNCTIONS ---------------------------------

// Printing icons on the screen in HTML

// *********** SOLUTION 1 - DESTRUCTURING ***********
function showIcons(icon, types_array, colors_array) {
  // Destructuring the icons' properties
  const {name, prefix, type, family} = icon;
  // Finding the index of the type of the current icon (in the array of types)
  let type_index = types_array.indexOf(type);
  // Finding the corresponding color (same index as type index)
  let icon_color = colors_array[type_index];
  // Printing output using the new variables created through destructuring
  $('#icons-container').append(`
    <div class="icon">
    <i class="${family} ${prefix}${name} color-${icon_color}"></i>
    <h2>${name}</h2>
    </div>
    `);
}

/*
// *********** SOLUTION 2 - DOT NOTATION ***********
function showIcons(icon, types_array, colors_array) {
  // Finding the index of the type of the current icon (in the array of types)
  let type_index = types_array.indexOf(icon.type);
  // Finding the corresponding color (same index as type index)
  let icon_color = colors_array[type_index];
  // Printing output without destructuring the objects (dot notation)
  $('#icons-container').append(`
    <div class="icon">
      <i class="${icon.family} ${icon.prefix}${icon.name} color-${icon_color}"></i>
      <h2>${icon.name}</h2>
    <div>
  `);
}
*/
