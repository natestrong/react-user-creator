import {FormEvent} from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser(props: any) {
    const addUserHandler = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <Card className={style.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text'
                       autoComplete='off'
                       name='username'/>

                <label htmlFor='age'>Age</label>
                <input type='number'
                       name='age'/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
