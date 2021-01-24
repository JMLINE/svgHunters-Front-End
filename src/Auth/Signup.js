import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Signup(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('UPDATEURL!!!!!!!', {
			method: 'POST',
			body: JSON.stringify({
				user: {
					username: username,
					password: password,
					email: email
				}
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((response) => response.json())
			.then((data) => {
				props.updateToken(data.sessionToken);
			});
	};

	return (
		<div>
			<h1 className="join">Join Us</h1>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="username">Username</Label>
					<Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
				</FormGroup>

				<FormGroup>
					<Label htmlFor="email">Email</Label>
					<Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} />
				</FormGroup>

				<FormGroup>
					<Label htmlFor="password">Password</Label>
					<Input
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						type="password"
						minLength="8"
						value={password}
					/>
				</FormGroup>
				<Button color="success" type="submit">
					Signup
				</Button>
			</Form>
		</div>
	);
}

export default Signup;
