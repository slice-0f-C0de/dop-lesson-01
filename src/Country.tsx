import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType) => void // 4. Типизируем стейт
  }

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilterValue("All")
    }

    const setDollars = () => {
        props.setFilterValue("Dollars")
    }

    const setRUBLS = () => {
        props.setFilterValue("RUBLS")
    } // 5. Выбрасываем стейт через пропсы и указываем соответствующий тип

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button> {/* 6. Передаём ссылки на функции со стейтами */}
            <City data={props.data}/>
        </div>
    );
};

