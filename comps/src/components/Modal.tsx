import ReactDOM from 'react-dom';
import { useEffect } from 'react';

type ModalProps = React.HTMLAttributes<HTMLElement> & {
  actionBar: React.ReactNode;
  onClose: () => void;
};

const Modal = ({
  actionBar,
  children,
  onClose,
}: ModalProps): React.ReactPortal => {
  const overflowHiddenClass = 'overflow-hidden';

  useEffect(() => {
    document.body.classList.add(overflowHiddenClass);

    return () => {
      document.body.classList.remove(overflowHiddenClass);
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')!,
  );
};

export default Modal;
