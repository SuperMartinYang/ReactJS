import React from 'react'
import At from 'react-icons/lib/fa/at'
import profile from '../images/profile.jpg'
import experience from '../images/experience.jpg'
import education from '../images/education.jpg'
import project from '../images/project.jpg'
import blog from '../images/blog.jpg'
import photo from '../images/photo.jpg'

var divBackground = {
	height: "150 px",
	backgroundImage: "url(" + profile + ")"
}

const Home = () => (
	<div style={divBackground}>
		<img src={photo} 
			className="img-responsive" 
			style={{
				padding: "40px 0 40px 0" 
			}} alt="photo" />
		<br/>
		<p>Shenghui Yang <a href="mailto:softwaredeveloper_shy@outlook.com"><At /> </a></p>
	</div>
)

export default Home
