import { useCallback, useState } from "react";
import Content from "./content";
// Reference Type:useCallback so sánh dụa trên toán tử ===
// useCallback mỗi lần tạo hàm mới, callback nó sẽ lưu hàm này vào bộ nhớ và trả về tham chiếu mới dựa trên deps
// nếu [] ko có deps, callback luôn trả về tham chiếu cũ, dẫn đến không re-render lại component
//Primitive Type:
export default function Callback() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <div style={{ padding: "10px 32px" }}>
        <Content onIncrease={handleIncrease} />
        <p>{count}</p>
      </div>
    </>
  );
}
