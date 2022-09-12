import Header from "../header/header";
import Sidebar from "../sideNavBar/sideBar";

const ScreenContainer = ({
	children,
	pageID,
	title1,
	defaultActiveKey,
	title2,
	title3,
	eventKey1,
	eventKey2,
	eventKey3,
}) => {
	return (
		<div>
			<Sidebar
				eventKey1={eventKey1}
				eventKey2={eventKey2}
				eventKey3={eventKey3}
				pageID={pageID}
				defaultActiveKey={defaultActiveKey}
				title1={title1}
				title2={title2}
				title3={title3}
			/>
			<Header />
			{children}
		</div>
	);
};

export default ScreenContainer;
