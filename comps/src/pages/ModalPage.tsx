import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const actionBar = (
    <Button onClick={handleClose} primary>
      Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept!</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
