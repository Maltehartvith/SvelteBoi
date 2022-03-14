<script>
    export let list;
    let peopleList = list.peopleList
    const tableHeadData = Object.keys(peopleList[0]);

    import TableHead from "./tableHeader.svelte"
    import TableRow from "./tableRow.svelte"

</script>

<table cellspacing="0">
    <TableHead tableHeadData={ tableHeadData }/>
    {#each peopleList as person}
    <TableRow ranPersonData={ person }/>
    {/each}
</table>