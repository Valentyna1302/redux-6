import { useDispatch } from "react-redux";
import s from "./TodoList.module.css";
import { FaStar } from "react-icons/fa";
import { deleteTodo } from "../../redux/counter/todoSlice";

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input type="checkbox" checked={isCompleted} />
      <p>
        {isFavorite && <FaStar color="gold" />} {todo}
      </p>
      <div>
        <button>{isFavorite ? "Dislike" : "Like"}</button>
        <button>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
