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

const townData = (() => {
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

	// Set all items inside map
	const parks = new Map();
	parks.set('park1', new Park('Green Park', 1987, 1290, 10));
	parks.set('park2', new Park('Oak Park', 1968, 1200, 20));
	parks.set('park3', new Park('Revolution Park', 1948, 978, 15));

	const streets = new Map();
	streets.set('street1', new Street('Jones Street', 1998, 47, 'big'));
	streets.set('street2', new Street('Abraham Street', 1948, 27, 'small'));
	streets.set('street3', new Street('May Street', 2006, 34));
	streets.set('street4', new Street('Roy Street', 2009, 13, 'tiny'));

	const averParkAge = element => {
		let totalAge = 0;
		for (let [key, value] of element.entries()) {
			if (key.startsWith('park')) {
				totalAge += value.age;
			}	
		}
		console.log(`Average year of each park is ${Math.floor(totalAge / element.size)}.`);
	}

	const displayTreeDensity = map => 
		map.forEach(cur => cur.calcTreeDensity());

	const displayMoreThan1000 = map => {
		let ParkName = new Map();

		for (let [key, value] of map.entries()) {
			if (value.trees >= 1000) {
				ParkName.set(value.name, value.trees);
			} else continue
		}
		console.log('Parks with more than 1000 trees:');
		for (let [key, value] of ParkName) {
		console.log(`${key}: ${value} trees.`);
		}
	}

	const calculateStreetsLegths = map => {
		let lengths = [];
		let totalLength;

		for (let [key, value] of map.entries()) {
			lengths.push(value.length);
		}

		totalLength = lengths.reduce((prev, cur) => prev + cur);

		return [totalLength, totalLength / lengths.length];
	}

	const displayStreetData = map => {
		const [totalLength, average] = calculateStreetsLegths(streets); // Use of ES6 destructuring

		for (let [key, value] of map.entries()) {
			console.log(`${value.name}'s size classification is: ${value.size}. `)
		}

		console.log(`Total length of all streets is ${totalLength}km and average length is ${average}km.`)
	}

	// REPORTS
	const treesReport = () => {
		console.log('------Park Report-------');

		// Display average park age
		averParkAge(parks);

		// Display tree density in each park
		displayTreeDensity(parks);

		// Display parks with more than 1000 trees
		displayMoreThan1000(parks);
	}

	const streetsReport = () => {
		console.log('------Streets Report-------');

		// Display size classification, total length and average length of all streets
		displayStreetData(streets);
	}

	return {
		// Display annual report
		displayReport: () => {
			treesReport();
			streetsReport();
		}
	}
})();


townData.displayReport();














