<script lang="ts">
	import type p5 from 'p5';
	import P5 from 'p5-svelte';

	const sketch = (p5: p5) => {
		let x = 200; //p5.windowWidth / 2; // Initial x-coordinate
		let y = 300; // p5.windowHeight / 2; // Initial y-coordinate

		let xSpeed: number; // Speed of movement along the x-axis
		let ySpeed: number; // Speed of movement along the y-axis

		p5.setup = () => {
			p5.createCanvas(p5.windowWidth,p5.windowHeight);

			const randomTimer = () => Math.random() * 2000;

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
			if (x < 100 || x > p5.width - 100) {
				xSpeed *= -1; // Reverse xSpeed
			}
			if (y < 100 || y > p5.height - 100) {
				ySpeed *= -1; // Reverse ySpeed
			}

			p5.fill(255);
			p5.ellipse(x, y, 200, 200);
		};
	};
</script>

<section>
  <P5 {sketch} />
</section>