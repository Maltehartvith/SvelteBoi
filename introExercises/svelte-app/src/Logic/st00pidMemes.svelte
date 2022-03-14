<script>
	let memes = [
		{ id: 'MnsAEpAPD5s', name: 'Lets try the crispy chicken sandwich' },
		{ id: '_sluPOes0cA', name: 'Welcome to McDonalds' },
		{ id: '0V7fD9ypfMc', name: 'Hey, have a good night' }
	];
</script>

<h1>Some St00pid memes from YouTube</h1>

<ul>
	{#each memes as { id, name }, i}
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={id}">
				{i + 1}: {name}
			</a>
		</li>
	{/each}
</ul>
