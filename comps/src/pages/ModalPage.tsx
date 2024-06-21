import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;
