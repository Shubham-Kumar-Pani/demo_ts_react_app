import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectMultipleValue from "../../Component/SelectMultipleValue";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import ScreenContainer from "../../Component/screenContainer/screenContainer";
import { userdata } from "../user";
import { userlist } from "../../redux/action/Userlist";
import { data } from "../../data";
const UserInterface = () => {
	useEffect(() => {
		userlist(userdata);
	});
	// useDispatch(userlist(userdata));
	var userData = useSelector((state) => state.user);
	debugger;
	console.log(userData);
	// console.log(data);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShowModal = () => setShow(true);
	const items = [
		{ value: "Dashboard", id: 1 },
		{ value: "FE Engg.", id: 2 },
		{ value: "Data", id: 3 },
		{ value: "ML Model", id: 4 },
		{ value: "SC Plan", id: 5 },
	];
	const module = [
		{ value: "Demo 1", id: 1 },
		{ value: "Demo 2", id: 2 },
		{ value: "Demo 3", id: 3 },
	];

	return (
		<ScreenContainer>
			<div className="page-container">
				<div className="main-content">
					<div className="row">
						<div className="col-md-12 col-lg-12">
							<div className="card">
								<div className="card-body">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<a
												className={"nav-link active"}
												id="tab1"
												data-toggle="tab"
												href="#tab-1"
												role="tab"
												aria-controls="tab-1"
												aria-selected="true"
											>
												Users List
											</a>
										</li>
									</ul>
									<span
										style={{
											position: "absolute",
											left: "55rem",
											top: 20,
										}}
									>
										<Button variant="primary" onClick={() => handleShowModal()}>
											Add User
										</Button>
									</span>
									<div className="tab-content m-t-15" id="myTabContent">
										<div
											className="tab-pane fade show active"
											id="tab-1"
											role="tabpanel"
											aria-labelledby="tab1"
										>
											<table id="data-table" className="table table-bordered">
												<thead>
													<tr>
														<th>Name</th>
														<th>Company Name</th>
														<th>Module 1</th>
														<th>Module 2</th>
														<th>Module 3</th>
													</tr>
												</thead>
												<tbody>
													{data?.map((item, index) => {
														return (
															<tr>
																<td>{item.name}</td>
																<td>{item.company_name}</td>
																{item.demo.map((item, index) => {
																	return (
																		<td>
																			<SelectMultipleValue
																				module={`${item.demo_Name}`}
																				items={item.demoField}
																			/>
																		</td>
																	);
																})}
															</tr>
														);
													})}
												</tbody>
											</table>

											<Modal
												show={show}
												onHide={handleClose}
												backdrop="static"
												keyboard={false}
											>
												<Modal.Header closeButton>
													<Modal.Title>Add User</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<Container>
														<Row style={{ marginBottom: "10px" }}>
															<Col md={{ span: 8, offset: 2 }}>
																<Form.Control
																	type="text"
																	placeholder="User Name"
																/>
															</Col>
														</Row>
														<Row style={{ marginBottom: "10px" }}>
															<Col md={{ span: 8, offset: 2 }}>
																<Form.Control type="text" placeholder="Email" />
															</Col>
														</Row>
														<Row style={{ marginBottom: "10px" }}>
															<Col md={{ span: 8, offset: 2 }}>
																<Form.Control
																	type="text"
																	placeholder="Password"
																/>
															</Col>
														</Row>
														<Row style={{ marginBottom: "10px" }}>
															<Col md={{ span: 8, offset: 2 }}>
																<Form.Control
																	type="text"
																	placeholder="Company Name"
																/>
															</Col>
														</Row>
														<Row style={{ marginBottom: "10px" }}>
															<Col md={{ span: 8, offset: 2 }}>
																<SelectMultipleValue
																	module={"Select Module"}
																	items={data ? data[0].demo : ""}
																	styles={{
																		minWidth: 272,
																		minHeight: 38,
																		borderRadius: 4,
																		border: "1px solid #aaa",
																	}}
																/>
															</Col>
														</Row>
													</Container>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleClose}>
														Close
													</Button>
													<Button variant="primary">submit</Button>
												</Modal.Footer>
											</Modal>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer">
					<div className="footer-content">
						<p className="m-b-0">
							Copyright © 2022 Bipros-Involead. All rights reserved.
						</p>
						<span>
							<a href="#" className="text-black m-r-15">
								Term &amp; Conditions
							</a>
							<a href="#" className="text-black">
								Privacy &amp; Policy
							</a>
						</span>
					</div>
				</footer>
			</div>
		</ScreenContainer>
	);
};
export default UserInterface;
