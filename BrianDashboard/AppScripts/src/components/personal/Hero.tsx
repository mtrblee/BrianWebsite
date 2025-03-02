import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll/modules";
import teammatesImage from "../../../../wwwroot/images/teammates.png";
import React from "react";

function hero() {
	return (
		<section id="home">
			<div className="relative md:h-[calc(100vh-200px)] flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left">
				<div className="md:mt-2 md:w-1/2">
					<img
						src={teammatesImage}
						alt="Teammate image"
						width={320}
						className="rounded-full shadow-2xl"
					/>
				</div>
				<div className="md:mt-2 md:w-3/5 relative">
					<h1 className="text-4xl font-bold mt-6 md:text-5xl">
						Hi, I'm Brian!
					</h1>
					<p className="font-semibold text-xl mt-4 mb-6 md:text-2xl">
						<span className="">I own a website. Come visit.</span>
					</p>
					<p className="mt-4 mb-10 text-gray-300 md:text-lg">
						.NET | React | TypeScript | Powershell | C#
						<br />
						Golf | Basketball | Baseball | Pickleball
					</p>
					{/* <a
                            target="_blank"
                            href={cv}
                            className="text-secondary-foreground font-semibold px-6 py-3 bg-teal-700 hover:bg-primary rounded-lg shadow transition"
                        >
                            Download CV
                        </a> */}
					<ScrollLink
						smooth={true}
						offset={-100}
						spy={true}
						to="contact"
						className="text-primary-foreground font-semibold px-6 py-3 bg-secondary rounded-lg cursor-pointer shadow hover:bg-accent transition"
					>
						Contact
					</ScrollLink>
				</div>
			</div>
			<div className="flex flex-row items-center text-center justify-center ">
				<ScrollLink
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce cursor-pointer" />
				</ScrollLink>
			</div>
		</section>
	);
}

export default hero;