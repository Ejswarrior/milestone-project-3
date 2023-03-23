import SelectOptions from "@/components/BasicComponents/SelectOptions/SelectOptions";
import {day, month, year} from './DateData';
import styles from './CreateAccount.module.scss';
import TextInput from "@/components/BasicComponents/TextInput/TextInput";
import ButtonPrimary from "@/components/BasicComponents/Button/ButtonPrimary";

interface DetailsPageProps {
    onClick: () => void;
}

export default function DetailsPage(props: DetailsPageProps) {
    const {onClick} = props
    return (
        <div className={styles.detailsContainer}>
            <form className={styles.formContainer}>
                <div className={styles.innerContainer}>
                <h1 className={styles.title}>Create your account</h1>
            
                <div className={styles.inputContainer}>
                    <TextInput 
                        required
                        type='text'
                        placeholder='Name'
                        name='name'
                        id='name'
                        maxlength={35}
                    />
                    </div>

                    <div className={styles.inputContainer}>
                        <TextInput 
                            required
                            type='email'
                            placeholder='Email'
                            name='email'
                            id='email'
                            maxlength={35}
                        />
                    </div>
                    <div className={styles.datePicker}>
                        <h2 className={styles.subtitle}>Date of birth</h2>
                        <p className={styles.disclaimerText}>Your DOB is only used to confirm you are 13 years or old. <br/> This information will not be public</p>
                        <div className={styles.menuWrapper}>
                            <SelectOptions data={day}/>
                            <SelectOptions data={month}/>
                            <SelectOptions data={year}/>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    <ButtonPrimary onClick={onClick} variation="primary" type="button">Next</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}