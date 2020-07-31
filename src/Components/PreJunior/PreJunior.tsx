import React, {useState} from 'react';
import {FilterValueType} from "../../App";
import {HomeWork_2, lessonsType} from "./HomeWork_2/HomeWork_2";
import {HomeWork_3} from "./HomeWork_3/HomeWork_3";
import {HomeWork_1} from "./HomeWork_1/HomeWork_1";
import {EditableSpan2} from "../../common/EditableSpan2";


export function PreJunior() {
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
                <HomeWork_1
                    src="https://avatars.mds.yandex.net/get-pdb/2301590/a92c498e-7910-4b77-b246-2afa0e5943fd/s375"
                    name="Ivan"
                    text=" Hello World! Hello World! Hello World! Hello World!  "/>
                <HomeWork_2
                    title='HomeWork_2'
                    lessons={lessonsForMyAffair}
                    changeFilter={changeFilter}
                    deleteLesson={deleteLesson}
                />
                <HomeWork_3/>
                <EditableSpan2 text = 'нажмите для ввода'/>
                {/*<UniversalComp/>*/}
            </div>
        </div>
    );
}