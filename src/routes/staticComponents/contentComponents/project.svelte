<script>
	import eventSaucePic from '../../../assets/guests-in-card.png';
	import getGeo from '../../../assets/get-geo.png';
	import mangomoji from '../../../assets/mangomoji.jpg';
	import bootlr from '../../../assets/bootlr.png';
</script>

<article class="project-content">
	<article class="project-row">
		<img class="project-iamge" src={mangomoji} alt="mangomoji" />
		<div>
			<div class="card-header">
				<p class="project-title">MANGOMOJI</p>
				<a class="project-website" target="_blank" href="https://mangomoji.com">Website</a>
			</div>
			<p class="project-text">Emoji powered music player</p>
			<p>
				Stack:
				<li class="project-text">React</li>
				<li class="project-text">Go</li>
			</p>
		</div>
	</article>

	<article class="project-row">
		<img class="project-iamge" src={bootlr} alt="bootlr" />
		<div>
			<div class="card-header">
				<p class="project-title">BOOTLR</p>
				<a class="project-website" target="_blank" href="https://bootlr.com">Website</a>
			</div>
			<p class="project-text">AI assisted product search and shopping</p>
			<p>
				Stack:
				<li class="project-text">Stencil</li>
				<li class="project-text">Go</li>
			</p>
		</div>
	</article>

	<article class="project-row">
		<img class="project-iamge" src={eventSaucePic} alt="event-souce" />
		<div>
			<div class="card-header">
				<p class="project-title">EVENT-SAUCE</p>
				<a class="project-website" target="_blank" href="https://event-sauce.vercel.app/">Website</a
				>
			</div>
			<p class="project-text">Guest managment tool synched with google calendar</p>
			<p>
				Stack:
				<li class="project-text">Next</li>
				<li class="project-text">MongoDB</li>
			</p>
		</div>
	</article>

	<article class="project-row">
		<img class="project-iamge" src={getGeo} alt="get-geo" />
		<div>
			<div class="card-header">
				<p class="project-title">GET-GEO</p>
				<a class="project-website" target="_blank" href="https://gustavolmo.github.io/get-geo/"
					>Website</a
				>
			</div>
			<p class="project-text">
				Tool created to help me get the lat. and lng. coordinates of polygon vertices in a map.
			</p>
			<p>
				Stack:
				<li class="project-text">TypeScript</li>
			</p>
		</div>
	</article>
</article>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100;10..100,500;10..100,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;900&display=swap');

	.card-header {
		display: flex;
		/* flex-direction: column; */
		align-items: center;
	}

	.project-website {
		border: #ddd 1px solid;
		text-decoration: none;
		border-radius: 8px;
		padding: 4px 8px;
		font-size: 16px;
		font-weight: 300;
		margin: 8px;
	}

	.project-iamge {
		width: 50%;
		border-radius: 8px;
	}

	.project-row {
		display: flex;
		/* border: 1px dashed white; */
		gap: 8px;
		margin-bottom: 96px;
	}

	.project-content {
		color: #eee;
		font-family: 'Work Sans', sans-serif;
		font-weight: 300;
		font-size: 20px;
		display: flex;
		flex-direction: column;
		padding: 0px 8px 8px;
		margin-top: 40px;
	}

	.project-text {
		font-size: 16px;
		font-weight: 300;
		margin: 8px;
	}

	.project-title {
		font-weight: 300;
	}

	@media (max-width: 650px) {
		.project-row {
			flex-direction: column;
		}

		.project-iamge {
			width: 100%;
		}
	}

	@media (max-width: 350px) {
		.card-header {
			flex-direction: column;
		}

		.project-text {
			text-align: center;
		}
	}
</style>
