import style from './ErrorModule.module.css';
import Card from './Card';
import Button from './Button';
import {createPortal} from 'react-dom';
import {MouseEventHandler, ReactElement} from 'react';

export interface IError {
    title: string;
    message: string;
    messageChild?: ReactElement;
    onConfirmed: MouseEventHandler<HTMLDivElement>;
}

function Backdrop(props: any) {
    return <div className={style.backdrop}
                onClick={props.onConfirmed}/>;
}

function ModalOverlay(props: any) {
    return (
        <Card className={style.modal}>

            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={style.content}>
                <div>
                    <p>{props.message}</p>
                    {props.messageChild && props.messageChild}
                </div>
            </div>

            <footer className={style.actions}>
                <Button onClick={props.onConfirmed}>Okay</Button>
            </footer>
        </Card>
    );
}

function ErrorModal(props: IError) {
    return <>
        {createPortal(<Backdrop {...props}/>, document.getElementById('backdrop-root') as HTMLElement)}
        {createPortal(<ModalOverlay {...props}/>, document.getElementById('overlay-root') as HTMLElement)}
    </>;
}

export default ErrorModal;
