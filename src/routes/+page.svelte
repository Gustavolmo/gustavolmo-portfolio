<script lang="ts">
	import Header from './Header.svelte';
	import globalStyles from '../global.css?inline';
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import Projects from './Projects.svelte';

	const sketch = (p5: p5) => {
		let x = 200 //p5.windowWidth / 2; // Initial x-coordinate
		let y = 200 // p5.windowHeight / 2; // Initial y-coordinate

		let xSpeed: number; // Speed of movement along the x-axis
		let ySpeed: number; // Speed of movement along the y-axis

		p5.setup = () => {
			p5.createCanvas(375, p5.windowHeight / 3);

			const randomTimer = () => Math.random() * 1200;

			xSpeed = p5.random(-3, 3);
			ySpeed = p5.random(-3, 3);

			setInterval(() => {
				xSpeed = p5.random(-3, 3);
				ySpeed = p5.random(-3, 3);
			}, randomTimer());
		};

		p5.draw = () => {
			// Trailing effect
			p5.background(255, 0);

			// Update position with some randomness
			x += xSpeed + p5.random(-0.5, 0.5); // Add random variation to xSpeed
			y += ySpeed + p5.random(-0.5, 0.5); // Add random variation to ySpeed

			// Bouncing off walls
			if (x < 40 || x > p5.width - 40) {
				xSpeed *= -1; // Reverse xSpeed
			}
			if (y < 40 || y > p5.height - 40) {
				ySpeed *= -1; // Reverse ySpeed
			}

			p5.fill(255);
			p5.ellipse(x, y, 40, 40);
		};
	}



</script>

<section class="cover-section">
	<Header />
	<div class="canvas-container">
		<P5 {sketch} />
	</div>
</section>

<section class="projects">
	<div>
		<div class="spacer" />
	</div>
	<Projects />
	<Projects />
	<Projects />
</section>

<style>
	.cover-section {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height: 100%;
		width: 100%;
		overflow: auto;
	}

	.canvas-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.projects {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.spacer {
		height: 90vh;
	}
</style>
