// Возвращает отфарматированное с пробелами число/строку
export const format = ( num ) => {
    const c = String(num);
    const cl = c.length;
    const n1 = Math.trunc(cl/3);
    const n2 = cl%3;
    let result = c.substr(0,n2);
    for (let i=1; i<=n1; i++) {
      result = result + ' ' + c.substr(n2+3*(i-1),3);
    }
    return result;
  }