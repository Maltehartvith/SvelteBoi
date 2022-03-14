<script>
	let m = { x: 0, y: 0 };
	let count = 0;
	
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	function handleClick() {
		count += 1;
	}
    
</script>


<div on:click={handleClick}>
<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
	<br>
	How many times you have clicked your mouse: {count}
</div>
</div>


<style>
	div { width: 100%; height: 100%; }
</style>