// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");
// const clickNumberDiv = document.getElementById("clickNumber");

// let availableNumbers = [];
// let clickCount = 0; // Счётчик кликов

// function generateNumber() {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	errorDiv.textContent = "";

// 	if (
// 		isNaN(min) ||
// 		isNaN(max) ||
// 		min < 0 ||
// 		max < 0 || // ❗ Запрещаем отрицательные
// 		min >= max
// 	) {
// 		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
// 		return;
// 	}

// 	if (availableNumbers.length === 0) {
// 		availableNumbers = [];
// 		for (let i = min; i <= max; i++) {
// 			availableNumbers.push(i);
// 		}
// 	}

// 	if (availableNumbers.length === 0) {
// 		errorDiv.textContent = "Больше нет доступных чисел!";
// 		generateBtn.disabled = true;
// 		return;
// 	}

// 	// Увеличиваем счётчик кликов
// 	clickCount++;

// 	// Обновляем отображение текущего клика
// 	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

// 	const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 	const randomNum = availableNumbers.splice(randomIndex, 1)[0];

// 	resultDiv.textContent = randomNum;

// 	if (availableNumbers.length === 0) {
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 	}
// }

// generateBtn.addEventListener("click", () => {
// 	// при новом диапазоне сбрасываем всё
// 	if (availableNumbers.length === 0) {
// 		generateBtn.disabled = false;
// 		resultDiv.textContent = "";
// 	}
// 	generateNumber();
// });


const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const clickNumberDiv = document.getElementById("clickNumber");

let availableNumbers = [];
let clickCount = 0; // Счётчик кликов
let isGenerating = false; // Флаг для блокировки кнопки на время генерации

function generateNumber() {
	const min = parseInt(minInput.value);
	const max = parseInt(maxInput.value);

	errorDiv.textContent = "";

	if (
		isNaN(min) ||
		isNaN(max) ||
		min < 0 ||
		max < 0 || // ❗ Запрещаем отрицательные
		min >= max
	) {
		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
		return;
	}

	if (availableNumbers.length === 0) {
		availableNumbers = [];
		for (let i = min; i <= max; i++) {
			availableNumbers.push(i);
		}
	}

	if (availableNumbers.length === 0) {
		errorDiv.textContent = "Больше нет доступных чисел!";
		generateBtn.disabled = true;
		return;
	}

	// Увеличиваем счётчик кликов
	clickCount++;

	// Обновляем отображение текущего клика
	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

	const randomIndex = Math.floor(Math.random() * availableNumbers.length);
	const randomNum = availableNumbers.splice(randomIndex, 1)[0];

	resultDiv.textContent = randomNum;

	if (availableNumbers.length === 0) {
		generateBtn.disabled = true;
		errorDiv.textContent = "Все числа исчерпаны.";
	}
}

generateBtn.addEventListener("click", () => {
	// Если в процессе генерации, ничего не делаем
	if (isGenerating) return;

	// Блокируем кнопку на время генерации
	isGenerating = true;
	generateBtn.disabled = true;

	// при новом диапазоне сбрасываем всё
	if (availableNumbers.length === 0) {
		resultDiv.textContent = "";
		clickCount = 0; // Сбрасываем счётчик кликов
		clickNumberDiv.textContent = "Номер текущего клика: 0";
	}

	generateNumber();

	// Разблокируем кнопку через заданное время
	setTimeout(() => {
		isGenerating = false;
		if (!generateBtn.classList.contains("disabled") && availableNumbers.length > 0) {
			generateBtn.disabled = false;
		}
	}, 1000); // Задержка 1 секунда
});