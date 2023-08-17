import { useParams } from "react-router-dom"

export default function CourseDetailByType() {
    const params = useParams();
  return (
    <div>
        <h2>Chi tiết khoá học theo loại khoá học</h2>
        <p>Loại khoá học: {params.courseType} - Mã khoá học: {params.courseId} </p>
    </div>
  )
}
