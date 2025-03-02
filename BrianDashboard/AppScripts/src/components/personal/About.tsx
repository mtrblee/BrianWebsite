import { Link as ScrollLink } from "react-scroll/modules";
import * as React from "react";
import mountainImage from "../../../../wwwroot/images/mountainIcon.png";

function about() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 sm:py-30 md:py-24 md:flex-row md:text-left">
				<div className="bg-pattern bg-about">
				</div>
                <div className="md:w-1/3">
                    <img src={mountainImage} alt="Profile image" width={420} />
                </div>
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						About
					</h2>
					<p>
						I'm a <span className="font-bold">Sports Enthusiast</span> from
						Atlanta Georgia. My current passion is <span className="font-bold">pickleball</span>. The purpose of this webpage is to organize and create high quality tutorials for pickleball.
						I am an{" "}<span className="font-bold">engineer by trade</span> looking to reverse engineer sports.
					</p>
					<br />
					<p>
						I have completed a Bachelors in Biology at {" "}<span className="font-bold">University of Texas at Austin
                        </span> and a Masters in Computer Science at {" "}
						<span className="font-bold">Georgia Tech</span>.
					</p>
					<br />

					<p>
						Always{" "} <span className="font-bold">open to new opportunities</span> so feel free to get in touch!
					</p>
				</div>
			</div>
		</section>
	);
}

export default about;