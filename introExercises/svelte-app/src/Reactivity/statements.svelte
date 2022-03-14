<script>
	let count = 0;

	$: if (count > 9000) {
		alert(`IT'S OVER 9000!!!`);
	}

	function handleClick() {
		count += 1000;
	}
</script>

<button on:click={handleClick}>
	Click to increase power level. Current power level: {count}
</button>