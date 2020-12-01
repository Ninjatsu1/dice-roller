import React from "react";
import { TextField, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, Checkbox, Icon } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
/**
 * Props
 */
interface Props { }

/**
 * State
 */
interface State { }

//Home screen
class Home extends React.Component<Props, State> {
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
										<TextField placeholder="d4" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D6
									</TableCell>
									<TableCell>
										<TextField placeholder="d6" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
								</Button>
									</TableCell>
									<TableCell>
										Result
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
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
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
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
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
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
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
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
								</Button>
									</TableCell>
									<TableCell>
										Result
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D10
									</TableCell>
									<TableCell>
										<TextField placeholder="d12" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D10
									</TableCell>
									<TableCell>
										<TextField placeholder="d20" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
								</Button>
									</TableCell>
									<TableCell>
										Result
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										D10
									</TableCell>
									<TableCell>
										<TextField placeholder="d100" margin="dense" variant="outlined" />
									</TableCell>
									<TableCell>
										<Checkbox />
										<Checkbox />
									</TableCell>
									<TableCell>
										<TextField placeholder="Modifier amount" variant="outlined" />
									</TableCell>
									<TableCell>
										<Button variant="contained">
											Roll
										</Button>
									</TableCell>
									<TableCell>
										Result
									</TableCell>
								</TableRow>
							</Table>
						</TableContainer>
					</header>
				</div>
			</>
		)
	}
}

export default Home;