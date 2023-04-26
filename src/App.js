
import './App.css';
import SignIn from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './Components/Signup';
import Upload from './Components/Upload';
import List from './Components/List';
import ViewData from './Components/viewData';
import Apk from './Components/Apk';
import Bin from './Components/bin';
import Deactivate from './Components/deactivate';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/list" element={<List/>}/>
    <Route path="/view" element={<ViewData/>}/>
    <Route path='/download-apk' element={<Apk />} />
    <Route path="/bin" element={<Bin/>}/>
    <Route path="/deactivate" element={<Deactivate/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
