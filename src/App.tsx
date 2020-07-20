import React from 'react';
import './App.css';
import {PreJunior} from "./Components/PreJunior/PreJunior";
import {HashRouter, Route} from 'react-router-dom';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {OldJunior} from "./Components/OldJunior/OldJunior";
import {Junior} from "./Components/Junior/Junior";


export type FilterValueType = 'Все' | 'Высокая' | 'Средняя' | 'Низкая';

function App() {


    return (
        <HashRouter>
            <div className={'App_wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'App_wrapper__content'}>
                    <Route render={() =>
                        <PreJunior/>}
                           path={'/PreJunior'}
                    />
                    <Route render={() =>
                        <Junior/>}
                           path={'/Junior'}
                    />
                    <Route render={() =>
                        <OldJunior/>}
                           path={'/OldJunior'}
                    />
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
