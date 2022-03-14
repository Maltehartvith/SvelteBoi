<script>
	let promise = getRandomNumber();

	function generator(){
		return Math.floor(Math.random() * 1000);
	}

	async function getRandomNumber() {
		const res = await setTimeout(generator(), 5000)
		

		if (res.ok) {
			return res;
		} else {
			throw new Error(res);
		}
	}

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}