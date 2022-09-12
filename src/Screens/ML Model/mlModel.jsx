import { Icon } from "@iconify/react";
import { useState } from "react";
import DashLineChart from "../../Component/charts/DashLineChart";
import LineChartAxisDots from "../../Component/charts/LineChartAxisDots";
import LineChartML from "../../Component/charts/LineChartML";
import PieChartModel from "../../Component/charts/PieChartModel";
import PositiveNegativeBarChart from "../../Component/charts/PositiveNegativeBarChart";

const MlModel = () => {
	const [stochasticeBase, setStochasticeBase] = useState(true);
	const [modelGenerator, setModelGenerator] = useState(false);
	const [insightsBoards, setInsightesBoards] = useState(false);
	return (
		<>
			<div className="page-container">
				<div className="main-content">
					<div className="row">
						<div className="col-md-12 col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="">
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a
													className={
														"nav-link " + (stochasticeBase ? "active" : "")
													}
													id="tab1"
													data-toggle="tab"
													href="#tab-1"
													role="tab"
													aria-controls="tab-1"
													aria-selected="true"
													onClick={() => {
														setStochasticeBase(true);
														setInsightesBoards(false);
														setModelGenerator(false);
													}}
												>
													Stochastic Base
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (modelGenerator ? "active" : "")
													}
													id="tab2"
													data-toggle="tab"
													href="#tab-2"
													role="tab"
													aria-controls="tab-2"
													aria-selected="false"
													onClick={() => {
														setStochasticeBase(false);
														setInsightesBoards(false);
														setModelGenerator(true);
													}}
												>
													Models Generator
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (insightsBoards ? "active" : "")
													}
													id="tab3"
													data-toggle="tab"
													href="#tab-3"
													role="tab"
													aria-controls="tab-3"
													aria-selected="false"
													onClick={() => {
														setStochasticeBase(false);
														setInsightesBoards(true);
														setModelGenerator(false);
													}}
												>
													Insights Board
												</a>
											</li>
										</ul>
										<div className="tab-content m-t-15" id="myTabContent">
											{stochasticeBase ? (
												<div
													className="tab-pane fade show active"
													id="tab-1"
													role="tabpanel"
													aria-labelledby="tab1"
												>
													<div className="row">
														<div className="col-md-6">
															<div className="form-group">
																<label for="inputState">Select Brand</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group">
																<label for="inputState">
																	Select Base Variance level
																</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-12 text-right">
															<div className="btn-strip">
																<button
																	type="submit"
																	className="btn btn-secondary"
																	style={{ marginRight: 5 }}
																>
																	<Icon
																		icon="ant-design:fast-forward-filled"
																		style={{ marginRight: 5 }}
																	/>
																	Run UCM Model
																</button>
																<button
																	type="submit"
																	className="btn btn-primary"
																>
																	<Icon
																		icon="ant-design:save-outlined"
																		style={{ marginRight: 5 }}
																	/>
																	Select UCM Model
																</button>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-12">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted text-center">
																				Unobserved Component Model (UCM) Base Vs
																				Sales with variance : 10%
																			</h6>
																			<LineChartML />
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											) : (
												""
											)}
											{modelGenerator ? (
												<div
													className="tab-pane active"
													id="tab-2"
													role="tabpanel"
													aria-labelledby="tab2"
												>
													<div className="row">
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">
																	Select Brand for Model Run
																</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">
																	Select Modeling Type
																</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">Dummy Deviation</label>
																<input
																	type="text"
																	className="form-control"
																	id="formGroupExampleInput"
																	placeholder="2"
																/>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">
																	P value Threshold
																</label>
																<input
																	type="text"
																	className="form-control"
																	id="formGroupExampleInput"
																	placeholder="0.5"
																/>
															</div>
														</div>
														<div className="col-md-12 text-right">
															<div className="btn-strip">
																<button
																	type="submit"
																	className="btn btn-secondary"
																	style={{ marginRight: 5 }}
																>
																	<Icon
																		icon="ant-design:fast-forward-filled"
																		style={{ marginRight: 5 }}
																	/>
																	Run Model
																</button>
																<button
																	type="submit"
																	className="btn btn-primary"
																>
																	<Icon
																		icon="ant-design:cloud-upload-outlined"
																		style={{ marginRight: 5 }}
																	/>
																	Modal Result
																</button>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-4 col-lg-4">
															<div className="card bg-blue">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-blue">
																			<Icon
																				icon="bi:graph-up-arrow"
																				color="white"
																				width="30"
																			/>
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">92%</h2>
																			<p className="m-b-0 text-white">
																				Model R-Square
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 col-lg-4">
															<div className="card bg-green">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-green">
																			<Icon
																				icon="fa-regular:list-alt"
																				color="white"
																				width="30"
																			/>
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">5%</h2>
																			<p className="m-b-0 text-white">
																				Model MAPE
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 col-lg-4">
															<div className="card bg-yellow">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-gold">
																			<Icon
																				icon="bx:user"
																				color="white"
																				width="30"
																			/>
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">92%</h2>
																			<p className="m-b-0 text-white">
																				Model R-Square
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted text-center">
																				Actual Vs Predicted Sales
																			</h6>
																			<PositiveNegativeBarChart height={300} />
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted text-center">
																				Error Distribution
																			</h6>
																			<DashLineChart />
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											) : (
												""
											)}
											{insightsBoards ? (
												<div
													className="tab-pane active"
													id="tab-3"
													role="tabpanel"
													aria-labelledby="tab3"
												>
													<div className="row">
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">Select Brand</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">Model Selected</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">Marketing Type</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label for="inputState">Select Year</label>
																<select
																	id="inputState"
																	className="form-control"
																>
																	<option selected="">Select...</option>
																	<option>Duke</option>
																	<option>LG</option>
																	<option>1 Plus</option>
																</select>
															</div>
														</div>
														<div className="col-md-12 text-right">
															<div className="btn-strip">
																<button
																	type="submit"
																	className="btn btn-primary"
																>
																	<Icon
																		icon="ant-design:save-outlined"
																		style={{ marginRight: 5 }}
																	/>
																	Show Insights
																</button>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-4 col-lg-4">
															<div className="card bg-blue">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-blue">
																			<Icon
																				icon="fa-regular:list-alt"
																				color="white"
																				width="30"
																			/>
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">34</h2>
																			<p className="m-b-0 text-white">
																				Total ROI
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 col-lg-4">
															<div className="card bg-green">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-green">
																			<Icon icon="bx:user" color="white" />
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">28</h2>
																			<p className="m-b-0 text-white">
																				ATL Drivers ROI
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4 col-lg-4">
															<div className="card bg-yellow">
																<div className="card-body">
																	<div className="media align-items-center">
																		<div className="avatar avatar-icon avatar-lg avatar-gold">
																			<Icon
																				icon="fa-regular:list-alt"
																				color="white"
																				width="30"
																			/>
																		</div>
																		<div className="m-l-15">
																			<h2 className="m-b-0 text-white">16</h2>
																			<p className="m-b-0 text-white">
																				BTL Drivers ROI
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted ">
																				Contribution Split by Category
																			</h6>
																			<PieChartModel height={300} />
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted text-center">
																				Response Curves
																			</h6>
																			<LineChartAxisDots
																				height={300}
																				width={500}
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											) : (
												""
											)}
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
		</>
	);
};

export default MlModel;
