import "./BoardList.css";
import BoardItem from "./BoardItem";

const BoardList = ({ data, getId }) => {
  return (
    <div>
      {data.map((item) => (
        <BoardItem key={item.id} {...item} getId={getId} />
      ))}
    </div>
  );
};

export default BoardList;
