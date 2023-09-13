<script>
	import EventSauce from "./projectComponents/eventSauce.svelte";
	import GeoNotice from "./projectComponents/geoNotice.svelte";
	import GetGeo from "./projectComponents/getGeo.svelte";
	import PendelHub from "./projectComponents/pendelHub.svelte";
</script>

<div class="empty-div" />

<section class="projects-wrapper">
	<EventSauce />
	<EventSauce />
	<EventSauce />
	<EventSauce />
	<!-- <GetGeo />
	<PendelHub />
	<GeoNotice /> -->
</section>

<style>
	.empty-div {
		position: absolute;
		top: 0;
		height: 20px;
		width: 100vw;
		background-color: white;
	}

	.projects-wrapper {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 100vw;
		height: 540px;
		margin: 0;
		padding: 0;
		padding-top: 40px;
		text-align: center;
		box-sizing: border-box;
	}

	/* .project {
		flex: 1;
		border: solid black;
		background-color: antiquewhite;
		height: 600px;
	} */

	@media (max-width: 1000px) {
		.projects-wrapper {
			flex-direction: column;
			height: 1500px;
		}
	}
</style>
