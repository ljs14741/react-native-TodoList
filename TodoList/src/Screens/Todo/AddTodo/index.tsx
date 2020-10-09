import React, { useState } from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props {}

const AddTodo = ({ }: Props) => {
    const [showinput, setShowInput] = useState<boolean>(false);
    return (
        <>
            <AddButton onPress={() => setShowInput(true)} />
            {showinput && <TodoInput hideTodoInput={() => setShowInput(false)}
            />}
        </>
    );
};

export default AddTodo;