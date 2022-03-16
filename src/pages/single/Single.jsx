import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single() {
  return (
    <div>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
