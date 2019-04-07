var SETUP_SIMILAR_CLASS_SELECTOR = '.setup-similar';
var HIDDEN_CLASS = 'hidden';
var SETUP_CLASS_SELECTOR = '.setup';
var SETUP_SIMILAR_LIST_CLASS = '.setup-similar-list';
var SIMILAR_WIZARD_TEMPLATE_ID = '#similar-wizard-template';
var SETUP_SIMILAR_ITEM_CLASS = '.setup-similar-item';
var SETUP_SIMILAR_LABEL_CLASS = '.setup-similar-label';
var WIZARD_COAT_CLASS = '.wizard-coat';
var WIZARD_EYES_CLASS = '.wizard-eyes';

var userDialog = document.querySelector(SETUP_CLASS_SELECTOR);
userDialog.classList.remove(HIDDEN_CLASS);

var setupSimilar = document.querySelector(SETUP_SIMILAR_CLASS_SELECTOR);

var setupSimilarList = document.querySelector(SETUP_SIMILAR_LIST_CLASS);
var similarWizardTemplate = document.querySelector(SIMILAR_WIZARD_TEMPLATE_ID)
	.content
	.querySelector(SETUP_SIMILAR_ITEM_CLASS);

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашигтон'];
var WIZARD_SONAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomFullName = function(names, sonames) {
	var name = Math.floor(Math.random() * names.length); 
	var soname = Math.floor(Math.random() * sonames.length);
	return names[name] + " " + sonames[soname];
};

var getRandomArrayElement = function(arrayElement) {
	var elementIndex = Math.floor(Math.random() * arrayElement.length);
	return arrayElement[elementIndex];
};

var createRandomWizards = function(elementCount, names, sonames, coatColors, eyeColors) {
	var newArr = [];
	for (var i = 0; i < elementCount; i++) {
		var wizard = {
			name: getRandomFullName(names, sonames),
			coatColor: getRandomArrayElement(coatColors),
			eyeColor: getRandomArrayElement(eyeColors),
		}; 
		newArr[i] = wizard;
		
	};
		return newArr;
};

var wizards = createRandomWizards(4, WIZARD_NAMES, WIZARD_SONAMES, WIZARD_COAT_COLORS, WIZARD_EYE_COLORS);

var templateWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector(SETUP_SIMILAR_LABEL_CLASS).textContent = wizard.name;
	wizardElement.querySelector(WIZARD_COAT_CLASS).style.fill = wizard.coatColor;
	wizardElement.querySelector(WIZARD_EYES_CLASS).style.fill = wizard.eyeColor;
	
	return wizardElement;
};
	
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++ ) {
	fragment.appendChild(templateWizard(wizards[i]));
};

setupSimilarList.appendChild(fragment);

setupSimilar.classList.remove(HIDDEN_CLASS);
