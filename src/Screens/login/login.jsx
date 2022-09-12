import { useState } from "react";
import BackgroundImg from "../../assets/images/others/login-1.jpg";

import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/action/addUser";
import { userlist } from "../../redux/action/Userlist";
import { userdata } from "../user";

const Login = (enable) => {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState("");
	let navigate = useNavigate();
	const onClickLogin = () => {
		dispatch(userlist(userdata));

		for (let i = 0; i < userdata.length; i++) {
			if (userdata[i].name == userName) {
				dispatch(login(userdata[i]));
				navigate("/demo1dashboard");
			} else {
				console.log("not a user");
			}
		}
	};
	return (
		<div className="app">
			<div className="container-fluid p-0 h-100">
				<div className="row no-gutters h-100 full-height">
					<div
						className="col-lg-4 d-none d-lg-flex bg"
						style={{ backgroundImage: `url(${BackgroundImg})` }}
					>
						<div className="d-flex h-100 p-h-40 p-v-15 flex-column justify-content-between">
							<div>
								<img src="assets/images/logo/logo-white.png" alt="" />
							</div>
							<div>
								<h1 className="text-white m-b-20 font-weight-normal">
									Exploring Enlink
								</h1>
								<p className="text-white font-size-16 lh-2 w-80 opacity-08">
									Climb leg rub face on everything give attitude nap all day for
									under the bed. Chase mice attack feet but rub face on
									everything hopped up.
								</p>
							</div>
							<div className="d-flex justify-content-between">
								<span className="text-white">© 2022 Bipros-Involead</span>
								<ul className="list-inline">
									<li className="list-inline-item">
										<a className="text-white text-link" href="#">
											Legal
										</a>
									</li>
									<li className="list-inline-item">
										<a className="text-white text-link" href="#">
											Privacy
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-8 bg-white">
						<div className="container h-100">
							<div className="row no-gutters h-100 align-items-center">
								<div className="col-md-8 col-lg-7 col-xl-6 mx-auto">
									<h2>Sign In</h2>
									<p className="m-b-30">Enter your credential to get access</p>
									<form>
										<div className="form-group">
											<label className="font-weight-semibold" for="userName">
												Username:
											</label>
											<div className="input-affix">
												<Icon
													className="prefix-icon anticon anticon-user"
													icon="ant-design:user-outlined"
												/>
												<input
													type="text"
													className="form-control"
													id="userName"
													placeholder="Username"
													onChange={(e) => setUserName(e?.target?.value)}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="font-weight-semibold" for="password">
												Password:
											</label>
											<a
												className="float-right font-size-13 text-muted"
												href="#"
											>
												Forget Password?
											</a>
											<div className="input-affix m-b-10">
												<Icon
													className="prefix-icon anticon anticon-user"
													icon="ant-design:user-outlined"
												/>
												<input
													type="password"
													className="form-control"
													id="password"
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="d-flex align-items-center justify-content-between">
												<span className="font-size-13 text-muted">
													Don't have an account?
													<a className="small" href="#">
														Signup
													</a>
												</span>
												<button
													className="btn btn-primary"
													onClick={
														onClickLogin
														// userName === "Shubham" ||
														// userName === "john" ||
														// userName === "Gaurav"
														//   ? () =>
														//       navigate("/dashboard", {
														//         state: { user: userName },
														//       })
														//   : ""
													}
												>
													Sign In
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
