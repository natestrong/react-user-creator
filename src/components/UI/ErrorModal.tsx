import style from './ErrorModule.module.css';
import Card from './Card';
import Button from './Button';
import {MouseEventHandler, ReactElement} from 'react';

export interface IError {
    title: string;
    message: string;
    messageChildren?: ReactElement[];
    onConfirmed: MouseEventHandler<HTMLDivElement>;
}

function ErrorModal(props: IError) {
    return <>
        <div className={style.backdrop}
             onClick={props.onConfirmed}/>
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
                <Button onClick={props.onConfirmed}>Okay</Button>
            </footer>
        </Card>
    </>;
}

export default ErrorModal;
