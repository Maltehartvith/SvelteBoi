<script>
	let count = 69;

	$: doubled = count * 69;
	$: quadrupled = doubled * 420;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Count: {count}
</button>

<p>{count} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>