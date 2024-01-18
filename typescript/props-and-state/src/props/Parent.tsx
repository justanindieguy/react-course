import { Child, ChildAsFC } from './Child';

function Parent() {
  return (
    <div>
      <Child color="red" handleClick={() => console.log('Clicked!')}>
        Hello, World!
      </Child>
      <ChildAsFC color="red" handleClick={() => console.log('Clicked!')} />
    </div>
  );
}

export default Parent;
