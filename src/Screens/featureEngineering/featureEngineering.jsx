import { Icon } from "@iconify/react";
import { useState } from "react";
import AreaChartAddSeries from "../../Component/charts/AreaChartAddSeries";
import AreaChartRawTv from "../../Component/charts/AreaChartRawTv";
import TinyBarchart from "../../Component/charts/barchart";
import BarchartManyData from "../../Component/charts/BarchartManyData";
import FeBarchart from "../../Component/charts/feBarchart";

const FeatureEngineering = () => {
	const [interactivePlot, setInteractivePlot] = useState(true);
	const [featureTransformation, setFeatureTransformation] = useState(false);
	const [featureSelection, setFeatureSelection] = useState(false);
	const [aplDiagnostics, setAplDiagnostics] = useState(false);
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
														"nav-link " + (interactivePlot ? "active" : "")
													}
													id="tab1"
													data-toggle="tab"
													href="#tab-1"
													role="tab"
													aria-controls="tab-1"
													aria-selected="true"
													onClick={() => {
														setInteractivePlot(true);
														setFeatureTransformation(false);
														setFeatureSelection(false);
														setAplDiagnostics(false);
													}}
												>
													Interactive Plots
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " +
														(featureTransformation ? "active" : "")
													}
													id="tab2"
													data-toggle="tab"
													href="#tab-2"
													role="tab"
													aria-controls="tab-2"
													aria-selected="false"
													onClick={() => {
														setInteractivePlot(false);
														setFeatureTransformation(true);
														setFeatureSelection(false);
														setAplDiagnostics(false);
													}}
												>
													Feature Transformation
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (featureSelection ? "active" : "")
													}
													id="tab3"
													data-toggle="tab"
													href="#tab-3"
													role="tab"
													aria-controls="tab-3"
													aria-selected="false"
													onClick={() => {
														setInteractivePlot(false);
														setFeatureTransformation(false);
														setFeatureSelection(true);
														setAplDiagnostics(false);
													}}
												>
													Feature Selection
												</a>
											</li>
											<li className="nav-item">
												<a
													className={
														"nav-link " + (aplDiagnostics ? "active" : "")
													}
													id="tab4"
													data-toggle="tab"
													href="#tab-4"
													role="tab"
													aria-controls="tab-4"
													aria-selected="false"
													onClick={() => {
														setInteractivePlot(false);
														setFeatureTransformation(false);
														setFeatureSelection(false);
														setAplDiagnostics(true);
													}}
												>
													APL Diagnostics
												</a>
											</li>
										</ul>
										<div className="tab-content m-t-15" id="myTabContent">
											{interactivePlot ? (
												<div
													className="tab-pane fade show active"
													id="tab-1"
													role="tabpanel"
													aria-labelledby="tab1"
												>
													<div className="row">
														<div className="col-md-4">
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
														<div className="col-md-4">
															<div className="form-group">
																<label for="inputState">Select Dependent</label>
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
														<div className="col-md-4">
															<div className="form-group">
																<label for="inputState">
																	Select Independent
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
													</div>
													<div className="row">
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="d-flex justify-content-between align-items-center">
																		<div>
																			<h6 className="m-b-0 text-muted text-muted">
																				Sales
																			</h6>
																			<TinyBarchart
																				height={300}
																				width={600}
																			></TinyBarchart>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-6">
															<div className="card">
																<div className="card-body">
																	<div className="">
																		<table
																			id="data-table"
																			className="table table-striped table-bordered"
																		>
																			<thead>
																				<tr>
																					<th>Metric</th>
																					<th>Year_1</th>
																					<th>Year_1</th>
																					<th>YOY_Change</th>
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
													</div>
												</div>
											) : (
												""
											)}
											{featureTransformation ? (
												<div
													className="tab-pane active"
													id="tab-2"
													role="tabpanel"
													aria-labelledby="tab2"
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
																<label for="inputState">Select Channel</label>
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
															<div className="row">
																<div className="col-sm-4">
																	<div className="form-group">
																		<label for="inputState">
																			Select Addstock
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			id="formGroupExampleInput"
																			placeholder="40"
																		/>
																	</div>
																</div>
																<div className="col-md-4">
																	<div className="form-group">
																		<label for="inputState">Select power</label>
																		<input
																			type="text"
																			className="form-control"
																			id="formGroupExampleInput"
																			placeholder="60"
																		/>
																	</div>
																</div>
																<div className="col-md-4">
																	<div className="form-group">
																		<label for="inputState">Select Lag</label>
																		<input
																			type="text"
																			className="form-control"
																			id="formGroupExampleInput"
																			placeholder="00"
																		/>
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
																			{/*<h2 className="m-b-0">Chart</h2>*/}
																			<h6 className="m-b-0 text-muted">
																				Raw Tv Series
																			</h6>
																			<AreaChartRawTv></AreaChartRawTv>
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
																			{/*<h2 className="m-b-0">Chart</h2>*/}
																			<h6 className="m-b-0 text-muted">
																				Addstock Transformed Series TV
																			</h6>
																			<AreaChartAddSeries></AreaChartAddSeries>
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

											{featureSelection ? (
												<div
													className="tab-pane active"
													id="tab-3"
													role="tabpanel"
													aria-labelledby="tab3"
												>
													<div className="row">
														<div className="col-md-6">
															<div className="form-group">
																<label for="inputState">
																	Feature Section Method
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
														<div className="col-md-12 text-right">
															<div className="btn-strip">
																<button
																	type="submit"
																	className="btn btn-primary"
																>
																	<Icon
																		icon="ant-design:fast-forward-filled"
																		style={{ marginRight: 5 }}
																	/>
																	Run Model
																</button>
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
																					<th>Channel Name</th>
																					<th>Meanlmp</th>
																					<th>Medianlmp</th>
																					<th>Minlmp</th>
																					<th>Maxlmp</th>
																					<th>Norm-Hits</th>
																					<th>Decision</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																				<tr>
																					<td>Circular</td>
																					<td>11.32</td>
																					<td>11.47</td>
																					<td>7.83</td>
																					<td>14.5</td>
																					<td>1</td>
																					<td>Confirmed</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-4">
															<div className="d-flex justify-content-between align-items-center">
																<div>
																	<h6 className="m-b-0 text-muted">
																		Variable Importance by Boruta
																	</h6>
																	<FeBarchart></FeBarchart>
																</div>
															</div>
														</div>
													</div>
												</div>
											) : (
												""
											)}
											{aplDiagnostics ? (
												<div
													className="tab-pane active"
													id="tab-4"
													role="tabpanel"
													aria-labelledby="tab4"
												>
													<p>
														Etsy mixtape wayfarers, ethical wes anderson tofu
														before they sold out mcsweeney's organic lomo retro
														fanny pack lo-fi farm-to-table readymade. Messenger
														bag gentrify pitchfork tattooed craft beer, iphone
														skateboard locavore carles etsy salvia banksy hoodie
														helvetica. DIY synth PBR banksy irony. Leggings
														gentrify squid 8-bit cred pitchfork. Williamsburg
														banh mi whatever gluten-free, carles pitchfork
														biodiesel fixie etsy retro mlkshk vice blog.
														Scenester cred you probably haven't heard of them,
														vinyl craft beer blog stumptown. Pitchfork
														sustainable tofu synth chambray yr.
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

				<footer className="footer">
					<div className="footer-content">
						<p className="m-b-0">
							// Copyright © 2022 Bipros-Involead. All rights reserved.
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

export default FeatureEngineering;
