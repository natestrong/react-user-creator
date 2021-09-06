import style from './Card.module.css';

function Card(props: any) {
    return (
        <div className={`${style.card} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
}

export default Card;
