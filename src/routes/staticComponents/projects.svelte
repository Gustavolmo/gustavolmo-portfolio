<div class="empty-div" />

<section class="projects-wrapper">
	<div class="project">Event Sauce</div>
	<div class="project">Geo Notice</div>
	<div class="project">Get Geo</div>
	<div class="project">Eco Harbor</div>
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

	.project {
		flex: 1;
		border: solid black;
		background-color: antiquewhite;
		height: 600px;
	}

	@media (max-width: 1000px) {
		.projects-wrapper {
			flex-direction: column;
			height: 2000px;
		}
	}
</style>
