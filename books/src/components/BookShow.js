import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => setShowEdit(!showEdit);

  const handleDeleteClick = () => onDelete(book.id);

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
