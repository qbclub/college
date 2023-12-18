export default {
  theme: "Металлообрабатывающие станки различных типов",
  fgos: {
    code: "15.01.32",
    name: "Оператор станков с программным управлением"
  },
  pm: {
    code: "01",
    name: "Изготовление деталей на металлорежущих станках различного вида и типа по стадиям технологического процесса"
  },
  mdk: {
    code: "01.01",
    name: "Изготовление деталей на металлорежущих станках различного вида и типа"
  },
  interactive: {
    type: "video",
    video: "../assets/150132010101.mp4",
    slides: [
     
    ]
  },
  test: {
    questions: [
      {
        question: "Что вращается при работе на токарном станке?",
        type: "once",
        answers: [
          {
            text: "Заготовка",
            right: true
          },
          {
            text: "Станина",
            right: false
          },
          {
            text: "Блок с ЧПУ",
            right: false
          },
          {
            text: "Резец",
            right: false
          }
        ]
      },
      {
        question: "Какого вида фрезерных станков не бывает?",
        type: "once",
        answers: [
          {
            text: "Вертикальных",
            right: false
          },
          {
            text: "Горизонтальных",
            right: false
          },
          {
            text: "Сверлильных",
            right: false
          },
          {
            text: "Долбежных",
            right: true
          }
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "Металлорежущие станки применяются для обработки деталей  {}",
            answer: "резанием",
          },
        ]
      },
      {
        question: "Установите последовательность наладки токарных станков",
        type: "sort",
        answers: [
          {
            text: ['устанавливают приспособления для зажима заготовки', 'настраивают выбранные (или заданные) режимы резания на станке', 'выбирают режимы резания', 'устанавливают и закрепляют режущий инструмент'],
            answer: ['выбирают режимы резания', 'настраивают выбранные (или заданные) режимы резания на станке', 'устанавливают приспособления для зажима заготовки',  'устанавливают и закрепляют режущий инструмент'],
          },
        ]
      },
      {
        question: "Какая станина лучше всего подходит для фрезерного станка?",
        type: "once",
        answers: [
          {
            text: "Литая",
            right: true
          },
          {
            text: "Сборная",
            right: false
          },
          {
            text: "Разборная",
            right: false
          },
          {
            text: "Универсальная",
            right: false
          }
        ]
      },
      {
        question: "Какой компонент не обязателен в токарном станке?",
        type: "once",
        answers: [
          {
            text: "Привод",
            right: false
          },
          {
            text: "Лампа",
            right: true
          },
          {
            text: "Бабка",
            right: false
          },
          {
            text: "Шпиндель",
            right: false
          }
        ]
      },
      {
        question: "Для чего предназначен токарно-винторезный станок?",
        type: "once",
        answers: [
          {
            text: "Для нарезания резьбы",
            right: false
          },
          {
            text: "Для проделывания отверстий",
            right: false
          },
          {
            text: "Для обработки металла резаньем",
            right: false
          },
          {
            text: "Для обтачивания деталей",
            right: true
          }
        ]
      },
      {
        question: "Что используется для смещения детали относительно оси станка?",
        type: "once",
        answers: [
          {
            text: "Тиски",
            right: false
          },
          {
            text: "Зажимы",
            right: true
          },
          {
            text: "Делительная головка",
            right: false
          },
          {
            text: "Распределительная головка",
            right: false
          }
        ]
      },
      {
        question: "Какие операции позволяет выполнить токарно-винторезный станок?(несколько вариантов ответа)",
        type: "multi",
        answers: [
          {
            text: "обтачивание наружных поверхностей",
            right: true
          },
          {
            text: "сверление",
            right: true
          },
          {
            text: "нарезание резьбы",
            right: true
          },
          {
            text: "строгание наружных и внутренних пазов",
            right: false
          },
          {
            text: "растачивание внутренних поверхностей",
            right: true
          },
          {
            text: "подрезание торцевых поверхностей",
            right: true
          },
          {
            text: "опиливание",
            right: false
          },
          {
            text: "отрезание детали и протачивание канавок",
            right: true
          },
          {
            text: "фрезерование наружных плоскостей",
            right: false
          }
        ]
      },
      {
        question: "Какая часть токарно-винторезного станка, предназначена для закрепления и оперативной смены резцов?",
        type: "once",
        answers: [
          {
            text: "Резцедержатель",
            right: true
          },
          {
            text: "Метчикодержатель",
            right: false
          },
          {
            text: "Трёхкулочковый патрон",
            right: false
          },
          {
            text: "Патрон",
            right: false
          }
        ]
      },
      {
        question: "Какую роль в токарно-винторезном станке играет суппорт?",
        type: "once",
        answers: [
          {
            text: "обеспечивает ручную продольную подачу резца",
            right: false
          },
          {
            text: "обеспечивает механическую продольную подачу резца",
            right: false
          },
          {
            text: "обеспечивает поперечную подачу резца",
            right: false
          },
          {
            text: "обеспечивает механическую и ручную продольную подачу резца",
            right: true
          }
        ]
      },
      {
        question: "Каких фрез не бывает?",
        type: "once",
        answers: [
          {
            text: "Комбинированных",
            right: true
          },
          {
            text: "Торцевых",
            right: false
          },
          {
            text: "Дисковых",
            right: false
          },
          {
            text: "Фасонных",
            right: false
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "Как называется эта часть станка?",
        image: "../assets/images/1.jpg",
        answers: [
          {
            text: "Станина",
            right: true
          },
          {
            text: "Шпиндель",
            right: false
          },
          {
            text: "Резцедержатель",
            right: false
          },
          {
            text: "Задняя бабка",
            right: false
          }
        ]
      },
      {
        question: "Какой цифрой на схеме обозначена коробка подач?",
        image: "../assets/images/2.png",
        answers: [
          {
            text: "1",
            right: true
          },
          {
            text: "2",
            right: false
          },
          {
            text: "12",
            right: false
          },
          {
            text: "10",
            right: false
          }
        ]
      },
      {
        question: 'Установите соответствие видов металлорежущих станков',
        type: 'sort',
        image: '',
        answers: [
          {
            text: [ "сверлильный","токарный","фрезерный",  "шлифовальный" ],
            answer: ["фрезерный", "токарный", "сверлильный", "шлифовальный" ],
            images: ["../assets/images/sort1.jpg", "../assets/images/sort2.jpg", "../assets/images/sort3.jpg","../assets/images/sort4.jpg"]
          }
        ]
      },
      {
        question: "Какой это станок?",
        image: "../assets/images/3.jpg",
        answers: [
          {
            text: "С ЧПУ",
            right: true
          },
          {
            text: "Токарно-винторезный",
            right: false
          },
          {
            text: "Сверлильный",
            right: false
          }
        ]
      },
      {
        question: "Какой это станок?",
        image: "../assets/images/4.png",
        answers: [
          {
            text: "Токарно-винторезный",
            right: false
          },
          {
            text: "С ЧПУ",
            right: false
          },
          {
            text: "Заточный",
            right: true
          }
        ]
      },
      {
        question: "Какой это станок?",
        image: "../assets/images/5.jpg",
        answers: [
          {
            text: "С ЧПУ",
            right: false
          },
          {
            text: "Заточный",
            right: false
          },
          {
            text: "Токарно-винторезный",
            right: true
          }
        ]
      },
      {
        question: "Какой цифрой на схеме показана задняя бабка?",
        image: "../assets/images/6.png",
        answers: [
          {
            text: "5",
            right: true
          },
          {
            text: "3",
            right: false
          },
          {
            text: "1",
            right: false
          },
          {
            text: "2",
            right: false
          }
        ]
      },
      {
        question: "Какой цифрой на схеме показана передняя бабка?",
        image: "../assets/images/7.png",
        answers: [
          {
            text: "1",
            right: false
          },
          {
            text: "2",
            right: true
          },
          {
            text: "3",
            right: false
          },
          {
            text: "4",
            right: false
          }
        ]
      },
      {
        question: "Что это?",
        image: "../assets/images/8.jpg",
        answers: [
          {
            text: "Резцедержатель",
            right: false
          },
          {
            text: "Тиски",
            right: true
          },
          {
            text: "Задняя бабка",
            right: false
          },
          {
            text: "Передняя бабка",
            right: false
          }
        ]
      },
      {
        question: "Что это?",
        image: "../assets/images/9.jpg",
        answers: [
          {
            text: "Задняя бабка",
            right: false
          },
          {
            text: "Передняя бабка",
            right: false
          },
          {
            text: "Резец",
            right: true
          }
        ]
      },
      {
        question: "Как называется эта часть станка?",
        image: "../assets/images/10.jpg",
        answers: [
          {
            text: "Суппорт",
            right: false
          },
          {
            text: "Задняя бабка",
            right: true
          },
          {
            text: "Передняя бабка",
            right: false
          },
          {
            text: "Коробка подач",
            right: false
          }
        ]
      }
    ]
  },
  contentinf: ` 
    <b> ФГОС СПО:</b <br>
    <p> Федеральный государственный образовательный стандарт среднего профессионального
    образования по укрупненной группе профессий 15.00.00 Машиностроение, по профессии 15.01.32
    Оператор станков с программным управлением; утвержден приказом Министерства образования
    и науки Российской Федерации от 09.12.2016 г. № 1555</p>
    <b> ПОП-П:</b <br>
    <p>15.01.32 Оператор станков с программным управлением</p>
    <b> Профессиональный модуль:</b>
    <p> ПМ 01 Изготовление деталей на металлорежущих станках различного вида и типа по стадиям
    технологического процесса </p>
    <b> МДК 01.01: </b>
    <p> Изготовление деталей на металлорежущих станках различного вида и типа </p>
    <b> Раздел: </b>
    <p>  Обработка деталей на металлорежущих станках различного вида и типа</p>
    <b> Тема: </b>
    <p> Металлообрабатывающие станки различных типов </p>
    `,
  keywords: [
    {
      word: "Токарный станок",
      description: "станок для обработки резанием заготовок из металлов, древесины и других материалов в виде тел вращения."
    },
    {
      word: "Сверлильный станок",
      description: "группа металлорежущих станков, предназначенных для получения сквозных и глухих отверстий в сплошном материале, для чистовой обработки, расточки отверстий, образованных в заготовке каким-либо другим способом, для нарезания внутренних резьб, для зенкования торцовых поверхностей."
    },
    {
      word: "Расточной агрегатный станок",
      description: "металлорежущий станок, который состоит в основном из оптимального числа деталей (унифицированных) кинематически не связанных между собой агрегатов."
    },
    {
      word: "Шлифовальный станок",
      description: "станки, предназначенные для шлифования материалов, в том числе для круглого наружного, круглого внутреннего шлифования, обработки плоскостей."
    },
    {
      word: "Зубообрабатывающий станок",
      description: "оборудование, с помощью которого выполняется изготовление зубчатых колес, червяков и прочих элементов зацеплений зубчатого типа."
    },
    {
      word: "Фрезерный станок",
      description: "группа металлорежущих и деревообрабатывающих станков в классификации по виду обработки."
    },
    {
      word: "Привод",
      description: "совокупность механизмов, передающих движение от источника энергии (двигателя) до элемента выполняющего заданное движение станка, т.е. к рабочим или, иначе говоря, исполнительным органам станка."
    },
    {
      word: "Наладка",
      description: "комплекс мероприятий, направленных на обеспечение стабильной и безопасной работы станка на производстве."
    }
  ],
  advice: `
  <h3 style="margin:8px">  Рекомендации для обучающегося (самостоятельная работа) </h3>

  <ul>
      <li>Повторите ранее пройденный материал (МДК 01.01 Изготовление деталей на
        металлорежущих станках различного вида и типа, темы «Охрана труда», «Основы
        резания металлов»).</li>
      <li>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите
      динамическую инфографику по теме «Металлообрабатывающие станки различных
      типов».</li>
      <li>Если в процессе изучения материала возникнут вопросы, запишите их для
      дальнейшего обсуждения с преподавателем и/или с группой обучающихся. </li>
      <li>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и
      умений при изучении модуля: 
      <ul>
      <li>выбирать и подготавливать к работе универсальные, специальные
      приспособления, режущий и контрольно-измерительный инструмент;</li>
      <li>конструктивные особенности, правила управления, подналадки и проверки на
      точность металлорежущих станков различного вида и типа (сверлильных,
      токарных, фрезерных, копировальных, шпоночных и шлифовальных).</li>
      </ul>
      <li>При необходимости просмотрите материал еще раз.</li>
      <li>Возвращайтесь к наиболее сложным аспектам темы.</li>
      <li>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз. </li>
  </.ul>
  <h3 style="margin:8px">  Рекомендации для преподавателя </h3>

  <ul>
      <li>организовать просмотр динамической инфографики и последующую беседу по
      уточнению и конкретизации первичных знаний;</li>
      <li>создать условия для освоения обучающимися знаний в форме интерактивной
      деятельности;</li>
      <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию
      как основному инструменту достижения личного и профессионального успеха;</li>
      <li>познакомить обучающихся с типами и видами металлообрабатывающих станков, их
      устройством, правилами применения;</li>
      <li>содействовать установлению в сознании обучающихся устойчивых связей между
      накопленным и новым опытом познавательной деятельности;</li>
      <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
  </ul>
  

  
  
  
  `
}