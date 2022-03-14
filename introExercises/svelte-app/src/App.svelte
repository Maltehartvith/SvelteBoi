<script>
	import Hello from './Introduction/Hello.svelte'
	import Dynamic from './Introduction/Dynamic.svelte'
	import Styling from './Introduction/Styling.svelte'
	import Nested from './Introduction/nestedComp.svelte'
	import HTMLTag from './Introduction/htmltag.svelte'
	
	import Assignments from './Reactivity/assignments.svelte';
	import Declarations from './Reactivity/declarations.svelte';
	import Statements from './Reactivity/statements.svelte';
	
	import PropsAndDef from './Props/declaringPropsAndDefaultV.svelte';
	import Spread from './Props/spreadPro.svelte'

	import IfBlock from './Logic/ifBlocks.svelte'
	import ElseIf from './Logic/elseIf.svelte'
	import KeyedEach from './Logic/keyedEach.svelte'
	import AwaitBlock from './Logic/awaitBlocks.svelte'
	import Each from './Logic/st00pidMemes.svelte'

	import DoMevents from './Events/DOMevents.svelte';
	import InlineHandlers from './Events/inlineHandlers.svelte';
	import EventModi from './Events/eventModi.svelte';
	import ComponentEvent from './Events/componentEvent.svelte';
	import DoMeventFor from './Events/DOMeventFor.svelte';

</script>

<main>
	<h1>Hello dude!</h1>
	<div id="container">
		<div>
			<p>Hello World exercise</p>
			<Hello></Hello>
		</div>
		<div>
			<p>Dynamic Attirbutes exercise</p>
			<Dynamic></Dynamic>
		</div>
		<div>
			<p>Styling exercise</p>
			<Styling></Styling>
		</div>
		<div>
			<p>Nested Components exercise</p>
			<Nested></Nested>
		</div>
		<div>
			<p>HTML tags exercise</p>
			<HTMLTag></HTMLTag>
		</div>

		<div>
			<p>Reactive assignments exercise</p>
			<Assignments></Assignments>
		</div>
		<div>
			<p>Reactive declarations exercise</p>
			<Declarations></Declarations>
		</div>
		<div>
			<p>Reactive statements exercise</p>
			<Statements></Statements>
		</div>

		<div>
			<p>Declaring props and default value exercise</p>
			<PropsAndDef></PropsAndDef>
		</div>
		<div>
			<p>Spread props exercise</p>
			<Spread></Spread>
		</div>

		<div>
			<p>If blocks exercise</p>
			<IfBlock></IfBlock>
		</div>
		<div>
			<p>Else/else if blocks exercise</p>
			<ElseIf></ElseIf>
		</div>
		<div>
			<p>Each blocks exercise</p>
			<Each></Each>
		</div>
		<div>
			<p>Keyed each blocks exercise</p>
			<KeyedEach></KeyedEach>
		</div>
		<div>
			<p>Await blocks exercise</p>
			<AwaitBlock></AwaitBlock>
		</div>
		

		<div>
			<p>DOM events exercise</p>
			<DoMevents></DoMevents>
		</div>
		<div>
			<p>Inline handlers exercise</p>
			<InlineHandlers></InlineHandlers>
		</div>
		<div>
			<p>Event modifiers exercise</p>
			<EventModi></EventModi>
		</div>
		<div>
			<p>Component events exercise</p>
			<ComponentEvent></ComponentEvent>
		</div>
		<div>
			<p>DOM event forwarding exercise</p>
			<DoMeventFor></DoMeventFor>
		</div>
		
	</div>
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

	div{
		border: 1px solid black
	}

	p{
		font-weight: bold;
	}
</style>