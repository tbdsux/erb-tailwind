import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import AppProvider from './providers/app';

const Hello = () => {
  return (
    <div className="text-center">
      <img src={icon} alt="logo" className="h-48 w-48" />
      <h1 className="text-2xl font-bold">
        electron-react-boilerplate with tailwind
      </h1>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </Router>
    </AppProvider>
  );
}
