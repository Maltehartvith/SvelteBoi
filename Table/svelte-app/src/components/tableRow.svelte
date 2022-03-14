<script>
    export let ranPersonData;

    const dataList = Object.keys(ranPersonData);

    

</script>
<tr>
    {#each dataList as data}
    {#if data === "avatar"}
    <td><img src="{ ranPersonData[ data ] }" alt="Insert picture here"/></td>
    {:else}
    <td id={data}>{ ranPersonData[ data ] }</td> 
    {/if}
    {/each}

</tr>


<style>
    tr {
        justify-content: space-around;
        border-bottom: double;
        background-color: rgba(84, 107, 236, 0.753);
    }

    td {
        width: 10%;
        align-self: center;
        font-size: 20px;
        border-bottom: double;
    }
    </style>