<script>
	import SingleProject from "./projectComponents/singleProject.svelte";
</script>

<div class="empty-div" />

<section class="projects-wrapper">
	<SingleProject />
	<SingleProject />
	<SingleProject />
	<SingleProject />
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
		flex-wrap: wrap;
		outline: dashed red;
		width: 100vw;
		height: 680px;
		margin: 0;
		padding: 0;
		padding-top: 80px;
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
			height: 2400px;
		}
	}
</style>
