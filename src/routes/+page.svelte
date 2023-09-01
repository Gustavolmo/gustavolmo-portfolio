<script lang="ts">
	import globalStyles from '../global.css?inline';
	import type p5 from 'p5';
	import P5 from 'p5-svelte';
	import RandomCircle from './amimationComponents/RandomCircle.svelte';
	import LineAcrossScreen from './amimationComponents/LineAcrossScreen.svelte';
	import OribitalRoom from './amimationComponents/OribitalRoom.svelte';
	import profilePicture from '../assets/profile-pic-head.png';

	const prop = 'GUSTAVO';
</script>

<!-- <RandomCircle /> -->
<!-- <div id="canvas-container">
	<OribitalRoom />
</div> -->

<header class="profile-header">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="profile-picture"
		src={profilePicture}
		width="160px"
		height="160px"
		alt="profile-picture"
	/>
	<LineAcrossScreen {prop} />
</header>



<style>
	/* #canvas-container {
		position: absolute;
		top: 0;
		left: 0;
	} */

	.profile-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* gap: 16px; */
		margin-top: 120px;
	}
</style>
