export default {
  theme: "Основы электромонтажных работ",
  fgos: {
    code: "13.01.10",
    name: "Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)"
  },
  pm: {
    code: "01",
    name: "Сборка, монтаж, регулировка и ремонт узлов и механизмов оборудования, агрегатов, машин, станков и другого электрооборудования промышленных  организаций"
  },
  mdk: {
    code: "01.01",
    name: "Основы слесарно - сборочных и электромонтажных работ"
  },

  interactive: {
    type: "slides",
    video: "",
    slides: [
        "../assets/slides/1.jpg", 
        "../assets/slides/2.jpg", 
        "../assets/slides/3.jpg", 
        "../assets/slides/4.jpg", 
        "../assets/slides/5.jpg", 
        "../assets/slides/6.jpg", 
        "../assets/slides/7.jpg", 
        "../assets/slides/8.jpg", 
        "../assets/slides/9.jpg", 
        "../assets/slides/10.jpg", 
        "../assets/slides/11.jpg", 
        "../assets/slides/12.jpg", 
        "../assets/slides/13.jpg", 
        "../assets/slides/14.jpg", 
        "../assets/slides/15.jpg", 
        "../assets/slides/16.jpg", 
        "../assets/slides/17.jpg",
        "../assets/slides/18.jpg"
    ]
},
  test: {
    questions: [
  
      {
        question: "Какой из перечисленных материалов не относится к проводникам?",
        type: "once",
        answers: [
          {
            text: "Au",
            right: false
          },
          {
            text: "Al",
            right: false
          },
          {
            text: "Cu",
            right: false
          },
          {
            text: "Si",
            right: true
          }
        ]
      },
      {
        question: "Электротехнические материалы это?",
        type: "once",
        answers: [
          {
            text: "Специальные материалы, из которых изготавливают электрические машины, аппараты, приборы и др. элементы ЭО",
            right: true
          },
          {
            text: "Которые пропускают электрический ток",
            right: false
          },
          {
            text: "Материалы для изготовления различной продукции",
            right: false
          },
          {
            text: "Материалы для изготовления полуфабрикатов",
            right: false
          }
        ]
      },
      {
        question: "Какой из перечисленных материалов не относится к диэлектрикам?",
        type: "once",
        answers: [
          {
            text: "Резина",
            right: false
          },
          {
            text: "ПВХ",
            right: false
          },
          {
            text: "Вода",
            right: true
          },
          {
            text: "Дистиллированная вода",
            right: false
          }
        ]
      },
      {
        question: "Как называются электротехнические материалы, которые могут изменять удельную электрическую проводимость от внешних факторов?",
        type: "once",
        answers: [
          {
            text: "Проводники",
            right: false
          },
          {
            text: "Металлы",
            right: false
          },
          {
            text: "Диэлектрики",
            right: false
          },
          {
            text: "Полупроводники",
            right: true
          }
        ]
      },
      {
        question: "Потеря диэлектриком электроизоляционных свойств называется?",
        type: "once",
        answers: [
          {
            text: "Пробой",
            right: true
          },
          {
            text: "Ток",
            right: false
          },
          {
            text: "Электрическая прочность",
            right: false
          },
          {
            text: "Сопротивление",
            right: false
          }
        ]
      },
      {
        question: "Как называются провода, применяющиеся для внутри блочного и межблочного монтажа аппаратов и устройств?",
        type: "once",
        answers: [
          {
            text: "Неизолированные провода",
            right: false
          },
          {
            text: "Монтажные провода",
            right: true
          },
          {
            text: "Силовые провода",
            right: false
          },
          {
            text: "Обмоточные провода",
            right: false
          }
        ]
      },
      {
        question: "Электротехническое изделия предназначена для передачи электроэнергии на электрических станциях, подстанциях и распределительных устройствах?",
        type: "once",
        answers: [
          {
            text: "Шина",
            right: true
          },
          {
            text: "Силовой кабель",
            right: false
          },
          {
            text: "Силовой провод",
            right: false
          },
          {
            text: "Неизолированный провод",
            right: false
          }
        ]
      },
      {
        question: "Первая буква в марке кабеля указывает?",
        type: "once",
        answers: [
          {
            text: "Материал изоляции и её тип",
            right: false
          },
          {
            text: "Материал защитной оболочки",
            right: false
          },
          {
            text: "Материал жил",
            right: true
          },
          {
            text: "Материал брони",
            right: false
          }
        ]
      },
      {
        question: "В какой цвет окрашивают элементы оборудования принадлежащим фазам?",
        type: "once",
        answers: [
          {
            text: "Элементы оборудования, принадлежащие фазе А, окрашивают в зеленый цвет, фазы В — в желтый и фазы С — в красный",
            right: false
          },
          {
            text: "Элементы оборудования, принадлежащие фазе А, окрашивают в желтый цвет, фазы В — в зеленый и фазы С — в красный",
            right: true
          },
          {
            text: "Элементы оборудования, принадлежащие фазе А, окрашивают в красный цвет, фазы В — в зеленый и фазы С — в желтые",
            right: false
          },
          {
            text: "Элементы оборудования, принадлежащие фазе А, окрашивают в красный. цвет, фазы В — в зеленый и фазы С — в желтый",
            right: false
          }
        ]
      },
      {
        question: "Какой кабель необходимо применять для подключения однофазной цепи, корпус которой необходимо заземлить.",
        type: "once",
        answers: [
          {
            text: "Двухжильный",
            right: false
          },
          {
            text: "Трехжильный",
            right: true
          },
          {
            text: "Четырехжильный",
            right: false
          },
          {
            text: "Контрольный четырехжильный кабель",
            right: false
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [

      {
        question: "Установите соответствие между внешним диэлектрика и наименованием.",
        image: "../assets/images/1.jpg",
        answers: [
          {
            text: "Диэлектрик волокнистый",
            right: false
          },
          {
            text: "Диэлектрик жидкий",
            right: false
          },
          {
            text: "Диэлектрик слоистый",
            right: true
          },
          {
            text: "Диэлектрик керамический",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом проводника и назначением.",
        image: "../assets/images/2.jpg",
        answers: [
          {
            text: "Силовой провод",
            right: false
          },
          {
            text: "Обмоточный провод",
            right: false
          },
          {
            text: "Монтажный провод гибкий",
            right: false
          },
          {
            text: "Монтажный провод жесткий",
            right: true
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом проводника и маркой провода.",
        image: "../assets/images/3.jpg",
        answers: [
          {
            text: "Провод ПУНП 3х1,5",
            right: false
          },
          {
            text: "Провод АППВ 2х2.5",
            right: false
          },
          {
            text: "Провод ШВВП 2х1,5",
            right: true
          },
          {
            text: "Провод ПВС 2х1,5",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между внешним видом монтажного провода и маркой провода.",
        image: "../assets/images/4.jpg",
        answers: [
          {
            text: "Провод ПВ-1 1,5 (ПуВ 1х1,5)",
            right: false
          },
          {
            text: "Провод АПВ 2.5",
            right: false
          },
          {
            text: "Провод ШВВП 2х1,5",
            right: false
          },
          {
            text: "Провод ПВ-3 1,5 (ПуГВ 1х1,5)",
            right: true
          }
        ]
      },
      {
        question: "Установите соответствие между цветом окрашиваемого элемента оборудования и принадлежащим фазе",
        image: "../assets/images/5.jpg",
        answers: [
          {
            text: "Фаза B",
            right: true
          },
          {
            text: "Фаза А",
            right: false
          },
          {
            text: "Фаза C",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между кабелем и его назначением",
        image: "../assets/images/6.jpg",
        answers: [
          {
            text: "Кабели связи",
            right: false
          },
          {
            text: "Кабели управления",
            right: false
          },
          {
            text: "Контрольные кабели",
            right: true
          },
          {
            text: "Радиочастотные кабели",
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
  02.08.2013 № 802 </p>
  <b> Профессиональный модуль:</b>
  <p> ПМ 01 Сборка, монтаж, регулировка и ремонт узлов и механизмов оборудования, агрегатов,
  машин, станков и другого электрооборудования промышленных организаций </p>
  <b> МДК 01.01: </b>
  <p> ПОсновы слесарно-сборочных и электромонтажных работ </p>
  <b> Раздел: </b>
  <p> Основы слесарно - сборочных и электромонтажных работ </p>
  <b> Тема: </b>
  <p> Основы электромонтажных работ </p>
  `,
  keywords: [
    {
      word: "Проводник",
      description: "Вещество, среда, материал, хорошо проводящие электрический ток"
    },
    {
      word: "Полупроводник",
      description: "Материал, по удельной проводимости занимающий промежуточное место между проводниками и диэлектриками, и отличающийся от проводников (металлов) сильной зависимостью удельной проводимости от концентрации примесей, температуры и воздействия различных видов излучения. Основным свойством полупроводников является увеличение электрической проводимости с ростом температуры"
    },
    {
      word: "Диэлектрик",
      description: "Вещество (материал), относительно плохо проводящее электрический ток"
    },
    {
      word: "Проводниковые материалы",
      description: "Вещества с чётко выраженными свойствами полупроводника"
    },
    {
      word: "Диэлектрические материалы",
      description: "Материалы, не проводящие электрического тока"
    }
  ],
  advice: `
  <h3 style="margin:8px">  Рекомендации для обучающегося (самостоятельная работа) </h3>

  <ul>
      <li>Повторите ранее пройденный материал (ОП.02 Электротехника).</li>
      <li>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите
      динамическую инфографику по теме «Основы электромонтажных работ».</li>
      <li>Если в процессе изучения материала возникнут вопросы, запишите их для
      дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</li>
      <li>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и
      умений при изучении модуля:
      <ul>
      <li>Проведение подготовительных работ для сборки электрооборудования;</li>
      <li>Сборки по схемам приборов, узлов и механизмов электрооборудования;</li>
      <li>Применять безопасные приемы ремонта;</li>
      <li>Ремонтировать электрооборудование промышленных предприятий в
      соответствии с технологическим рпоцессом.</li>
      <ul></li>
      <li>При необходимости просмотрите материал еще раз.</li>
      <li>Возвращайтесь к наиболее сложным аспектам темы.</li>
      <li>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз. </li>
  </ul>
  <h3 style="margin:8px">  Рекомендации для преподавателя </h3>
  <p>  Преподаватель должен: </p>
  <ul>
      <li>организовать просмотр динамической инфографики и последующую беседу по
      уточнению и конкретизации первичных знаний;</li>
      <li>создать условия для освоения обучающимися знаний в форме интерактивной
      деятельности;</li>
      <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию
      как основному инструменту достижения личного и профессионального успеха;</li>
      <li>познакомить обучающихся с основами слесарной и механической обработкой
      различных классов точности и чистоты;</li>
      <li>познакомить с рабочими инструментами, их устройством, назначением и приёмом
      использования;</li>
      <li>содействовать установлению в сознании обучающихся устойчивых связей между
      накопленным и новым опытом познавательной деятельности;</li>
      <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
  </ul>
  `
}