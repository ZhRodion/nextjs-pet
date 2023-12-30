import Modal from '@/Modal/Modal'
import styles from '@/SignUp/SignUp.module.scss'

const SignUp = () => {
	return (
		<Modal isOpen={true}>
			<b className={styles.modalHeading}>Регистрация</b>
			<form className={styles.signUpForm} action='POST' noValidate>
				<div className={styles.fieldWrapper}>
					<input className={styles.signUpField} type='text' placeholder='Имя' />
				</div>
				<div className={styles.fieldWrapper}>
					<input
						className={styles.signUpField}
						type='email'
						placeholder='Почта'
					/>
				</div>
				<div className={styles.fieldWrapper}>
					<input
						className={styles.signUpField}
						type='password'
						placeholder='Пароль'
					/>
				</div>
			</form>
		</Modal>
	)
}

export default SignUp
