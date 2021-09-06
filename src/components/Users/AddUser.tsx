import {FormEvent, useState} from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser(props: any) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const resetForm = () => {
        setEnteredUsername('');
        setEnteredAge('');
    };

    const isValidForm = () => {
        return enteredUsername.trim().length > 0 &&
            enteredAge.trim().length > 0 &&
            Number(enteredAge) > 0;
    };

    const usernameHandler = (event: FormEvent<HTMLInputElement>) => setEnteredUsername(event.currentTarget.value);
    const ageHandler = (event: FormEvent<HTMLInputElement>) => setEnteredAge(event.currentTarget.value);

    const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isValidForm()) return;
        console.log(enteredUsername, enteredAge);
        resetForm();
    };

    return (
        <Card className={style.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text'
                       autoComplete='off'
                       name='username'
                       value={enteredUsername}
                       onChange={usernameHandler}/>

                <label htmlFor='age'>Age</label>
                <input type='number'
                       name='age'
                       value={enteredAge}
                       onChange={ageHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
