import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Greeting />
      </div>
    </Provider>
  );
}

export default App;
