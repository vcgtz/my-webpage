import { render } from 'react-dom';
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="Vicente" />
    </div>
  );
}

render(<App />, document.getElementById('root'));
