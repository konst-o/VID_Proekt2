'use strict';

var ProblemAct = "Решение проблемы:";
var ProblemCapt = "Название неисправности:";
var ProblemDesc = "Укажите неисправности";

var ProblemMaster = '<a href="mario/main.html">Вызов мастера</a>';

var base =
[
	{
		name: 'Сетевое оборудование',
		data:
			[
				{
					type: 'Не видны ресурсы вне компьютера', // 1
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствует подключение к компьютеру, принимающему входящие подключения', // 2
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствие ответа локальной сети', // 3
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Неполадки с подключением', // 4
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Возвращение сообщения об ошибке оборудования', // 5
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Подключение модема только на низкой скорости', // 6
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Горит индикатор «Выход из строя всей сети»', // 7
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Потеря всех данных', // 8
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Пропала возможность централизованного хранения данных', // 9
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Ограничение функций неисправного оборудования (отсутствие Wi-Fi, выхода в Интернет…)', // 10
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Выход из строя сети или ее части', // 11
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'DNS сервер не отвечает, не удаётся найти DNS адрес сервера', // 12
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Windows не удаётся связаться с устройством или ресурсом', // 13
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Нет доступа к DNS серверу', // 14
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Конкретное устройство не может подключиться к интернету', // 15
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствие желаемого подключения', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Ввод неправильного пароля', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Неполадки, связанные с распознаванием вашего IP-адреса', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Ослабленный сигнал и перебои, касающиеся скорости, на которой передаются данные', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Соединение с беспроводной точкой доступа возникает, но коннекта с Интернет не наблюдается', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Выборочное открытие страниц (некоторые сайты и приложения работают, другие нет)', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Конкретное устройство не может подключиться к интернету', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Конфликт ip-адреса в сети', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0],
					check: false
				},
				{
					type: 'Не работает коммутатор. Горит индикатор', // 16
							//1	  2    3    4    5    6    7    8    9   10   11   12   13   14   15
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5],
					check: false
				}
			],
		actions:
			[
				{
					text: //1
						ProblemCapt.bold() + '<p>' + 'Клиенты входящих подключений не могут видеть ресурсы вне компьютера, принимающего входящие подключения' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	Если адреса, назначаемые клиентам входящих подключений, не принадлежат сети, к которой подключен компьютер, принимающий входящие подключения, то для этих клиентов необходимо создать маршрут к компьютерам интрасети. <br>Изменить, диапазон IP-адресов, выделяемых клиентам входящих подключений, чтобы он был подмножеством адресов сети, к которой подключен компьютер, принимающий входящие подключения <br>' +
						'2. Если сделать это нельзя, то задать  для узлов интрасети в качестве адреса основного шлюза IP-адрес компьютера, принимающего входящие подключения.<br>' + '</p>',
					show: 0
				},
				{
					text: //2
						ProblemCapt.bold() + '<p>' + 'Отсутствие ответа при использовании подключения по локальной сети' + '</p>' +  
						ProblemAct.bold() + '<p>' + 'Проверить значок подключения по локальной сети. В зависимости от состояния подключения по локальной сети значок в папке «Сетевые подключения» может выглядеть по-разному. Кроме того, при отключении адаптера от среды передачи (например, при отсоединении кабеля) в области уведомлений появляется значок состояния.<br>' +
						'– проверить правильность работы сетевого адаптера с помощью Диспетчера устройств <br>' +
						'– убедиться, что кабель локальной сети подключен к сетевому адаптеру.' + '</p>',
					show: 0
				},
				{
					text: //3
						ProblemCapt.bold() + '<p>' + 'Конфликт между последовательными портами' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Использовать порты COM1 и COM3 совместно с линией запроса прерывания IRQ 4, порты COM2 и COM4 – линию IRQ 3' + '</p>',
					show: 0
				},
				{
					text: //4
						ProblemCapt.bold() + '<p>' + 'Возвращение сообщения об ошибке оборудования' + '</p>' +
						ProblemAct.bold() + '<p>' + '– модем выключен. Необходимо проверить, включен ли модем. Если он выключен, включите его и повторите набор номера; <br>' +	
						'– модем работает неправильно. Необходимо включить ведение журнала команд модема, чтобы проверить подключение; <br>' + 
						'– несовместимый кабель. Если связь поддерживается через окно терминала, а не с помощью компонента «Сетевые подключения», возможно, модем подключен к компьютеру неподходящим кабелем. Нужно использовать ' + '</p>',
					show: 0
				},
				{
					text: //5
						ProblemCapt.bold() + '<p>' + 'Модем и телефонная линия работают неправильно' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Избыточное статическое электричество на телефонной линии приводит к разрыву связи, необходимо проверить правильность работы модема с помощью средств диагностики' + '</p>',
					show: 0
				},
				{
					text: //6
						ProblemCapt.bold() + '<p>' + 'Недостаточно высокое качество исходящей линии' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Необходимо обратиться в телефонную компанию, чтобы проверить качество линии' + '</p>',
					show: 0
				},
				{
					text: //7
						ProblemCapt.bold() + '<p>' + 'Выход и строя главного коммутатора' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена главного коммутатора.' + '</p>',
					show: 0
				},
				{
					text: //8
						ProblemCapt.bold() + '<p>' + 'Выход и строя коммутатора в одном из отделов' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена коммутатора. Необходимо проверить коммутаторы во всех отделах' + '</p>',
					show: 0
				},
				{
					text: //9
						ProblemCapt.bold() + '<p>' + 'Выход из строя сервера' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Ремонт сервера (возможна замена комплектующих  или, в крайнем случае, полная замена сервера)' + '</p>',
					show: 0
				},
				{
					text: //10
						ProblemCapt.bold() + '<p>' + 'Выход из строя модема, точки доступа, сетевого принтера' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена оборудования' + '</p>',
					show: 0
				},
				{
					text: //11
						ProblemCapt.bold() + '<p>' + 'Выход из строя сетевого кабеля' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена сетевого кабеля' + '</p>',
					show: 0
				},
				{
					text: //12
						ProblemCapt.bold() + '<p>' + 'Ошибка в доменной сети' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	Проблема на сайте, попробуйте позже <Br>'
										  + '2.	Проведите диагностику сети <br>'
										  + '3.	Некорректные настройки доступа к интернету. Можно исправить собственными силами, через «Пуск»-«Панель управления»-«Администрирование»-«Службы».' + '</p>',
					show: 0
				},
				{
					text: //13
						ProblemCapt.bold() + '<p>' + 'Выход из строя точки доступа' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	Прежде всего, перезагрузите роутер. Обновите драйверы <br>' 
											+ '2.	Попробуйте еще раз ввести пароль...' 
											+ '3.	Установите автоматическое получение адресов в свойствах изменения параметров адаптера <br>' 
											+ '4.	Попробуйте подойти ближе к созданной точки доступа или измените пароль, возможно дополнительное подключение <br>' 
											+ '5.	Проблемы в параметрах, регулирующих доступ к различным вариантам веб-ресурсов.  попробуйте задать в качестве основного адреса комбинацию 8.8.8.8, а в качестве альтернативного – код из цифр 8.8.4.4. Это DNS сервера Гугл' + '</p>',
					show: 0
				},
				{
					text: //14
						ProblemCapt.bold() + '<p>' + 'Проблемы привязки сетевых адресов' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	Увеличить диапазон раздаваемых адресов на роутере <br>' 
											+ '2.	Отключить интерфейс' + '</p>',
					show: 0
				},
				{
					text: //15
						ProblemCapt.bold() + '<p>' + 'Выход из строя коммутатора в одном из отделов' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	Прошивка оборудования. Для этого необходимо иметь актуальную, работающую версию программного обеспечения, специальное записывающее оборудование <br>' 
											+ '2.	Исправление возникшего дефекта. В этом случае применяется пайка оторвавшихся металлических элементов <br>' 
											+ '3.	Замена вышедшей из строя детали. В этом случае необходимо оценить стоимость проведения ремонтных работ, приобретения новой запчасти. Целесообразнее купить новый свитч' + '</p>',
					show: 0
				}
			]
	},	
	
	{
		name: 'Средства телекоммуникационной связи',
		data:
			[
				{
					type: 'Не работает средство телекоммуникационной связи',
					coeff: [0.5, 0.5], 
					check: false					  
				}
			],
		actions:
			[
				{
					text: // 1
						ProblemCapt.bold() + '<p>' + '1.	Выход из строя оконечного оборудования (средства телекоммуникационной связи)' + '</p>' +
						ProblemAct.bold() + '<p>' + '1. 	Подождите, неисправность на районной АТС<br>' 
						+ '2. 	Неисправность кабельной линии до ввода в здание или рабочее место <b>(Вызов мастера)</b><br>' + '</p>',
					show: 0
				},
				{
					text: // 2
						ProblemCapt.bold() + '<p>' + 'Отсутствие ответа в  линии телекоммуникационной связи' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Неисправность кабельной линии до ввода в здание или рабочее место <b>(Вызов мастера)</b>' + '</p>',
					show: 0
				}
				
			]
		},

	{
		name: 'Устройство визуального отображения информации',
		data:
			[
				{
					type: 'Устройство визуального отображения информации не включается, загорается и тухнет, индикатор питания мигает', //1
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false				  
				},
				{
					type: 'Мигает (гаснет) изображение. Самопроизвольное выключение', // 2
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false						
				},
				{
					type: 'Самопроизвольное выключение, высокочастотный писк', // 3
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Нет подсветки, но изображение просматривается под ярким светом', // 4
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Вертикальные полосы на изображении', // 5
 							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Горизонтальные полосы на изображении. Пятна', // 6
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствует  изображение, но изображение присутствует. Белый (серый) экран', // 7
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствует реакция на кнопку управления. Горит индикатор', // 8
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Пониженная яркость устройство визуального отображения информации', // 9
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
				},
				{
					type: 'Шум, муар, дрожание изображения. Горит индикатор', // 10
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0],
					check: false
				},
				{
					type: 'ПК не распознает  дисплей', // 11
							//1	  2    3    4    5    6    7    8    9   10   11  
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5],
					check: false
				}
			],
		actions:
			[
				{
					text: // 1
						ProblemCapt.bold() + '<p>' + 'Устройство визуального отображения информации не включился.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Выход из строя платы источника питания.<br>'
						+ '1.	Диагностика блока питания.<br>' 
						+ '2.	Замена источника питания, если монитор с внешним источником питания.<br>' 
						+ '3.	Замена всех сгоревших деталей на плате блока питания устройства визуального отображения информации.' + '</p>',
					show: 0
				},
				{
					text: // 2
						ProblemCapt.bold() + '<p>' + 'Мигает (гаснет) изображение.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Выход из строя блока питания, источник напряжения подвески монитора соскакивает с рабочего режима.<br>'
						+ '1.	Проверка кабелей питания и сигнала<br>' 
						+ '2.	Диагностика блока питания. Замена электролитических конденсаторов.<br>' 
						+ '3.	Проверка микротрещин в плате.' + '</p>',
					show: 0
				},
				{
					text: // 3
						ProblemCapt.bold() + '<p>' + 'Самопроизвольное выключение.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Вздутие электролиты, микротрещины в плате, неисправность микросхемы.<br>'
						+ '1.	Замена электролитических конденсаторов<br>' 
						+ '2.	Проверка микротрещин в плате.' + '</p>',
					show: 0
				},
				{
					text: // 4
						ProblemCapt.bold() + '<p>' + 'Отсутствие подсветки.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Выход из строя платы источника питания. Выход из строя ламп подсветки.<br>'
						+ '1.	Диагностика блока питания. Замена электролитических конденсаторов.<br>' 
						+ '2.	Проверка микротрещин в плате.<br>' 
						+ '3.	Замена ламп подсветки на светодиодную линейку подсветки и инвертора.' + '</p>',
					show: 0
				},
				{
					text: // 5
						ProblemCapt.bold() + '<p>' + 'Полосы на изображении.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Матрица пришла в негодность. Замена устройство визуального отображения информации.' + '</p>',
					show: 0
				},
				{
					text: // 6
						ProblemCapt.bold() + '<p>' + 'Полосы на изображении. Пятна.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена устройства визуального отображения информации.' + '</p>',
					show: 0
				},
				{
					text: // 7
						ProblemCapt.bold() + '<p>' + 'Отсутствует  изображение.' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	  Проверка кабелей питания и сигнала.<br>'
						+ '2.	Подключение к другому источнику видеосигнала.<br>' 
						+ '3.	Проверка всех шлейфов устройства визуального отображения информации. (чистка от нагара и потемнении).<br>' 
						+ '4.	Замена платы обработки видеосигнала.' + '</p>',
					show: 0
				},
				{
					text: // 8
						ProblemCapt.bold() + '<p>' + 'Отсутствие реакции на кнопку управления.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Трещина в плате с кнопками  или пайке.<br>'  
											+ 'Зачистить и пропаять плату, упрочнить конструкцию.' + '</p>',
					show: 0
				},
				{
					text: // 9
						ProblemCapt.bold() + '<p>' + 'Пониженная яркость устройства визуального отображения информации.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена ламп подсветки и инвертора.' + '</p>',
					show: 0
				},
				{
					text: // 10
						ProblemCapt.bold() + '<p>' + 'Шум, муар, дрожание изображения.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена кабеля.' + '</p>',
					show: 0
				},
				{
					text: // 11
						ProblemCapt.bold() + '<p>' + 'Поломка последовательного интерфейса для подключения периферийных устройств к вычислительной технике.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Обновить конфигурацию оборудования в  окне “Управление компьютером” / “Диспетчер устройств” / “Мониторы”/ “Универсальный монитор PnP”.' + '</p>',
					show: 0
				}
			]
		},
	{
		name: 'Устройства ввода',
		data:
			[
				{
					type: 'Отсутствует ответ', // 1
							//1	  2    3    4    5    6    7    8    9 
					coeff: [0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 0.0],
					check: false				 
				},
				{
					type: 'ПК не распознает  клавиатуру', // 2
							//1	  2    3    4    5    6    7    8    9 
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false						
				},
				{
					type: 'ПК не распознает  джойстик', // 3
							//1	  2    3    4    5    6    7    8    9 
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0],
					check: false
				},
				{
					type: 'Залитие жидкостью.', // 4
							//1	  2    3    4    5    6    7    8    9 
					coeff: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
				},
				{
					type: 'Отсутствие ответа при подключении к определенной программе', // 5
							//1	  2    3    4    5    6    7    8    9 
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5],
					check: false
				}
			],
		actions:
			[
				{
					text: // 1
						ProblemCapt.bold() + '<p>' + 'Сбой программного обеспечения.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Перезагрузить  компьютер.' + '</p>',
					show: 0
				},
				{
					text: // 2
						ProblemCapt.bold() + '<p>' + 'Испорчен подключающий кабель.' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.Замена кабеля.<br>' +
						'2.Замена устройства ввода.' + '</p>',
					show: 0
				},
				{
					text: // 3 
						ProblemCapt.bold() + '<p>' + 'Залитие жидкостью.' + '</p>' +
						ProblemAct.bold() + '<p>' + '1.	 Просушить. <br>' 
											+ '2. Осмотр на наличие сгоревших участков <br> А) присутствуют  – замена клавиатуры. <br> Б) отсутствуют – протереть спиртом.' + '</p>',
					show: 0
				},
				{
					text: // 4
						ProblemCapt.bold() + '<p>' + 'Нарушение порядка сборки и включения компьютера' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Выключить компьютер, соединить штекер PS/2, заново подключить устройства ввода и перезагрузить компьютер' + '</p>',
					show: 0
				},
				{
					text: // 5
						ProblemCapt.bold() + '<p>' + 'Повреждение драйвера устройства ввода.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Проверить драйвер через диспетчер устройств. <br> Переустановка драйвера' + '</p>',
					show: 0
				},
				{
					text: // 6
						ProblemCapt.bold() + '<p>' + 'Поломка последовательного интерфейса для подключения периферийных устройств к вычислительной технике.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Обновить конфигурацию оборудования в  окне “Управление компьютером” / “Диспетчер устройств” / “Клавиатуры”/ “Keyboard Device Filter”.' + '</p>',
					show: 0
				},
				{
					text: // 7
						ProblemCapt.bold() + '<p>' + 'Отсутствует подключение джойстика.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Замена кабеля.<br>' + 'Приобретение нового джойстика. ' + '</p>',
					show: 0
				},
				{
					text: // 8
						ProblemCapt.bold() + '<p>' + 'Поломка последовательного интерфейса для подключения периферийных устройств к вычислительной технике.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Обновить конфигурацию оборудования в  окне “Управление компьютером” / “Диспетчер устройств” / “Контроллеры USB”.' + '</p>',
					show: 0
				},
				{
					text: // 9
						ProblemCapt.bold() + '<p>' + 'Отсутствует подключение джойстика.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Установка программы JoyToKey.' + '</p>',
					show: 0
				}
			]
		},
		{
			name: 'Устройство вывода текстовой и графической информации',
			data:
				[
					{
					type: 'Не включается', // 1
							//1	  2    3    4    5    6 
					coeff: [0.5, 0.0, 0.0, 0.0, 0.0, 0.0],
					check: false
					},
					{
					type: 'Зажим бумаги. Горит индикатор', // 2
							//1	  2    3    4    5    6 
					coeff: [0.0, 0.5, 0.0, 0.0, 0.0, 0.0],
					check: false
					},
					{
					type: 'Плохое запекание изображения на бумаге, возможно смазать. Горит индикатор', // 3
							//1	  2    3    4    5    6 
					coeff: [0.0, 0.0, 0.5, 0.0, 0.0, 0.0],
					check: false
					},
					{
					type: 'Скрипы', // 4
							//1	  2    3    4    5    6 
					coeff: [0.0, 0.0, 0.0, 0.5, 0.0, 0.0],
					check: false
					},
					{
					type: 'Ошибка блока закрепления. Горит индикатор', // 5
							//1	  2    3    4    5    6 
					coeff: [0.0, 0.0, 0.0, 0.0, 0.5, 0.0],
					check: false
					},
					{
					type: 'ПК не распознает  принтер', // 6
							//1	  2    3    4    5    6 
					coeff: [0.0, 0.0, 0.0, 0.0, 0.0, 0.5],
					check: false
					}
				],
			actions:
				[
					{
						text: // 1
							ProblemCapt.bold() + '<p>' + 'Отсутствие  реакции на включение.' + '</p>' +
							ProblemAct.bold() + '<p>' + '1.	Проверить кабель.<br>' 
							+ '2. Проверить интерфейсную плату.<br>' 
							+ '3. Заменить устройства вывода текстовой и графической информации.' + '</p>',
						show: 0
					},
					{
						text: // 2
							ProblemCapt.bold() + '<p>' + 'Ошибка в тракте подачи  листов бумаги.' + '</p>' +
							ProblemAct.bold() + '<p>' + '1.	Отчистить тракт от инородных тел, попавших внутрь.<br>' 
												+ '2.	Замена флажков-оптопар.' + '</p>',
						show: 0
					},
					{
						text: // 3
							ProblemCapt.bold() + '<p>' + 'Повреждение термоузла аппаратуры (фьюзера).' + '</p>' +
							ProblemAct.bold() + '<p>' + '1.	Замена фотобарабана. <br>' 
												+ '2.	Замена устройства.' + '</p>',
						show: 0
					},
					{
						text: // 4
							ProblemCapt.bold() + '<p>' + 'Скрип.' + '</p>' +
							ProblemAct.bold() + '<p>' + 'Смазать все вращающиеся части.' + '</p>',
						show: 0
					},
					{
						text: // 5
							ProblemCapt.bold() + '<p>' + 'Термодарчики, лампы нагрева или ТЭН отказали.' + '</p>' +
							ProblemAct.bold() + '<p>' + '1.	Замена деталей, вышедших из строя. +<br>' 
													+ '2.	Замена устройства.' + '</p>',
						show: 0
					},
					{
						text: // 6
							ProblemCapt.bold() + '<p>' + 'Поломка последовательного интерфейса для подключения периферийных устройств к вычислительной технике.' + '</p>' +
							ProblemAct.bold() + '<p>' + 'Обновить конфигурацию оборудования в  окне “Управление компьютером” / “Диспетчер устройств” /.' + '</p>',
						show: 0
					}
				]
		},

	{
		name: 'Незвестно',
		data:
			[
				{
					type: 'Неисправность не присутсвует в списке',
					coeff: [0.5], 
					check: false					  
				}
			],
		actions:
			[
				{
					text: // 1
						ProblemCapt.bold() + '<p>' + 'Неисправность не известна.' + '</p>' +
						ProblemAct.bold() + '<p>' + 'Сообщить о неисправности специалисту (' + ProblemMaster + ').<br>' + '</p>',
					show: 0
				}
			]
		}
];

function ShowAction() {

	var panel = document.getElementById('PanelBody');
	panel.innerHTML = '';
	//---
	for (var list of base) {

		for (var a of list.actions) {
			a.show = 0;
		}

		var check = false;

		for (var d of list.data) {
			if (d.check) {
				check = true;
				for (var a in list.actions) {
					list.actions[a].show += d.coeff[a];
				}
			}
		}

		if (!check) continue;

		var max = -10000000;

		for (var a of list.actions) {
			if (a.show > max) {
				max = a.show;
			}
		}

		if (max > 0.5) max = 0.5; // Минимальный порок преодаление вероятности - 0.5
								  // При этом если не может такого произойти, чтобы ничего не вывелось, так как последнему если другие отстутсвуют будет 0.5
		for (var a of list.actions) {
			if (a.show >= max) {
				panel.insertAdjacentHTML('beforeend', a.text);
				panel.insertAdjacentHTML('beforeend', '<hr>');
			}
		}
	}
}

function list_onclick(id) {
	var e = document.getElementById(id).style;
	if (e.display) e.display = ''; else e.display = 'none';
}

function select_onclick(l, s, e) {
	for (var d in base[l].data) {
			if (+d === s) {
				base[l].data[+d].check = e.checked;
				break;
			}
	}
	//---
	ShowAction();
}

function CreateSelectList() {
	var main_list = document.getElementById('MyUL');
	main_list.innerHTML = '';
	//---
	var list_id = 0;
	//---
	for (var list of base) {
		main_list.insertAdjacentHTML('beforeend', '<li><a href="#" class="header" onclick="list_onclick(\'list_' + list_id + '\');">' + list.name + '</a></li>');
		//---

		var selects = '<div id="list_' + list_id + '" style="display: none;">\r\n';

		selects += '<center style="margin-top:10px; margin-bottom:10px;"><b>Укажите симптомы</b></center>';

		var sel_id = 0;

		//---
		for (var s of list.data) {
			selects += '<input type="checkbox" id="sel_' + list_id + '_' + sel_id + '" onclick="select_onclick(' + list_id + ', ' + sel_id + ', this);">' + s.type  + '<br>\r\n';
			//---
			sel_id++;
		}
		selects += '</div>\r\n';
		//---
		main_list.insertAdjacentHTML('beforeend', selects);
		//---
		list_id++;
	}
}

CreateSelectList();