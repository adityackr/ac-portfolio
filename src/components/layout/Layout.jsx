import { Link } from 'react-router-dom';
import cv from '../../assets/docs/cv.pdf';
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
						href={cv}
						download="aditya_chakraborty.pdf"
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
						<h3 className="text-center text-lg font-bold mb-5 pb-4 border-b-4 border-double border-[#0089C3]">
							Quick Links
						</h3>
						<NavLinks />
					</div>

					<div className="flex flex-col gap-2">
						<h3 className="text-center text-lg font-bold mb-5 pb-4 border-b-4 border-double border-[#0089C3]">
							Social Links
						</h3>
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
