<script>
	let count = 0;
	let smiley = "";
	function handleClick() {
		count += 1;
		smiley += " :)"
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p >
	{smiley}
</p>