var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашигтон'];
var WIZARD_SONAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomFullName = function(names, sonames) {
	var name = Math.floor(Math.random() * names.length); 
	var soname = Math.floor(Math.random() * sonames.length);
	return names[name] + " " + sonames[soname];
};

var getRandomCoatColor = function(colorsCoat) {
	var coat = Math.floor(Math.random() * colorsCoat.length);
	return colorsCoat[coat];
};

var getRandomEyesColor = function(colorsEyes) {
	var eyes = Math.floor(Math.random() * colorsEyes.length);
	return colorsEyes[eyes];
};

var createRandomWizards = function(elementCount, names, sonames, colorsCoat, colorsEyes) {
	var newArr = [];
	for (var i = 0; i < elementCount; i++) {
		var wizard = {
			name: getRandomFullName(names, sonames),
			coatColor: getRandomCoatColor(colorsCoat),
			eyesColor: getRandomEyesColor(colorsEyes),
		}; 
		newArr[i] = wizard;
		
	};
		return newArr;
};

var wizards = createRandomWizards(4, WIZARD_NAMES, WIZARD_SONAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR);

var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
	
	return wizardElement;
}
	
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < wizards.length; i++ ) {
		fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
