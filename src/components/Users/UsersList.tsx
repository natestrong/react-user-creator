import style from './UsersList.module.css';
import {IUser} from '../../models';
import Card from '../UI/Card';

function UsersList(props: { users: IUser[] }) {
    return (
        <Card className={style.users}>
            <ul>
                {props.users.map((user: IUser) => (
                    <li key={user.id}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;
