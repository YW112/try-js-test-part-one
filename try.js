//Задание 1
let i = [1, 2, 3] + [4, 5, 6];
console.log(i);
//Вывод: "1, 2, 34, 5, 6". Результат получился таким благодаря тому, что JavaScript преобразует массивы в строки, затем складывает их, то есть происходит конкатенация строк, в результате чего "3" и "4" - некогда элементы двух разных массивов - не воспринимаются как числа, они складываются как строки. В отличие от массива, тем более без метода split(), который задаёт разделение элементов, у двух данных строк отсутствуют пробелы после преобразования, следовательно они подвергаются конкатенации и отображаются как "34"

//Задание 2
var a = { b: 1 };
var b = a;
b.b = 2;
console.log(a);
//Вывод: {b: 2}. В первой строке кода создаётся объект a со свойством b, во второй создаётся ссылка на объект a, то есть переменная b, данной переменной присваиваются все свойства объекта a. В третьей строке кода для ссылки b уточняется свойство b (которое уже задано в объекте a), свойство получает значение и меняет изначальное значение заданного свойства объекта a. Это пример прототипа объекта.

//Задание 3
const regExp = /^\d+\.\d{3}$/;
// Пример применения:
let num = 4.368;
if (regExp.test(num)) {
  console.log(num);
}

//Задание 4
const regUrl = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
// Пример применения:
let isURL = "https://www.youtube.com";
if (regUrl.test(isURL)) {
  console.log(true);
} else {
  console.log(false);
}
// Или
function isItURL(str) {
  if (regUrl.test(str)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isItURL("https://www.google.com");
/*
^: Совпадение с началом строки.
https?: Совпадение с "http" или "https" (вопросительный знак делает "s" необязательным).
:\/\/: Совпадение с "://" (протокол).
[^\s/$.?#]: Совпадение с любым символом, кроме пробела, косой черты, точки, доллара, вопроса, решетки. Это обеспечивает базовый домен.
[^\s]*: Совпадение с любым количеством символов, кроме пробела. Это охватывает остальную часть URL (домен, путь, параметры).
$: Совпадение с концом строки.

1. Регулярное выражение определяет структуру типичной URL-адреса.
2. Метод test() проверяет, соответствует ли строка str заданному регулярному выражению.
3. Если строка соответствует регулярному выражению, test() возвращает true, иначе false.
*/

/*5.
Каким будет значение переменной text после выполнения данного JavaScript кода? */
function setText(message) {
  text = message;
}
var text = "Текст";
setText("Сообщение");
// Опишите, почему получился такой результат.
/* 
Переменная text будет равна "Сообщение". Изначально переменная text объявлена после функции setText(message), default значение переменной text = 'Текст', но следующей строкой кода выполняется функция setText(), там же переменной message присвоено значение (строка "Сообщение"), так как переменная message является аргументом функции setText(). Внутри функции переменные text и message равны, следовательно переменная text также получает значение "Сообщение" после выполнения функции setText().
*/

6;
// Написать функцию для получения список всех артикулов товаров в консоли браузера на странице https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog
let getArtProdAll = () => {
  const wrappers = document.querySelectorAll(
    "._img-wrapper.__products--product-slider.narrow"
  );
  let articleNumbers = [];
  wrappers.forEach((wrapper) => {
    const articleNumber = wrapper.getAttribute("data-product-id");
    if (articleNumber) {
      articleNumbers.push(articleNumber);
    } else {
      console.log(0);
    }
  });
  const articleList = `Список артикулов:\n${articleNumbers.join("\n")}`;
  return articleList;
};
const articleList = getArtProdAll();
console.log(articleList);
/*
7. 
Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/
*/
function getCharacteristics() {
  const parameterItems = document.querySelectorAll(
    ".tab-pane-product-parameter-item"
  );
  const characteristics = {};
  parameterItems.forEach((item) => {
    const nameElement = item.querySelector(".parameter-name");
    const valueElement = item.querySelector(".parameter-value");
    if (nameElement && valueElement) {
      let name = nameElement.textContent.trim();
      const startTagIndex = name.indexOf("<");
      const endTagIndex = name.indexOf(">");
      if (startTagIndex !== -1 && endTagIndex !== -1) {
        name =
          name.substring(0, startTagIndex) + name.substring(endTagIndex + 1);
      }
      const value = valueElement.innerText.trim();
      characteristics[name] = value;
    }
  });
  let characteristicsList = "Характеристики товара:";
  for (const [key, value] of Object.entries(characteristics)) {
    characteristicsList += `${key}: ${value}\n`;
  }

  return characteristicsList;
}

const characteristicsList = getCharacteristics();
console.log(characteristicsList);
