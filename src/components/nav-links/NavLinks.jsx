import { Link } from 'react-router-dom';

const navLinks = [
	{
		id: 'nav-01',
		path: '/',
		title: 'Home',
	},
	{
		id: 'nav-02',
		path: '/about',
		title: 'About Me',
	},
	{
		id: 'nav-03',
		path: '/works',
		title: 'My Works',
	},
	{
		id: 'nav-04',
		path: '/contact',
		title: 'Contact Me',
	},
];

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
