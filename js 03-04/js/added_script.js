
// Создаем основной контейнер. Начало
var container = document.createElement('div');
container.classList.add('container');

document.body.appendChild(container);
// Создаем основной контейнер. Конец

// Создаем контейнер заголовка. Начало
var zag_cont = document.createElement('div');
zag_cont.classList.add('zag_cont');

container.appendChild(zag_cont);
// Создаем контейнер заголовка. Конец

// Создаем заголовок. Начало
var zag = document.createElement('p');
zag.classList.add('main_zag');
zag.innerHTML = 'Тест по программированию';

zag_cont.appendChild(zag);
// Создаем заголовок. Конец

// Создаем нумерованный список вопросов. Начало
var question_list = document.createElement('ol');
question_list.classList.add('question_list');

container.appendChild(question_list);
// Создаем нумерованный список вопросов. Конец

// Функция для добавления ответов на вопросы. Начало
function crCheck (className) {         // добавляем ответы в список по классу элемента списка с вопросом
  var check_question = document.createElement('ul'); // Создаем список ответов
  check_question.classList.add('check_question');
  className.appendChild(check_question);
  var i = 1;
  while (i < 4) {                                   // создаем элемент списка и наполняем его чекбоксами
    var check_li = document.createElement('li');
    check_li.classList.add('check_li');
    check_question.appendChild(check_li);

    var check_unswer = document.createElement('input');
    var check_label = document.createElement('label'); // лэйбл нужен для текстового описания чекбокса
    check_label.classList.add('check_label');
    check_unswer.type = 'checkbox';
    check_label.appendChild(check_unswer);
    check_label.innerHTML += ('Вариант ответа ' + i); // добавляем текст с номером вопроса


    check_li.appendChild(check_label);
    i++;
  }
}
// Функция для добавления ответов на вопросы. Конец

// Создаем элементы списка с вопросами и вызываем функцию для добавления в них ответов. Начало
var question_list_zag1 = document.createElement('li');
question_list_zag1.innerHTML = 'Вопрос №1';
question_list.appendChild(question_list_zag1);

crCheck(question_list_zag1);

var question_list_zag2 = document.createElement('li');
question_list_zag2.innerHTML = 'Вопрос №2';
question_list.appendChild(question_list_zag2);

crCheck(question_list_zag2);

var question_list_zag3 = document.createElement('li');
question_list_zag3.innerHTML = 'Вопрос №3';
question_list.appendChild(question_list_zag3);

crCheck(question_list_zag3);
// Создаем элементы списка с вопросами и вызываем функцию для добавления в них ответов. Конец


// Создаем Кнопку для получения результатов. Начало
var result_button = document.createElement('div');
result_button.classList.add('result_button');
result_button.innerHTML = ('<p><a href="#">Проверить мои результаты</a></p>');
container.appendChild(result_button);
// Создаем Кнопку для получения результатов. Конец
