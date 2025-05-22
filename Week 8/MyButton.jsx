import './MyButton.css';

export const MyButton = ({label, onClick}) => {
    return (
        <button className={'DefaultButton'} onClick={onClick}>
            {label}
        </button>
    );
}