import './Table.css';
import {powerStruct1, powerStruct2, powerStruct3, powerStruct4, powerStruct5, powerStruct6, powerStruct7, powerStruct8, powerStruct9, powerStruct10} from './powerStruct';
import { hui } from './work';
// import{powerStruct1} from './work';
const Table = () => {
  return (
      <table className = "table ">
          <tr>
            <th>№ п.п</th>
            <th>Заряд (%)</th>
            <th>Исправность</th>
            <th>Время до полного заряда</th>
            <th>Статус</th>
          </tr>
        <tr>
          <td class = "tdd">{powerStruct1.num}</td>
          <td class = "tdd">{powerStruct1.charge}</td>
          <td class = "tdd">{powerStruct1.isprav}</td>
          <td class = "tdd">{powerStruct1.timeLost}</td>
          <td class = "tdd">{powerStruct1.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct2.num}</td>
          <td class = "tdd"> {powerStruct2.charge}</td>
          <td class = "tdd">{powerStruct2.isprav}</td>
          <td class = "tdd">{powerStruct2.timeLost}</td>
          <td class = "tdd">{powerStruct2.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct3.num}</td>
          <td class = "tdd"> {powerStruct3.charge}</td>
          <td class = "tdd">{powerStruct3.isprav}</td>
          <td class = "tdd">{powerStruct3.timeLost}</td>
          <td class = "tdd">{powerStruct3.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct4.num}</td>
          <td class = "tdd"> {powerStruct4.charge}</td>
          <td class = "tdd">{powerStruct4.isprav}</td>
          <td class = "tdd">{powerStruct4.timeLost}</td>
          <td class = "tdd">{powerStruct4.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct5.num}</td>
          <td class = "tdd"> {powerStruct5.charge}</td>
          <td class = "tdd">{powerStruct5.isprav}</td>
          <td class = "tdd">{powerStruct5.timeLost}</td>
          <td class = "tdd">{powerStruct5.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct6.num}</td>
          <td class = "tdd"> {powerStruct6.charge}</td>
          <td class = "tdd">{powerStruct6.isprav}</td>
          <td class = "tdd">{powerStruct6.timeLost}</td>
          <td class = "tdd">{powerStruct6.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct7.num}</td>
          <td class = "tdd"> {powerStruct7.charge}</td>
          <td class = "tdd">{powerStruct7.isprav}</td>
          <td class = "tdd">{powerStruct7.timeLost}</td>
          <td class = "tdd">{powerStruct7.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct8.num}</td>
          <td class = "tdd"> {powerStruct8.charge}</td>
          <td class = "tdd">{powerStruct8.isprav}</td>
          <td class = "tdd">{powerStruct8.timeLost}</td>
          <td class = "tdd">{powerStruct8.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct9.num}</td>
          <td class = "tdd"> {powerStruct9.charge}</td>
          <td class = "tdd">{powerStruct9.isprav}</td>
          <td class = "tdd">{powerStruct9.timeLost}</td>
          <td class = "tdd">{powerStruct9.stat}</td>
        </tr>

        <tr>
          <td class = "tdd">{powerStruct10.num}</td>
          <td class = "tdd"> {powerStruct10.charge}</td>
          <td class = "tdd">{powerStruct10.isprav}</td>
          <td class = "tdd">{powerStruct10.timeLost}</td>
          <td class = "tdd">{powerStruct10.stat}</td>
        </tr>
      </table>  
  );
}
export default Table;