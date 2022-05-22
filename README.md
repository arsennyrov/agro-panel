<hr><i>Для запуска проекта на <b>React</b> необходимо клонировать соответствующую папку с проектом из указанного репозитория на свой компьютер и выполнить в этой папке следующие команды (при установленном <b>node.js</b>) </i>

          npm install
          npm start

<hr>

<b>Внимание.</b>
1. Чтобы получить на втором экране таблицу в 3 строки, надо в модуле /containers/data.js
 в массиве <b>crops</b> оставить 3 строки.
2. Аналогично, чтобы в Графике проблем и нареканий получить 3 вертикальных диаграмм,
  надо в модуле /BarChart/data.js в массиве <b>problems</b> оставить 3 строки.
3. Чтобы измениить размеры секторов в круговой диаграмме, надо в модуле /PieChart/data.js 
 в массиве dataSource изменить значения поля <b>value</b>.