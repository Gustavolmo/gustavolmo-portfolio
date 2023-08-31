<script lang="ts">
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import { onMount } from 'svelte';

	let sketch: (p5: p5) => void;

	sketch = (p5: p5) => {

		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
		};

		p5.draw = () => {
			p5.background(255);

			//drag to move the world.
			p5.orbitControl(-1, 0, 0);

			p5.emissiveMaterial(255, 255, 255, 0);

			p5.translate(0, 0, 0);
			p5.box(1600, 1600, 1600);
		};
	};
</script>

<P5 {sketch} />

