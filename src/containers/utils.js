export const format = (num) => {
  return (
  new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0
}).format(num))}


// Переставляет элементы массива объектов,
// разнося элементы с наименьшими значениями.
export const shiftArr = (arr) => {
    let m = [0,0,0,0];
  
    arr.sort(function(a,b){ 
      return a.value-b.value
    })
  
    m[0] = arr[3];
    m[1] = arr[0];
    m[2] = arr[2];
    m[3] = arr[1];
  
    return m;
  }