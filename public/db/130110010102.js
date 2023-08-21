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
    video: "https://storage.yandexcloud.net/coks-video/1301100102.mp4",
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
  contentinf: "",
  keywords: [
    {
      word: "-wtf",
      description: "An nescitis quia usque nunc nunquam concesserim alicui in mundo ius dicere, me melius vixisse? Amoenissimum habui, "
    },
    {
      word: "-wtf",
      description: "An nescitis quia usque nunc nunquam concesserim alicui in mundo ius dicere, me melius vixisse? Amoenissimum habui, s esse -, videbo gravius, peiu"
    }
  ]
}