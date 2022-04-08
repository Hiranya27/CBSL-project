import React, { useState } from "react";
import "../../Styles/CreateNewBank.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNewBank = () => {
	const [bank_name, setName] = useState("");
	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		// axios("http://localhost:8080/bank/add-bank", {
		// 	method: "POST",
		// 	headers: {"Content-Type": "application/json"},
		// 	body: bank_name
		// }).then((res) => {
		// 	console.log("data posted", res)
		// }).catch(err => {
		// 	console.log(err)
		// });

		axios
			.post(
				"http://localhost:8080/bank/add-bank",
				{ bank_name },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(
				(res) => console.log("Posting data", res),
				navigate("/bank-services")
			)
			.catch((err) => console.log(err));
	};

	return (
		<div className='create-bank'>
			<h1>Create New Bank</h1>
			<form className='form'>
				<label>
					Bank Name{" "}
					<input
						type='text'
						value={bank_name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
			</form>
			<button onClick={handleClick}>Add</button>
		</div>
	);
};

export default CreateNewBank;
