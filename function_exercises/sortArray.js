function sortArray (strings) {
    var sortedStrings = strings.sort(function (a, b) {
        return (a > b) ? 1 : ((a < b) ? -1 : 0);
    });
    console.log(sortedStrings);
}

sortArray ([
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
]);