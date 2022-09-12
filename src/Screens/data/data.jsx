import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BarchartManyData from "../../Component/charts/BarchartManyData";
import DoughnutChartWithLabel from "../../Component/charts/DoughnutChartWithLabel";
const Data = () => {
	const [dataValidation, setDataValidation] = useState(false);
	const [dataDescription, setDataDescription] = useState(true);
	const [dataSummery, setDataSummery] = useState(false);
	const [dataVariance, setDataVariance] = useState(false);
	const val = useLocation();
	const user = val.state?.user;
	debugger;
	const [userdata, setuserData] = useState("");

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
														"nav-link " + (dataDescription ? "active" : "")
													}
													id="tab1"
													data-toggle="tab"
													href="#tab-1"
													role="tab"
													aria-controls="tab-1"
													aria-selected="true"
													onClick={() => {
														setDataValidation(false);
														setDataDescription(true);
														setDataSummery(false);
														setDataVariance(false);
													}}
												>
													Data Description
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (dataValidation ? "active" : "")
													}
													id="tab2"
													data-toggle="tab"
													href="#tab-2"
													role="tab"
													aria-controls="tab-2"
													aria-selected="false"
													onClick={() => {
														setDataValidation(true);
														setDataDescription(false);
														setDataSummery(false);
														setDataVariance(false);
													}}
												>
													Data Validation
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (dataSummery ? "active" : "")
													}
													id="tab3"
													data-toggle="tab"
													href="#tab-3"
													role="tab"
													aria-controls="tab-3"
													aria-selected="false"
													onClick={() => {
														setDataValidation(false);
														setDataDescription(false);
														setDataSummery(true);
														setDataVariance(false);
													}}
												>
													Data Summary
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (dataVariance ? "active" : "")
													}
													id="tab4"
													data-toggle="tab"
													href="#tab-4"
													role="tab"
													aria-controls="tab-4"
													aria-selected="false"
													onClick={() => {
														setDataValidation(false);
														setDataDescription(false);
														setDataSummery(false);
														setDataVariance(true);
													}}
												>
													Driver Variance Analysis
												</a>
											</li>
										</ul>
										<div className="tab-content m-t-15" id="myTabContent">
											<div
												className="tab-pane fade show active"
												id="tab-1"
												role="tabpanel"
												aria-labelledby="tab1"
											>
												{dataDescription ? (
													<div className="">
														<table
															id="data-table"
															className="table table-striped table-bordered"
														>
															<thead>
																<tr>
																	<th>Category</th>
																	<th>Metric Type</th>
																	<th>Feature</th>
																	<th>Metric</th>
																	<th>Heirarchy</th>
																	<th>Dimension</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
																<tr>
																	<td>Performance Metric</td>
																	<td>KPI</td>
																	<td>Sales</td>
																	<td>Dollars</td>
																	<td>Brand</td>
																	<td>Brand Level Information</td>
																</tr>
															</tbody>
														</table>
													</div>
												) : (
													""
												)}
												{dataValidation ? (
													<div
														className="tab-pane"
														id="tab-2"
														role="tabpanel"
														aria-labelledby="tab2"
													>
														<div className="row">
															<div className="col-md-3">
																<div className="form-group">
																	<label for="inputState">Brand</label>
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
																		Validation Metric
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
																	<label for="inputState">Media</label>
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
																	<label for="inputState">Measure</label>
																	<div className="row">
																		<div className="col-sm-12 m-t-10">
																			<div className="radio form-check form-check-inline">
																				<input
																					type="radio"
																					name="gridRadios"
																					id="gridRadios1"
																					value="option1"
																					checked
																				/>
																				<label for="gridRadios1">
																					Impressions
																				</label>
																			</div>
																			<div className="radio form-check form-check-inline">
																				<input
																					type="radio"
																					name="gridRadios"
																					id="gridRadios2"
																					value="option2"
																				/>
																				<label for="gridRadios2">Spend</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-12">
																<div className="card">
																	<div className="card-body">
																		<div className="d-flex justify-content-between align-items-center">
																			<div>
																				<h6 className="m-b-0 text-muted">
																					Trend at Brand Level--&gt; &nbsp;
																					Brand-1 for Media--&gt;TV
																				</h6>
																				<BarchartManyData></BarchartManyData>
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

												{dataSummery ? (
													<div
														className="tab-pane"
														id="tab-3"
														role="tabpanel"
														aria-labelledby="tab3"
													>
														<div className="row">
															<div className="col-md-6">
																<div className="form-group">
																	<label for="inputState">Brand View</label>
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
																	<label for="inputState">Year View</label>
																	<select
																		id="inputState"
																		className="form-control"
																	>
																		<option selected="">Select...</option>
																		<option>...</option>
																	</select>
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
																					icon="ant-design:dollar-circle-twotone"
																					color="white"
																					width="30"
																				/>
																			</div>
																			<div className="m-l-15">
																				<h2 className="m-b-0 text-white">
																					$23,523
																				</h2>
																				<p className="m-b-0 text-white">
																					Profit
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
																					icon="bi:graph-up-arrow"
																					color="white"
																					width="30"
																				/>
																			</div>
																			<div className="m-l-15">
																				<h2 className="m-b-0 text-white">
																					+ 17.21%
																				</h2>
																				<p className="m-b-0 text-white">
																					Growth
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
																				<h2 className="m-b-0 text-white">
																					3,685
																				</h2>
																				<p className="m-b-0 text-white">
																					Orders
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-8">
																<div className="card">
																	<div className="card-body">
																		<div className="">
																			<table
																				id="data-table"
																				className="table table-striped table-bordered"
																			>
																				<thead>
																					<tr>
																						<th>Media</th>
																						<th>Spend</th>
																						<th>Impression</th>
																						<th>CPP</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																					<tr>
																						<td>Own Social</td>
																						<td>12</td>
																						<td>34756214</td>
																						<td>10</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-md-4">
																<div className="card">
																	<div className="card-body">
																		<div className="d-flex align-items-center">
																			<div>
																				<h6 className="m-b-0 text-muted">
																					Media Spend Distribution
																				</h6>
																				<DoughnutChartWithLabel></DoughnutChartWithLabel>
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

												{dataVariance ? (
													<div
														className="tab-pane"
														id="tab-4"
														role="tabpanel"
														aria-labelledby="tab4"
													>
														<p>
															Etsy mixtape wayfarers, ethical wes anderson tofu
															before they sold out mcsweeney's organic lomo
															retro fanny pack lo-fi farm-to-table readymade.
															Messenger bag gentrify pitchfork tattooed craft
															beer, iphone skateboard locavore carles etsy
															salvia banksy hoodie helvetica. DIY synth PBR
															banksy irony. Leggings gentrify squid 8-bit cred
															pitchfork. Williamsburg banh mi whatever
															gluten-free, carles pitchfork biodiesel fixie etsy
															retro mlkshk vice blog. Scenester cred you
															probably haven't heard of them, vinyl craft beer
															blog stumptown. Pitchfork sustainable tofu synth
															chambray yr.
														</p>
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

export default Data;
