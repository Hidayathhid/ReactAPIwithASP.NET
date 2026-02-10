import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import DCandidates from './components/DCandidates';
import DCandidateForm from './components/DCandidateForm';
import Container from '@mui/material/Container';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <DCandidates />
        <DCandidateForm />
      </Container>
    </Provider>
  );
}

export default App;
