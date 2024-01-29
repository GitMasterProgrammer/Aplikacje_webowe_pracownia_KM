import './button.scss'
interface ButtonProps {
    text: string
    onClick: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button className='button' onClick={props.onClick}>
            {props.text}
        </button>
    );
}