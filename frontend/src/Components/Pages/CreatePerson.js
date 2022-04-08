import React, { useState } from "react";
import "../../Styles/CreatePerson.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePerson = () => {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		const person = { ...inputs };
		console.log(person);
		axios
			.post(
				"http://localhost:8080/person/add",

				person,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(
				(res) => console.log("Posting data", res),
				navigate("/person-services")
			)
			.catch((err) => console.log(err));
	};

	return (
		<div className='create-person'>
			<h1>Create New Person</h1>
			<form className='form'>
				<label>
					First Name{" "}
					<input
						type='text'
						name='first_name'
						value={inputs.firstname}
						onChange={handleChange}
					/>
				</label>

				<label>
					Last Name{" "}
					<input
						type='text'
						name='last_name'
						value={inputs.lastname}
						onChange={handleChange}
					/>
				</label>

				<label>
					Date Of Birth{" "}
					<input
						type='date'
						name='date_of_birth'
						value={inputs.dob}
						onChange={handleChange}
					/>
				</label>

				<label>
					Phone Number{" "}
					<input
						type='text'
						name='phone_number'
						value={inputs.phone_number}
						onChange={handleChange}
					/>
				</label>

				<label>
					NIC{" "}
					<input
						type='text'
						name='nic'
						value={inputs.nic}
						onChange={handleChange}
					/>
				</label>

				<label>
					Gender{" "}
					<input
						type='text'
						name='gender'
						value={inputs.gender}
						onChange={handleChange}
					/>
				</label>

				<label>
					Address{" "}
					<input
						type='text'
						name='address'
						value={inputs.address}
						onChange={handleChange}
					/>
				</label>
			</form>
			<button className="create-person-btn" onClick={handleClick}>Add</button>
		</div>
	);
};

export default CreatePerson;
