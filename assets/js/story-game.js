const storyDiv = document.getElementById("story");
const optionsDiv = document.getElementById("options");

let answers = [];

const questions = [
  {
    question: "Yoğun sisli ormana girdin. Uzakta bir ışık görüyorsun. Ne yaparsın?",
    options: ["Işığa doğru ilerlerim", "Olduğum yerde beklerim"]
  },
  {
    question: "Yürürken yerde eski bir harita buldun. Ne yaparsın?",
    options: ["Haritayı alırım", "Dokunmadan yoluma devam ederim"]
  },
  {
    question: "Birden çalılıklardan bir ses geliyor. Tepkin ne olur?",
    options: ["Sesin geldiği yere giderim", "Saklanırım"]
  },
  {
    question: "Karşına gizemli bir yabancı çıktı. Sana yardım teklif ediyor.",
    options: ["Yardımı kabul ederim", "Reddederim"]
  },
  {
    question: "Önünde iki yol var: biri karanlık mağara, biri aydınlık patika.",
    options: ["Mağaraya girerim", "Patikadan ilerlerim"]
  },
  {
    question: "Son olarak büyük bir sandık buldun. Açacak mısın?",
    options: ["Evet açarım", "Hayır açmam"]
  }
];

let currentQuestion = 0;

function showQuestion() {
  if (currentQuestion < questions.length) {
    storyDiv.innerText = questions[currentQuestion].question;
    optionsDiv.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => selectAnswer(option);
      optionsDiv.appendChild(button);
    });
  } else {
    showEnding();
  }
}

function selectAnswer(answer) {
  answers.push(answer);
  currentQuestion++;
  showQuestion();
}

function showEnding() {
  let braveScore = 0;

  answers.forEach(ans => {
    if (
      ans.includes("ilerlerim") ||
      ans.includes("alırım") ||
      ans.includes("giderim") ||
      ans.includes("kabul") ||
      ans.includes("Mağara") ||
      ans.includes("açarım")
    ) {
      braveScore++;
    }
  });

  let endingText = "";

  if (braveScore >= 4) {
    endingText = "🌟 Cesur seçimlerin sayesinde sandığın içinden çıkan büyülü taş seni ormanın koruyucusu yaptı! Artık herkes senin adını fısıldıyor...";
  } else if (braveScore >= 2) {
    endingText = "🌲 Dikkatli ama temkinli adımların sayesinde ormandan sağ çıktın. Ancak sandığın sırrı hâlâ gizemini koruyor...";
  } else {
    endingText = "🌑 Korkuların seni geri adım attırdı. Ormanın derinliklerinde hâlâ keşfedilmeyi bekleyen sırlar var...";
  }

  storyDiv.innerText = endingText;
  optionsDiv.innerHTML = "";

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "Yeniden Başla";
  restartBtn.classList.add("restart");
  restartBtn.onclick = restartGame;

  optionsDiv.appendChild(restartBtn);
}

function restartGame() {
  answers = [];
  currentQuestion = 0;
  showQuestion();
}

showQuestion();