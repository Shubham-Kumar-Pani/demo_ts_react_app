import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { userlist } from "../../redux/action/Userlist";
import { userdata } from "../../Screens/user";

const Sidebar = ({
	eventKey1,
	eventKey2,
	eventKey3,
	defaultActiveKey,
	title1,
	title2,
	title3,
}) => {
	var logindata = useSelector((state) => state.admin.logindata);
	var allUser = useSelector((state) => state);
	console.log(allUser);

	console.log(logindata);
	let demoFieldData = logindata.module.map((i) => i.demoField.map((e) => e.id));
	// console.log(demoFieldData);
	const [moduleId, setModuleid] = useState("");

	console.log(moduleId);
	var modId;
	const itemOnclick = (data) => {
		if (data) {
			setModuleid(data);
		} else if (moduleId) {
			setModuleid(null);
		}
	};

	return (
		<div className="layout is-side-nav-dark">
			<div className="side-nav">
				<div className="side-nav-inner">
					<ul className="side-nav-menu scrollable">
						<Accordion defaultActiveKey={defaultActiveKey}>
							{logindata?.module?.map((i) => {
								return (
									<Accordion.Item
										eventKey={i?.id}
										onClick={() => itemOnclick(i?.id)}
									>
										<Accordion.Header>{i?.module_name}</Accordion.Header>
										{i.demoField.map((e) => {
											return (
												<Accordion.Body>
													<li className="nav-item ">
														<a href={"." + e?.path}>
															<span className="icon-holder">
																<Icon
																	icon="ant-design:dashboard-twotone"
																	color="white"
																	width="18"
																/>
															</span>
															<span className="title">{e?.name}</span>
														</a>
													</li>
												</Accordion.Body>
											);
										})}
									</Accordion.Item>
								);
							})}

							{/* <Accordion.Item eventKey={eventKey2}>
								<Accordion.Header>{"Demo 2"}</Accordion.Header>
								<Accordion.Body>
									<li className="nav-item">
										<a href="./dashboard">
											<span className="icon-holder">
												<Icon
													icon="ant-design:dashboard-twotone"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">Dashboard</span>
										</a>
									</li>

									{logindata.type === "admin" ? (
										<li className="nav-item ">
											<a href="/data">
												<span className="icon-holder">
													<Icon
														icon="ant-design:hdd-outlined"
														color="white"
														width="18"
													/>
												</span>
												<span className="title">Data</span>
											</a>
										</li>
									) : (
										""
									)}

									<li className="nav-item">
										<a href="./featureEnginnering">
											<span className="icon-holder">
												<Icon
													icon="ant-design:pie-chart-outlined"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">Feature Enginnering</span>
										</a>
									</li>

									<li className="nav-item">
										<a href="./mlModel">
											<span className="icon-holder">
												<Icon
													icon="ant-design:hdd-outlined"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">ML Model</span>
										</a>
									</li>

									<li className="nav-item">
										<a href="./scenarioPlanning">
											<span className="icon-holder">
												<Icon icon="bi:grid" color="white" width="18" />
											</span>
											<span className="title">Scenario Planning</span>
										</a>
									</li>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey={eventKey3}>
								<Accordion.Header>{"Demo 3 "}</Accordion.Header>
								<Accordion.Body>
									<li className="nav-item">
										<a href="./dashboard">
											<span className="icon-holder">
												<Icon
													icon="ant-design:dashboard-twotone"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">Dashboard</span>
										</a>
									</li>

									<li className="nav-item ">
										<a href="/data">
											<span className="icon-holder">
												<Icon
													icon="ant-design:hdd-outlined"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">Data</span>
										</a>
									</li>

									<li className="nav-item">
										<a href="./featureEnginnering">
											<span className="icon-holder">
												<Icon
													icon="ant-design:pie-chart-outlined"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">Feature Enginnering</span>
										</a>
									</li>

									<li className="nav-item">
										<a href="./mlModel">
											<span className="icon-holder">
												<Icon
													icon="ant-design:hdd-outlined"
													color="white"
													width="18"
												/>
											</span>
											<span className="title">ML Model</span>
										</a>
									</li>

									<li className="nav-item">
										<a href="./scenarioPlanning">
											<span className="icon-holder">
												<Icon icon="bi:grid" color="white" width="18" />
											</span>
											<span className="title">Scenario Planning</span>
										</a>
									</li>
								</Accordion.Body>
							</Accordion.Item> */}
						</Accordion>

						{logindata.type == "admin" ? (
							<li className="nav-item">
								<a href="./users">
									<span className="icon-holder">
										<Icon icon="bx:user" color="white" width="18" />
									</span>
									<span className="title">Users</span>
								</a>
							</li>
						) : (
							""
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
