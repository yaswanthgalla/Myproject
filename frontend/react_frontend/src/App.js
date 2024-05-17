import logo from './logo.svg';
	import './App.css';
	import HeaderComponent from './components/HeaderComponent';
	import FooterComponent from './components/FooterComponent';
	import ListEmployeeComponent from './components/ListEmployeeComponent';
	import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployeeComponent';
	function App() {
  	return (
		<div>
			<HeaderComponent/>
			<BrowserRouter>

   	 		<div className="container">
				<Routes>
					<Route exact path='/' element={<ListEmployeeComponent/>}/>
					<Route path='/employees' element={<ListEmployeeComponent/>}/>
					<Route path='/post' element={<CreateEmployee/>}/>
					<Route path='/update/:id' element={<UpdateEmployee/>}/>
				  </Routes>
    		</div>
			
			<FooterComponent/>
			</BrowserRouter>
		</div>
  		);
	}
	export default App;