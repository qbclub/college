export default {
  theme: "Сборка схем освещения с подключением прибора учета электроэнергии",
  fgos: {
    code: "13.01.10",
    name: "Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)"
  },
  pm: {
    code: "01",
    name: "Сборка, монтаж, регулировка и ремонт узлов и механизмов оборудования, агрегатов, машин, станков и другого электрооборудования промышленных  организаций"
  },
  mdk: {
    code: "01.02",
    name: "Организация работ по сборке, монтажу и ремонту"
  },
  images: [
    "",
    ""
  ],
  interactive: {
    type: "video",
    video: "../assets/130110010102.mp4",
    slides: [
      "src/assets/slides/1.jpg",
      "src/assets/slides/2.jpg",
      "src/assets/slides/3.jpg"
    ]
  },
  test: {
    questions: [
      {
        question: "Выберете правильный ответ. Минимальное допустимое сечение алюминиевых проводов для силовых и осветительных установок должно быть:",
        type: "once",
        answers: [
          {
            text: "0.75 мм<sup>2</sup>",
            right: false
          },
          {
            text: "1,0 мм<sup>2</sup>",
            right: false
          },
          {
            text: "1,5 мм<sup>2</sup>",
            right: false
          },
          {
            text: "2,5 мм<sup>2</sup>",
            right: true
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Преднамеренное соединение нетоковедущих частей электрооборудования с землей называют-",
        type: "once",
        answers: [
          {
            text: "Зануление",
            right: false
          },
          {
            text: "Защитным заземлением",
            right: true
          },
          {
            text: "Устройством выравнивания потенциалов.",
            right: false
          },
          {
            text: "Фазировкой",
            right: false
          }
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "Прибор учета электроэнергии – это счетчик электрической {}.",
            answer: "энергии",
          },
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "стриппер — электромонтажный инструмент, предназначенный для удаления {}. с концов проводов или разделки кабеля при электромонтажных работах.",
            answer: "изоляции",
          },
        ]
      },
      {
        question: "Установите порядок подключения проводов к клеммам однофазного счетчика",
        type: "sort",
        answers: [
          {
            text: ['L1', 'N','L1',  'N'],
            answer: ['L1', 'L1', 'N', 'N'],
          },
        ]
      },
      {
        question: "Установите порядок подключения аппаратов в электрическом распределительном щитке.",
        type: "sort",
        answers: [
          {
            text: ['Устройство защитного отключения с номинальным током 32 ампера','Рубильник', 'Автоматический выключатель с номинальным током 32 ампера',  'Автоматический выключатель с номинальным током 10 ампера'],
            answer: ['Рубильник', 'Автоматический выключатель с номинальным током 32 ампера', 'Устройство защитного отключения с номинальным током 32 ампера', 'Автоматический выключатель с номинальным током 10 ампера'],
          },
        ]
      },
      {
        question: "Выберете правильный ответ. Сопротивление изоляции внутренней электропроводки должно составлять не менее:",
        type: "once",
        answers: [
          {
            text: "1 МОм",
            right: false
          },
          {
            text: "0,01 МОм ",
            right: false
          },
          {
            text: "0,5 МОм",
            right: true
          },
          {
            text: "0,1 МОм",
            right: false
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Диэлектрические перчатки служат:",
        type: "once",
        answers: [
          {
            text: "Основным защитным средством в электроустановках напряжением до 1000 В",
            right: false
          },
          {
            text: "Дополнительным защитным средством в электроустановках напряжением до 1000 В",
            right: false
          },
          {
            text: "Основным защитным средством в электроустановках напряжением выше 1000 В",
            right: false
          },
          {
            text: "Основным защитным средством в электроустановках напряжением до и выше 1000 В",
            right: true
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Минимальное допустимое сечение медных проводов для осветительных установок",
        type: "once",
        answers: [
          {
            text: "0.5 мм<sup>2</sup>",
            right: false
          },
          {
            text: "0.75 мм<sup>2</sup>",
            right: false
          },
          {
            text: "1,5 мм<sup>2</sup>",
            right: true
          },
          {
            text: "2,5 мм<sup>2</sup>",
            right: false
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Линейным напряжением называют напряжение:",
        type: "once",
        answers: [
          {
            text: "Между нулевым рабочим проводником и нулевым защитным проводником",
            right: false
          },
          {
            text: "Между любым фазным проводником и нулевым рабочим проводником",
            right: false
          },
          {
            text: "Между любыми двумя фазными проводниками",
            right: true
          },
          {
            text: "Между любым фазным проводом и нулевым защитным проводником",
            right: false
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Каким цветом изоляции обозначают нулевой рабочий проводник?",
        type: "once",
        answers: [
          {
            text: "Желтым, зеленым",
            right: false
          },
          {
            text: "Белым, черным, коричневым",
            right: false
          },
          {
            text: "Синим",
            right: true
          },
          {
            text: "Красным",
            right: false
          }
        ]
      },
      {
        question: "Выберете правильный ответ. Электросчетчики производят учет потребленной электроэнергии в:",
        type: "once",
        answers: [
          {
            text: "кВт* ч",
            right: true
          },
          {
            text: "кВар* ч",
            right: false
          },
          {
            text: "Вт* ч",
            right: false
          },
          {
            text: "В*А*ч",
            right: false
          }
        ]
      },
      {
        question: "Выберете правильный ответ. К аппаратам защиты относятся:",
        type: "once",
        answers: [
          {
            text: "Электромагнитные контакторы",
            right: false
          },
          {
            text: "Предохранители",
            right: false
          },
          {
            text: "Рубильники",
            right: false
          },
          {
            text: "Промежуточные реле",
            right: true
          }
        ]
      },
      {
        question: "Выберете все правильные признаки классификации проводов. ",
        type: "multi",
        answers: [
          {
            text: "По материалу токопроводящей жилы",
            right: true
          },
          {
            text: "По назначению",
            right: true
          },
          {
            text: "По весовым характеристикам",
            right: false
          },
          {
            text: "По конструкции токопроводящей жилы",
            right: true
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "Установите соответствие между изображением инструмента и названием.",
        image: "../assets/images/1.jpg",
        answers: [
          {
            text: "Инструмент для снятия изоляции",
            right: false
          },
          {
            text: "Кримпер для обжима наконечников НКИ",
            right: false
          },
          {
            text: "Кримпер для обжима наконечников НШВИ",
            right: false
          },
          {
            text: "Стриппер",
            right: true
          }
        ]
      },
      {
        question: "Установите соответствие между изображением инструмента и названием.",
        image: "../assets/images/2.jpg",
        answers: [
          {
            text: "Инструмент для снятия изоляции",
            right: false
          },
          {
            text: "Кримпер для обжима наконечников НКИ",
            right: false
          },
          {
            text: "Кримпер для обжима наконечников НШВИ",
            right: true
          },
          {
            text: "Стриппер",
            right: false
          }
        ]
      },
      {
        question: 'Установите соответствие вида счетчика изображению.',
        type: 'sort',
        image: '',
        answers: [
          {
            text: ["Электронно - цифровой", "Электронный", " Индукционный"],
            answer: ["Электронный", "Электронно - цифровой", " Индукционный"],
            images: ["../assets/images/sort1_1.png", "../assets/images/sort1_2.png", "../assets/images/sort1_3.png"]
          }
        ]
      },
      {
        question: 'Установите соответствие между изображением инструмента и названием.',
        type: 'sort',
        image: '',
        answers: [
          {
            text: ["Кусачки","Круглогубцы","Бокорезы", "Пассатижи", ],
            answer: ["Кусачки", "Пассатижи", "Круглогубцы","Бокорезы"],
            images: ["../assets/images/sort2_1.png", "../assets/images/sort2_2.png", "../assets/images/sort2_3.jpg",  "../assets/images/sort2_4.jpg"]
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом проводника и маркой провода.",
        image: "../assets/images/3.jpg",
        answers: [
          {
            text: "Провод АППВ 2х2.5",
            right: false
          },
          {
            text: "Провод ПУНП 3х1,5",
            right: false
          },
          {
            text: "Провод ПВС 2х1,5",
            right: false
          },
          {
            text: "Провод ШВВП 2х1,5",
            right: true
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом проводника и маркой провода.",
        image: "../assets/images/4.jpg",
        answers: [
          {
            text: "Провод АППВ 2х2.5",
            right: true
          },
          {
            text: "Провод ПУНП 3х1,5",
            right: false
          },
          {
            text: "Провод ПВС 2х1,5",
            right: false
          },
          {
            text: "Провод ШВВП 2х1,5",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом монтажного провода и маркой провода.",
        image: "../assets/images/5.jpg",
        answers: [
          {
            text: "Провод ПВ-3 1,5 (ПуГВ 1х1,5)",
            right: false
          },
          {
            text: "Провод АПВ 2,5",
            right: false
          },
          {
            text: "Провод МГШВ 1х1,5",
            right: true
          },
          {
            text: "Провод ПВ-1 1,5 (ПуВ 1х1,5)",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом изолированных наконечников и типом наконечников.",
        image: "../assets/images/6.jpg",
        answers: [
          {
            text: "Наконечник НВИ 2-6",
            right: false
          },
          {
            text: "Наконечник РПИ-П 0,25-1,5",
            right: true
          },
          {
            text: "Наконечник НШВИ 4-9",
            right: false
          },
          {
            text: "Наконечник НШВИ (2) 1,5-8",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом изолированных наконечников и типом наконечников.",
        image: "../assets/images/7.jpg",
        answers: [
          {
            text: "Наконечник НВИ 2-6",
            right: true
          },
          {
            text: "Наконечник РПИ-П 0,25-1,5",
            right: false
          },
          {
            text: "Наконечник НШВИ 4-9",
            right: false
          },
          {
            text: "Наконечник НШВИ (2) 1,5-8",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом искусственных источников света и типом ламп.",
        image: "../assets/images/8.jpg",
        answers: [
          {
            text: "Искусственный источник света, основанные на светодиодах",
            right: false
          },
          {
            text: "Искусственный источник света, в баллон которой добавлен буферный газ: пары галогенов (брома или иода)",
            right: false
          },
          {
            text: "Искусственный источник света, в котором свет испускает тело накала, нагреваемое электрическим током до высокой температуры.",
            right: true
          },
          {
            text: "Искусственный источник света, которые генерируют свет, посылая электрический разряд через ионизированный газ.",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом искусственных источников света и типом ламп.",
        image: "../assets/images/9.jpg",
        answers: [
          {
            text: "Искусственный источник света, основанные на светодиодах",
            right: false
          },
          {
            text: "Искусственный источник света, в баллон которой добавлен буферный газ: пары галогенов (брома или иода)",
            right: true
          },
          {
            text: "Искусственный источник света, в котором свет испускает тело накала, нагреваемое электрическим током до высокой температуры.",
            right: false
          },
          {
            text: "Искусственный источник света, которые генерируют свет, посылая электрический разряд через ионизированный газ.",
            right: false
          }
        ]
      }
    ]
  },
  contentinf: ` 
  <b> ФГОС СПО:</b <br>
  <p> Федеральный государственный образовательный стандарт среднего профессионального
  образования по укрупненной группе профессий 13.00.00 Электро- и теплоэнергетика, по
  профессии 13.01.10 Электромонтёр по ремонту и обслуживанию электрооборудования (по
  отраслям); утвержден приказом Министерства образования и науки Российской Федерации от
  02.08.2013 № 802</p>
  <b> ПОП-П:</b <br>
  <p>13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям) </p>
  <b> Профессиональный модуль:</b>
  <p> ПМ 01 Сборка, монтаж, регулировка и ремонт узлов и механизмов оборудования, агрегатов,
  машин, станков и другого электрооборудования промышленных организаций </p>
  <b> МДК 01.02: </b>
  <p> Организация работ по сборке, монтажу и ремонту </p>
  <b> Раздел: </b>
  <p> Организация работ по сборке, монтажу и ремонту электрооборудования промышленных
  организаций </p>
  <b> Тема: </b>
  <p> Сборка схем освещения с подключением прибора учета электроэнергии </p>
  `,
  keywords: [
    {
      word: "Клеммы",
      description: "механический зажим для присоединения проводов на электрических приборах "
    },
    {
      word: "Автоматический выключатель",
      description: "контактный коммутационный аппарат, способный включать токи, проводить их и отключать при нормальных условиях в цепи, а также включать, проводить в течение нормированного времени и автоматически отключать токи при нормированных ненормальных условиях в цепи, таких как токи короткого замыкания"
    },
    {
      word: "Патрон электрический",
      description: "установочное электротехническое изделие, служащее для разъемного подключения электрических лампочек и других искусственных источников света к электропроводке"
    },
    {
      word: "Бокорез",
      description: "режущий инструмент, режущие кромки которого находятся в одной плоскости с ручками."
    },
    {
      word: "Заземляющий провод",
      description: "провод, предназначенный для преднамеренного электрического соединения определенной точки сети, электроустановки или оборудования с заземляющим контуром."
    },
  ],
  advice: `
  <h3 style="margin:8px">  Рекомендации для обучающегося (самостоятельная работа) </h3>

  <ul>
      <li>Повторите ранее пройденный материал (МДК 01.02 Организация работ по сборке,
        монтажу и ремонту, тема «Основы электромонтажных работ»).</li>
      <li>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите
      динамическую инфографику по теме «Сборка схем освещения с подключением
      прибора учета электроэнергии».</li>
      <li>Если в процессе изучения материала возникнут вопросы, запишите их для
      дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</li>
      <li>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и
      умений при изучении модуля:
      <ul>
      <li>выполнение подготовительных работ для сборки электрооборудования;</li>

      <li>технологические процессы сборки, монтажа, регулировки и ремонта.</li>
      <ul></li>
      <li>При необходимости просмотрите материал еще раз.</li>
      <li>Возвращайтесь к наиболее сложным аспектам темы.</li>
      <li>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз. </li>
  </ul>
  <h3 style="margin:8px">  Рекомендации для преподавателя </h3>
  <ul>
      <li>организовать просмотр динамической инфографики и последующую беседу по
      уточнению и конкретизации первичных знаний;</li>
      <li>создать условия для освоения обучающимися знаний в форме интерактивной
      деятельности;</li>
      <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию
      как основному инструменту достижения личного и профессионального успеха;</li>
      <li>познакомить обучающихся с сборкой схем освещения с подключением прибора учета
      электроэнергии;</li>
      <li>познакомить с технологическими процессами сборки, монтажа, регулировки и
      ремонта;</li>
      <li>содействовать установлению в сознании обучающихся устойчивых связей между
      накопленным и новым опытом познавательной деятельности;</li>
      <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
  </ul>
  `
}