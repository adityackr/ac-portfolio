import { Link } from 'react-router-dom';
import navLinks from '../../data/navLinks';

const NavLinks = () => {
	return (
		<nav className="font-bold flex gap-4">
			{navLinks.map((link) => (
				<Link
					className="hover:text-[#0089C3] hover:duration-300 hover:ease-in"
					to={link.path}
					key={link.id}
				>
					{link.title}
				</Link>
			))}
		</nav>
	);
};

export default NavLinks;
