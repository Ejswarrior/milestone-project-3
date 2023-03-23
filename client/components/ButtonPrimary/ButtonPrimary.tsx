import buttonStyles from "./ButtonPrimary.module.scss";


export interface ButtonProps {
    /*
     * Set Button Type
     */
    type: "button" | "reset" | "submit";
    /*
     * Toggle Disabled state
     */
    disabled?: boolean;
    /*
     * Button's children content
     */
    children: React.ReactNode;
    /*
    * Change variation of button
    */
    variation: "primary" | "secondary";
    /*
    * Tab index assigned to button to make it the first tab
    */
    tabIndex?: number;
    /* 
    onCLick Event handler for the button
    */
    onClick?: ( evt: React.MouseEvent<HTMLButtonElement> ) => void;
}

export default function ButtonPrimary( props: ButtonProps ) {

	const {
		type, disabled, children, variation, tabIndex, ...rest
	} = props;

	const buttonVariation = [buttonStyles.button];

	if ( variation === "secondary" ) buttonVariation.push( buttonStyles.secondary );

	return (
		<div>
			<button
				className={buttonVariation.join( " " )}
				type={type}
				disabled={disabled}
				tabIndex={tabIndex}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}