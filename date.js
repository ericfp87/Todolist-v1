

module.exports.getDate = getDate;

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("pt-BR", options);
  return day;
}

// outra forma de declarar função:

// module.exports.getDate = function (){
//   let today = new Date();
//
//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };
//
//   let day = today.toLocaleDateString("pt-BR", options);
//   return day;
// }


module.exports.getDay = getDay;

function getDay(){
  let today = new Date();

  let options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("pt-BR", options);
  return day;
}
