import ButtonPrimary from "@/components/BasicComponents/Button/ButtonPrimary";
import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import styles from './CreateAccount.module.scss';

export default function PasswordCreate() {
    return (
        <div className={styles.detailsContainer}>
            <form className={styles.formContainer}>
                <h1 className={styles.title}>Create your password</h1>

                <div className={styles.inputContainer}>
                    <div className={styles.inputWrapper}>
                        <TextInput 
                            required
                            type='password'
                            placeholder="Password's must be at least 8 characters long"
                            name='firstPassword'
                            id='password'
                            helperText="Enter in a Password"
                            maxlength={35}
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <TextInput 
                            required
                            type='password'
                            placeholder='Confirm password'
                            name='confirm'
                            helperText="Please Confirm your password"
                            id='confirm'
                            maxlength={35}
                        />
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    <ButtonPrimary type='submit' variation="primary">Next</ButtonPrimary>
                    <ButtonPrimary type='submit' variation="secondary">Back</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}