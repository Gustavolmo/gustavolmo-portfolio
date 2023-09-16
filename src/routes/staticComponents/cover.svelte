<script>
	import cv from '../../assets/gustavo-cv.pdf';
	let coverDown = true;
	const makeCoverMove = () => {
		coverDown = !coverDown;
	};
</script>

<section class={coverDown ? 'cover-down' : 'cover-up'}>
	<section class="cover-inner">
		<div class="into">
			<p>GUSTAVO</p>
			<p class="name">OLIVEIRA</p>
			<a class="download-cv" href={cv} target="_blank">Download CV</a>
		</div>

		<div class="text">
			<div class="fullstack-text">
				<p>FULL</p>
				<p>STACK</p>
			</div>
			<p>WEB DEVELOPER</p>
		</div>

		<button class="cover-button" on:click={makeCoverMove}
			>{coverDown ? 'Learn more' : 'back'}
		</button>
	</section>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100;10..100,500;10..100,900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500;900&display=swap');

	.download-cv {
		font-family: 'Work Sans', sans-serif;
		font-size: 20px;
		font-weight: 100;
		margin: 0 16px;
		padding: 4px 8px;
		border: #eee 1px solid;
		border-radius: 8px;
	}

	.fullstack-text {
		display: flex;
	}

	.name {
		/* font-size: 20px; */
		/* font-weight: 100; */
		font-family: 'Imbue', serif;
		line-height: 52px;
		/* margin-left: 16px; */
	}

	.into {
		position: absolute;
		left: 32px;
		top: 32px;
		font-family: 'Imbue', serif;
		font-size: 100px;
		font-weight: 900;
		line-height: 70px;
	}

	.text {
		position: absolute;
		right: 32px;
		bottom: 32px;
		font-family: 'Imbue', serif;
		font-size: 100px;
		font-weight: 500;
		line-height: 70px;
	}

	.cover-button {
		position: absolute;
		margin: auto;
		bottom: 8px;
		right: 32px;
		border: none;
		font-size: 20px;
		background: none;
		color: #ccc;
		font-family: 'Work Sans', sans-serif;
		font-weight: 100;
	}

	.cover-button:hover {
		color: #eee;
	}

	.cover-inner {
		display: flex;
		flex-direction: column;
		height: 98vh;
		width: 98vw;
		box-shadow: inset 0px 10px 60px 60px #141414;
		align-items: center;
		justify-content: space-between;
		border-radius: 16px;
		border: 2vh #1e1e1e;
		color: #ddd;
		background: url('../../assets/cover-pic.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: left;
	}

	.cover-up,
	.cover-down {
		background-color: #1e1e1e;
		z-index: 100;
		position: absolute;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		align-items: center;
		justify-content: center;
		animation-duration: 1s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
		color: #ddd;
	}

	.cover-up {
		animation-name: slideUp;
	}

	.cover-down {
		animation-name: slideDown;
	}

	@keyframes slideUp {
		0% {
			transform: translateY(0%);
		}
		40% {
			transform: translateY(-2%);
		}
		100% {
			transform: translateY(-94%);
		}
	}

	@keyframes slideDown {
		0% {
			transform: translateY(-94%);
		}
		30% {
			transform: translateY(-90%);
		}
		100% {
			transform: translateY(0%);
		}
	}

	@media (max-width: 700px) {
		.cover-button {
			right: 8px;
		}

		.fullstack-text {
			flex-direction: column;
			line-height: 52px;
		}

		.into {
			left: 8px;
		}

		.text {
			left: 8px;
		}
	}

	@media (max-width: 332px) {
		.into {
			font-size: 80px;
			line-height: 44px;
		}

		.text {
			line-height: 56px;
			font-size: 80px;
		}
		.fullstack-text {
			line-height: 40px;
		}
	}
</style>
