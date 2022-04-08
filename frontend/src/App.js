import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import BankServices from "./Components/Pages/BankServices";
import NavBar from "./Components/NavBar";
import PersonServices from "./Components/Pages/PersonServices";
import CreatePerson from "./Components/Pages/CreatePerson";
import CreateNewBank from "./Components/Pages/CreateNewBank";
import Account from "./Components/Pages/Account";
import Footer from "./Components/Footer"

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/bank-services' element={<BankServices />} />
					<Route path='/person-services' element={<PersonServices />} />
					<Route path='/create-person' element={<CreatePerson />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/create-bank' element={<CreateNewBank />} />
					<Route path='/account-page' element={<Account />} />
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
