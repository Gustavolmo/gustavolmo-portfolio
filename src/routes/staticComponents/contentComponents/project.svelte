<script>
	import eventSaucePic from '../../../assets/guests-in-card.png';
	import pendelHub from '../../../assets/pendel-hub.png';
	import geoNotice from '../../../assets/geo-notice.png';
	import getGeo from '../../../assets/get-geo.png';
</script>

<article class="project-content">
	<article class="project-row">
		<img class="project-iamge" src={eventSaucePic} alt="event-souce" />
		<div>
			<div class="card-header">
				<p class="project-title">EVENT-SAUCE</p>
				<a class="project-website" target="_blank" href="https://event-sauce.vercel.app/">Website</a
				>
			</div>

			<p class="project-text">Vacation Project - 4 weeks</p>
			<p class="project-text">Guest managment tool synched with google calendar</p>
		</div>
	</article>

	<article class="project-row">
		<img class="project-iamge" src={pendelHub} alt="pendel-hub" />
		<div>
			<div class="card-header">
				<p class="project-title">PENDEL-HUB</p>
				<a class="project-website" target="_blank" href="https://pendel-hub.vercel.app/">Website</a>
			</div>

			<p class="project-text">Hackathon - 8 days</p>
			<p class="project-text">Prototype for a ride sharing app targeting commuters</p>
		</div>
	</article>

	<article class="project-row">
		<img class="project-iamge" src={geoNotice} alt="geo-notice" />
		<div>
			<div class="card-header">
				<p class="project-title">GEO-NOTICE</p>
				<a
					class="project-website"
					target="_blank"
					href="https://gustavolmo.github.io/geo-notice-CLIENT/">Website</a
				>
			</div>

			<p class="project-text">Hackathon - 8 hours</p>
			<p class="project-text">
				Anonymous chatroom app integrated with openAI's moderation api for user posts
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

			<p class="project-text">My first ever deployed app</p>
			<p class="project-text">
				Light-weight tool for collecting coordinates integrated with Google Maps
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
		border: #ccc 1px solid;
		border-radius: 8px;
		padding: 4px 8px;
		font-size: 16px;
		font-weight: 100;
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
	}

	.project-text {
		font-size: 16px;
		font-weight: 100;
		margin: 8px;
	}

	.project-title {
		font-weight: 300;
	}

	@media (max-width: 680px) {
		.project-row {
			flex-direction: column;
		}

		.project-iamge {
			width: 100%;
		}
	}
</style>
