import { useMemo, useState, useRef } from "react";

export default function Memo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: memo.jsx:7 ~ Memo ~ products:", products);
  const nameRef = useRef()
  const handleAdd = () => {
    setProducts([...products,{name: name,price: +price}]);
    setName("")
    setPrice("")
    nameRef.current.focus()
  };
  const total = useMemo(() => {
    const result = products.reduce((acc, prod) => {
        return acc + prod.price
    }, 0)
    console.log("🚀 ~ file: memo.jsx:16 ~ total ~ result:", result)
    return result
  },[products])
  return (
    <>
      <div>
        <input
          type="text"
          ref={nameRef}
          value={name}
          placeholder="Nhap name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={price}
          placeholder="Nhap price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleAdd}>Add product</button>
        <p>Total: {total}</p>
        <ul>
          {products.map((p, index) => (
            <li key={index}>
              {p.name} - {p.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
