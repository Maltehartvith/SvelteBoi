<script>
	function handleClick() {
		alert('This is literaly the last warning!')
	}
	
</script>

<button on:click|once={handleClick}>
	Click me
</button>