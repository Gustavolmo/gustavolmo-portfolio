<script lang="ts">
</script>

<section class="background-image">
	<section class="project-card-style" />
	<section class="project-card-style2" />
	<section class="project-card">
		<div class="content">
			<header class="header">
				<img class="logo-image" src="src/assets/event-sauce.png" alt="Event Sauce" />
				<h1 class="header__title">Event Sauce</h1>
			</header>

			<p>Description</p>
			<button>About</button>
			<button>Visit the website</button>
		</div>
	</section>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

	.background-image {
		position: relative;
		flex: 1;
		height: 500px;
		background: url('src/assets/guests-in-card.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top;
		overflow: hidden;
	}
	.project-card-style,
	.project-card {
		position: absolute;
		background-color: antiquewhite;
		height: 40%;
		width: 100%;
		padding: 16px;
		bottom: 0;
		background-color: rgb(238, 129, 129);
		box-shadow: rgba(238, 129, 129) -20px -10px 60px 60px;
	}

	.project-card-style {
		transform: translate(0, -20%) skewY(-20deg);
	}

	.project-card-style2 {
		position: absolute;
		height: 100%;
		width: 100%;
		backdrop-filter: blur(8px);
		transition: 0.4s;
	}

	.project-card-style2:hover {
		backdrop-filter: blur(0px);
		transition: 0.4s;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo-image {
		height: 40px;
		width: 40px;
	}

	.header__title {
		font-family: 'Alegreya Sans', sans-serif;
		font-style: italic;
		font-weight: bold;
		font-size: 30px;
		margin: 0;
	}

	.content {
		position: relative;
		top: -80px;
	}
</style>
