import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./hero.css"

const Hero = () => (
	<div className="section-1">
		<div className="left__sec">
			<h2 className="hero__text">Bienvenue sur notre site internet, vous retrouverez ici toutes les informations du Band, vous pouvez aussi nous contacter via le formulaire.</h2>
		</div>
		<div className="right__sec">
			<StaticImage className="right__sec_img"
				src="../images/logo-withouBG.png"
				alt="Logo du groupe Akatoka"
			/>
		</div>	
	</div>	
)

export default Hero
