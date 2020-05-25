import React from 'react' //MUST import react to use jsx

//destructuring prarms. 
const Card = ({id, name, email}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadw-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;