import { useState } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
    // data pro list
    const [list, setList] =  useState([
        // this is sooo bad
        { id: null, date: '', title: '', content: '', done: false }
    ]);

    return (
        <div className="app">
			<Form list={ list } setList={ setList } />
			<List list={ list } setList={ setList } />
        </div>
    );
}

export default App;