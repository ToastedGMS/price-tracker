const colorPalette = [
	'#1f77b4', // blue
	'#e6550d', // orange
	'#2ca02c', // green
	'#9467bd', // purple
	'#fd8d3c', // bright orange
	'#637939', // olive green
	'#e377c2', // pink
	'#bcbd22', // yellow-green
	'#d62728', // red
	'#17becf', // cyan
	'#393b79', // navy
	'#74c476', // light green
	'#ff7f0e', // orange
	'#8c6d31', // brown
	'#9e9ac8', // lavender
	'#31a354', // medium green
	'#7f7f7f', // gray
	'#6baed6', // light blue
	'#bcbddc', // light purple
	'#fdae6b', // peach
	'#843c39', // brick red
	'#a1d99b', // pastel green
	'#3182bd', // muted blue
	'#8c564b', // muted brown
	'#d9d9d9', // very light gray
	'#ce6dbd', // magenta
	'#c7e9c0', // pale green
	'#fdd0a2', // sand
	'#c6dbef', // pale blue
	'#bdbdbd', // medium gray
	'#de9ed6', // pale pink
	'#c49c94', // light brown
	'#d62728', // red again
	'#dadaeb', // violet
	'#756bb1', // purple-blue
	'#9ecae1', // light sky blue
	'#969696', // gray
	'#ad494a', // dark red (custom insert)
	'#ff9896', // soft pink (custom insert)
];

let currentIndex = 0;

export default function generateRandomColor() {
	const color = colorPalette[currentIndex % colorPalette.length];
	currentIndex++;
	return color;
}
