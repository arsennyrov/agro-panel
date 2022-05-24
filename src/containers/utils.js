// Возвращает отфарматированное с пробелами число/строку
export const format = ( num ) => {
  if (num == 0) {
    return "-";
  }
  const c = String(num);
    const cl = c.length;
    const n1 = Math.trunc(cl/3);
    const n2 = cl%3;
    let result = c.substr(0,n2);
    for (let i=1; i<=n1; i++) {
      result = result + ' ' + c.substr(n2+3*(i-1),3);
    }
    // &nbsp;

    return result;
  }


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