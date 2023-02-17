import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotsType = 'Dollars' | 'RUBLS' | "All"

export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

let defaultMoney: MoneyType[] = [  // 1. типизируем
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]


export const moneyFilter = (money: MoneyType[], filterValue: BanknotsType): MoneyType[] => {
    if (filterValue === "All") return money
    return money.filter((el) => el.banknotes === filterValue)
}

function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney) // 1. Типизируем стейт и указываем
    // оригинальный массив в качестве начального значения
    const [filterValue, setFilterValue] = useState<BanknotsType>('All') // 2. Типизируем
    // стейт и указываем начальное значение
    const filteredMoney = moneyFilter(money, filterValue) // 3. Присваиваем переменной отфильтрованный
    // массив

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue} // 4. Передаём стейт в компоненту

            />
        </div>
    );
}

export default App;
