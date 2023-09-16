<script>
	import Background from './contentComponents/background.svelte';
	import Project from './contentComponents/project.svelte';
	import profilePic from '../../assets/profile-pic-circlewhite.png';

</script>

<section class="content-wrapper">
	
	<div class='area'>
		<header class="header">
			<img class="profile-pic" src={profilePic} alt="profile-pic" />
			<p class="content-section">ABOUT</p>
		</header>
		<Background />
	</div>
</section>
	
	<div class='area'>
		<p class="content-section --projects">PROJECTS</p>
		<Project />
	</div>
	
<style>
	@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100;10..100,500;10..100,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;900&display=swap');

	/* .handle-collapse {
		font-size: 20px;
		margin: 0 8px 64px;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 4px 8px;
	}

	.handle-collapse:hover {
		color: #ddd;
	} */

	.profile-pic {
		widows: 120px;
		height: 120px;
		border: #ddd 0.5px solid;
		border-radius: 100px;
		border-radius: 100px;
	}

	.header {
		display: flex;
		align-items: baseline;
		align-items: center;
		/* min-width: 250px; */
		/* margin-bottom: 128px; */
		font-weight: 300;
		gap: 8px;
	}

	.area {
		/* position: absolute; */
		margin: auto;
		background-color: #1e1e1e;
		width: 600px;
		right: 0;
		bottom: 0;
		overflow-y: auto;
		color: #ddd;
		z-index: 10;
		transition: 0.8s ease-in-out;
		padding: 120px 32px 16px;
	}

	/* .area {
		height: 0px;
		opacity: 0;
		visibility: hidden;
		transition: 0.8s ease-in-out;
	}

	.area-expand {
		height: 100vh;
		opacity: 1;
		transition: 0.8s ease-in-out;
	} */

	.content-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 0 16px;
		padding: 8px 16px;
		box-sizing: border-box;
		z-index: 10;
	}

	.content-section {
		text-align: left;
		background: none;
		font-family: 'Imbue', serif;
		color: #ddd;
		font-size: 100px;
		font-weight: 500;
		/* max-width: 364px; */
		transition: 0.2s ease-in-out;
		/* padding-left: 4px; */
	}

	.--projects {
		text-align: center;
	}

	@media (max-width:650px) {
		.area {
			width: 400px;
		}
	}

	@media (max-width:450px) {
		.area{
			width: 100%;
		}

		.content-section {
			font-size: 60px;
		}

		.header {
			flex-direction: column;
		}
	}

	/* .content-section:hover {
		cursor: pointer;
		transition: 0.2s ease-in-out;
		padding-left: 8px;
		color: #eee;
	} */

	/* @media (max-width: 950px) {
		.area,
		.area-expand {
			padding: 160px 16px 16px;
			width: 80vw;
			border-left: 1px solid #ddd;
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
	} */
</style>
