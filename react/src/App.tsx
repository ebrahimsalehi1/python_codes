import './App.css';
import {
  WithoutSelfClosingTag,
  WithSelfClosingTag,
} from './topics/react_001_use_self_closing_tags/Index';

function App() {
  return (
    <>
      <WithoutSelfClosingTag />
      <WithSelfClosingTag />
    </>
  );
}

export default App;
