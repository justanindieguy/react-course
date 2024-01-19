import Button from '../components/Button';
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

const ButtonPage: React.FC = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Primary!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloud />
          Secondary!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Success!
        </Button>
      </div>
      <div>
        <Button warning>Warning!</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Danger!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
