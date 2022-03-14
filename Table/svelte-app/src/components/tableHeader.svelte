<script>
    export let tableHeadData;

    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function sort(event) {
        const target = event.target.id
		dispatch('message', {
			column: target
		});
	}

    function toUpper(string){
        if(string === "firstName"){
            return "First name"
        }
        if( string === "lastName"){
            return "Last name"
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>

<tr>
    {#each tableHeadData as data}
    <th id={data} on:click={ sort }> { toUpper(data) }</th>
    {/each}
</tr>