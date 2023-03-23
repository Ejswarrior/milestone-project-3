import inputStyles from "./Input.module.scss"

interface TextInputProps {
    type: "email" | "text" | "password";
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    maxlength: number;
    onChange?: () => void;
}
export default function TextInput( props: TextInputProps ) {

	const {
		type, placeholder, name, id, required, helperText, disabled, error, onChange, surface = "light"
	} = props

	const inputs = [inputStyles.inputContainer]

	if ( disabled ) inputs.push( inputStyles.disabled )

	if ( error ) inputs.push( inputStyles.error )

	return (
		<div className={inputs.join( " " )}>
			{helperText && <label className={inputStyles.helperText}>{helperText}</label>}

			<input 
				placeholder={placeholder}
				type={type}
				name={name}
				id={id}
				required={required}
				onChange={onChange}
				className={inputStyles.textInput}
			/>
		</div>
	)
}