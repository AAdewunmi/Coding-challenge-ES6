/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

*/

// Create class for town element and subclasses for parks and streets
class TownElement {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	
	calcAge() {
		const age = new Date().getFullYear() - this.year;
		return age;
	}
}

class Park extends TownElement {
	constructor (name, year, trees, area) {
		super (name, year);
		this.trees = trees;
		this.area = area; //km2
		this.age = this.calcAge();
	}
	
	calcTreeDensity() {
		const density = this.trees / this.area;
		console.log(`${this.name} has a density of ${density} trees per square km.`)
	}	
}

class Street extends TownElement {
	constructor (name, year, length, size = 'normal') {
		super (name, year);
		this.length = length;
		this.size = size;
	}
}


