import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import NavLinks from '../nav-links/NavLinks';
import SocialIcons from '../social-icons/SocialIcons';

const Layout = ({ children }) => {
	return (
		<div>
			<div className="bg-[#111827] text-white py-6">
				<div className="container mx-auto flex flex-col md:flex-row gap-3 justify-center md:justify-between items-center">
					<div className="md:shrink-0">
						<Link to="/">
							<img className="w-28" src={logo} alt="AC" />
						</Link>
					</div>
					<NavLinks />
					<a
						className="p-3 bg-transparent border rounded-md font-bold hover:bg-white hover:text-[#0089C3] hover:duration-300 hover:ease-in border-[#0089C3]"
						href="https://drive.google.com/file/d/1k74wBmROa7vxsDK4ur1MVqmxmY_Po0Iw/view?usp=sharing"
						download="aditya_chakraborty.pdf"
						target="_blank"
						rel="noreferrer"
					>
						Download CV
					</a>
				</div>
			</div>

			<main>{children}</main>

			<footer className="bg-[#111827] text-white py-12">
				<div className="container mx-auto flex flex-col md:flex-row gap-6 justify-around items-center border-b pb-5 border-[#0089C3]">
					<div>
						<img className="w-28" src={logo} alt="AC" />
					</div>
					<div>
						<h2 className="text-center text-xl font-bold mb-5 pb-4 border-b-4 border-double border-[#0089C3]">
							Quick Links
						</h2>
						<NavLinks />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-center text-xl font-bold mb-5 pb-4 border-b-4 border-double border-[#0089C3]">
							Social Links
						</h2>
						<div className="flex gap-5">
							<SocialIcons />
						</div>
					</div>
				</div>

				<div>
					<p className="text-center mt-6">
						Copyright &copy; | All rights reserved by Aditya Chakraborty{' '}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
