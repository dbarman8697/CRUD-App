import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const students = useSelector((store) => store.studentReducer.students);

  useEffect(() => {
    const data = students.find((el) => el.id === +id);
    console.log(data);
    setData(data);
    console.log(id);
  }, []);
  return (
    <div>
      <h3 className="student-id">
        {/* Show Movie Id here, Do not add any extra text */}
        {id}
      </h3>
      {/* Show Movie details here */}
      <img className="student-image" src={data.Poster} alt="" />
    </div>
  );
};
