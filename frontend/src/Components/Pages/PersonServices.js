import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../Styles/PersonServices.css";
import Moment from "react-moment";

const PersonServices = () => {
	const [personDetails, setPersonalDetails] = useState([]);
	// const persondetails = [
	// 	{ id: 1, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 2, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 3, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 4, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 5, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 6, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// 	{ id: 7, firstname: "Hiranya", lastname: "Wijesiri", date_of_birth: "1997/11/18", gender: "female", phone_number: "0766707523", address: "Gurubebila, Weligama", nic: "199782310078" },
	// ];

	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8080/person/getAllPersons")
			.then((result) => {
				console.log(result);
				setPersonalDetails(...[result.data]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const persons = personDetails.map((person) => {
		return (
			<div className='person-service'>
				<div className='person-data'>
					<h4 className=''> {person.id}</h4>
					<h4 className=''>{person.first_name}</h4>
					<h4 className=''>{person.last_name}</h4>
					<h4>
						<Moment format='YYYY/MM/DD'>{person.date_of_birth}</Moment>
					</h4>

					<h4 className=''>{person.gender}</h4>
					<h4 className=''>{person.phone_number}</h4>
					<h4 className=''>{person.address}</h4>
					<h4 className=''>{person.nic}</h4>
					<div className=''>
						<button>DELETE</button>
						<button>UPDATE</button>
						<button
							onClick={() => {
								navigate("/account-page");
							}}>
							ADD ACCOUNT DETAILS
						</button>
					</div>
				</div>
				<hr />
			</div>
		);
	});
	return (
		<div className='person'>
			<h1>Name of the persons</h1>
			{persons}
			<button className='add-person' onClick={() => navigate("/create-person")}>
				Add New Person
			</button>
		</div>
	);
};

export default PersonServices;
