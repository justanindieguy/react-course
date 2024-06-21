import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Modal
      </Button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPage;
