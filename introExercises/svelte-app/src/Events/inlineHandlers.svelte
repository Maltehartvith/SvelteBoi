<script>
	let m = { x: 0, y: 0 };
	let count = 0;
</script>

<div on:click="{e => count += 1}">
<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
	<br>
	How many times you have clicked your mouse: {count}
</div>
</div>


<style>
	div { width: 100%; height: 100%; }
</style>