## Hooks in React
    hooks => function, được gắn vào function component trong React
    thay thế cho class component để quản lý được vòng đời của component trong React
    bắt đầu băng chữ use...
     muốn sử dụng hooks thì import từ react
    thường thì sẽ sử dụng hooks ở đầu function component
# useState 
    tương đương với constructor() bên class component để khai báo state
     const [count, setCount] = useState(initialState)

# useEffect 
    thể hiện side effect bên trong function component, callAPI, setTimeout, cập nhật dữ liệu, cập nhật UI...

    useEffect nhận vào 2 tham số: 1.callback 2.mảng deps
    Có 4 cách sử dụng: 
    1. useEffect(callback) => Luôn luôn Gọi callback mỗi khi component re-render, gọi callback mỗi khi thêm component vào DOM
    2. useEffect(callback, []) => chỉ gọi callback 1 lần sau khi component mounted/call API (componentDidMount())
    3. useEffect(callback, [deps]) => callback sẽ được gọi lại mỗi khi dependencies thay đổi
    4. useEffect(return () => {}) => remove component khỏi DOM

# useRef
    hook là 1 function trả về 1 object với thuộc tính current được khởi tạo qua tham số truyền vào. Object có thể thay đổi và tồn tại xuyên suốt vòng đời của Component
    useRef dùng để lưu giá trị qua 1 tham chiếu bên ngoài function Component
# useContext và Context()
    Context cung cấp cách chia sẻ dữ liệu (state) tơi các component con trong cây DOM mà không cần truyền props theo từng cấp bậc
    useContext là 1 hooks trong react cho phép làm việc với React Context trong function component
# useReducer 
    1 hook được sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó
    useReducer nhận vào reducer function và initState khởi tạo ban đầu, trả về state hiện tại và 1 hàm dispatch dùng để trigger 1 action
    Flow của redux:
    1. Action
    2. Reducer
    3. Dispatch
    4. Store
# useCallback useCallback(() => {}, [deps])
    trả về 1 function và useCallback + memo (HOC high order component)
    sử dụng để tối ưu quá trình render của function component
    tránh việc re render liên tục không cần thiết của 1 component

# useMemo useMemo(() => {logic }, [deps])
    trả về 1 giá trị
    hooks có tác dụng giúp tránh việc lặp đi lặp lại 1 logic tính toán nặng nề

