// 문제 : 객체 T의 property가 객체인 경우에는 재귀, 그 외에 타입인 경우에는 그대로 반환
// 1. 객체 T의 property에는 readonly를 붙인다.
// 2-1. 객체 T의 property가 함수인 경우 => Function도 객체로 분류되기 때문에 별도 처리 필요
// 2-2. 객체 T가 object로 분류도는 경우 => 재귀 구현
// 2-3. 그 외 타입인 경우 => 그대로 반환

type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends Function
		? T[P]
		: T[P] extends object
		? DeepReadonly<T[P]>
		: T[P]
}
