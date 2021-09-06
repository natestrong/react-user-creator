import {FormEvent, useState} from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import {IUser} from '../../models';
import {v4 as uuid} from 'uuid';
import ErrorModal, {IError} from '../UI/ErrorModal';

function AddUser(props: { addUser: Function }) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState<IError | null>();

    const resetForm = () => {
        setEnteredUsername('');
        setEnteredAge('');
    };

    const isValidUsername = () => enteredUsername.trim().length > 0;
    const isValidAge = () => {
        return enteredAge.trim().length > 0 &&
            Number(enteredAge) > 0;
    };
    const isValidForm = () => isValidUsername() && isValidAge();

    const showError = () => {
        const errorProps: IError = {
            title: 'Invalid Input',
            message: 'The following fields are missing or are invalid:',
            onConfirmed: () => setError(null)
        };
        errorProps.messageChild = (
            <ul>
                {!isValidUsername() ? <li>Username</li> : ''}
                {!isValidAge() ? <li>Age</li> : ''}
            </ul>
        );
        setError(errorProps);
    };

    const createUserFromForm = (): IUser => {
        return {
            username: enteredUsername,
            age: Number(enteredAge),
            id: uuid()
        };
    };

    const usernameHandler = (event: FormEvent<HTMLInputElement>) => setEnteredUsername(event.currentTarget.value);
    const ageHandler = (event: FormEvent<HTMLInputElement>) => setEnteredAge(event.currentTarget.value);

    const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isValidForm()) return showError();
        props.addUser(createUserFromForm());
        resetForm();
    };

    return <>
        {error && <ErrorModal {...error}/>}
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
    </>;
}

export default AddUser;
