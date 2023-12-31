'use client'

import Modal from '@/Modal/Modal'
import styles from '@/SignUp/SignUp.module.scss'

const SignUp = () => {
	return (
		<Modal isOpen={true}>
			<b className={styles.modalHeading}>Регистрация</b>
			<form className={styles.signUpForm} action='POST' noValidate>
				<div className={styles.fieldWrapper}>
					<input
						className={styles.signUpField}
						type='text'
						placeholder='Имя'
						autoComplete='true'
					/>
					<p className={styles.errorFieldText}></p>
				</div>
				<div className={styles.fieldWrapper}>
					<input
						className={styles.signUpField}
						type='email'
						placeholder='Почта'
						autoComplete='true'
					/>
					<p className={styles.errorFieldText}></p>
				</div>
				<div className={styles.fieldWrapper}>
					<input
						className={styles.signUpField}
						type='password'
						placeholder='Пароль'
						autoComplete='false'
					/>
					<p className={styles.errorFieldText}></p>
				</div>
				<button className={styles.signUpBtn} type='submit'>
					Зарегистрироваться
				</button>
				<div className={styles.solidLinesWrapper}>
					<span className={styles.grayLine}></span>
					<span className={styles.textBetwLines}>или</span>
					<span className={styles.grayLine}></span>
				</div>
				<button className={styles.signUpGoogleBtn} type='submit'>
					Войти через Google
					<img
						className={styles.googlePic}
						src='/img/vector/google.svg'
						alt='.Google Pic'
					/>
				</button>
			</form>
		</Modal>
	)
}

export default SignUp
