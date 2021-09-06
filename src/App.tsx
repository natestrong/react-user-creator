import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import {useState} from 'react';
import {IUser} from './models';

function App() {
    const [users, setUsers] = useState<IUser[]>([]);

    const addUserHandler = (user: IUser) => {
        setUsers((users) => [user, ...users]);
    };

    return <>
        <AddUser addUser={addUserHandler}/>
        {users.length && <UsersList users={users}/>};
    </>;
}

export default App;
