import style from './Button.module.css';

function Button(props: any) {
    return (
        <button className={`${style.button} ${props.className || ''}`}
                type={props.type || 'button'}
                onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
