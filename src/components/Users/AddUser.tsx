import {FormEvent} from 'react';

function AddUser(props: any) {
    const addUserHandler = (event: FormEvent) => {
        event.preventDefault();
    };

    return <>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text'
                   name='username'/>

            <label htmlFor='age'>Age</label>
            <input type='number'
                   name='age'/>
            <button type='submit'>Add User</button>
        </form>
    </>;
}

export default AddUser;
