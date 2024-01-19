import Accordion from '../components/Accordion';

const AccordionPage: React.FC = () => {
  const items = [
    {
      id: '20967912-1141-4535-a650-7c8134f2d73c',
      label: 'Can I use React on a project?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor quis accumsan placerat, massa metus accumsan ipsum, sagittis cursus leo justo sit amet ex. Maecenas iaculis augue maximus urna rutrum elementum. Nunc porttitor nisl ut quam euismod, ac molestie nisi malesuada. Phasellus ac viverra elit, at semper lacus. Suspendisse potenti. Curabitur pulvinar malesuada dolor, in tempus ante euismod in. Donec ullamcorper lectus eget maximus dictum. Sed sodales purus a cursus efficitur.',
    },
    {
      id: 'c50fe26c-c9a7-449c-85e5-517ab633faae',
      label: 'Can I use JavaScript on a project?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor quis accumsan placerat, massa metus accumsan ipsum, sagittis cursus leo justo sit amet ex. Maecenas iaculis augue maximus urna rutrum elementum. Nunc porttitor nisl ut quam euismod, ac molestie nisi malesuada. Phasellus ac viverra elit, at semper lacus. Suspendisse potenti. Curabitur pulvinar malesuada dolor, in tempus ante euismod in. Donec ullamcorper lectus eget maximus dictum. Sed sodales purus a cursus efficitur.',
    },
    {
      id: '708594f6-86b5-4368-aa80-94d644201a2b',
      label: 'Can I use CSS on a project?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor quis accumsan placerat, massa metus accumsan ipsum, sagittis cursus leo justo sit amet ex. Maecenas iaculis augue maximus urna rutrum elementum. Nunc porttitor nisl ut quam euismod, ac molestie nisi malesuada. Phasellus ac viverra elit, at semper lacus. Suspendisse potenti. Curabitur pulvinar malesuada dolor, in tempus ante euismod in. Donec ullamcorper lectus eget maximus dictum. Sed sodales purus a cursus efficitur.',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
