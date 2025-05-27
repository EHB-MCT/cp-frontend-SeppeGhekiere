import { motion, scale, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useLayoutEffect, ReactNode, use } from "react";
import "../../../styles/parallax.scss";
import React from "react";
import { Link, useNavigate } from "react-router";

export const FairyTale = () => {
	const navigate = useNavigate();
	return (
		<div className="parallaxContainer">
			<Link
				to={".."}
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}
				className="home-btn-all-projects fairy-tale-back-button"
			>
				Go back
			</Link>
			<ParallaxContent imgUrl="/thumbnail.png" subHeading="Het sprookje ..." heading="De koning en de witte slang" direction="right" height="100vh" />
			<ParallaxContent
				imgUrl="src/assets/Frame1_background.png"
				subHeading="Er was eens een witte slang die veranderde in een vrouw."
				heading=""
				direction="right"
				height="100vh"
				children={
					<div>
						<Frame1Text subHeading="En deze vrouw was op zoek naar iets na eeuwen lang in het mytische woud te blijven" heading="" direction="right" />
						<SnakeTransform1 imgUrl="/src/assets/Frame1_snake.png" className="Frame1_snake" /> <SnakeTransform2 imgUrl="/src/assets/Frame1_woman_cutout.png" className="Frame1_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="/src/assets/Frame2_background.png"
				subHeading="Dus ging ze naar de dichste stad en begon ze te zoeken"
				heading=""
				direction="right"
				height="100vh"
				children={
					<div>
						<Frame2Text subHeading="Tot ze plots oog in oog kwam met een man" />
						<Frame2_images imgUrl="/src/assets/Frame2_woman.png" className="Frame2_woman" direction="right" />
						<Frame2_images imgUrl="/src/assets/Frame2_man.png" className="Frame2_woman" direction="left" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="/src/assets/Frame3_background.png"
				subHeading="En ze werden direct verliefd op elkaar"
				heading=""
				direction="left"
				height="100vh"
				children={
					<div>
						<Frame3_man imgUrl="/src/assets/Frame3_man.png" className="Frame3_man" />
						<Frame3_woman imgUrl="/src/assets/Frame3_woman.png" className="Frame3_man" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="/src/assets/Frame4_background.png"
				subHeading=""
				heading=""
				direction="left"
				height="100vh"
				children={
					<div>
						<Frame4Text
							sentences={["Na lang te praten heeft de man besloten, zijn identiteit te delen met de vrouw.", "Hij was de koning.", "En hij wou met haar trouwen", "De vrouw was blij maar ook bang want niemand mocht weten dat ze een slang was"]}
							direction="left"
						/>
						<Frame4_man imgUrl="/src/assets/Frame4_man.png" className="Frame4_man" />
						<Frame4_woman imgUrl="/src/assets/Frame4_woman.png" className="Frame4_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="/src/assets/Frame5_background.png"
				subHeading="Na een paar jaar getrouwd komt een monk naar de tempel"
				heading=""
				direction="right"
				height="100vh"
				children={<Frame5_monk imgUrl="/src/assets/Frame5_monk.png" className="Frame5_man" />}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame6_background.png"
				subHeading="De vrouw niet wetend dat de monk rondkijkt in de tempel, verandert van gedaante"
				heading=""
				direction="right"
				height="100vh"
				children={
					<div>
						<SnakeTransform4 imgUrl="/src/assets/Frame6_snake.png" className="Frame1_snake" /> <SnakeTransform3 imgUrl="/src/assets/Frame6_woman.png" className="Frame1_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame7_background.jpg"
				subHeading=""
				heading=""
				direction="center"
				height="100vh"
				children={
					<div>
						<Frame4Text sentences={["De monk heeft het gezien en wilt dat ze opgesloten wordt", "Maar de koning gelooft hem niet", "Enh hij wilt haar niet kwijt", "Dus hij jaagt de monk weg"]} direction="center" />
						<Frame7_man imgUrl="/src/assets/Frame7_woman.png" className="Frame2_woman" />
						<Frame7_man imgUrl="/src/assets/Frame7_man.png" className="Frame2_woman" />
						<Frame7_monk imgUrl="/src/assets/Frame7_monk.png" className="Frame2_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame9_background.png"
				subHeading="De vrouw wilt gewoon hier in de tempel blijven en genieten van haar leven"
				heading=""
				direction="left"
				height="100vh"
				children={
					<div>
						<Frame9_woman imgUrl="/src/assets/Frame9_woman.png" className="Frame2_woman" />
						<Frame9_blackout />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame10_background.png"
				subHeading=""
				heading=""
				direction="center"
				height="100vh"
				children={
					<div>
						<Frame4Text sentences={["Oh nee, de thee was vergiftigd", "Waar ben ik?", "Heeft die monk dit gedaan?", "Gaat de koning nog van mij houden ook al weet hij dat ik een slang ben?"]} direction="left" />
						<Frame10_woman imgUrl="/src/assets/Frame4_woman.png" className="Frame2_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame11_background.png"
				subHeading=""
				heading=""
				direction="center"
				height="100vh"
				children={
					<div>
						<Frame4Text sentences={["De koning was lang op zoek naar zijn vrouw", "Maar naar lang zoeken vond hij de toren", ""]} direction="right" />
						<Frame11_man imgUrl="/src/assets/Frame11_man_on_horse.png" className="Frame2_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent
				imgUrl="src/assets/Frame14_background.png"
				subHeading=""
				heading=""
				direction="center"
				height="100vh"
				children={
					<div>
						<Frame4Text sentences={["Nadat ze elkaar terug gevonden hadden", "Zei de koning: Ik heb je zo gemist ", "Je zal altijd mooi zijn welke gedaante je ook aanneemt"]} direction="left" />
						<Frame14_man imgUrl="/src/assets/Frame14_woman.png" className="Frame2_woman" />
						<Frame14_man imgUrl="/src/assets/Frame14_man.png" className="Frame2_woman" />
					</div>
				}
			></ParallaxContent>
			<ParallaxContent imgUrl="/thumbnail.png" subHeading="Het einde: dit was..." heading="De koning en de witte slang" direction="right" height="100vh" />
		</div>
	);
};

type ParallaxContentProps = {
	imgUrl: string;
	subHeading?: string;
	heading?: string;
	height?: string;
	direction?: "left" | "right" | "center";
	children?: ReactNode;
	offset?: number;
};

const ParallaxContent = ({ imgUrl, subHeading, heading, height = "100vh", direction = "center", children, offset = 0 }: ParallaxContentProps) => {
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollY } = useScroll();

	// Calculate the initial and final scroll positions for the animation
	const initial = elementTop - clientHeight;
	const final = elementTop + offset;

	const y = useTransform(scrollY, [initial, final], [offset, -offset]);

	useLayoutEffect(() => {
		const element = ref.current;
		const onResize = () => {
			if (!element) return;
			setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [ref]);

	let align = "center";
	if (direction === "left") align = "flex-start";
	else if (direction === "right") align = "flex-end";

	return (
		<motion.div ref={ref} style={{ y }}>
			<div className="contentImg">
				<StickyImage imgUrl={imgUrl} height={height} />
				<OverlayCopy heading={heading} subHeading={subHeading} direction={direction} alignItems={align} />
				{children}
			</div>
		</motion.div>
	);
};

// Assuming these components exist elsewhere and unchanged:

const StickyImage = ({ imgUrl, height }: { imgUrl: string; height?: string }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return (
		<motion.div
			className="stickyImageBackground"
			style={{
				backgroundImage: `url(${imgUrl})`,
				height: height,
				top: "0",
			}}
			ref={targetRef}
		>
			<motion.div
				className="stickyImageOverlay"
				style={{
					opacity,
				}}
			/>
		</motion.div>
	);
};

type OverlayCopyProps = {
	subHeading?: string;
	heading?: string;
	direction?: "left" | "right" | "center";
	alignItems?: string;
};

const OverlayCopy = ({ subHeading, heading, direction, alignItems }: OverlayCopyProps) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 0]);

	return (
		<motion.div
			style={{
				y,
				opacity,
				alignItems: alignItems || "center",
				padding: "0 10vw",
				display: "flex",
				flexDirection: "column",
			}}
			ref={targetRef}
			className="overlayContainer"
		>
			{subHeading && <p className="overlaySubHeading">{subHeading}</p>}
			{heading && <p className="overlayHeading">{heading}</p>}
		</motion.div>
	);
};
// _________________________________________________________________________________
const SnakeTransform1 = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
	const x = useTransform(scrollYProgress, [0, 0.5], [-500, 200]);
	const rotate = useTransform(scrollYProgress, [0, 0.4, 0.425, 0.45, 0.475, 0.5], [0, 0, -10, 10, -10, 0]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.45, 0.55], [1, 1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0.9]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				x,
				y,
				rotate,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
const SnakeTransform2 = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [100, 300]);
	const x = useTransform(scrollYProgress, [0, 0.5], [-500, 200]);
	const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
	const rotate = useTransform(scrollYProgress, [0, 0.5, 0.525, 0.55, 0.575, 0.6], [0, 0, 10, -10, 10, 0]);
	const opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				scale,
				y,
				x,
				rotate,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
const Frame1Text = ({ subHeading, heading, direction }: any) => {
	const targetRef = useRef(null); // Create a reference to the element

	// We track the scroll progress for this element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"], // Default offset
	});

	// The vertical movement (y) of the text and the opacity are adjusted during scrolling
	const y = useTransform(scrollYProgress, [0, 1], [1000, 400]); // The text moves from bottom to top
	const opacity = useTransform(scrollYProgress, [0.25, 0.75, 0.95], [0, 1, 0]); // The text becomes visible between 15% and 85% of the scroll

	let align = "center"; // Default text alignment is centered
	// The text direction is adjusted based on the 'direction' prop
	if (direction === "left") {
		align = "flex-start"; // If the direction is 'left', align text to the left
	} else if (direction === "center") {
		align = "center"; // If the direction is 'center', center the text
	} else if (direction === "right") {
		align = "flex-end"; // If the direction is 'right', align text to the right
	}

	return (
		<motion.div
			style={{
				y, // The movement of the text on the y-axis
				opacity, // The transparency of the text
				alignItems: align, // The alignment of the text depending on the direction
				padding: "0 10vw",
				// If sticky is 'yes', position the text at 50% of the viewport height
			}}
			ref={targetRef} // Attach the ref to the element
			className="overlayContainer"
		>
			<p className="overlaySubHeading">{subHeading}</p> {/* Subheading text */}
			<p className="overlayHeading">{heading}</p> {/* Main heading text */}
		</motion.div>
	);
};
// ___________________________________________________________________________________________________
const Frame2Text = ({ subHeading, heading, direction }: any) => {
	const targetRef = useRef(null); // Create a reference to the element

	// We track the scroll progress for this element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"], // Default offset
	});

	// The vertical movement (y) of the text and the opacity are adjusted during scrolling
	const y = useTransform(scrollYProgress, [0, 1], [1000, -200]); // The text moves from bottom to top
	const opacity = useTransform(scrollYProgress, [0.25, 0.75, 0.95], [0, 1, 0]); // The text becomes visible between 15% and 85% of the scroll

	let align = "center"; // Default text alignment is centered
	// The text direction is adjusted based on the 'direction' prop
	if (direction === "left") {
		align = "flex-start"; // If the direction is 'left', align text to the left
	} else if (direction === "center") {
		align = "center"; // If the direction is 'center', center the text
	} else if (direction === "right") {
		align = "flex-end"; // If the direction is 'right', align text to the right
	}

	return (
		<motion.div
			style={{
				y, // The movement of the text on the y-axis
				opacity, // The transparency of the text
				alignItems: align, // The alignment of the text depending on the direction
				padding: "0 10vw",
				// If sticky is 'yes', position the text at 50% of the viewport height
			}}
			ref={targetRef} // Attach the ref to the element
			className="overlayContainer"
		>
			<p className="overlaySubHeading">{subHeading}</p> {/* Subheading text */}
			<p className="overlayHeading">{heading}</p> {/* Main heading text */}
		</motion.div>
	);
};
const Frame2_images = ({ imgUrl, className, direction }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	let x;
	if (direction === "left") {
		x = useTransform(scrollYProgress, [0, 0.75], [1000, 50]);
	} else if (direction === "right") {
		x = useTransform(scrollYProgress, [0, 0.75], [-1000, -50]);
	}
	const y = useTransform(scrollYProgress, [0, 1], [100, 300]);

	const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	const opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				scale,
				y,
				x,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame3_man = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 0.5, 1], [-500, 0, 400]);
	const x = useTransform(scrollYProgress, [0, 0.5], [500, 100]);

	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				x,
				y,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
const Frame3_woman = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 0.55, 1], [-500, 0, 400]);
	const x = useTransform(scrollYProgress, [0, 0.5, 0.55], [500, 250, 100]);

	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
	const rotateY = useTransform(scrollYProgress, [0, 0.5, 0.55], [180, 180, 0]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				y,
				x,
				rotateY,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
// Animate up and down in center for Frame4_man and Frame4_woman
const Frame4_man = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	// y moves in a smooth oscillating manner (like up and down)
	const y = useTransform(scrollYProgress, [0, 0.75, 1], [-400, 300, 250]);
	const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.5]);
	const x = useTransform(scrollYProgress, [0.25, 1], [400, -150]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.5, 1], [0, 1, 0]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				y,
				x,
				scale, // fixed center horizontally
				opacity,
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				margin: "0 auto",
			}}
		></motion.div>
	);
};
const Frame4_woman = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 0.75, 1], [-400, 300, 250]);
	const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.5]);
	const x = useTransform(scrollYProgress, [0.25, 1], [400, -150]);

	const opacity = useTransform(scrollYProgress, [0.15, 0.5, 1], [0, 1, 0]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				y,
				x,
				scale,
				opacity,
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				margin: "0 auto",
			}}
		></motion.div>
	);
};

const Frame4Text = ({ sentences, direction }: { sentences: string[]; direction: string }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	// Define the y position and opacity for each sentence
	const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);
	const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
	const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
	const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
	let align = "center"; // Default text alignment is centered
	if (direction === "left") {
		align = "flex-start"; // Align text to the left
	} else if (direction === "right") {
		align = "flex-end"; // Align text to the right
	}
	return (
		<motion.div
			style={{
				alignItems: align,
				padding: "0 10vw",
			}}
			ref={targetRef}
			className="overlayContainer"
		>
			<motion.p
				className="overlaySubHeading"
				style={{
					y,
					opacity: opacity1,
				}}
			>
				{sentences[0]}
			</motion.p>
			<motion.p
				className="overlaySubHeading"
				style={{
					y,
					opacity: opacity2,
				}}
			>
				{sentences[1]}
			</motion.p>
			<br />
			<motion.p
				className="overlaySubHeading"
				style={{
					y,
					opacity: opacity3,
				}}
			>
				{sentences[2]}
			</motion.p>
			<br />
			<br />
			<motion.p
				className="overlaySubHeading"
				style={{
					y,
					opacity: opacity3,
				}}
			>
				{sentences[3]}
			</motion.p>
		</motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame5_monk = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 0.75], [-1000, 500]);

	const y = -200;

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	const opacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const SnakeTransform3 = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
	const x = useTransform(scrollYProgress, [0, 0.5], [-500, 200]);
	const rotate = useTransform(scrollYProgress, [0.45, 0.5], [0, 720]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.45, 0.55], [1, 1, 0]);
	const scale = useTransform(scrollYProgress, [0.45, 0.5], [0.75, 0.15]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				x,
				y,
				rotate,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
const SnakeTransform4 = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
	const x = useTransform(scrollYProgress, [0, 0.5], [-500, 200]);
	const rotate = useTransform(scrollYProgress, [0.5, 0.55], [-720, 0]);
	const opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
	const scale = useTransform(scrollYProgress, [0.5, 0.55], [0.15, 0.75]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				x,
				y,
				rotate,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame7_monk = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0.5, 0.75], [-1000, -200]);

	const y = -50;

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
	const scale = 0.75;
	const opacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
	const rotateY = 180;
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				rotateY,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
const Frame7_man = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 0.75], [1000, 200]);
	const scale = 0.6;
	const y = -100;

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	const opacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame9_woman = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 0.75], [1000, 200]);
	const scale = 0.6;
	const y = useTransform(scrollYProgress, [0.65, 1], [-100, 400]);

	const [easteregg, setEasteregg] = React.useState(false);
	const handleClick = () => {
		console.log("Easter egg clicked!", easteregg);

		setEasteregg(true);
		// You can add any additional logic here if needed
	};
	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 1]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
				cursor: "pointer", // Change cursor to pointer for clickable effect
			}}
		></motion.div>
	);
};
const Frame9_blackout = () => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});
	const opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
	return (
		<motion.div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "black",
				opacity,
				zIndex: 9999, // Ensure it covers everything
			}}
		></motion.div>
	);
};
const Frame10_woman = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = 200;
	const scale = 0.6;
	const y = useTransform(scrollYProgress, [0.6, 0.75, 1], [-200, -200, 150]);

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				scale,
				backgroundImage: `url(${imgUrl})`,
				// opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame11_man = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0.5, 1], [-1000, 0]);

	const y = useTransform(scrollYProgress, [0.6, 0.75, 1], [-100, 50, 250]);

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
	const scale = 0.75;
	const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
// __________________________________________________________________________________________________
const Frame14_man = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // Create a reference to the element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});

	const x = useTransform(scrollYProgress, [0, 0.75], [1000, -100]);
	const scale = 0.6;
	const y = useTransform(scrollYProgress, [0.6, 0.75, 1], [-100, 50, 250]);

	// const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

	const opacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 1]);

	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				// scale,
				y,
				x,
				scale,
				backgroundImage: `url(${imgUrl})`,
				opacity,
				backgroundSize: "contain", // Ensure the image fits well
				backgroundRepeat: "no-repeat", // Prevent the image from repeating
				backgroundPosition: "center", // Center the image
			}}
		></motion.div>
	);
};
