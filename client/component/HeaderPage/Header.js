import React, { Component } from "react";
import styles from "./header.scss";

export default class Header extends Component{
		constructor(props){
		super(props);
		this.state = {
		};
	}

	render(){
		return(
			<div className="header-section">
				<div className="w3-row">
					
						<div className="w3-bar bar-design">
							<p className="w3-center">Header title here....</p>
						</div>
					
				</div>
			</div>
		);
	}

}
