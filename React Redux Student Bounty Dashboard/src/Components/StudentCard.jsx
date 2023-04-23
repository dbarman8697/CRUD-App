import { Link } from "react-router-dom";

export const StudentCard = ({ id, Poster, name, batch, green_card }) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img src={Poster} className="student-image" alt="Poster_image" />
      <h3 className="student-name">{name}</h3>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <Link to={`/student/${id}`}>
        <button className="student-detail">View Details</button>
      </Link>
    </div>
  );
};

// - Show the `student id` in h3 tag with class `student-id`
// - Show image in image tag with class `student-image`
// - Show name with class `student-name`
// - Show student code in p tag with class `student-code`
// - Show batch in p tag with class `student-batch`
// - Show score in p tag with class `student-score`
// - Show the number of green cards in h3 tag with class `student-green-card`
