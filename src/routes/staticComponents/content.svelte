<script>
	let expandProject = false;
	let expandBackground = false;
	let expandCurriculum = false;

	const handleProjects = () => {
		expandProject = !expandProject;
		expandBackground = false;
		expandCurriculum = false;
	};

	const handleBackground = () => {
		expandProject = false;
		expandBackground = !expandBackground;
		expandCurriculum = false;
	};

	const handleCurriculum = () => {
		expandProject = false;
		expandBackground = false;
		expandCurriculum = !expandCurriculum;
	};
</script>

<section class="content-wrapper">
	<button on:click={handleProjects} class="content-section">PROJECTS</button>
	<button on:click={handleBackground} class="content-section">BACKGROUND</button>
	<button on:click={handleCurriculum} class="content-section">CURRICULUM</button>

	<div class={expandProject ? 'area-expand' : 'area'}>
		<button class="handle-collapse" on:click={handleProjects}>hide</button>
		<p>PROJECTS COMPONENT</p>
	</div>

	<div class={expandBackground ? 'area-expand' : 'area'}>
		<button class="handle-collapse" on:click={handleBackground}>hide</button>
		<p>BACKGROUND COMPONENT</p>
	</div>

	<div class={expandCurriculum ? 'area-expand' : 'area'}>
		<button class="handle-collapse" on:click={handleCurriculum}>hide</button>
		<p>CURRICULUM COMPONENT</p>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100;10..100,500;10..100,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;900&display=swap');

	.handle-collapse {
		background: none;
	}

	.area {
		padding: 48px 8px 8px;
		position: absolute;
		background-color: #ccc;
		border-right: 12px solid #1e1e1e;
		width: 0;
		right: 0;
		top: 0;
		height: 100vh;
		overflow: auto;
		transition: 0.4s ease-in-out;
		visibility: hidden;
	}

	.area-expand {
		padding: 48px 8px 8px;
		position: absolute;
		background-color: #ccc;
		border-right: 12px solid #1e1e1e;
		width: 60vw;
		right: 0;
		top: 0;
		height: 100vh;
		overflow: auto;
		transition: 0.4s ease-in-out;
		visibility: visible;
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
	}

	@media (max-width: 950px) {
		.area-expand {
			width: 80vw;
		}
	}

	@media (max-width: 450px) {
		.content-section {
			font-size: 80px;
		}

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
