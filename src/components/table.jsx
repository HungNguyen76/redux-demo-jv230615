// import React from 'react'

export default function Table({ productList }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">name</th>
            <th scope="col">stock</th>
            <th scope="col">price</th>
            <th scope="col">image</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>
                <img width={50} height={50} src={item.url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
