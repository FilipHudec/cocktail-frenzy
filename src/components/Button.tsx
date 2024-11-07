
import ButtonCSS from './Button.module.css';

type ButtonProps = {
    onClick: () => void;

};

const Button : React.FC<ButtonProps> = ({onClick}) => {
    return (
        <button 
        onClick={onClick}
        className={ButtonCSS.button}
        >Find Cocktail</button>
    );
};
export default Button;