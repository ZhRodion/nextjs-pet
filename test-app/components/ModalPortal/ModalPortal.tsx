'use client'

import IsAdultModal from '@/IsAdultModal/IsAdultModal'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const ModalPortal = () => {
	const [body, setBody] = useState<HTMLElement | null>(() => {
		if (typeof document !== 'undefined') {
			return document.body
		}
		return null
	})
	// Проверить, была ли установлена кука 'isAdult'
	const isAdultCookieSet = Cookies.get('isAdult') === 'true'

	// Если кука уже установлена, не отображать модалку
	if (isAdultCookieSet) {
		return null
	}

	useEffect(() => {
		if (typeof document !== 'undefined') {
			setBody(document.body)
		}
	}, [])

	return (
		<>
			{!isAdultCookieSet &&
				body !== null &&
				createPortal(<IsAdultModal />, body)}
		</>
	)
}

export default ModalPortal
