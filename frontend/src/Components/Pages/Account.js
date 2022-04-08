import React from "react";
import "../../Styles/Account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {

    let navigate = useNavigate()
	return (
		<div className='account'>
			<div className="account-form">
				<label>
					{" "}
					Add account number <input />
				</label>
				<label>
					{" "}
					Add bank name <input />
				</label>
				<label>
					{" "}
					Account Description <input />
				</label>
                <label>
					{" "}
					Bank id <input />
				</label>
			</div>

			<button onClick={() => {navigate("/person-services")}}>Add</button>
		</div>
	);
};

export default Account;
