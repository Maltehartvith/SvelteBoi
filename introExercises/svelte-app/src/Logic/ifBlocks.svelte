<script>
	let padawanLeftHand = { waxOn: false };
	let padawanRightHand = { waxOn: false };
	function toggle() {
		padawanLeftHand.waxOn = !padawanLeftHand.waxOn;
	}
    function toggle1() {
		padawanRightHand.waxOn = !padawanRightHand.waxOn;
	}
</script>

{#if padawanLeftHand.waxOn}
	<button on:click={toggle}>
		Wax off
	</button>
{/if}

{#if !padawanLeftHand.waxOn}
	<button on:click={toggle}>
		Wax on
	</button>
{/if}

{#if padawanRightHand.waxOn}
	<button on:click={toggle1}>
		Wax off
	</button>

{:else}
	<button on:click={toggle1}>
		Wax on
	</button>
{/if}

