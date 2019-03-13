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

var getRandomFullName = function(arrName, arrSoname) {
	var names = Math.floor(Math.random() * arrName.length); 
	var sonames = Math.floor(Math.random() * arrSoname.length);
	return arrName[names] + " " + arrSoname[sonames];
};

var getRandomCoatColor = function(arrColorCoat) {
	var colorsCoat = Math.floor(Math.random() * arrColorCoat.length);
	return arrColorCoat[colorsCoat];
};

var getRandomEyesColor = function(arrColorEyes) {
	var colorsEyes = Math.floor(Math.random() * arrColorEyes.length);
	return arrColorEyes[colorsEyes];
};

var getNewWizards = function(elementsArr, arrName, arrSoname, arrColorCoat, arrColorEyes) {
	var newArr = [];
	for (var i = 0; i <= elementsArr - 1; i++) {
		var wizard = {
			name: getRandomFullName(arrName, arrSoname),
			coatColor: getRandomCoatColor(arrColorCoat),
			eyesColor: getRandomEyesColor(arrColorEyes),
		}; 
		newArr[i] = wizard;
		
	};
		return newArr;
};

var wizards = getNewWizards(4, WIZARD_NAMES, WIZARD_SONAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR);

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
