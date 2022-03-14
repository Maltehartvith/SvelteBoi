import App from './App.svelte';
import Person from './ranPeople.js'

const app = new App({
	target: document.body,
	props: {
		person: Person
	}
});


export default app;