<script>
	import Background from './contentComponents/background.svelte';
	import Project from './contentComponents/project.svelte';

	let expandProject = false;
	let expandBackground = false;

	const handleProjects = () => {
		expandProject = !expandProject;
		expandBackground = false;
	};

	const handleBackground = () => {
		expandProject = false;
		expandBackground = !expandBackground;
	};
</script>

<section class="content-wrapper">
	<button on:click={handleBackground} class="content-section">ABOUT</button>
	<button on:click={handleProjects} class="content-section">PROJECTS</button>

	<div class={expandBackground ? 'area-expand' : 'area'}>
		<Background />
	</div>
</section>

<div class={expandProject ? 'area-expand' : 'area'}>
	<Project />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100;10..100,500;10..100,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;900&display=swap');

	/* .handle-collapse {
		margin-top: 4px;
		padding: 0 8px;
		color: #797979;
		font-size: 20px;
	}

	.handle-collapse:hover {
		color: #ddd;
	} */

	.area,
	.area-expand {
		position: absolute;
		background-color: #1e1e1e;
		width: 60vw;
		right: 0;
		bottom: 0;
		overflow-y: auto;
		color: #ccc;
		z-index: 10;
		transition: 0.8s ease-in-out;
		padding: 92px 32px 16px;
	}

	.area {
		height: 0px;
		opacity: 0;
		visibility: hidden;
		transition: 0.8s ease-in-out;
	}

	.area-expand {
		height: 100vh;
		opacity: 1;
		transition: 0.8s ease-in-out;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		margin: 64px 0 16px;
		padding: 8px 16px;
		box-sizing: border-box;
		z-index: 10;
	}

	.content-section {
		text-align: left;
		background: none;
		font-family: 'Imbue', serif;
		color: #ccc;
		font-size: 100px;
		font-weight: 500;
		max-width: 364px;
		transition: 0.2s ease-in-out;
		padding-left: 4px;
	}

	.content-section:hover {
		cursor: pointer;
		/* border-left: #ccc solid .4px; */
		transition: 0.2s ease-in-out;
		padding-left: 8px;
		color: #eee;
	}

	@media (max-width: 950px) {
		.area,
		.area-expand {
			padding: 92px 16px 16px;
			width: 80vw;
			border-left: 1px solid #ccc;
		}
	}

	@media (max-width: 450px) {
		.content-section {
			font-size: 80px;
		}

		.area,
		.area-expand {
			width: 84vw;
		}
	}

	@media (max-width: 332px) {
		.content-section {
			font-size: 60px;
		}
	}
</style>
