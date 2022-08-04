import { Link } from 'react-router-dom';
import pic from '../assets/images/my-pic.png';
import Layout from '../components/layout/Layout';

const Home = () => {
	return (
		<Layout>
			<div className="w-full py-4 bg-bgImage">
				<div className="container mx-auto flex justify-evenly items-center">
					<img src={pic} alt="aditya" />
					<div className="text-white">
						<h1 className="text-7xl mb-5 font-bold">I'm Aditya Chakraborty</h1>
						<h2 className="text-5xl mb-5 text-[#0089C3]">
							Passionate Full Stack Web Development Learner
						</h2>
						<h3 className="text-3xl mb-10">
							I will be available soon for your service
						</h3>
						<div>
							<Link
								className="p-3 font-bold bg-transparent hover:bg-white hover:text-[#0089C3] hover:duration-300 border rounded-md border-[#0089C3]"
								to="/about"
							>
								About me
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
