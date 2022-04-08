import React, { useState, useEffect } from "react";
import "../../Styles/BankServices.css";
import { useNavigate } from "react-router";
import axios from "axios";

const Services = () => {
	// const bankdetails = [
	// 	{ id: 1, name: "People's Bank" },
	// 	{ id: 2, name: "Bank of Ceylon" },
	// 	{ id: 3, name: "Hatton National Bank" },
	// 	{ id: 4, name: "Nation's Bank" },
	// 	{ id: 5, name: "Ruhunu Bank" },
	// 	{ id: 6, name: "People's Bank" },
	// 	{ id: 7, name: "People's Bank" },
	// ];

	const [bank , setBank] = useState([])

	let navigate = useNavigate();

	
	useEffect(() => {
		axios
			.get("http://localhost:8080/bank/getAllBanks")
			
			.then((result) => {
				console.log(result);
				setBank(...[result.data])
				
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const showPersons = () =>{
		navigate("/person-services")
	}


	const banks = bank.map((bank) => {
		return (
			<div className='bank-body' onClick={showPersons}>
				<div className='bank-content'>
					<h4 className='bank-id'> {bank.id}</h4>
					<h4 className='bank-name'>{bank.bank_name}</h4>
					<div className='bank-btn'>
						<button>DELETE</button>
						<button>UPDATE</button>
					</div>
				</div>
				<hr />
			</div>
		);
	});
	return (
		<div className='bank'>
			<h1>Name of the banks</h1>
			{banks}
			<button className='add-bank-btn' onClick={() => navigate("/create-bank")}>Add New Bank</button>
		</div>
	);
};

export default Services;
