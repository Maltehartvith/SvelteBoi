<script>
	import Info from './Info.svelte';

	const information = {
		swearWord1: 'frick',
		swearWord2: 'booger',
		militaryBackGround: 'Home Guard',
		secretRaid: 'Toys-R-Us',
        confirmedKills: '69',
        animal: 'Girrafe',
        weapon: 'Nerfgunner',
        countryInitials: 'DK'
	};

</script>

<Info {...information}/>