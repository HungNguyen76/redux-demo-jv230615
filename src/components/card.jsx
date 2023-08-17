/* eslint-disable react/prop-types */
export default function Card({ dogs }) {
  // const {dogs}  = props
  return (
    <>
      <div className="card ms-3" style={{ width: "18rem" }}>
        <img src={dogs.url} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{dogs.title}</h5>
          <p className="card-text">{dogs.body}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
