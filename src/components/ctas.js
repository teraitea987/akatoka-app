import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { FiFacebook, FiInstagram, FiCalendar } from "react-icons/fi";
import "./ctas.css"

const Ctas = () => (
	<div className="section-2">
		<a target="blank" href="https://www.facebook.com/Akatoka-103069301504549"><FiFacebook className="facebook logo"></FiFacebook></a>
		<a target="blank" href="https://www.instagram.com/aka.toka"><FiInstagram className="instagram logo"></FiInstagram></a>
		<a href="https://calendar.online/722f254c314c9a681ead"><FiCalendar className="logo calendar"></FiCalendar></a>
	</div>
)

export default Ctas