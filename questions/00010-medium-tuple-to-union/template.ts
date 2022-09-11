// solution
type TupleToUnion<T extends unknown[]> = T[number]

// process
// 1. type TupleToUnion<T> = T[number]
// 		배열을 순회하며 값을 할당해주는 lookup api사용 => 위에서 number는 인덱스 입니다.
// 2. 에러 발생 : Type 'number' cannot be used to index type 'T'
// 3. T가 배열인지 알 수 없어서 뱉는 에러 => 선언부에서 T가 배열이라는 제약을 걸어줍니다.
