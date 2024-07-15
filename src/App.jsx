import { useRef } from 'react';
import './App.css';
import image from './assets/pic.png';
import pup from './assets/pup.jpg';
import bg from './assets/background.svg';

function App() {
	// Ref for the section you want to scroll to
	const pupRef = useRef(null);

	// Function to handle scrolling to the section
	const scrollToPup = () => {
		pupRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div
				className="grid gap-8 bg-repeat-y bg-cover bg-local md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-36"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="m-2 p-2 flex items-center justify-between text-white font-poppins">
					<div className="text-sm font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
						<h1>Cosmo</h1>
					</div>
					<ul className="flex flex-row items-end cursor-pointer text-sm md:text-lg lg:text-xl xl:text-2xl">
						<li className="mr-2 md:mr-3 lg:mr-4 xl:mr-6" onClick={scrollToPup}>
							About Me
						</li>
						<li className="mr-2 md:mr-3 lg:mr-4 xl:mr-6">Projects</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="m-2 p-2 flex flex-col items-center justify-center text-center text-white md:flex-row xl:items-center justify-around">
					<div className="font-poppins">
						<div className="text-lg font-bold md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
							<h1>Hi! I am Guian.</h1>
						</div>
						<div className="text-sm md:text-lg lg:text-xl xl:text-2xl">
							<p>
								A front-end developer, A self-motivated, goal-oriented and
								aspiring web developer.
							</p>
						</div>
					</div>
					<div className="transition ease-in-out delay-150 hover:scale-105">
						<img src={image} alt="Guian Cosmo" />
					</div>
				</div>
				<div
					className="m-2 p-2 flex flex-col items-center justify-center md:flex-row xl:items-center justify-around font-poppins"
					ref={pupRef}
				>
					<div>
						<img
							className="transition ease-in-out delay-150 h-96 w-auto rounded-2xl hover:scale-105"
							src={pup}
							alt="PUP"
						/>
					</div>
					<div className="flex flex-col p-2 items-center justify-center text-center text-white">
						<div className="text-lg font-medium md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl">
							<h1>Graduated in PUP - San Juan Campus</h1>
						</div>
						<div className="text-sm md:text-lg lg:text-xl xl:text-2xl mt-5">
							<p>
								Achieved Latin Honor - Cum Laude in Bachelor of Science in
								Information Technology
							</p>
						</div>
					</div>
				</div>
				<div className="m-2 p-2 flex flex-col items-center justify-center text-center text-white font-poppins xl:items-center justify-around">
					<div className="text-lg font-medium md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl">
						<h1>Mobile and Web Front-End Developer</h1>
					</div>
					<div className="text-lg md:text-xl lg:text2xl xl:text-3xl mt-5">
						<p>
							at{' '}
							<a href="https://odrtechinc.com/" className="cursor:pointer">
								ODR Technologies
							</a>
						</p>
					</div>
				</div>
				<div className="m-2 p-2 flex flex-col items-center justify-center text-center text-white font-poppins xl:items-center justify-around">
					<div className="text-lg font-medium md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl">
						<h1>Tools</h1>
					</div>
					<div className="flex flex-nowrap overflow-hidden mt-5">
						<div className="flex flex-wrap justify-center gap-6">
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/616ac2b89b9e754fd86e01be484727f16dd4a4371c05fa773e98f4d36d237842?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="HTML"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/05127424943f296a72dc58ef1e92d94ebe83841d9df675d827b4c5f798b070b7?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="CSS"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/172bd185ed33f231af82bd515c9dd87d509c51abc3bc624eef6eeafaf67e3f08?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="JS"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb04e2f859310d6d4eccd376a460b901b56eb6b2fa92217dc4a8f4a11f4d422?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="TS"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/a323a3aec822d878ccf7a9de8975ddb4bde199b0b87da2b46923fab957989b1c?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="React"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc5d287d6efb7758a758917374fa0e8b86849e09ba6e55d095372c016cdd950?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="Angular"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cab1926076248d932e9c50c2ae37031879003805723e066ee3863a94e02d4b7?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="Tailwind"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3aa97a4b476ac201f2cd324fba59f87974735575670ddcc7290a16aeb67c7b8?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="Ionic"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfbf8041f3e7251fc02352ddede1a7d8a0e069bac067b6f3c845d3ccb934a9ea?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="C"
							/>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443de47b4b67d3e6703bece50a7f16ef34b6e2ecb69514cc63b7cb9f1db6780?apiKey=0a8c0fd347f942b0be298d8b3405a882&"
								className="size-14 md:size-16 lg:size-20 xl:size-24 2xl:size-32"
								alt="Mysql"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
