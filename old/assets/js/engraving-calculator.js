const normalEngravings =
	['Select Engraving',
		'Adrenaline',
		'All-Out Attack',
		'Arthetinean Skill',
		'Awakening',
		'Barrage Enhancement',
		'Barricade',
		'Berserkers Technique',
		'Blessed Aura',
		'Broken Bone',
		'Combat Readiness',
		'Communication Overflow',
		'Contender',
		'Control',
		'Crisis Evasion',
		'Crushing Fist',
		'Cursed Doll',
		'Death Strike',
		'Deathblow',
		'Demonic Impulse',
		'Desperate Salvation',
		'Disrespect',
		'Divine Protection',
		'Drops of Ether',
		'Emergency Rescue',
		'Empresss Grace',
		'Energy Overflow',
		'Enhanced Shield',
		'Enhanced Weapon',
		'Esoteric Flurry',
		'Esoteric Skill Enhancement',
		'Ether Predator',
		'Expert',
		'Explosive Expert',
		'Firepower Enhancement',
		'First Intention',
		'Fortitude',
		'Gravity Training',
		'Grudge',
		'Heavy Armor',
		'Hit Master',
		'Hunger',
		'Igniter',
		'Increases Mass',
		'Judgment',
		'Keen Blunt Weapon',
		'Legacy of Evolution',
		'Lightning Fury',
		'Lone Knight',
		'Loyal Companion',
		'Lunar Voice',
		'Magick Stream',
		'Master Brawler',
		'Master of Ambush',
		'Master of Escape',
		'Master Summoner',
		'Masters Tenacity',
		'Max MP Increase',
		'Mayhem',
		'MP Efficiency Increase',
		'Necromancy',
		'Order of the Emperor',
		'Peacemaker',
		'Perfect Suppression',
		'Pinnacle',
		'Pistoleer',
		'Precision Dagger',
		'Preemptive Strike',
		'Propulsion',
		'Rage Hammer',
		'Raid Captain',
		'Reflux',
		'Remaining Energy',
		'Robust Spirit',
		'Shield Piercing',
		'Shock Training',
		'Sight Focus',
		'Spirit Absorption',
		'Stabilized Status',
		'Strong Will',
		'Super Charge',
		'Surge',
		'Time to Hunt',
		'True Courage',
		'Ultimate Skill: Taijutsu',
		'Vital Point Strike',
	];

const combatEngravings =
	[	'Select Engraving',
		'Adrenaline',
		'All-Out Attack',
		'Awakening',
		'Barricade',
		'Broken Bone',
		'Contender',
		'Crisis Evasion',
		'Crushing Fist',
		'Cursed Doll',
		'Disrespect',
		'Divine Protection',
		'Drops of Ether',
		'Emergency Rescue',
		'Enhanced Shield',
		'Ether Predator',
		'Expert',
		'Explosive Expert',
		'Fortitude',
		'Grudge',
		'Heavy Armor',
		'Hit Master',
		'Increases Mass',
		'Keen Blunt Weapon',
		'Lightning Fury',
		'Magick Stream',
		'Master Brawler',
		'Master of Ambush',
		'Master of Escape',
		'Masters Tenacity',
		'Max MP Increase',
		'MP Efficiency Increase',
		'Necromancy',
		'Precision Dagger',
		'Preemptive Strike',
		'Propulsion',
		'Raid Captain',
		'Shield Piercing',
		'Sight Focus',
		'Spirit Absorption',
		'Stabilized Status',
		'Strong Will',
		'Super Charge',
		'Vital Point Strike'
	];

const negativeEngravings =
	['Select Negative Engraving',
		'ATK Power Decrease',
		'ATK Speed Decrease',
		'Defense Decrease',
		'Speed Decrease'
	];

document.addEventListener('DOMContentLoaded', () => {
	init();
});

//Trigger Button actions
//Calculate
document.addEventListener('click', (ev) => {
	let button = ev.target.closest('.js-calculate');
	if (null === button) { return };

	let engravingSpecs = document.querySelectorAll('.js-engraving-item-spec');
	if (null === engravingSpecs) { return; }

	let characterEngravings = [];

	getEngravings(engravingSpecs, characterEngravings);

});

//Reset
document.addEventListener('click', (ev) => {
	let button = ev.target.closest('.js-reset');
	if (null === button) { return };

	let engravingResultsWrapper = document.querySelector('.js-render-results');
	if(null !== engravingResultsWrapper){
		engravingResultsWrapper.innerHTML = 'Select the engravings first!';
	}

	let normalEngravingSelects = document.querySelectorAll('.js-normal-engraving-list');

	if (null !== normalEngravingSelects) { 
		normalEngravingSelects.forEach((normalEngravingSelect)=>{
			normalEngravingSelect.value = 'Select Engraving';

			if(normalEngravingSelect.hasAttribute('style')){
				normalEngravingSelect.removeAttribute('style');
			}

		});
	}

	let normalEngravingInputs = document.querySelectorAll('.js-normal-engraving-value');

	if (null !== normalEngravingInputs) { 
		normalEngravingInputs.forEach((normalEngravingInput)=>{
			normalEngravingInput.value = 0;

			if(normalEngravingInput.hasAttribute('style')){
				normalEngravingInput.removeAttribute('style');
			}

		});
	}

	let negativeEngravingSelects = document.querySelectorAll('.js-negative-engraving-list');

	if (null !== negativeEngravingSelects) { 
		negativeEngravingSelects.forEach((negativeEngravingSelect)=>{
			negativeEngravingSelect.value = 'Select Negative Engraving';

			if(negativeEngravingSelect.hasAttribute('style')){
				negativeEngravingSelect.removeAttribute('style');
			}

		});
	}

	let negativeEngravingInputs = document.querySelectorAll('.js-negative-engraving-value');

	if (null !== negativeEngravingInputs) { 
		negativeEngravingInputs.forEach((negativeEngravingInput)=>{
			negativeEngravingInput.value = 0;

			if(negativeEngravingInput.hasAttribute('style')){
				negativeEngravingInput.removeAttribute('style');
			}

		});
	}

});

//Get chosen equipment engravings
function getEngravings(engravingSpecs, characterEngravings) {

	engravingSpecs.forEach((engravingSpec) => {
		let engraving = {};

		let normalEngravingName = engravingSpec.querySelector('.js-normal-engraving-list');
		let normalEngravingValue = engravingSpec.querySelector('.js-normal-engraving-value');

		if ((null !== normalEngravingName) && (null !== normalEngravingValue)) {
			engraving.name = normalEngravingName.value;

			if(normalEngravingValue.classList.contains('js-engraving-slot-lv')){
				engraving.value = parseInt(normalEngravingValue.value)*3;
				console.log(engraving.value);
			}else{
				engraving.value = parseInt(normalEngravingValue.value);
			}

			engraving.type = 'positive';
		}

		let negativeEngravingName = engravingSpec.querySelector('.js-negative-engraving-list');
		let negativeEngravingValue = engravingSpec.querySelector('.js-negative-engraving-value');

		if ((null !== negativeEngravingName) || (null !== negativeEngravingValue)) {
			engraving.name = negativeEngravingName.value;
			engraving.value = parseInt(negativeEngravingValue.value);
			engraving.type = 'negative';
		}

		characterEngravings.push(engraving);

	});

	calculateEngravings(characterEngravings);

}

//Merge repeated engravings
function mergeEngravings(characterEngravings) {
	let mergedEngravings = [];
	let engravingNames = []

	characterEngravings.forEach((characterEngraving) => {

		if (!engravingNames.includes(characterEngraving.name)) {
			engravingNames.push(characterEngraving.name);
			mergedEngravings.push(characterEngraving);
		} else {
			let engravingIndex = mergedEngravings.findIndex(element => element.name === characterEngraving.name);

			mergedEngravings[engravingIndex].value += characterEngraving.value;
		}

	});

	return mergedEngravings;

}

//Show engravings result
function renderEngravingResults(mergedEngravings) {

	let resultsWrapper = document.querySelector('.js-render-results');
	if (null === resultsWrapper) { return; }

	resultsWrapper.innerHTML = '';
	mergedEngravings.forEach((mergedEngraving) => {

		if (('Select Engraving' === mergedEngraving.name) || ('Select Negative Engraving' === mergedEngraving.name) || (0 === mergedEngraving.value)) { return; }

		let engravingLv = parseInt(mergedEngraving.value / 5);

		if (3 < engravingLv) {
			engravingLv = 3
		}
		resultsWrapper.innerHTML += '<div class="c-engraving-result" engraving-type="' + mergedEngraving.type + '"><h3 class="l-flex">Lv.' + engravingLv + ' '
			+ mergedEngraving.name + getExcedentPoints(mergedEngraving) + ' </h3>'
			+ '<div class="l-flex js-engraving-points">'

			+ '<div class="c-engraving-point-lv">'
			+ '<div class="c-engraving-lv js-engraving-lv">Lv.1</div'
			+ '<div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div></div>'

			+ '<div class="c-engraving-point-lv">'
			+ '<div class="c-engraving-lv js-engraving-lv">Lv.2</div'
			+ '<div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div></div>'

			+ '<div class="c-engraving-point-lv">'
			+ '<div class="c-engraving-lv js-engraving-lv">Lv.3</div'
			+ '<div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div><div class="c-engraving-point"></div></div>'
			+ '<div>';


		//Indicate wich lv of the engraving is active
		let engravingLvElements = document.querySelectorAll('.js-render-results .c-engraving-result:last-child .js-engraving-lv'); if (null !== engravingLvElements) {
			engravingLvElements.forEach((engravingLvElement) => {

				if (engravingLvElement.innerHTML.includes(engravingLv)) {
					engravingLvElement.classList.add('active')
				}
			});

		}

		//Indicate engravings points
		for (let i = 0; i < parseInt(mergedEngraving.value); i++) {
			let engravingPoints = document.querySelectorAll('.js-render-results .c-engraving-result:last-child .c-engraving-point');
			if (null === engravingPoints) { return; }
			let engravingPointsArray = Array.from(engravingPoints)

			if (undefined !== engravingPointsArray[i]) {
				engravingPointsArray[i].classList.add('active');
			}
		}

	});
}

function getExcedentPoints(mergedEngraving) {
	let excedentPoints = mergedEngraving.value - 15;
	let text = 15 < mergedEngraving.value ? '<span class="c-engraving-result__extra-points" title="Warning: ' + excedentPoints + ' exceding points!">+' + excedentPoints + '</span>' : '';

	return text;
}

function calculateEngravings(characterEngravings) {
	let mergedEngravings = mergeEngravings(characterEngravings);
	renderEngravingResults(mergedEngravings);
}

//Block non-number characters in inputs
document.addEventListener('input', (ev) => {
	let input = ev.target.closest('[type="number"]');
	if (null === input) { return }

	input.value = input.value.replace(/[^0-9.]/g, '')

});

//Input value treatment
document.addEventListener('change', (ev) => {
	let input = ev.target.closest('[type="number"]');
	if (null === input) { return; }

	let value = parseInt(input.value);
	let min = parseInt(input.min);
	let max = parseInt(input.max);

	if (value >= max) {
		input.value = max;
	} else if ((value < min) || ('' === input.value)) {
		input.value = min;
	}
});

//Block repeated engraving in acessories and ability stones
document.addEventListener('change', (ev) => {
	let select = ev.target.closest('.js-engraving-item select.js-non-repeatable-engraving');
	if (null === select) { return };

	let selectWrapper = select.closest('.js-engraving-item');
	let selectList = selectWrapper.querySelectorAll('.js-normal-engraving-list');

	let anotherSelect;

	selectList.forEach((selectItem) => {

		if (selectItem !== select) {
			anotherSelect = selectItem;
		}
	});

	let anotherSelectOptions = anotherSelect.querySelectorAll('option');
	anotherSelectOptions.forEach((anotherSelectOption) => {
		if (anotherSelectOption.innerHTML === select.value) {
			anotherSelectOption.style.display = 'none';
		} else {
			anotherSelectOption.style.display = 'block';
		}
	});

});

//Change  engraving slot number input bg color
document.addEventListener('change', (ev) => {
	let input = ev.target.closest('.js-engraving-slot-lv');
	if (null === input) { return; }

	input.value = parseInt(input.value);
	console.log(input.value)

	switch (input.value) {
		case '1':
			input.previousElementSibling.style.background = '#3f5810';
			input.style.background = '#3f5810';
			break;

		case '2':
			input.previousElementSibling.style.background = '#144260';
			input.style.background = '#144260';
			break;

		case '3':
			input.previousElementSibling.style.background = '#4d0d62';
			input.style.background = '#4d0d62';
			break;

		case '4':
			input.previousElementSibling.style.background = '#b06a04';
			input.style.background = '#b06a04';
			break;

		default:
			input.previousElementSibling.style.background = '#353535';
			input.style.background = '#353535';
			break;

	}

});


function init() {
	prepareNormalEngravings();
	prepareNegativeEngravings();
}

//Feed Normal Engravings data
function prepareNormalEngravings() {
	let normalEngravingLists = document.querySelectorAll('select.js-normal-engraving-list');
	if (null === normalEngravingLists) { return; }


	normalEngravingLists.forEach((normalEngravingList) => {

		let engravingType = normalEngravingList.getAttribute('type');

		if (null !== engravingType) {
			switch (engravingType) {
				case 'all':
					normalEngravings.forEach((normalEngraving) => {
						normalEngravingList.innerHTML += '<option>' + normalEngraving + '</option>';
					});
					break;

				case 'combat':
					combatEngravings.forEach((combatEngraving) => {
						normalEngravingList.innerHTML += '<option>' + combatEngraving + '</option>';
					});
					break;
			}
		}
	});
}

//Feed Negative Engravings data
function prepareNegativeEngravings() {
	let negativeEngravingLists = document.querySelectorAll('select.js-negative-engraving-list');
	if (null === negativeEngravingLists) { return; }

	negativeEngravingLists.forEach((negativeEngravingList) => {

		negativeEngravings.forEach((negativeEngraving) => {
			negativeEngravingList.innerHTML += '<option>' + negativeEngraving + '</option>';
		});
	});


}
