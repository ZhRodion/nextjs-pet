import { RootState } from '@/GlobalRedux/store'
import {
	decrement,
	increment,
	incrementByAmount,
} from 'GlobalRedux/Features/counter/counterSlice'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// interface CalcPageProps {
// 	children: React.ReactNode
// }

const CalcPage: FC = () => {
	const count = useSelector((state: RootState) => {
		return state.counter.value
	})

	const dispatch = useDispatch()

	return (
		<div>
			<button type='button' onClick={() => dispatch(increment())}>
				INCREMENT
			</button>
			<span>{count}</span>
			<button type='button' onClick={() => dispatch(decrement())}>
				DECREMENT
			</button>
			<button type='button' onClick={() => dispatch(incrementByAmount(2))}>
				INCREMENT x2
			</button>
		</div>
	)
}

export default CalcPage
