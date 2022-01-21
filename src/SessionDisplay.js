import './SessionDisplay.css';
import React from 'react';

const sessionConfig = {
	winter: {
		text: 'Burr, it is cold!',
		iconName: 'snowflake',
	},
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun',
	},
};

const getSession = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SessionDisplay = props => {
	const session = getSession(props.lat, new Date().getMonth());
	const { text, iconName } = sessionConfig[session];

	return (
		<div className={`session-display ${session}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SessionDisplay;
