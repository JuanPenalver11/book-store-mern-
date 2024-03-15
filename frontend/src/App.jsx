import { Routes, Route } from 'react-router-dom'; // npm i react-router-dom
import Home from './pages/Home';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';
import DeleleBooks from './pages/DeleleBooks';
import CreateBooks from './pages/CreateBooks';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='books/delete/:id' element={<DeleleBooks />} />
    </Routes>
  );
};

export default App;
