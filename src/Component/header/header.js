import logo from "../../assets/images/logo/logo.png";
import user from "../../assets/user.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/addUser";
const Header = () => {
	const [profileModal, setProfileModal] = useState(false);

	const handleOpenProfile = () => {
		setProfileModal(true);
	};
	const handleClose = () => setProfileModal(false);
	const dispatch = useDispatch();
	var logindata = useSelector((state) => state.admin.logindata);

	return (
		<div className="app is-primary">
			<div className="layout is-side-nav-dark">
				<div className="header">
					<div className="logo">
						<a
							href="./"
							onClick={() => {
								dispatch(logout());
							}}
						>
							<img src={logo} className="anticon anticon-dashboard"></img>
							{/* <img src={logo} className="anticon anticon-dashboard"></img> */}
						</a>
					</div>
					{/* <div className="logo logo-white">
						<a href="index.html">
							<img src="assets/images/logo/logo-white.png" alt="Logo" />
							<img
								className="logo-fold"
								src="assets/images/logo/logo-fold-white.png"
								alt="Logo"
							/>
						</a>
					</div> */}
					<div className="nav-wrap">
						<ul className="nav-left">
							<li className="desktop-toggle">
								<a href="javascript:void(0);">
									<Icon icon="fa-solid:outdent" color="white" />
								</a>
							</li>
							<li className="mobile-toggle">
								<a href="javascript:void(0);">
									<i className="anticon"></i>
								</a>
							</li>
							<li></li>
						</ul>
						<ul className="nav-right">
							<li className="dropdown dropdown-animated scale-left"></li>
							<li className="dropdown dropdown-animated scale-left">
								<div className="pointer" data-toggle="dropdown">
									<div
										className="avatar avatar-image  m-h-10 m-r-15"
										onClick={() => handleOpenProfile()}
									>
										<img src={user} alt=""></img>
									</div>
								</div>
								<div className="p-b-15 p-t-20 dropdown-menu pop-profile">
									<div className="p-h-20 p-b-15 m-b-10 border-bottom">
										<div className="d-flex m-r-50">
											<div className="avatar avatar-lg avatar-image">
												<img src={user} alt=""></img>
											</div>
											<div className="m-l-10">
												<p className="m-b-0 text-dark font-weight-semibold">
													Sunil Sahu
												</p>
												<p className="m-b-0 opacity-07">UI/UX Desinger</p>
											</div>
										</div>
									</div>
									<a
										href="javascript:void(0);"
										className="dropdown-item d-block p-h-15 p-v-10"
									>
										<div className="d-flex align-items-center justify-content-between">
											<div>
												<i className="anticon opacity-04 font-size-16 anticon-user"></i>
												<span className="m-l-10">Edit Profile</span>
											</div>
										</div>
									</a>
									<a
										href="javascript:void(0);"
										className="dropdown-item d-block p-h-15 p-v-10"
									>
										{/* <div className="d-flex align-items-center justify-content-between">
											<div>
												<img
													src={user}
													// className="anticon opacity-04 x/font-size-16 anticon-logout"
												></img>
												<span className="m-l-10">Logout</span>
											</div>
										</div> */}
									</a>
								</div>
							</li>
							<li>
								<a
									href="./dashboard"
									data-toggle="modal"
									data-target="#quick-view"
								>
									<Icon icon="bi:grid" color="white" />
								</a>
							</li>
							<Modal
								show={profileModal}
								onHide={handleClose}
								dialogClassName="profile_modal"
							>
								<Modal.Body>
									<div class="p-b-15 p-t-20">
										<div class="p-h-20 p-b-15 m-b-10 border-bottom">
											<div class="d-flex m-r-50">
												<div class="avatar avatar-lg avatar-image">
													<img src={user} alt=""></img>
												</div>
												<div class="m-l-10">
													<p class="m-b-0 text-dark font-weight-semibold">
														{logindata?.username}
													</p>
													<p class="m-b-0 opacity-07">{logindata?.company}</p>
												</div>
											</div>
										</div>
										<a
											href="javascript:void(0);"
											class="dropdown-item d-block p-h-15 p-v-10"
										>
											<div class="d-flex align-items-center justify-content-between">
												<div>
													<Icon icon="bx:user" width="20" />
													<span class="m-l-10">Edit Profile</span>
												</div>
											</div>
										</a>
										<a
											href="javascript:void(0);"
											class="dropdown-item d-block p-h-15 p-v-10"
										>
											<div class="d-flex align-items-center justify-content-between">
												<div>
													<Icon icon="ant-design:logout-outlined" width="20" />
													<a
														href="./"
														onClick={() => {
															dispatch(logout());
														}}
														class="m-l-10"
													>
														Logout
													</a>
												</div>
											</div>
										</a>
									</div>
								</Modal.Body>
							</Modal>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
