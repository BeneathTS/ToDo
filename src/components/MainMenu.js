import React from 'react';
import '../styles/MainMenu.css';

function UserProfileImage() {
	return (
		<div className="profileImageStub"/>
);
}

function UserProfileName() {
	return (
		<div className="profileNameStub"/>
	);
}

function UserProfileInfo() {
	return (
		<div className="userProfileInfo">
			<UserProfileImage />
			<UserProfileName />
		</div>
	);
}

function TaskLists() {
	return (
		<ul className="taskList">
			<li id="mainTaskList" className="selected">
				<span>Today</span>
			</li>
		</ul>
	);
}

export default function MainMenu () {
	return (
		<div className="mainMenu">
			{/* <UserProfileInfo /> */}
			{/* <TaskLists /> */}
		</div>
	);
}
