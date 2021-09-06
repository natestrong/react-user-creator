import {FormEvent, useRef, useState} from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import {IUser} from '../../models';
import {v4 as uuid} from 'uuid';
import ErrorModal, {IError} from '../UI/ErrorModal';

function AddUser(props: { addUser: Function }) {
    const usernameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<IError | null>();

    const getUsername = (): string => {
        return usernameInputRef.current ? usernameInputRef.current.value : '';
    };

    const getAge = (): number | null => {
        return ageInputRef.current ? Number(ageInputRef.current.value) : null;
    };

    const isValidUsername = (usernameValue: string) => usernameValue.trim().length > 0;
    const isValidAge = (ageValue: number | null) => {
        return ageValue && ageValue > 0;
    };
    const isValidForm = (usernameValue: string, ageValue: number | null) => isValidUsername(usernameValue) && isValidAge(ageValue);

    const showError = () => {
        const errorProps: IError = {
            title: 'Invalid Input',
            message: 'The following fields are missing or are invalid:',
            onConfirmed: () => setError(null)
        };
        errorProps.messageChild = (
            <ul>
                {!isValidUsername(getUsername()) ? <li>Username</li> : ''}
                {!isValidAge(getAge()) ? <li>Age</li> : ''}
            </ul>
        );
        setError(errorProps);
    };

    const createUserFromForm = (): IUser => {
        return {
            username: getUsername(),
            age: Number(getAge()),
            id: uuid()
        };
    };

    const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isValidForm(getUsername(), getAge())) return showError();
        props.addUser(createUserFromForm());
        event.currentTarget.reset();
    };

    return <>
        {error && <ErrorModal {...error}/>}
        <Card className={style.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input ref={usernameInputRef}
                       type='text'
                       autoComplete='off'
                       name='username'/>

                <label htmlFor='age'>Age</label>
                <input ref={ageInputRef}
                       type='number'
                       name='age'/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </>;
}

export default AddUser;
