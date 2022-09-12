import Dashedlinechart from "../../Component/charts/dashedLineChart";
import Linechart from "../../Component/charts/lineChart";
import CustomPiechart from "../../Component/charts/piechart";
import TinyBarchart from "../../Component/charts/barchart";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import sofa from "../../assets/sofa.png";
import chair from "../../assets/chair.jpeg";
import wood from "../../assets/wood.jpg";
import watch from "../../assets/watch.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const D3dashboard = (style) => {
	var logindata = useSelector((state) => state.admin.logindata);

	console.log("Dashboard==>", logindata);
	const [month, setMonth] = useState(true);
	const [year, setyear] = useState(false);
	const monthData = [
		{
			name: "1st",
			uv: 10,
			pv: 2400,
			amt: 100,
		},
		{
			name: "2nd",
			uv: 50,
			pv: 1398,
			amt: 200,
		},
		{
			name: "3rd",
			uv: 100,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "4th",
			uv: 200,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "5th",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "6th",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "7th",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "8th",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "9th",
			uv: 3490,
			pv: 4700,
			amt: 2100,
		},
		{
			name: "10th",
			uv: 3490,
			pv: 5300,
			amt: 2100,
		},
		{
			name: "11th",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "12th",
			uv: 3490,
			pv: 3300,
			amt: 2100,
		},
	];
	const yearData = [
		{
			name: "2015",
			uv: 10,
			pv: 400,
			amt: 100,
		},
		{
			name: "2016",
			uv: 50,
			pv: 1098,
			amt: 200,
		},
		{
			name: "2017",
			uv: 100,
			pv: 9300,
			amt: 2290,
		},
		{
			name: "2018",
			uv: 200,
			pv: 1908,
			amt: 2000,
		},
		{
			name: "2019",
			uv: 1890,
			pv: 2800,
			amt: 2181,
		},
		{
			name: "2020",
			uv: 2390,
			pv: 900,
			amt: 2500,
		},
		{
			name: "2021",
			uv: 1290,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "2022",
			uv: 8490,
			pv: 4300,
			amt: 2100,
		},
	];
	const val = useLocation();
	return (
		<>
			<div className="page-container">
				<div className="main-content">
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
											<h2 className="m-b-0 text-white">$23,523</h2>
											<p className="m-b-0 text-white">Profit</p>
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
											<Icon icon="bi:graph-up-arrow" color="white" width="30" />
										</div>
										<div className="m-l-15">
											<h2 className="m-b-0 text-white">+ 17.21%</h2>
											<p className="m-b-0 text-white">Growth</p>
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
												icon="fa-regular:list-alt"
												color="white"
												width="30"
											/>
										</div>
										<div className="m-l-15">
											<h2 className="m-b-0 text-white">3,685</h2>
											<p className="m-b-0 text-white">Orders</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3" {...style}>
							<div className="card bg-red">
								<div className="card-body">
									<div className="media align-items-center">
										<div className="avatar avatar-icon avatar-lg avatar-magenta">
											<Icon icon="bx:user" color="white" width="30" />
										</div>
										<div className="m-l-15">
											<h2 className="m-b-0 text-white">1,832</h2>
											<p className="m-b-0 text-white">Customers</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-center">
										<h5>Total Revenue</h5>
										<div>
											<div className="btn-group">
												<button
													className={
														"btn btn-default" + (month ? "active" : "")
													}
													onClick={() => {
														setMonth(true);
														setyear(false);
													}}
												>
													<span>Month</span>
												</button>
												<button
													className={"btn btn-default" + (year ? "active" : "")}
													onClick={() => {
														setMonth(false);
														setyear(true);
													}}
												>
													<span>Year</span>
												</button>
											</div>
										</div>
									</div>
									<div className="m-t-50" style={{ height: 330, left: 300 }}>
										<Linechart
											lineStroke={month ? "#FB5D5F" : "#A9255F"}
											chartdata={month ? monthData : yearData}
										></Linechart>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-4">
							<div className="card">
								<div className="card-body">
									<h5 className="m-b-0">Customers</h5>
									<div className="m-v-60 text-center" style={{ height: 200 }}>
										<CustomPiechart></CustomPiechart>
									</div>
									<div className="row border-top p-t-25">
										<div className="col-4">
											<div className="d-flex justify-content-center">
												<div className="media align-items-center">
													<span className="badge badge-success badge-dot m-r-10"></span>
													<div className="m-l-5">
														<h4 className="m-b-0">350</h4>
														<p className="m-b-0 muted">New</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-4">
											<div className="d-flex justify-content-center">
												<div className="media align-items-center">
													<span className="badge badge-secondary badge-dot m-r-10"></span>
													<div className="m-l-5">
														<h4 className="m-b-0">450</h4>
														<p className="m-b-0 muted">Returning</p>
													</div>
												</div>
											</div>
										</div>
										<div className="col-4">
											<div className="d-flex justify-content-center">
												<div className="media align-items-center">
													<span className="badge badge-warning badge-dot m-r-10"></span>
													<div className="m-l-5">
														<h4 className="m-b-0">100</h4>
														<p className="m-b-0 muted">Others</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-4">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<h2 className="m-b-0">$17,267</h2>
											<p className="m-b-0 text-muted">Avg.Profit</p>
										</div>
										<div>
											<span className="badge badge-pill badge-cyan font-size-12">
												<span className="font-weight-semibold m-l-5">
													+5.7%
												</span>
											</span>
										</div>
									</div>
									<div className="m-t-50" style={{ height: 300 }}>
										<TinyBarchart height={300} width={300}></TinyBarchart>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-8">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-center">
										<h5>Top Product</h5>
										<div>
											<a
												href="javascript:void(0);"
												className="btn btn-sm btn-default"
											>
												View All
											</a>
										</div>
									</div>
									<div className="m-t-30">
										<div className="table-responsive">
											<table className="table table-hover">
												<thead>
													<tr>
														<th>Product</th>
														<th>Sales</th>
														<th>Earning</th>
														<th style={{ maxWidth: 70 }}>Stock Left</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div className="media align-items-center">
																<div className="avatar avatar-image rounded">
																	<img src={sofa} alt="" />
																</div>
																<div className="m-l-10">
																	<span>Gray Sofa</span>
																</div>
															</div>
														</td>
														<td>81</td>
														<td>$1,912.00</td>
														<td>
															<div className="d-flex align-items-center">
																<div className="progress progress-sm w-100 m-b-0">
																	<div
																		className="progress-bar bg-success"
																		style={{ width: "82%" }}
																	></div>
																</div>
																<div className="m-l-10">82</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="media align-items-center">
																<div className="avatar avatar-image rounded">
																	<img src={sofa} alt="" />
																</div>
																<div className="m-l-10">
																	<span>Gray Sofa</span>
																</div>
															</div>
														</td>
														<td>26</td>
														<td>$1,377.00</td>
														<td>
															<div className="d-flex align-items-center">
																<div className="progress progress-sm w-100 m-b-0">
																	<div
																		className="progress-bar bg-success"
																		style={{ width: "61%" }}
																	></div>
																</div>
																<div className="m-l-10">61</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="media align-items-center">
																<div className="avatar avatar-image rounded">
																	<img src={wood} alt="" />
																</div>
																<div className="m-l-10">
																	<span>Wooden Rhino</span>
																</div>
															</div>
														</td>
														<td>71</td>
														<td>$9,212.00</td>
														<td>
															<div className="d-flex align-items-center">
																<div className="progress progress-sm w-100 m-b-0">
																	<div
																		className="progress-bar bg-danger"
																		style={{ width: "23%" }}
																	></div>
																</div>
																<div className="m-l-10">23</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="media align-items-center">
																<div className="avatar avatar-image rounded">
																	<img src={chair} alt="" />
																</div>
																<div className="m-l-10">
																	<span>Red Chair</span>
																</div>
															</div>
														</td>
														<td>79</td>
														<td>$1,298.00</td>
														<td>
															<div className="d-flex align-items-center">
																<div className="progress progress-sm w-100 m-b-0">
																	<div
																		className="progress-bar bg-warning"
																		style={{ width: "54%" }}
																	></div>
																</div>
																<div className="m-l-10">54</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="media align-items-center">
																<div className="avatar avatar-image rounded">
																	<img src={watch} alt="" />
																</div>
																<div className="m-l-10">
																	<span>Wristband</span>
																</div>
															</div>
														</td>
														<td>60</td>
														<td>$7,376.00</td>
														<td>
															<div className="d-flex align-items-center">
																<div className="progress progress-sm w-100 m-b-0">
																	<div
																		className="progress-bar bg-success"
																		style={{ width: "76%" }}
																	></div>
																</div>
																<div className="m-l-10">76</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
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

export default D3dashboard;
