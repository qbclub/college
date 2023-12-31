export default {
  theme: "Охрана труда на предприятии",
  fgos: {
    code: "15.01.33",
    name: "Токарь на станках с числовым программным управлением"
  },
  pm: {
    code: "01",
    name: "Изготовление изделий на токарных станках по стадиям технологического процесса в соответствии с требованиями охраны труда и экологической безопасности"
  },
  mdk: {
    code: "01.01",
    name: "Технология обработки на токарных станках"
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
      "../assets/slides/18.jpg",
      "../assets/slides/19.jpg",
      "../assets/slides/20.jpg"
    ]
  },
  video: "",
  test: {
    questions: [
      {
        question: "По результатам расследования несчастного случая на производстве в обязательном порядке на каждого из пострадавшего составляется акт:",
        type: "once",
        answers: [
          {
            text: "о расследовании несчастного случая;",
            right: false
          },
          {
            text: "о несчастном случае на производстве в форме Н-1;",
            right: true
          },
          {
            text: "произвольной формы;",
            right: false
          },
          {
            text: "заключение государственного инспектора труда.",
            right: false
          }
        ]
      },
      {
        question: "Кто определяет степень тяжести травмы, полученной работником на производстве?",
        type: "once",
        answers: [
          {
            text: "работодатель",
            right: false
          },
          {
            text: "учреждение здравоохранения",
            right: true
          },
          {
            text: "сотрудник полиции",
            right: false
          },
          {
            text: "государственный инспектор труда",
            right: false
          }
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "Несчастный случай на производстве - {} серьезного травматического воздействия на работника опасного производственного фактора при выполнении им трудовых обязанностей или заданий руководителя работ, в результате которого произошла временная (не ниже нормативно установленной длительности) или постоянная (стойкая) потеря трудоспособности или наступила смерть пострадавшего.",
            answer: "случай",
          },
        ]
      },
      {
        question: "Акт по форме Н-1 о несчастном случае хранится:",
        type: "once",
        answers: [
          {
            text: "в течение 45 лет по основному месту работы",
            right: true
          },
          {
            text: "до пенсии пострадавшего",
            right: false
          },
          {
            text: "пожизненно у пострадавшего",
            right: false
          },
          {
            text: "пока пострадавший трудится на предприятии, где произошёл несчастный случай",
            right: false
          }
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "В состав комиссии по расследованию тяжелого несчастного случая входят не менее {} человек.",
            answer: "7",
          },
        ]
      },
      {
        question: "Введите пропущенное слово",
        type: "input",
        answers: [
          {
            text: "Расследование - {} сбора данных и исследования причин и фактов происшествия с целью его квалификации",
            answer: "процедура",
          },
        ]
      },
      {
        question: "Установите порядок проведения расследования несчастных случаев",
        type: "sort",
        answers: [
          {
            text: ['Формирование выводов по расследованию','комиссия выявляет и опрашивает очевидцев происшествия, лиц, допустивших нарушения требований охраны труда, получает необходимую информацию от работодателя (его представителя) и по возможности объяснения от пострадавшего', 'выполнение технических расчетов, проведение лабораторных исследований, испытаний, других экспертных работ и привлечение в этих целях специалистов-экспертов.', ],
            answer: ['комиссия выявляет и опрашивает очевидцев происшествия, лиц, допустивших нарушения требований охраны труда, получает необходимую информацию от работодателя (его представителя) и по возможности объяснения от пострадавшего', 'выполнение технических расчетов, проведение лабораторных исследований, испытаний, других экспертных работ и привлечение в этих целях специалистов-экспертов.', 'Формирование выводов по расследованию'],
          },
        ]
      },
      {
        question: "Как называется случай серьезного травматического воздействия на работника опасного производственного фактора при выполнении им трудовых обязанностей или заданий руководителя работ, в результате которого произошла временная или постоянная потеря трудоспособности или наступила смерть пострадавшего?",
        type: "once",
        answers: [
          {
            text: "несчастный случай на производстве",
            right: true
          },
          {
            text: "несчастный случай, не связанный с производством",
            right: false
          },
          {
            text: "несчастный случай со смертельным исходом",
            right: false
          },
          {
            text: "расследование",
            right: false
          }
        ]
      },
      {
        question: "Для расследования несчастного случая на предприятии работодатель незамедлительно создаёт комиссию в составе не менее:",
        type: "once",
        answers: [
          {
            text: "5 человек",
            right: false
          },
          {
            text: "4 человек",
            right: false
          },
          {
            text: "3 человек",
            right: true
          },
          {
            text: "6 человек",
            right: false
          }
        ]
      },
      {
        question: "Состав комиссии по расследованию несчастного случая утверждает:",
        type: "once",
        answers: [
          {
            text: "государственный инспектор труда",
            right: false
          },
          {
            text: "непосредственный руководитель подразделения, где произошёл несчастный случай",
            right: false
          },
          {
            text: "председатель профкома",
            right: false
          },
          {
            text: "работодатель",
            right: true
          }
        ]
      },
      {
        question: "Укажите сроки расследования несчастного случая с тяжелыми последствиями:",
        type: "once",
        answers: [
          {
            text: "5 дней",
            right: false
          },
          {
            text: "3 дня",
            right: false
          },
          {
            text: "15 дней",
            right: true
          },
          {
            text: "10 дней",
            right: false
          }
        ]
      },
      {
        question: "Должен ли включаться в состав комиссии по расследованию несчастного случая потерпевший или лицо, представляющее его интересы?",
        type: "once",
        answers: [
          {
            text: "не должен включаться, но имеет право принимать участие в ее заседаниях;",
            right: true
          },
          {
            text: "должен включаться во всех случаях;",
            right: false
          },
          {
            text: "должен включаться только при наступлении несчастного случая с тяжелыми последствиями;",
            right: false
          },
          {
            text: "должен включаться только при наступлении несчастного случая с возможной инвалидностью потерпевшего.",
            right: false
          }
        ]
      },
      {
        question: "Кто должен быть назначен председателем комиссии по расследованию несчастного случая (кроме случаев специального расследования)?",
        type: "once",
        answers: [
          {
            text: "руководитель (специалист) службы охраны труда или должностное лицо, на которое работодателем возложено исполнение функций специалиста по вопросам охраны труда",
            right: true
          },
          {
            text: "работодатель",
            right: false
          },
          {
            text: "должностное лицо территориального органа Госнадзорохрантруда",
            right: false
          },
          {
            text: "представитель рабочего органа исполнительной дирекции Фонда социального страхования от несчастных случаев на производстве и профессиональных заболеваний по местонахождению предприятия от несчастных случаев на производстве и профессиональных заболеваний по местонахождению предприятия.",
            right: false
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/2.jpg",
        answers: [
          {
            text: "Случаи, произошедшие при следовании на работу и с работы на общественном или личном транспорте, выполнении трудовых обязанностей, командировочных заданий.",
            right: false
          },
          {
            text: "Случаи, произошедшие в быту(дома) или при нахождении в организации в нерабочее время.",
            right: false
          },
          {
            text: "Случай, произошедший на территории организации или вне её, при выполнении работы по заданию работодателя.",
            right: false
          },
          {
            text: "Случаи, произошедшие при изготовлении предметов в личных целях, самовольном использовании транспорта организации, хищении имущества или в состоянии опьянения",
            right: true
          }
        ]
      },
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/6.jpg",
        answers: [
          {
            text: "Случаи, произошедшие при следовании на работу и с работы на общественном или личном транспорте, выполнении трудовых обязанностей, командировочных заданий.",
            right: true
          },
          {
            text: "Случаи, произошедшие в быту(дома) или при нахождении в организации в нерабочее время.",
            right: false
          },
          {
            text: "Случай, произошедший на территории организации или вне её, при выполнении работы по заданию работодателя.",
            right: false
          },
          {
            text: "Случаи, произошедшие при изготовлении предметов в личных целях, самовольном использовании транспорта организации, хищении имущества или в состоянии опьянения",
            right: false
          }
        ]
      },
      {
        question: 'Установите соответствие по составам комиссий, создаваемых для расследования несчастных случаев на производстве:',
        type: 'sort',
        image: '',
        answers: [
          {
            text: ["Состав комиссии по расследованию тяжелого несчастного случая.", "Состав комиссии по расследованию несчастного случая со смертельным исходом.","Состав комиссии по расследованию группового несчастного случая с тяжелыми последствиями.",  "Состав комиссии по расследованию легкого несчастного случая."],
            answer: ["Состав комиссии по расследованию группового несчастного случая с тяжелыми последствиями.", "Состав комиссии по расследованию тяжелого несчастного случая.", "Состав комиссии по расследованию несчастного случая со смертельным исходом.", "Состав комиссии по расследованию легкого несчастного случая."],
            images: ["../assets/images/sort1_1.png", "../assets/images/sort1_2.png", "../assets/images/sort1_3.png", "../assets/images/sort1_4.png"]
          }
        ]
      },
      {
        question: 'Установите соответствие термина и определения',
        type: 'sort',
        image: '',
        answers: [
          {
            text: ["Несчастные случаи, не связанные с работой, но произошедшие на производстве.", "Бытовые несчастные случаи","Несчастный случай на производстве.", "Несчастный случай вне производства, но связанный с работой.", ],
            answer: ["Несчастный случай на производстве.", "Несчастный случай вне производства, но связанный с работой.", "Несчастные случаи, не связанные с работой, но произошедшие на производстве.", "Бытовые несчастные случаи"],
            images: ["../assets/images/sort2_1.png", "../assets/images/sort2_2.png", "../assets/images/sort2_3.png","../assets/images/sort2_4.png", ]
          }
        ]
      },
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/7.jpg",
        answers: [
          {
            text: "Случаи, произошедшие при следовании на работу и с работы на общественном или личном транспорте, выполнении трудовых обязанностей, командировочных заданий.",
            right: false
          },
          {
            text: "Случаи, произошедшие в быту(дома) или при нахождении в организации в нерабочее время.",
            right: true
          },
          {
            text: "Случай, произошедший на территории организации или вне её, при выполнении работы по заданию работодателя.",
            right: false
          },
          {
            text: "Случаи, произошедшие при изготовлении предметов в личных целях, самовольном использовании транспорта организации, хищении имущества или в состоянии опьянения",
            right: false
          }
        ]
      },
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/8.jpg",
        answers: [
          {
            text: "Случаи, произошедшие при следовании на работу и с работы на общественном или личном транспорте, выполнении трудовых обязанностей, командировочных заданий.",
            right: false
          },
          {
            text: "Случаи, произошедшие в быту(дома) или при нахождении в организации в нерабочее время.",
            right: false
          },
          {
            text: "Случай, произошедший на территории организации или вне её, при выполнении работы по заданию работодателя.",
            right: true
          },
          {
            text: "Случаи, произошедшие при изготовлении предметов в личных целях, самовольном использовании транспорта организации, хищении имущества или в состоянии опьянения",
            right: false
          }
        ]
      },
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/9.jpg",
        answers: [
          {
            text: "Получение сотрудником предприятия травмы, которая несёт прямую угрозу жизни и/или здоровью сотрудника. ",
            right: false
          },
          {
            text: "Инцидент на рабочем месте, в результате которого на работающего воздействие опасных и вредных производственных факторов привело к летальному исходу.",
            right: false
          },
          {
            text: "Происшествие, приведшие к производственной травме двух и более сотрудников. ",
            right: true
          },
          {
            text: "Получение сотрудником предприятия травмы, не требующей продолжительной реабилитации и позволяющей приступить к трудовой деятельности после выздоровления.",
            right: false
          }
        ]
      },
      {
        question: "Найдите правильное соответствие термина и определения:",
        image: "../assets/images/10.jpg",
        answers: [
          {
            text: "Получение сотрудником предприятия травмы, которая несёт прямую угрозу жизни и/или здоровью сотрудника. ",
            right: false
          },
          {
            text: "Инцидент на рабочем месте, в результате которого на работающего воздействие опасных и вредных производственных факторов привело к летальному исходу.",
            right: false
          },
          {
            text: "Происшествие, приведшие к производственной травме двух и более сотрудников. ",
            right: false
          },
          {
            text: "Получение сотрудником предприятия травмы, не требующей продолжительной реабилитации и позволяющей приступить к трудовой деятельности после выздоровления.",
            right: true
          }
        ]
      }
    ]
  },
  contentinf: ` 
  <b> ФГОС СПО:</b <br>
  <p> Федеральный государственный образовательный стандарт среднего профессионального образования по укрупненной группе  профессий 15.00.00 Машиностроение, профессии 15.01.33 Токарь на станках с числовым программным управлением; утвержден приказом Министерства образования и науки Российской Федерации от 09.12.2016 г. № 1544</p>
  <b> ПОП-П:</b <br>
  <p>15.01.33 Токарь на станках с числовым программным управлением</p>
  <b> Профессиональный модуль:</b>
  <p> ПМ 01 Изготовление деталей на токарных станках по стадиям технологического процесса в соответствии с требованиями охраны труда и экологической безопасности </p>
  <b> МДК 01.01: </b>
  <p> Технология обработки на токарных станках </p>
  <b> Раздел: </b>
  <p> Изготовление изделий на токарных станках по стадиям технологического процесса в соответствии с требованиями охраны труда и экологической безопасности</p>
  <b> Тема: </b>
  <p> Охрана труда на предприятии </p>
  `,
  keywords: 
    [
      {
        word: "Трудовой кодекс Российской Федерации",
        description: "Свод законов, регулирующих трудовые отношения между работодателем и работником. Трудовой кодекс обязателен для соблюдения на всей территории РФ. Нормы трудового кодекса РФ распространяются равным образом как на служащих государственных и муниципальных учреждений, так и на сотрудников коммерческих структур."
      },
      {
        word: "Межгосударственный стандарт ССБТ (Система стандартов безопасности труда)",
        description: "Одна из систем государственной системы стандартизации (ГСС), которой присвоен шифр (номер) 12. В рамках этой системы производятся взаимная увязка и систематизация всей существующей нормативной и нормативно-технической документации по безопасности труда, в том числе многочисленных норм и правил по технике безопасности и производственной санитарии как общефедерального, так и отраслевого значения."
      },
      {
        word: "Несчастный случай на производстве",
        description: "Случай серьезного травматического воздействия на работника опасного производственного фактора при выполнении им трудовых обязанностей или заданий руководителя работ, в результате которого произошла временная (не ниже нормативно установленной длительности) или постоянная (стойкая) потеря трудоспособности или наступила смерть пострадавшего."
      },
      {
        word: "Несчастный случай, не связанный с производством",
        description: "Несчастный случай, вызванный условиями труда или работы, но квалифицированный как не являющийся подлежащим учету и компенсации 'несчастным случаем на производстве'."
      },
      {
        word: "Несчастный случай со смертельным исходом",
        description: "Несчастный случай, в результате которого наступила смерть пострадавшего."
      },
      {
        word: "Расследование",
        description: "Процедура сбора данных и исследования причин и фактов происшествия с целью его квалификации."
      }
    
  ],
  advice:`
  <h3 style="margin:8px">  Рекомендации для обучающегося (самостоятельная работа) </h3>

  <ul>
      <li>Повторите ранее пройденный материал (ОП.03 Безопасность жизнедеятельности). </li>
      <li>Ознакомьтесь с теоретическим материалом по новой теме. Просмотрите динамическую инфографику по теме «Охрана труда на предприятии». </li>
      <li>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся. </li>
      <li>Обратите внимание на основные вопросы, подтверждающие взаимосвязь знаний и умений при изучении модуля: 
      осуществлять подготовку к работе и обслуживание рабочего места токаря в соответствии с требованиями охраны труда, производственной санитарии, пожарной безопасности и электробезопасности;
      соблюдать правила безопасности труда, производственной санитарии и пожарной безопасности;
      правила подготовки к работе и содержания рабочих мест токаря, требования охраны труда, производственной санитарии, пожарной безопасности и электробезопасности.
      </li>
      <li>При необходимости просмотрите материал еще раз.</li>
      <li>Возвращайтесь к наиболее сложным аспектам темы.</li>
      <li>Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз. </li>
  </ul>
  <h3 style="margin:8px">  Рекомендации для преподавателя </h3>
  <ul>
      <li>организовать просмотр динамической инфографики и последующую беседу по уточнению и конкретизации первичных знаний;</li>
      <li>создать условия для освоения обучающимися знаний в форме интерактивной деятельности;</li>
      <li>формировать у обучающихся мотивацию к усвоению нового материала, образованию как основному инструменту достижения личного и профессионального успеха</li>
      <li>познакомить обучающихся с правилами безопасности труда, производственной санитарии и пожарной безопасности;</li>
      <li>познакомить с правилами подготовки к работе и содержания рабочих мест токаря, требования охраны труда, производственной санитарии, пожарной безопасности и электробезопасности;</li>
      <li>содействовать установлению в сознании обучающихся устойчивых связей между накопленным и новым опытом познавательной деятельности;</li>
      <li>фиксировать предложенные обучающимися гипотезы, курировать их обсуждение.</li>
  </ul>
  `
}