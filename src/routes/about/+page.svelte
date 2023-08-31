<script lang="ts">
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import { onMount } from 'svelte';


	let width = 55;
	let height = 55;

	let sketch: (arg: p5) => void;

	onMount(() => {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;

		sketch = (p5: p5) => {
			p5.setup = () => {
				p5.createCanvas(windowHeight, windowWidth);
			};

			p5.draw = () => {
				p5.ellipse(p5.width / 2, p5.height / 2, width, height);
			};
		};
	});
</script>

<label>
	Width
	<input type="range" bind:value={width} min="100" max="1000" step="0.01" />
	{width}
</label>

<label>
	Height
	<input type="range" bind:value={height} min="100" max="1000" step="0.01" />
	{height}
</label>

<P5 {sketch} />
