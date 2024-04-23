import "./BoardList.css";
import BoardItem from "./BoardItem";

const BoardList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <BoardItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BoardList;
