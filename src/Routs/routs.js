import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "../Component/header/header";
import Dashboard from "../Screens/dashboard/dashboard";
import Data from "../Screens/data/data";
import FeatureEngineering from "../Screens/featureEngineering/featureEngineering";
import Login from "../Screens/login/login";
import MlModel from "../Screens/ML Model/mlModel";
import ScenarioPlanning from "../Screens/scenarioPlanning/ScenarioPlanning";
import UserInterface from "../Screens/userScreen/userInterface";
import Sidebar from "../Component/sideNavBar/sideBar";
import { useSelector } from "react-redux";
import D1dashboard from "../Screens/modules/demo1/D1dashboard";
import D2dashboard from "../Screens/modules/demo2/D2dashboard";
const AppRouts = () => {
	var logindata = useSelector((state) => state.admin.logindata);
	console.log(logindata);
	return (
		<>
			{logindata ? (
				<>
					<Routes>
						<Route path="/data" element={<Data></Data>}></Route>
					</Routes>
					<Routes>
						<Route
							path="/demo1Dashboard"
							element={<D1dashboard></D1dashboard>}
						></Route>
						<Route
							path="/demo2Dashboard"
							element={<D2dashboard></D2dashboard>}
						></Route>
					</Routes>
					<Routes>
						<Route
							path="/featureEnginnering"
							element={<FeatureEngineering></FeatureEngineering>}
						></Route>
					</Routes>
					<Routes>
						<Route
							path="/scenarioPlanning"
							element={<ScenarioPlanning></ScenarioPlanning>}
						></Route>
					</Routes>
					<Routes>
						<Route path="/mlModel" element={<MlModel></MlModel>}></Route>
					</Routes>
					<Routes>
						<Route
							path="/users"
							element={<UserInterface></UserInterface>}
						></Route>
					</Routes>
				</>
			) : (
				<Routes>
					<Route path="/" element={<Login></Login>}></Route>
				</Routes>
			)}
		</>
	);
};
export default AppRouts;
