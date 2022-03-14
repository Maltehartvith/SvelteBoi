<script>
	export let person;
	import PeopleTable from './components/table.svelte'
</script>

<main>
	<a href="./src/components/introExercises/Reactivity/assignments.svelte">press</a>
	<h1>Hello friend, find new friends here!</h1>
	<p>These are the hottest singles in your area</p>
	<div id="tables"><PeopleTable list={person}></PeopleTable></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>