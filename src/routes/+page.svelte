<script lang="ts">
	import globalStyles from '../global.css?inline';
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import RandomCircle from './amimationComponents/RandomCircle.svelte';
	import LineAcrossScreen from './amimationComponents/LineAcrossScreen.svelte';
	import OribitalRoom from './amimationComponents/OribitalRoom.svelte';

const prop = 'GUSTAVO'
</script>

<!-- <RandomCircle /> -->
<!-- <div id="canvas-container">
	<OribitalRoom />
</div> -->


<LineAcrossScreen {prop}/>

<style>
	/* #canvas-container {
		position: absolute;
		top: 0;
		left: 0;
	} */
</style>
