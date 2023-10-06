import './TodoItem.css';
import { MdDelete } from 'react-icons/md';
import { BsCheck2All } from 'react-icons/bs';

function TodoItem (props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        ><BsCheck2All onClick={props.onComplete} />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</p>
      <span className="Icon Icon-delete"
        ><MdDelete onClick={props.onDelete} />
      </span>
    </li>
  );
}

export { TodoItem };
