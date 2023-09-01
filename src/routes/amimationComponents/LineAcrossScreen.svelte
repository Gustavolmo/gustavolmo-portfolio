<script lang="ts">
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import { onMount } from 'svelte';

	let sketch: (p5: p5) => void;
	let canvasWidth = 210;

	onMount(() => {
		const textElement = document.querySelector('.text');
		if (textElement) {
			canvasWidth = textElement.clientWidth - 4;
		}

		sketch = (p5: p5) => {
			let x = 0; //p5.windowWidth / 2; // Initial x-coordinate
			let y = 0; // p5.windowHeight / 2; // Initial y-coordinate

			let xSpeed: number; // Speed of movement along the x-axis
			let ySpeed: number; // Speed of movement along the y-axis

			p5.setup = () => {
				p5.createCanvas(canvasWidth, 35);

				xSpeed = canvasWidth / 10;
				ySpeed = 0;
			};

			p5.draw = () => {
				// Trailing effect
				p5.background(255, 0);

				// Update position
				x += xSpeed + canvasWidth / 1000;
				y += ySpeed + 0;

				// Bouncing off walls
				if (x < 0 || x > p5.width - 0) {
					xSpeed *= -1; // Reverse xSpeed
				}
				if (y < 50 || y > p5.height - 50) {
					ySpeed *= -1; // Reverse ySpeed
				}

				p5.fill(0);
				p5.ellipse(x, y, 0, 88);
			};
		};
	});

	export let prop: string;
</script>

<section class="animation-wrap">
	<p class="text">{prop}</p>
	<P5 {sketch} />
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');


	.animation-wrap {
		top: 0;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		border-radius: 100px;
	}

	.text {
		position: absolute;
		margin: 0;
		top: 0;
		color: #fff;
		font-size: 45px;
		line-height: 40px;
		font-weight: bolder;
		font-family: 'Monoton', cursive;
	}
</style>
