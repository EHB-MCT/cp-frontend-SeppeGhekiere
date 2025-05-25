import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../../../styles/parallax.scss";
export const FairyTale = () => {
	return (
		<div className="parallaxContainer">
			<ParallaxContent imgUrl="src/assets/Frame1_background.png" subHeading="Er was eens ..." heading="De koning en de witte slang" direction="right" height="100vh" sticky="no" />
			<ParallaxContent
				imgUrl="src/assets/Frame1_background.png"
				subHeading="Uit het mystieke woud ontwaakt zij—een witte slang, nu vrouw, geleid door liefde."
				heading=""
				direction="right"
				height="150vh"
				sticky="yes"
				children={<OverlayImage imgUrl="src/assets/Frame1_snake.png" className="Frame1_snake" />}
			/>
		</div>
	);
};

const ParallaxContent = ({ imgUrl, subHeading, heading, height, direction, children, sticky }: any) => {
	return (
		<div>
			<div className="contentImg">
				<StickyImage imgUrl={imgUrl} height={height} />
				<OverlayCopy heading={heading} subHeading={subHeading} direction={direction} sticky={sticky} />
				{children}
			</div>
		</div>
	);
};
const StickyImage = ({ imgUrl, height }: any) => {
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
					opacity, // De overlay krijgt de transparantie die we hebben ingesteld op basis van scroll
				}}
			/>
		</motion.div>
	);
};

const OverlayCopy = ({ subHeading, heading, direction, sticky }: { subHeading: string; heading: string; direction: string; sticky?: string }) => {
	const targetRef = useRef(null); // Create a reference to the element

	// We track the scroll progress for this element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"], // Default offset
	});

	// The vertical movement (y) of the text and the opacity are adjusted during scrolling
	const y = useTransform(scrollYProgress, [0, 1], [250, -250]); // The text moves from bottom to top
	const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 0]); // The text becomes visible between 15% and 85% of the scroll

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
				padding: "0 10vw", // If sticky is 'yes', position the text at 50% of the viewport height
			}}
			ref={targetRef} // Attach the ref to the element
			className="overlayContainer"
		>
			<p className="overlaySubHeading">{subHeading}</p> {/* Subheading text */}
			<p className="overlayHeading">{heading}</p> {/* Main heading text */}
		</motion.div>
	);
};

const OverlayImage = ({ imgUrl, className }: any) => {
	const targetRef = useRef(null); // We maken een referentie naar het element
	// useScroll volgt de voortgang van de scroll en stelt ons in staat de scroll-effecten toe te passen
	const { scrollYProgress } = useScroll({
		target: targetRef, // We volgen het scrollen van dit specifieke element
		offset: ["start end", "end start"], // De offset bepaalt wanneer de animatie start en eindigt
	});

	const y = useTransform(scrollYProgress, [0, 1], [350, -250]);
	const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.75], [1, 1, 1]);
	return (
		<motion.div
			className={`overlayImage ${className || ""}`}
			ref={targetRef}
			style={{
				y,
				backgroundImage: `url(${imgUrl})`,
				opacity, // De achtergrondafbeelding wordt ingesteld op de imgUrl
			}}
		></motion.div>
	);
};
