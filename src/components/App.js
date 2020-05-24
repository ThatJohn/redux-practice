import React from 'react';
import List from './List';
import Form from './Form';
import Posts from './Posts';

const App = () => (
    <div>
        <h2>Articles</h2>
        <List />
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
        <Posts />
    </div>
)

export default App;