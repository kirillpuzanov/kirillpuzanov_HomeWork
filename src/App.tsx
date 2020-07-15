import React, {useState} from 'react';
import './App.css';
import {Message} from "./Components/HomeWork_1/Message";
import {HomeWork_2, lessonsType} from "./Components/HomeWork_2/HomeWork_2";
import {HomeWork_3} from "./Components/HomeWork_3/HomeWork_3";
import {UniversalComp} from "./Components/UniversalComp/UniversalComp";


export type FilterValueType = 'Все' | 'Высокая' | 'Средняя' | 'Низкая';

function App() {


    let [lessons, setLessons] = useState<Array<lessonsType>>([
        {id: 1, n: "Реакт", p: "Высокая"},
        {id: 2, n: "Работа", p: "Низкая"},
        {id: 3, n: "Спорт", p: "Средняя"},
        {id: 4, n: "Семья", p: "Высокая"},]);

    let [filter, setFilter] = useState<FilterValueType>('Все');
    let lessonsForMyAffair = lessons;

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    if (filter === 'Высокая') {
        lessonsForMyAffair = lessons.filter(t => t.p === 'Высокая')
    }
    if (filter === 'Средняя') {
        lessonsForMyAffair = lessons.filter(t => t.p === 'Средняя')
    }
    if (filter === 'Низкая') {
        lessonsForMyAffair = lessons.filter(t => t.p === 'Низкая')
    }

    function deleteLesson(id: number) {
        let FilterLessons = lessons.filter((t) => {
            return t.id !== id;
        })
        setLessons(FilterLessons);
    }


    return (
        <div>
            <div className="App">
                <Message src="https://avatars.mds.yandex.net/get-pdb/2301590/a92c498e-7910-4b77-b246-2afa0e5943fd/s375"
                         name="Ivan" text=" Hello World! Hello World! Hello World! Hello World!  "/>
            </div>
            <HomeWork_2
                title='HomeWork_2'
                lessons={lessonsForMyAffair}
                changeFilter={changeFilter}
                deleteLesson={deleteLesson}
            />
            <HomeWork_3/>
            <UniversalComp/>
        </div>
    );
}

export default App;
