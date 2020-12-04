import React, { ComponentState } from "react";
import { TextField, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
/**
 * Props
 */
interface Props { }

/**
 * State
 */
interface State {
	d4Amount: number;
	d4ResultArray: number[];
	d4Total: number;
	d6Total: number;
	d6Amount: number;
	d8Total: number;
	d10Total: number;
	d12Total: number;
	d20Total: number;
	d100Total: number;
}

//Home screen
class Home extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			d4Amount: 0,
			d4ResultArray: [],
			d4Total: 0,
			d6Total: 0,
			d8Total: 0,
			d6Amount: 0,
			d10Total: 0,
			d12Total: 0,
			d20Total: 0,
			d100Total: 0
		}
	}
	public render = () => {
		return (
			<>
				<div>
					<header>
						<Typography variant="h3">
							Dice roller
						</Typography>
						<TableContainer>
							<Table aria-label="Table that contains dices">
								<TableHead>
									<TableRow>
										<TableCell>
											Dice
										</TableCell>
										<TableCell>
											Dice amount
										</TableCell>
										<TableCell>
											Modifier
											<br /> <AddIcon /> / <RemoveIcon />
										</TableCell>
										<TableCell>
											Modifier amount
										</TableCell>
										<TableCell>
											Roll
										</TableCell>
										<TableCell>
											Result
										</TableCell>
									</TableRow>
								</TableHead>
								<TableRow>
									<TableCell>
										D4
									</TableCell>
									<TableCell>
										<TextField placeholder="d4" value={this.state.d4Amount} name="d4Amount" onChange={event => this.handleChange(event)} margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={() => this.rollD4()}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d4Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D6
									</TableCell>
									<TableCell>
										<TextField placeholder="d6" value={this.state.d6Amount} name="d6Amount" margin="dense" onChange={event => this.handleChange(event)} variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button onClick={this.rollD6} variant="contained">
											Roll
								</Button>
									</TableCell>
									<TableCell>
										{this.state.d6Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D8
									</TableCell>
									<TableCell>
										<TextField placeholder="d8" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={this.rollD8}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d8Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D10
									</TableCell>
									<TableCell>
										<TextField placeholder="d10" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={this.rollD10}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d10Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D12
									</TableCell>
									<TableCell>
										<TextField placeholder="d12" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={this.rollD12}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d12Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D20
									</TableCell>
									<TableCell>
										<TextField placeholder="d20" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={this.rollD20}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d20Total}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D100
									</TableCell>
									<TableCell>
										<TextField placeholder="d100" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained" onClick={this.rollD100}>
											Roll
										</Button>
									</TableCell>
									<TableCell>
										{this.state.d100Total}
									</TableCell>
								</TableRow>
							</Table>
						</TableContainer>
					</header>
				</div>
			</>
		)
	}
	//TO DO: Multiple dices
	//Handle input change
	private handleChange = (event: any) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		} as ComponentState)
	}

	//Roll dice 4 button click
	private rollD4 = () => {
		this.setState({
			d4Total: Math.floor(Math.random() * 4 + 1)
		})
	}

	//Roll dice 6 button click
	private rollD6 = () => {
		this.setState({
			d6Total: Math.floor(Math.random() * 6 + 1)
		})
	}

	//Roll dice 8
	private rollD8 = () => {
		this.setState({
			d8Total: Math.floor(Math.random() * 8 + 1)
		})
	}

	//Roll dice 10
	private rollD10 = () => {
		this.setState({
			d10Total: Math.floor(Math.random() * 10 + 1)
		})
	}

	//Roll dice 12
	private rollD12 = () => {
		this.setState({
			d12Total: Math.floor(Math.random() * 12 + 1)
		})
	}

	//Roll dice 20
	private rollD20 = () => {
		this.setState({
			d20Total: Math.floor(Math.random() * 20 + 1)
		})
	}
	//Roll dice 100
	private rollD100 = () => {
		this.setState({
			d100Total: Math.floor(Math.random() * 100 + 1)
		})
	}

}


export default Home;