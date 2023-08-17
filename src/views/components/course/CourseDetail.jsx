import { useParams } from "react-router-dom";

export default function CourseDetail() {
  const params = useParams();
  return (
    <div>
      <h2>Chi tiết khoá học</h2>
      <p>Mã khoá học: {params.courseId}</p>
    </div>
  );
}
