import './assets/sass/App.scss';
import UserForm from './pages/userForm';
import UserList from './pages/userList';
import Home from './pages/home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './pages/notFoundPage';
import TransactionSummary from'./pages/transactionSummary';


function App() {
  return (
    <div className="App">
      <Router>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/userForm" element={<UserForm />} />
    <Route path="/userList" element={<UserList />} />
    <Route path="/transactionSummary" element={<TransactionSummary />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</Router>

      {/* <Routes>
        <Route>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/userForm">
            <UserForm />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>

          <Route path="/transactionSummary">
            <TransactionSummary />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
          </Route>
          </Routes> */}
    
    </div>
  );
}

export default App;
