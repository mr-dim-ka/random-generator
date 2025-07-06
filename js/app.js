// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");

// let availableNumbers = [];

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

/* 
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

let availableNumbers = [];
let clickCount = 0; // Счётчик количества кликов

// Функция для извлечения двух номеров кликов из имени страницы
function getClickOrdersFromFilename() {
  const filename = window.location.pathname.split("/").pop(); // Получаем имя файла из URL
  const match = filename.match(/generator_(\d+)-(\d+)\.html/); // Ищем шаблон 'generator_число-число.html'
  
  if (match) {
    return [parseInt(match[1], 10), parseInt(match[2], 10)]; // Возвращаем два числа
  }

  return [1, 2]; // По умолчанию считаем, что это первый и второй клик
}

function generateNumber() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  errorDiv.textContent = "";

  if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
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

  const [targetClick1, targetClick2] = getClickOrdersFromFilename(); // Берём два номера кликов из имени страницы

  let randomNum;

  // Если это нужный клик по порядку (из имени файла), то выводим число 4 или 6
  if (clickCount === targetClick1) {
    randomNum = 4;
  } else if (clickCount === targetClick2) {
    randomNum = 6;
  } else {
    // Если числа 4 или 6 есть в availableNumbers, исключаем их
    const indexOf4 = availableNumbers.indexOf(4);
    const indexOf6 = availableNumbers.indexOf(6);

    if (indexOf4 !== -1) {
      availableNumbers.splice(indexOf4, 1);
    }
    if (indexOf6 !== -1) {
      availableNumbers.splice(indexOf6, 1);
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    randomNum = availableNumbers.splice(randomIndex, 1)[0];
  }

  resultDiv.textContent = randomNum;

  // Если больше нет доступных чисел, блокируем кнопку
  if (availableNumbers.length === 0) {
    generateBtn.disabled = true;
    errorDiv.textContent = "Все числа исчерпаны.";
  }
}

generateBtn.addEventListener("click", () => {
  // при новом диапазоне сбрасываем всё
  if (availableNumbers.length === 0) {
    generateBtn.disabled = false;
    resultDiv.textContent = "";
  }

  // Генерируем число
  generateNumber();
});
 */
//! ----------------------------------------------------------------------------
// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");
// const clickNumberDiv = document.getElementById("clickNumber");

// let availableNumbers = [];
// let clickCount = 0; // Счётчик количества кликов

// // Функция для извлечения двух номеров кликов из имени страницы
// function getClickOrdersFromFilename() {
// 	const filename = window.location.pathname.split("/").pop(); // Получаем имя файла из URL
// 	const match = filename.match(/generator_(\d+)-(\d+)\.html/); // Ищем шаблон 'generator_число-число.html'

// 	if (match) {
// 		return [parseInt(match[1], 10), parseInt(match[2], 10)]; // Возвращаем два числа
// 	}

// 	return [1, 2]; // По умолчанию считаем, что это первый и второй клик
// }

// function generateNumber() {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	errorDiv.textContent = "";

// 	if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
// 		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
// 		return;
// 	}

// 	// Увеличиваем счётчик кликов
// 	clickCount++;

// 	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

// 	// Ограничиваем количество кликов количеством чисел в диапазоне
// 	const totalClicks = max - min + 1;

// 	if (clickCount > totalClicks) {
// 		// Если клик больше, чем диапазон чисел, отключаем кнопку и показываем ошибку
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 		return;
// 	}

// 	const [targetClick1, targetClick2] = getClickOrdersFromFilename(); // Берём два номера кликов из имени страницы

// 	let randomNum;

// 	// Если это нужный клик по порядку (из имени файла), то выводим число 4 или 6
// 	if (clickCount === targetClick1) {
// 		randomNum = 4;
// 	} else if (clickCount === targetClick2) {
// 		randomNum = 6;
// 	} else {
// 		// Мы генерируем массив чисел от min до max
// 		if (availableNumbers.length === 0) {
// 			availableNumbers = [];
// 			for (let i = min; i <= max; i++) {
// 				if (i !== 4 && i !== 6) {
// 					// Исключаем 4 и 6 из доступных чисел для случайных кликов
// 					availableNumbers.push(i);
// 				}
// 			}
// 		}

// 		// Генерация случайного числа из оставшихся доступных чисел
// 		const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 		randomNum = availableNumbers.splice(randomIndex, 1)[0];
// 	}

// 	resultDiv.textContent = randomNum;

// 	// Если больше нет доступных чисел, блокируем кнопку
// 	if (availableNumbers.length === 0) {
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 	}
// }

// generateBtn.addEventListener("click", () => {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	// при новом диапазоне сбрасываем всё
// 	if (availableNumbers.length === 0) {
// 		generateBtn.disabled = false;
// 		resultDiv.textContent = "";
// 		clickCount = 0; // Сброс счётчика кликов
// 		clickNumberDiv.textContent = "Номер текущего клика: 0";
// 	}

// 	// Генерируем число
// 	generateNumber();
// });
//! ----------------------------------------------------------------------------

// !!!! ниже стабильная версия=============================================================================================================
// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");
// const clickNumberDiv = document.getElementById("clickNumber");

// let availableNumbers = [];
// let clickCount = 0; // Счётчик количества кликов
// let isGenerating = false; // Флаг для блокировки кнопки на время генерации

// // Функция для извлечения двух номеров кликов из имени страницы
// function getClickOrdersFromFilename() {
// 	const filename = window.location.pathname.split("/").pop(); // Получаем имя файла из URL
// 	const match = filename.match(/generator_(\d+)-(\d+)\.html/); // Ищем шаблон 'generator_число-число.html'

// 	if (match) {
// 		return [parseInt(match[1], 10), parseInt(match[2], 10)]; // Возвращаем два числа
// 	}

// 	return [1, 2]; // По умолчанию считаем, что это первый и второй клик
// }

// function generateNumber() {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	errorDiv.textContent = "";

// 	if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
// 		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
// 		return;
// 	}

// 	// Увеличиваем счётчик кликов
// 	clickCount++;

// 	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

// 	// Ограничиваем количество кликов количеством чисел в диапазоне
// 	const totalClicks = max - min + 1;

// 	if (clickCount > totalClicks) {
// 		// Если клик больше, чем диапазон чисел, отключаем кнопку и показываем ошибку
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 		return;
// 	}

// 	const [targetClick1, targetClick2] = getClickOrdersFromFilename(); // Берём два номера кликов из имени страницы

// 	let randomNum;

// 	// Если это нужный клик по порядку (из имени файла), то выводим число 4 или 6
// 	if (clickCount === targetClick1) {
// 		randomNum = 4;
// 	} else if (clickCount === targetClick2) {
// 		randomNum = 6;
// 	} else {
// 		// Мы генерируем массив чисел от min до max
// 		if (availableNumbers.length === 0) {
// 			availableNumbers = [];
// 			for (let i = min; i <= max; i++) {
// 				if (i !== 4 && i !== 6) {
// 					// Исключаем 4 и 6 из доступных чисел для случайных кликов
// 					availableNumbers.push(i);
// 				}
// 			}
// 		}

// 		// Генерация случайного числа из оставшихся доступных чисел
// 		const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 		randomNum = availableNumbers.splice(randomIndex, 1)[0];
// 	}

// 	resultDiv.textContent = randomNum;

// 	// Если больше нет доступных чисел, блокируем кнопку
// 	if (availableNumbers.length === 0) {
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 		generateBtn.classList.add("disabled");
// 	}
// }

// generateBtn.addEventListener("click", () => {
// 	// Если в процессе генерации, ничего не делаем
// 	if (isGenerating) return;

// 	// Блокируем кнопку на время генерации
// 	isGenerating = true;
// 	generateBtn.disabled = true; // Блокируем кнопку

// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	// При новом диапазоне сбрасываем всё
// 	if (availableNumbers.length === 0) {
// 		resultDiv.textContent = "";
// 		clickCount = 0; // Сброс счётчика кликов
// 		clickNumberDiv.textContent = "Номер текущего клика: 0";
// 	}

// 	// Генерируем число
// 	generateNumber();

// 	// Разблокируем кнопку через 3 секунды
// 	setTimeout(() => {
// 		isGenerating = false; // Разблокируем флаг
// 		generateBtn.disabled = false; // Разблокируем кнопку
// 	}, 1000); // Задержка 3 секунды
// });
// !!!! конец ниже стабильная версия=============================================================================================================

// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");
// const clickNumberDiv = document.getElementById("clickNumber");

// let availableNumbers = [];
// let clickCount = 0;
// let isGenerating = false;
// let currentMin = null; // Добавляем отслеживание текущего диапазона
// let currentMax = null;

// // Функция для извлечения двух номеров кликов из имени страницы
// function getClickOrdersFromFilename() {
// 	const filename = window.location.pathname.split("/").pop();
// 	const match = filename.match(/generator_(\d+)-(\d+)\.html/);
// 	if (match) {
// 		return [parseInt(match[1], 10), parseInt(match[2], 10)];
// 	}
// 	return [1, 2];
// }

// // Функция для инициализации массива доступных чисел
// function initializeAvailableNumbers(min, max) {
// 	availableNumbers = [];
// 	for (let i = min; i <= max; i++) {
// 		if (i !== 4 && i !== 6) {
// 			availableNumbers.push(i);
// 		}
// 	}
// }

// // Функция для сброса состояния при новом диапазоне
// function resetState(min, max) {
// 	clickCount = 0;
// 	currentMin = min;
// 	currentMax = max;
// 	initializeAvailableNumbers(min, max);
// 	clickNumberDiv.textContent = "Номер текущего клика: 0";
// 	resultDiv.textContent = "";
// 	generateBtn.disabled = false;
// 	generateBtn.classList.remove("disabled");
// }

// function generateNumber() {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	errorDiv.textContent = "";

// 	if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
// 		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
// 		return;
// 	}

// 	// Проверяем, изменился ли диапазон
// 	if (currentMin !== min || currentMax !== max) {
// 		resetState(min, max);
// 	}

// 	// Увеличиваем счётчик кликов
// 	clickCount++;
// 	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

// 	// Ограничиваем количество кликов количеством чисел в диапазоне
// 	const totalClicks = max - min + 1;
// 	if (clickCount > totalClicks) {
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 		return;
// 	}

// 	const [targetClick1, targetClick2] = getClickOrdersFromFilename();
// 	let randomNum;

// 	// Если это нужный клик по порядку (из имени файла), то выводим число 4 или 6
// 	if (clickCount === targetClick1) {
// 		randomNum = 4;
// 	} else if (clickCount === targetClick2) {
// 		randomNum = 6;
// 	} else {
// 		// Проверяем, есть ли доступные числа для случайной генерации
// 		if (availableNumbers.length === 0) {
// 			// Если нет доступных чисел, но клики еще не закончились,
// 			// значит остались только зарезервированные числа 4 и 6
// 			generateBtn.disabled = true;
// 			errorDiv.textContent = "Все числа исчерпаны.";
// 			return;
// 		}

// 		// Генерация случайного числа из оставшихся доступных чисел
// 		const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 		randomNum = availableNumbers.splice(randomIndex, 1)[0];
// 	}

// 	resultDiv.textContent = randomNum;

// 	// Проверяем, остались ли еще числа для генерации
// 	const remainingClicks = totalClicks - clickCount;
// 	const reservedClicks = [targetClick1, targetClick2].filter((click) => click > clickCount).length;

// 	if (availableNumbers.length === 0 && remainingClicks <= reservedClicks) {
// 		// Если доступных чисел больше нет, но есть зарезервированные клики
// 		if (remainingClicks === 0) {
// 			generateBtn.disabled = true;
// 			errorDiv.textContent = "Все числа исчерпаны.";
// 			generateBtn.classList.add("disabled");
// 		}
// 	}
// }

// generateBtn.addEventListener("click", () => {
// 	if (isGenerating) return;

// 	isGenerating = true;
// 	generateBtn.disabled = true;

// 	generateNumber();

// 	setTimeout(() => {
// 		isGenerating = false;
// 		if (!generateBtn.classList.contains("disabled")) {
// 			generateBtn.disabled = false;
// 		}
// 	}, 1000);
// });
//* ===========================================================================================================================
// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generateBtn");
// const resultDiv = document.getElementById("result");
// const errorDiv = document.getElementById("error");
// const clickNumberDiv = document.getElementById("clickNumber");

// // Конфигурация специальных чисел
// const SPECIAL_NUMBER_1 = 4;
// const SPECIAL_NUMBER_2 = 6;

// let availableNumbers = [];
// let clickCount = 0;
// let isGenerating = false;
// let currentMin = null; // Добавляем отслеживание текущего диапазона
// let currentMax = null;

// // Функция для извлечения двух номеров кликов из имени страницы
// function getClickOrdersFromFilename() {
// 	const filename = window.location.pathname.split("/").pop();

// 	// Проверяем, является ли файл generator_last.html
// 	if (filename === "generator_last.html") {
// 		return "last"; // Возвращаем специальное значение для последних кликов
// 	}

// 	const match = filename.match(/generator_(\d+)-(\d+)\.html/);
// 	if (match) {
// 		return [parseInt(match[1], 10), parseInt(match[2], 10)];
// 	}
// 	return [1, 2];
// }

// // Функция для инициализации массива доступных чисел
// function initializeAvailableNumbers(min, max) {
// 	availableNumbers = [];
// 	for (let i = min; i <= max; i++) {
// 		if (i !== SPECIAL_NUMBER_1 && i !== SPECIAL_NUMBER_2) {
// 			availableNumbers.push(i);
// 		}
// 	}
// }

// // Функция для сброса состояния при новом диапазоне
// function resetState(min, max) {
// 	clickCount = 0;
// 	currentMin = min;
// 	currentMax = max;
// 	initializeAvailableNumbers(min, max);
// 	clickNumberDiv.textContent = "Номер текущего клика: 0";
// 	resultDiv.textContent = "";
// 	generateBtn.disabled = false;
// 	generateBtn.classList.remove("disabled");
// }

// function generateNumber() {
// 	const min = parseInt(minInput.value);
// 	const max = parseInt(maxInput.value);

// 	errorDiv.textContent = "";

// 	if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
// 		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
// 		return;
// 	}

// 	// Проверяем, изменился ли диапазон
// 	if (currentMin !== min || currentMax !== max) {
// 		resetState(min, max);
// 	}

// 	// Увеличиваем счётчик кликов
// 	clickCount++;
// 	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

// 	// Ограничиваем количество кликов количеством чисел в диапазоне
// 	const totalClicks = max - min + 1;
// 	if (clickCount > totalClicks) {
// 		generateBtn.disabled = true;
// 		errorDiv.textContent = "Все числа исчерпаны.";
// 		return;
// 	}

// 	const clickOrders = getClickOrdersFromFilename();
// 	let randomNum;

// 	// Если это файл generator_last.html, определяем предпоследний и последний клики
// 	if (clickOrders === "last") {
// 		const totalClicks = max - min + 1;
// 		const targetClick1 = totalClicks - 1; // Предпоследний клик
// 		const targetClick2 = totalClicks; // Последний клик

// 		if (clickCount === targetClick1) {
// 			randomNum = SPECIAL_NUMBER_1;
// 		} else if (clickCount === targetClick2) {
// 			randomNum = SPECIAL_NUMBER_2;
// 		} else {
// 			// Проверяем, есть ли доступные числа для случайной генерации
// 			if (availableNumbers.length === 0) {
// 				generateBtn.disabled = true;
// 				errorDiv.textContent = "Все числа исчерпаны.";
// 				return;
// 			}

// 			// Генерация случайного числа из оставшихся доступных чисел
// 			const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 			randomNum = availableNumbers.splice(randomIndex, 1)[0];
// 		}
// 	} else {
// 		// Обычная логика для файлов с номерами кликов
// 		const [targetClick1, targetClick2] = clickOrders;

// 		if (clickCount === targetClick1) {
// 			randomNum = SPECIAL_NUMBER_1;
// 		} else if (clickCount === targetClick2) {
// 			randomNum = SPECIAL_NUMBER_2;
// 		} else {
// 			// Проверяем, есть ли доступные числа для случайной генерации
// 			if (availableNumbers.length === 0) {
// 				generateBtn.disabled = true;
// 				errorDiv.textContent = "Все числа исчерпаны.";
// 				return;
// 			}

// 			// Генерация случайного числа из оставшихся доступных чисел
// 			const randomIndex = Math.floor(Math.random() * availableNumbers.length);
// 			randomNum = availableNumbers.splice(randomIndex, 1)[0];
// 		}
// 	}

// 	resultDiv.textContent = randomNum;

// 	// Проверяем, остались ли еще числа для генерации
// 	const remainingClicks = totalClicks - clickCount;

// 	// Определяем количество зарезервированных кликов
// 	let reservedClicks = 0;
// 	if (clickOrders === "last") {
// 		const targetClick1 = totalClicks - 1;
// 		const targetClick2 = totalClicks;
// 		reservedClicks = [targetClick1, targetClick2].filter((click) => click > clickCount).length;
// 	} else {
// 		const [targetClick1, targetClick2] = clickOrders;
// 		reservedClicks = [targetClick1, targetClick2].filter((click) => click > clickCount).length;
// 	}

// 	if (availableNumbers.length === 0 && remainingClicks <= reservedClicks) {
// 		// Если доступных чисел больше нет, но есть зарезервированные клики
// 		if (remainingClicks === 0) {
// 			generateBtn.disabled = true;
// 			errorDiv.textContent = "Все числа исчерпаны.";
// 			generateBtn.classList.add("disabled");
// 		}
// 	}
// }

// generateBtn.addEventListener("click", () => {
// 	if (isGenerating) return;

// 	isGenerating = true;
// 	generateBtn.disabled = true;

// 	generateNumber();

// 	setTimeout(() => {
// 		isGenerating = false;
// 		if (!generateBtn.classList.contains("disabled")) {
// 			generateBtn.disabled = false;
// 		}
// 	}, 50);
// });

const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const clickNumberDiv = document.getElementById("clickNumber");

// Конфигурация специальных чисел
const SPECIAL_NUMBER_1 = 4;
const SPECIAL_NUMBER_2 = 6;

let availableNumbers = [];
let clickCount = 0;
let isGenerating = false;
let currentMin = null; // Добавляем отслеживание текущего диапазона
let currentMax = null;

// Функция для извлечения двух номеров кликов из имени страницы
function getClickOrdersFromFilename() {
	const filename = window.location.pathname.split("/").pop();

	// Проверяем, является ли файл generator_last.html
	if (filename === "generator_last.html") {
		return "last"; // Возвращаем специальное значение для последних кликов
	}

	const match = filename.match(/generator_(\d+)-(\d+)\.html/);
	if (match) {
		const firstClick = parseInt(match[1], 10);
		const secondClick = parseInt(match[2], 10);
		// Возвращаем объект с информацией о том, какой клик соответствует какому числу
		return {
			clickForNumber1: firstClick, // Первое число в названии = SPECIAL_NUMBER_1
			clickForNumber2: secondClick, // Второе число в названии = SPECIAL_NUMBER_2
		};
	}
	return {
		clickForNumber1: 1, // По умолчанию первый клик = SPECIAL_NUMBER_1
		clickForNumber2: 2, // По умолчанию второй клик = SPECIAL_NUMBER_2
	};
}

// Функция для инициализации массива доступных чисел
function initializeAvailableNumbers(min, max) {
	availableNumbers = [];
	for (let i = min; i <= max; i++) {
		if (i !== SPECIAL_NUMBER_1 && i !== SPECIAL_NUMBER_2) {
			availableNumbers.push(i);
		}
	}
}

// Функция для сброса состояния при новом диапазоне
function resetState(min, max) {
	clickCount = 0;
	currentMin = min;
	currentMax = max;
	initializeAvailableNumbers(min, max);
	clickNumberDiv.textContent = "Номер текущего клика: 0";
	resultDiv.textContent = "";
	generateBtn.disabled = false;
	generateBtn.classList.remove("disabled");
}

function generateNumber() {
	const min = parseInt(minInput.value);
	const max = parseInt(maxInput.value);

	errorDiv.textContent = "";

	if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min >= max) {
		errorDiv.innerHTML = "Введите корректный диапазон. <br> (только от 0 и выше).";
		return;
	}

	// Проверяем, изменился ли диапазон
	if (currentMin !== min || currentMax !== max) {
		resetState(min, max);
	}

	// Увеличиваем счётчик кликов
	clickCount++;
	clickNumberDiv.textContent = `Номер текущего клика: ${clickCount}`;

	// Ограничиваем количество кликов количеством чисел в диапазоне
	const totalClicks = max - min + 1;
	if (clickCount > totalClicks) {
		generateBtn.disabled = true;
		errorDiv.textContent = "Все числа исчерпаны.";
		return;
	}

	const clickOrders = getClickOrdersFromFilename();
	let randomNum;

	// Если это файл generator_last.html, определяем предпоследний и последний клики
	if (clickOrders === "last") {
		const totalClicks = max - min + 1;
		const targetClick1 = totalClicks - 1; // Предпоследний клик
		const targetClick2 = totalClicks; // Последний клик

		if (clickCount === targetClick1) {
			randomNum = SPECIAL_NUMBER_1;
		} else if (clickCount === targetClick2) {
			randomNum = SPECIAL_NUMBER_2;
		} else {
			// Проверяем, есть ли доступные числа для случайной генерации
			if (availableNumbers.length === 0) {
				generateBtn.disabled = true;
				errorDiv.textContent = "Все числа исчерпаны.";
				return;
			}

			// Генерация случайного числа из оставшихся доступных чисел
			const randomIndex = Math.floor(Math.random() * availableNumbers.length);
			randomNum = availableNumbers.splice(randomIndex, 1)[0];
		}
	} else {
		// Обычная логика для файлов с номерами кликов
		const { clickForNumber1, clickForNumber2 } = clickOrders;

		if (clickCount === clickForNumber1) {
			randomNum = SPECIAL_NUMBER_1;
		} else if (clickCount === clickForNumber2) {
			randomNum = SPECIAL_NUMBER_2;
		} else {
			// Проверяем, есть ли доступные числа для случайной генерации
			if (availableNumbers.length === 0) {
				generateBtn.disabled = true;
				errorDiv.textContent = "Все числа исчерпаны.";
				return;
			}

			// Генерация случайного числа из оставшихся доступных чисел
			const randomIndex = Math.floor(Math.random() * availableNumbers.length);
			randomNum = availableNumbers.splice(randomIndex, 1)[0];
		}
	}

	resultDiv.textContent = randomNum;

	// Проверяем, остались ли еще числа для генерации
	const remainingClicks = totalClicks - clickCount;

	// Определяем количество зарезервированных кликов
	let reservedClicks = 0;
	if (clickOrders === "last") {
		const targetClick1 = totalClicks - 1;
		const targetClick2 = totalClicks;
		reservedClicks = [targetClick1, targetClick2].filter((click) => click > clickCount).length;
	} else {
		const { clickForNumber1, clickForNumber2 } = clickOrders;
		reservedClicks = [clickForNumber1, clickForNumber2].filter((click) => click > clickCount).length;
	}

	if (availableNumbers.length === 0 && remainingClicks <= reservedClicks) {
		// Если доступных чисел больше нет, но есть зарезервированные клики
		if (remainingClicks === 0) {
			generateBtn.disabled = true;
			errorDiv.textContent = "Все числа исчерпаны.";
			generateBtn.classList.add("disabled");
		}
	}
}

generateBtn.addEventListener("click", () => {
	if (isGenerating) return;

	isGenerating = true;
	generateBtn.disabled = true;

	generateNumber();

	setTimeout(() => {
		isGenerating = false;
		if (!generateBtn.classList.contains("disabled")) {
			generateBtn.disabled = false;
		}
	}, 1000);
});