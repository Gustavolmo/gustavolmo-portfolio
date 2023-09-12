<script>
	let coverDown = true;
	const makeCoverMove = () => {
		coverDown = !coverDown;
	};
</script>

<section class={coverDown ? 'cover-down' : 'cover-up'}>
	<section class="cover-inner">
		<button>Take Tour</button>
		<p>COVER PAGE</p>
		<button class="cover-button" on:click={makeCoverMove}>{coverDown ? '^' : 'v'}</button>
	</section>
</section>

<style>
	.cover-button {
		border: none;
		font-size: 20px;
		background: none;
	}

	.cover-inner {
		display: flex;
		flex-direction: column;
		height: 90vh;
		width: 90vw;
		border: 1px solid;
		align-items: center;
		justify-content: space-between;
		border-radius: 64px;
		padding: 8px;
	}

	.cover-up,
	.cover-down {
    z-index: 100;
    position: absolute;
		border: 1px solid black;
    background-color: white;
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
		30% {
			transform: translateY(2%);
		}
		60% {
			transform: translateY(2%);
		}
		95% {
			transform: translateY(-91%);
		}
		100% {
			transform: translateY(-90%);
		}
	}

	@keyframes slideDown {
		0% {
			transform: translateY(-90%);
		}
		30% {
			transform: translateY(-92%);
		}
		40% {
			transform: translateY(-92%);
		}
		95% {
			transform: translateY(1%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>
