 export default{
  theme: "Эксплуатация мехатронных систем",
  fgos: {
    code: "15.02.10",
    name: "Мехатроника и мобильная робототехника (по отраслям)"
  },
  pm: {
    code: "02",
    name: "Техническое обслуживание узлов и агрегатов мехатронных устройств и систем"
  },
  mdk: {
    code: "02.01",
    name: "Техническое обслуживания, ремонт и испытаний мехатронных систем"
  },
  interactive: {
    type: "video",
    video: "https://storage.yandexcloud.net/coks-video/150132010101.mp4",
    slides: []
  },
  test: {
    questions: [
      {
        question: "Рабочей средой в системе пневматики является",
        type: "multi",
        answers: [
          {
            text: "масло",
            right: false
          },
          {
            text: "воздух",
            right: true
          },
          {
            text: "вода",
            right: false
          },
          {
            text: "песок",
            right: false
          }
        ]
      },
      {
        question: "Для подачи рабочей среды в систему пневматики используются",
        type: "multi",
        answers: [
          {
            text: "шланги",
            right: true
          },
          {
            text: "провода",
            right: false
          },
          {
            text: "трубы",
            right: false
          },
          {
            text: "кабель-каналы",
            right: false
          }
        ]
      },
      {
        question: "Какой цилиндр используется в схеме подачи детали",
        type: "multi",
        answers: [
          {
            text: "трехстороннего действия",
            right: false
          },
          {
            text: "двухстороннего действия",
            right: false
          },
          {
            text: "одностороннего действия",
            right: true
          },
          {
            text: "там не было цилиндра",
            right: false
          }
        ]
      },
      {
        question: "Как называется функция присваивания обозначения элементу",
        type: "multi",
        answers: [
          {
            text: "метка",
            right: true
          },
          {
            text: "буква",
            right: false
          },
          {
            text: "символ",
            right: false
          },
          {
            text: "линия",
            right: false
          }
        ]
      },
      {
        question: "В какой программной среде составляются схемы пневмоавтоматики",
        type: "multi",
        answers: [
          {
            text: "Excel",
            right: false
          },
          {
            text: "Word",
            right: false
          },
          {
            text: "FluidSIM",
            right: true
          },
          {
            text: "Paint",
            right: false
          }
        ]
      },
      {
        question: "Как называется режим проверки работы схемы",
        type: "multi",
        answers: [
          {
            text: "проверочный",
            right: false
          },
          {
            text: "симулятор",
            right: true
          },
          {
            text: "корректирующий",
            right: false
          },
          {
            text: "схемный",
            right: false
          }
        ]
      },
      {
        question: "Какой цвет при проверке имеет линия, находящаяся под питанием",
        type: "multi",
        answers: [
          {
            text: "синий",
            right: false
          },
          {
            text: "зеленый",
            right: false
          },
          {
            text: "желтый",
            right: false
          },
          {
            text: "красный",
            right: true
          }
        ]
      },
      {
        question: "Назовите лишний элемент в схеме подачи детали",
        type: "multi",
        answers: [
          {
            text: "кнопка",
            right: false
          },
          {
            text: "лампа",
            right: true
          },
          {
            text: "распределитель",
            right: false
          },
          {
            text: "цилиндр",
            right: false
          }
        ]
      },
      {
        question: "Что необходимо использовать, чтобы не было выхода воздуха в атмосферу в схеме подачи детали",
        type: "multi",
        answers: [
          {
            text: "стопор",
            right: false
          },
          {
            text: "ключ",
            right: false
          },
          {
            text: "заглушка",
            right: true
          },
          {
            text: "катушка",
            right: false
          }
        ]
      },
      {
        question: "Для подачи рабочей среды в схему используется",
        type: "multi",
        answers: [
          {
            text: "компрессор",
            right: true
          },
          {
            text: "насос",
            right: false
          },
          {
            text: "маховик",
            right: false
          },
          {
            text: "вентилятор",
            right: false
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "",
        image: "",
        answers: [
          {
            text: "",
            right: false
          }
        ]
      }
    ]
  },
  contentinf: "",
  keywords: [
    {
      word: "Терминал подключения входов-выходов",
      description: "терминал, служащий для подключения проводами входов и выходов, которые выводятся на штекер."
    },
    {
      word: "Пневмоостров",
      description: "электропневматический блок, комплекс из нескольких отдельных распределителей (клапанов), в котором распределители (в том числе разных функций и размеров) имеют общий подвод питания и выхлоп, несколько вариантов электрического подключения (индивидуальное, многополюсный разъем, PROFINET, EtherCat, сети Fieldbus, IO-Link) и в который есть возможность встраивать различные электронные блоки, включая контроллер."
    },
    {
      word: "Контроллер электродвигателя",
      description: "устройство или группа устройств, которые могут заранее определенным образом координировать работу электродвигателя."
    },
    {
      word: "Многополюсный I/O модуль",
      description: "интерфейс для подключения измерительных приборов и исполнительных механизмов к системе управления технологическим процессом."
    },
    {
      word: "Индуктивный датчик",
      description: "бесконтактный датчик, предназначенный для контроля положения объектов из металла."
    }
  ]
}