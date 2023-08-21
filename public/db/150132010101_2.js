export default {
  theme: "Формы заготовок и технология их изготовления",
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
    type: "slides",
    video: "https://storage.yandexcloud.net/coks-video/150132010101.mp4",
    slides: [
      "src/assets/slides/1.jpg",
      "src/assets/slides/2.jpg",
      "src/assets/slides/3.jpg",
      "src/assets/slides/4.jpg",
      "src/assets/slides/5.jpg",
      "src/assets/slides/6.jpg",
      "src/assets/slides/7.jpg",
      "src/assets/slides/8.jpg",
      "src/assets/slides/9.jpg",
      "src/assets/slides/10.jpg",
      "src/assets/slides/11.jpg",
      "src/assets/slides/12.jpg"
    ]
  },
  test: {
    questions: [
      {
        question: "Заготовка, получаемая заполнением расплавляемым материалом литейной формы.",
        type: "once",
        answers: [
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Отливка",
            right: true
          },
          {
            text: "Прокат",
            right: false
          }
        ]
      },
      {
        question: "Заготовка из деформируемого при нагреве (чаще всего) материала, такого как сталь.",
        type: "once",
        answers: [
          {
            text: "Поковка",
            right: true
          },
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Прокат",
            right: false
          },
          {
            text: "Отливка",
            right: false
          }
        ]
      },
      {
        question: "Заготовку получают в штампе (матрице), обычно состоящей из двух частей.",
        type: "once",
        answers: [
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Штамповка",
            right: true
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Прокат",
            right: false
          }
        ]
      },
      {
        question: "Вариант штамповки без подогрева, со значительной степенью деформации материала (высадка, протяжка, калибровка, осадка, чеканка и другие).",
        type: "once",
        answers: [
          {
            text: "Холодная листовая штамповка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: true
          },
          {
            text: "Горячая листовая штамповка",
            right: false
          },
          {
            text: "Прессование",
            right: false
          }
        ]
      },
      {
        question: "Штамповка заготовок корпусных элементов толщиной до 8 мм. Позволяет значительно упрочнить материал, если применяется двухфазная ферритно-мартенситная сталь.",
        type: "once",
        answers: [
          {
            text: "Холодная листовая штамповка",
            right: true
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          },
          {
            text: "Горячая листовая штамповка",
            right: false
          },
          {
            text: "Прессование",
            right: false
          }
        ]
      },
      {
        question: "Штамповка заготовок корпусных элементов более 8 мм. Экономичная альтернатива литью (бесшовные, сварные трубы).",
        type: "once",
        answers: [
          {
            text: "Холодная листовая штамповка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          },
          {
            text: "Горячая листовая штамповка",
            right: true
          },
          {
            text: "Прессование",
            right: false
          }
        ]
      },
      {
        question: "Заготовкой в машиностроении (производстве) называют предмет.",
        type: "once",
        answers: [
          {
            text: "Производства",
            right: true
          },
          {
            text: "Обработки",
            right: false
          },
          {
            text: "Исполнения",
            right: false
          },
          {
            text: "Создания",
            right: false
          }
        ]
      },
      {
        question: "Выберите правильные вариантов отливок.",
        type: "multi",
        answers: [
          {
            text: "В металлические формы",
            right: false
          },
          {
            text: "В песчанно-глинистые формы",
            right: true
          },
          {
            text: "В чугунные формы",
            right: false
          },
          {
            text: "В бетонные формы",
            right: false
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "Установите соответствие между изображением процесса и названием.",
        image: "../assets/images/1.jpg",
        answers: [
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Точная вырубка",
            right: true
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между изображением процесса и названием.",
        image: "../assets/images/2.jpg",
        answers: [
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Отливка",
            right: true
          },
          {
            text: "Точная вырубка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между изображением процесса и названием.",
        image: "../assets/images/3.jpg",
        answers: [
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Точная вырубка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: true
          }
        ]
      },
      {
        question: "Установите соответствие между изображением процесса и названием.",
        image: "../assets/images/4.jpg",
        answers: [
          {
            text: "Штамповка",
            right: true
          },
          {
            text: "Поковка",
            right: false
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Точная вырубка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          }
        ]
      },
      {
        question: "Установите соответствие между изображением процесса и названием.",
        image: "../assets/images/5.jpg",
        answers: [
          {
            text: "Штамповка",
            right: false
          },
          {
            text: "Поковка",
            right: true
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Точная вырубка",
            right: false
          },
          {
            text: "Холодная объемная штамповка",
            right: false
          }
        ]
      }
    ]
  },
  contentinf: "",
  keywords: [
    {
      word: "",
      description: ""
    }
  ]
}