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
            right: false
          },
          {
            text: "Прокат",
            right: true
          }
        ]
      },
      {
        question: "Заготовка из деформируемого при нагреве (чаще всего) материала, такого как сталь.",
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
            text: "Прокат",
            right: false
          },
          {
            text: "Отливка",
            right: true
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
            right: false
          },
          {
            text: "Отливка",
            right: false
          },
          {
            text: "Прокат",
            right: true
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
            right: false
          },
          {
            text: "Горячая листовая штамповка",
            right: false
          },
          {
            text: "Прессование",
            right: true
          }
        ]
      },
      {
        question: "Штамповка заготовок корпусных элементов толщиной до 8 мм. Позволяет значительно упрочнить материал, если применяется двухфазная ферритно-мартенситная сталь.",
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
            right: false
          },
          {
            text: "Прессование",
            right: true
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
            right: false
          },
          {
            text: "Прессование",
            right: true
          }
        ]
      },
      {
        question: "Заготовкой в машиностроении (производстве) называют предмет.",
        type: "once",
        answers: [
          {
            text: "Производства",
            right: false
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
            right: true
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
            text: "В песчанно-глинястые формы",
            right: false
          },
          {
            text: "В чугунные формы",
            right: false
          },
          {
            text: "В бетонные формы",
            right: true
          }
        ]
      },
      {
        question: "Литейная форма представляет собой устройство, предназначенное для _____.",
        type: "once",
        answers: [
          {
            text: "Заливки металла",
            right: false
          },
          {
            text: "Образования отливки",
            right: false
          },
          {
            text: "Прессования металла",
            right: false
          },
          {
            text: "Штамповки металла",
            right: true
          }
        ]
      },
      {
        question: "Анлаки.",
        type: "once",
        answers: [
          {
            text: "Процесс деформации металла.",
            right: false
          },
          {
            text: "Приём готовой поковки отделом технического контроля.",
            right: false
          },
          {
            text: "Термическая обработка поковки.",
            right: false
          },
          {
            text: "Резка проката различной конфигурации на необходимые размеры.",
            right: true
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
        image: "../assets/images/4.jpg",
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
        image: "../assets/images/5.jpg",
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