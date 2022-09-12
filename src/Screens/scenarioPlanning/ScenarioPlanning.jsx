import { useState } from "react";
import { Icon } from "@iconify/react";
import BarChartTwoPair from "../../Component/charts/BarChartTwoPair";
import BarChartVertical from "../../Component/charts/BarChartVertical";

const ScenarioPlanning = () => {
	const [createScenario, setCreateScenario] = useState(true);
	const [optimizeScenarioInsights, setOptimizeScenarioInsights] =
		useState(false);
	const [optimizeScenarioDetails, setoptimizeScenarioDetails] = useState(false);
	const [whatIfScenario, setWhatIfScenario] = useState(false);
	return (
		<>
			<div className="layout is-side-nav-dark">
				<div className="page-container">
					{/* Content Wrapper START */}
					<div className="main-content">
						<div className="row">
							<div className="col-md-12 col-lg-12">
								<div className="card">
									<div className="card-body">
										<div className>
											<ul className="nav nav-tabs" id="myTab" role="tablist">
												<li className="nav-item">
													<a
														className={
															"nav-link " + (createScenario ? "active" : "")
														}
														id="tab1"
														data-toggle="tab"
														href="#tab-1"
														role="tab"
														aria-controls="tab-1"
														aria-selected="true"
														onClick={() => {
															setCreateScenario(true);
															setOptimizeScenarioInsights(false);
															setoptimizeScenarioDetails(false);
															setWhatIfScenario(false);
														}}
													>
														Create Scenario
													</a>
												</li>
												<li className="nav-item">
													<a
														className={
															"nav-link " +
															(optimizeScenarioInsights ? "active" : "")
														}
														id="tab2"
														data-toggle="tab"
														href="#tab-2"
														role="tab"
														aria-controls="tab-2"
														aria-selected="false"
														onClick={() => {
															setCreateScenario(false);
															setOptimizeScenarioInsights(true);
															setoptimizeScenarioDetails(false);
															setWhatIfScenario(false);
														}}
													>
														Optimized Scenario Insights
													</a>
												</li>
												<li className="nav-item">
													<a
														className={
															"nav-link " +
															(optimizeScenarioDetails ? "active" : "")
														}
														id="tab3"
														data-toggle="tab"
														href="#tab-3"
														role="tab"
														aria-controls="tab-3"
														aria-selected="false"
														onClick={() => {
															setCreateScenario(false);
															setOptimizeScenarioInsights(false);
															setoptimizeScenarioDetails(true);
															setWhatIfScenario(false);
														}}
													>
														Optimized Scenario Detailed
													</a>
												</li>
												<li className="nav-item">
													<a
														className={
															"nav-link " + (whatIfScenario ? "active" : "")
														}
														id="tab4"
														data-toggle="tab"
														href="#tab-4"
														role="tab"
														aria-controls="tab-4"
														aria-selected="false"
														onClick={() => {
															setCreateScenario(false);
															setOptimizeScenarioInsights(false);
															setoptimizeScenarioDetails(false);
															setWhatIfScenario(true);
														}}
													>
														What if Scenario
													</a>
												</li>
											</ul>
											<div className="tab-content m-t-15" id="myTabContent">
												{createScenario ? (
													<div
														className="tab-pane fade show active"
														id="tab-1"
														role="tabpanel"
														aria-labelledby="tab1"
													>
														<div className="row">
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">Brand Name</label>
																	<select
																		id="inputState"
																		className="form-control"
																	>
																		<option selected>Select...</option>
																		<option>Duke</option>
																		<option>LG</option>
																		<option>1 Plus</option>
																	</select>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">
																		Marketing Type
																	</label>
																	<select
																		id="inputState"
																		className="form-control"
																	>
																		<option selected>Select...</option>
																		<option>Duke</option>
																		<option>LG</option>
																		<option>1 Plus</option>
																	</select>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">Measure</label>
																	<div className="row">
																		<div className="col-sm-12 m-t-10">
																			<div className="radio form-check form-check-inline">
																				<input
																					type="radio"
																					name="gridRadios"
																					id="gridRadios1"
																					defaultValue="option1"
																					defaultChecked
																				/>
																				<label htmlFor="gridRadios1">
																					Spend Based
																				</label>
																			</div>
																			<div className="radio form-check form-check-inline">
																				<input
																					type="radio"
																					name="gridRadios"
																					id="gridRadios2"
																					defaultValue="option2"
																				/>
																				<label htmlFor="gridRadios2">
																					Goal Based
																				</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">
																		What if Spend Change (%)
																	</label>
																	<input
																		type="text"
																		className="form-control"
																		id="formGroupExampleInput"
																		placeholder={10}
																	/>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">
																		Lower Bound Spend Change
																	</label>
																	<input
																		type="text"
																		className="form-control"
																		id="formGroupExampleInput"
																		placeholder={-20}
																	/>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group">
																	<label htmlFor="inputState">
																		Upper Bound Spend Change
																	</label>
																	<input
																		type="text"
																		className="form-control"
																		id="formGroupExampleInput"
																		placeholder={20}
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
																		Simulate
																	</button>
																	<button
																		type="submit"
																		className="btn btn-primary"
																	>
																		<Icon
																			icon="ant-design:fast-forward-filled"
																			style={{ marginRight: 5 }}
																		/>
																		Optimize
																	</button>
																</div>
															</div>
														</div>
														<div className>
															<table
																id="data-table"
																className="table table-striped table-bordered"
															>
																<thead>
																	<tr>
																		<th>Brand Name</th>
																		<th>Marketing Type</th>
																		<th>Channel</th>
																		<th>Actual Spend</th>
																		<th>Actual Sales</th>
																		<th>Actual ROI</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																	<tr>
																		<td>Brand 1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>297238</td>
																		<td>87334235.2</td>
																		<td>29.3452733</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												) : (
													""
												)}

												{optimizeScenarioInsights ? (
													<div
														className="tab-pane active"
														id="tab-2"
														role="tabpanel"
														aria-labelledby="tab2"
													>
														<div className="row">
															<div className="col-md-6 col-lg-3">
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
																					172
																				</h2>
																				<p className="m-b-0 text-white">
																					Scenario Sales ($)
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-md-6 col-lg-3">
																<div className="card bg-green">
																	<div className="card-body">
																		<div className="media align-items-center">
																			<div className="avatar avatar-icon avatar-lg avatar-green">
																				<Icon
																					icon="ant-design:dollar-circle-twotone"
																					color="white"
																					width="30"
																				/>
																			</div>
																			<div className="m-l-15">
																				<h2 className="m-b-0 text-white">
																					180
																				</h2>
																				<p className="m-b-0 text-white">
																					Optimum Sales ($)
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-md-6 col-lg-3">
																<div className="card bg-yellow">
																	<div className="card-body">
																		<div className="media align-items-center">
																			<div className="avatar avatar-icon avatar-lg avatar-gold">
																				<Icon
																					icon="ant-design:dollar-circle-twotone"
																					color="white"
																					width="30"
																				/>
																			</div>
																			<div className="m-l-15">
																				<h2 className="m-b-0 text-white">26</h2>
																				<p className="m-b-0 text-white">
																					Scenario ROI ($)
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-md-6 col-lg-3">
																<div className="card bg-red">
																	<div className="card-body">
																		<div className="media align-items-center">
																			<div className="avatar avatar-icon avatar-lg avatar-magenta">
																				<Icon
																					icon="ant-design:dollar-circle-twotone"
																					color="white"
																					width="30"
																				/>
																			</div>
																			<div className="m-l-15">
																				<h2 className="m-b-0 text-white">
																					1,832
																				</h2>
																				<p className="m-b-0 text-white">
																					Optimal ROI ($)
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
																				<h6 className="m-b-0 text-muted">
																					Scenario vs Optimized Sales
																				</h6>
																				<BarChartTwoPair />
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
																				<h6 className="m-b-0 text-muted">
																					Incremental Optimization by channel
																				</h6>
																				<BarChartVertical />
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

												{optimizeScenarioDetails ? (
													<div
														className="tab-pane active"
														id="tab-3"
														role="tabpanel"
														aria-labelledby="tab3"
													>
														<div className>
															<table
																id="data-table"
																className="table table-striped table-bordered"
															>
																<thead>
																	<tr>
																		<th>Brand Name</th>
																		<th>Marketing Type</th>
																		<th>Channel</th>
																		<th>Actual Spend</th>
																		<th>Scenario Spend</th>
																		<th>Optimum Spend</th>
																		<th>Actual Sales</th>
																		<th>Scenario Sales</th>
																		<th>Actual ROI</th>
																		<th>Scenario ROI</th>
																		<th>Optimum ROI</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																	<tr>
																		<td>Brand-1</td>
																		<td>BTL</td>
																		<td>Circular</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																		<td>6458724.135</td>
																		<td>987234615343</td>
																		<td>874523498756</td>
																		<td>645238753</td>
																		<td>2972381</td>
																		<td>34723810.53</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												) : (
													""
												)}

												{whatIfScenario ? (
													<div
														className="tab-pane active"
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
					{/* Content Wrapper END */}
					{/* Footer START */}
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
					{/* Footer END */}
				</div>
				{/* Page Container END */}
				{/* Search Start*/}
				<div className="modal modal-left fade search" id="search-drawer">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header justify-content-between align-items-center">
								<h5 className="modal-title">Search</h5>
								<button type="button" className="close" data-dismiss="modal">
									<i className="anticon anticon-close" />
								</button>
							</div>
							<div className="modal-body scrollable">
								<div className="input-affix">
									<i className="prefix-icon anticon anticon-search" />
									<input
										type="text"
										className="form-control"
										placeholder="Search"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Search End*/}
				{/* Quick View START */}
				<div className="modal modal-right fade quick-view" id="quick-view">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header justify-content-between align-items-center">
								<h5 className="modal-title">Theme Config</h5>
							</div>
							<div className="modal-body scrollable">
								<div className="m-b-30">
									<h5 className="m-b-0">Header Color</h5>
									<p>Config header background color</p>
									<div className="theme-configurator d-flex m-t-10">
										<div className="radio">
											<input
												id="header-default"
												name="header-theme"
												type="radio"
												defaultChecked
												defaultValue="default"
											/>
											<label htmlFor="header-default" />
										</div>
										<div className="radio">
											<input
												id="header-primary"
												name="header-theme"
												type="radio"
												defaultValue="primary"
											/>
											<label htmlFor="header-primary" />
										</div>
										<div className="radio">
											<input
												id="header-success"
												name="header-theme"
												type="radio"
												defaultValue="success"
											/>
											<label htmlFor="header-success" />
										</div>
										<div className="radio">
											<input
												id="header-secondary"
												name="header-theme"
												type="radio"
												defaultValue="secondary"
											/>
											<label htmlFor="header-secondary" />
										</div>
										<div className="radio">
											<input
												id="header-danger"
												name="header-theme"
												type="radio"
												defaultValue="danger"
											/>
											<label htmlFor="header-danger" />
										</div>
									</div>
								</div>
								<hr />
								<div>
									<h5 className="m-b-0">Side Nav Dark</h5>
									<p>Change Side Nav to dark</p>
									<div className="switch d-inline">
										<input
											type="checkbox"
											name="side-nav-theme-toogle"
											id="side-nav-theme-toogle"
										/>
										<label htmlFor="side-nav-theme-toogle" />
									</div>
								</div>
								<hr />
								<div>
									<h5 className="m-b-0">Folded Menu</h5>
									<p>Toggle Folded Menu</p>
									<div className="switch d-inline">
										<input
											type="checkbox"
											name="side-nav-fold-toogle"
											id="side-nav-fold-toogle"
										/>
										<label htmlFor="side-nav-fold-toogle" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Quick View END */}
			</div>
		</>
	);
};

export default ScenarioPlanning;
