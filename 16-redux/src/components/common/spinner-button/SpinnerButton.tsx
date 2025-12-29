import './SpinnerButton.css'
import spinnerSrc from '../../../assets/spinner.gif'

interface SpinnerButtonProps {
    isSpinning: boolean
    buttonText: string
    spinningText: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function SpinnerButton(props: SpinnerButtonProps) {

    const { isSpinning, buttonText, spinningText, onClick } = props

    return (
        <div className='SpinnerButton'>
            {!isSpinning && <button onClick={onClick}>{buttonText}</button>}
            {isSpinning && <span>{spinningText}... <i><img src={spinnerSrc} /></i></span>}
        </div>
    )
}