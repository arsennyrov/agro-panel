export const format = (num) => {
  return (
  new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0
}).format(num))}

export const transformFull = (obj={}) => {
  return {
      region: obj.AO__REGION,
      nameAo: obj.AO__FULLNAME,
      subName: obj.FIELD_GROUP__NAME,
      name: obj.CROPS__NAME,
      fact: obj.FACT,
      factInTime: obj.FACT_IN_TIME,
      factOverTime: obj.FACT_OVERTIME,
      factToday: 0,
      factTodayOver: 0,
      plan: obj.PLAN,
      progress: obj.PROGRESS,
      info: true,
  }
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

  export function cropStateOptions() {
    return [   
      {color: 'rgb(204,239,183)', 
       text: ['В процессе','(в срок)']},
      {color: 'rgb(170,210,147)',
       text: ['В процессе','(не в срок)']}, 
      {color: 'rgb(254,226,212)',
       text: ['Должны','начать посев']}, 
      {color: 'rgb(255,199,176)',
       text: ['Должны','уже досеять','(в срок)']},
      {color: 'rgb(217,171,156)',
       text: ['Должны','уже досеять','(не в срок)']},
      {color: 'rgb(239,239,239)',
       text: ['Посеяно']},
      {color: 'rgb(192,192,200)',
       text: ['Посеяно','не в срок']},
      {color: 'rgb(255,255,255)',
       text: ['Не начато']}
    ]
    };

    export function cropStateOptions4() {
      return [   
        {color: 'rgb(204,239,183)', 
         text: ['В процессе']},
        {color: 'rgb(254,226,212)',
         text: ['Не начато в срок']}, 
         {color: 'rgb(239,239,239)',
         text: ['Убрано']},
        {color: 'rgb(192,192,200)',
         text: ['Убрано','не в срок']},
         {color: 'rgb(255,255,255)', 
         text: ['Не начато']}
      ]
      };


