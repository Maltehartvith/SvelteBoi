<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function wakeUp() {
		dispatch('message', {
			text: 'In just 8 years, 1980 were 50 years ago!'
		});
	}
</script>

<button on:click={wakeUp}>
	Click to wake up
</button>