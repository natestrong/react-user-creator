import style from './ErrorModule.module.css';
import Card from './Card';
import Button from './Button';
import {ReactElement} from 'react';

export interface IError {
    title: string;
    message: string;
    messageChildren?: ReactElement[];
    onOkay: Function;
}

function ErrorModal(props: IError) {
    return <>
        <div className={style.backdrop}/>
        <Card className={style.modal}>

            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={style.content}>
                <div>
                    <p>{props.message}</p>
                    {props.messageChildren && props.messageChildren}
                </div>
            </div>

            <footer className={style.actions}>
                <Button onClick={props.onOkay}>Okay</Button>
            </footer>
        </Card>
    </>;
}

export default ErrorModal;
