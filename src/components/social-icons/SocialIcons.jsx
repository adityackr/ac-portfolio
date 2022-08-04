import React, { Fragment } from 'react';
import socialIcons from '../../data/socialIcons';

const SocialIcons = () => {
	return (
		<Fragment>
			{socialIcons.map((icon) => (
				<a href={icon.href} key={icon.id} target="_blank" rel="noreferrer">
					<svg
						className="fill-white w-6 hover:fill-[#0089C3] hover:duration-300 hover:ease-in"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path d={icon.path} />
					</svg>
				</a>
			))}
		</Fragment>
	);
};

export default SocialIcons;
