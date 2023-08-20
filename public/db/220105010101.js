export default {
  theme: "Тепло и массообменные процессы переработки сырья",
  fgos: {
    code: "22.01.05",
    name: "Аппаратчик - оператор в производстве цветных металлов"
  },
  pm: {
    code: "01",
    name: "Подготовка и ведение операций технологического цикла производства цветных металлов"
  },
  mdk: {
    code: "01.01",
    name: "Технология производства цветных металлов и сплавов (по типам производства)"
  },
  interactive: {
    type: "video",
    video: "https://storage.yandexcloud.net/coks-video/220105010101.m4v",
    slides: [
      "src/assets/slides/1.jpg",
      "src/assets/slides/2.jpg",
      "src/assets/slides/3.jpg"
    ]
  },
  test: {
    questions: [
      {
        question: "Перегородки в кожухотрубном теплообменнике предназначены для",
        type: "once",
        answers: [
          {
            text: "увеличения скорости теплоносителя",
            right: true
          },
          {
            text: "увеличения поверхности теплообмненна",
            right: false
          }
        ]
      },
      {
        question: "Компенсация различного температурного удлинения труб и кожуха достигается следующими способами:",
        type: "multi",
        answers: [
          {
            text: "установкой перегородок",
            right: false
          },
          {
            text: "закреплением труб в решётках на сальниках",
            right: true
          },
          {
            text: "устройством подвижной трубной решётки",
            right: true
          },
          {
            text: "установкой линзового компенсатора на корпусе",
            right: false
          }
        ]
      },
      {
        question: "Какой недостаток присущ пластинчатым теплообменникам?",
        type: "once",
        answers: [
          {
            text: "точность сборки для сохранения герметичности",
            right: true
          },
          {
            text: "температурные деформации",
            right: false
          },
          {
            text: "низкий коэффициент теплопередачи",
            right: false
          }
        ]
      },
      {
        question: "Охлаждение газа на компрессорной станции применяется для",
        type: "once",
        answers: [
          {
            text: "уменьшения температурных напряжений в стенках трубопроводов",
            right: true
          },
          {
            text: "для удобства очистки оборудования",
            right: false
          }
        ]
      },
      {
        question: "Какие недостатки присущи трубчатым теплообменникам?",
        type: "multi",
        answers: [
          {
            text: "температурные деформации",
            right: true
          },
          {
            text: "относительно низкий коэффициент теплоотдачи",
            right: true
          },
          {
            text: "сложность изготовления",
            right: false
          }
        ]
      },
      {
        question: "Конвективный массообмен между движущейся средой и жидкой (или твердой) поверхностью это -",
        type: "once",
        answers: [
          {
            text: "массоотдача",
            right: true
          },
          {
            text: "молекулярная диффузия",
            right: false
          },
          {
            text: "массоперенос",
            right: false
          },
          {
            text: "поток массы",
            right: false
          }
        ]
      },
      {
        question: "Перечислите процессы, относящиеся к массообменным:",
        type: "multi",
        answers: [
          {
            text: "Нагрев холодной стенки",
            right: false
          },
          {
            text: "Высушивание",
            right: true
          },
          {
            text: "Ректификация",
            right: true
          },
          {
            text: "Охлаждение раствора",
            right: false
          },
          {
            text: "Адсорбция",
            right: false
          },
          {
            text: "Перегонка",
            right: true
          }
        ]
      }
    ]
  },
  quiz: {
    questions: [
      {
        question: "",
        image: "../assets/images/1.jpg",
        answers: [
          {
            text: "теплообменник с плавающей головкой открытого типа",
            right: false
          },
          {
            text: "теплообменник с плавающей головкой закрытого типа",
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