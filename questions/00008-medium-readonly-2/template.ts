// 1. 프로퍼티 K는 T의 프로퍼티 안에 속한다. extends K
// 2. 교차연산자 '&'를 사용 => 두개의 조건을 걸어 각 조건에 걸리는 프로퍼티를 처리한다.
// 3-1. 첫번째 조건 : K에 해당하지 않는 경우 => 그대로 반환
// 3-2. 두번째 조건 : K에 해당하는 경우 => readonly 상태로 반환
// 3-3. 세번째 조건 : K가 없는 경우 => T안의 프로퍼티를 할당해줌으로 두번째 조건으로 빠지도록 설계

type MyReadonly2<T, K extends keyof T = keyof T> = {
	[P in Exclude<keyof T, K>]: T[P]
} &
	{
		readonly [key in K]: T[key]
	}
