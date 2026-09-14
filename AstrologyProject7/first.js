const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

// Based on Date, size 31
const compliments = [
  "You are naturally calm and thoughtful.",
  "You bring a gentle and sincere energy to people around you.",
  "You have a strong heart and a caring nature.",
  "You are brave, bright, and full of new ideas.",
  "You are lovable, loyal, and deeply grounded.",
  "You are flexible, social, and full of charm.",
  "You are emotionally strong and beautifully intuitive.",
  "You shine with confidence and creativity.",
  "You are graceful, smart, and very observant.",
  "You are balanced, kind, and full of peace.",
  "You are mysterious, powerful, and deeply passionate.",
  "You are adventurous, honest, and inspiring.",
  "You have a beautiful mix of wisdom and warmth.",
  "You are resilient and full of quiet confidence.",
  "You are thoughtful, artistic, and very expressive.",
  "You are energetic, inspiring, and hard to ignore.",
  "You are practical, patient, and deeply reliable.",
  "You have a bright mind and a soft heart.",
  "You are graceful, balanced, and naturally elegant.",
  "You are bold, magnetic, and full of mystery.",
  "You are sincere, disciplined, and very strong.",
  "You are emotionally rich and romantically deep.",
  "You are giving, tender, and wise beyond your years.",
  "You are creative, expressive, and full of joy.",
  "You are balanced, caring, and deeply compassionate.",
  "You are confident, loyal, and spiritually aware.",
  "You are ambitious, kind, and highly determined.",
  "You are charming, thoughtful, and naturally inspiring.",
  "You are confident, mysterious, and emotionally deep.",
  "You are gentle, intuitive, and deeply lovable.",
  "You are full of hope, love, and beautiful potential.",
];

// size 20
const victimCardCompliments = [
  "Your personality is unforgettable.",
  "You bring light to every room you enter.",
  "Your patience and kindness are rare qualities.",
  "You possess a strong and beautiful inner strength.",
  "Your ideas are inspiring and full of clarity.",
  "You have a natural ability to make others feel seen.",
  "Your presence is calm, warm, and powerful.",
  "You have a heart full of compassion and love.",
  "Your confidence grows every day.",
  "You are a source of positivity and balance.",
  "Your energy attracts good opportunities.",
  "You combine intelligence with emotional depth.",
  "You are deeply sincere and truly genuine.",
  "Your spirit is graceful and full of light.",
  "You have an amazing ability to uplift others.",
  "You are thoughtful, talented, and very lovable.",
  "Your outlook is hopeful and inspiring.",
  "You carry a quiet power that many admire.",
  "You are kind-hearted and wonderfully strong.",
  "Your future is bright, and your path is guided.",
];

const astrologyForecast = {
  Capricorn: {
    prediction:
      "A strong period is coming for work and money. You may gain clarity in your goals and receive support from people who respect your discipline.",
    recommendations: [
      "Stay focused on long-term goals.",
      "Keep your spending organized and practical.",
      "Give yourself time to recharge after busy days.",
    ],
  },
  Aquarius: {
    prediction:
      "This month may bring new friendships, fresh ideas, and a strong urge to break old patterns and try something different.",
    recommendations: [
      "Trust your instincts when making personal changes.",
      "Speak openly with people who support your growth.",
      "Balance freedom with responsibility.",
    ],
  },
  Pisces: {
    prediction:
      "Your emotional intelligence will shine, and a meaningful connection or opportunity may appear when you least expect it.",
    recommendations: [
      "Protect your energy from negativity.",
      "Follow creative or spiritual interests more closely.",
      "Be clear about your boundaries in relationships.",
    ],
  },
  Aries: {
    prediction:
      "You are likely to feel more confident and energetic, with a chance to push forward on important plans and decisions.",
    recommendations: [
      "Act fast but do not ignore details.",
      "Take breaks before stress builds up.",
      "Use your courage to start something new.",
    ],
  },
  Taurus: {
    prediction:
      "Stability and comfort may improve, especially in love, finances, and daily routines that bring peace and security.",
    recommendations: [
      "Focus on steady progress rather than quick results.",
      "Enjoy simple pleasures and healthy routines.",
      "Be open to change that improves your quality of life.",
    ],
  },
  Gemini: {
    prediction:
      "Communication and learning will help you move forward. A helpful conversation or new connection may change your path.",
    recommendations: [
      "Stay organized to avoid distraction.",
      "Speak clearly and listen carefully.",
      "Keep your mind active with learning and people.",
    ],
  },
  Cancer: {
    prediction:
      "Home, family, and emotional fulfillment may become especially important. The right support will bring peace and confidence.",
    recommendations: [
      "Spend quality time with loved ones.",
      "Trust your feelings when choosing a direction.",
      "Take care of your emotional health with rest and reflection.",
    ],
  },
  Leo: {
    prediction:
      "You may receive attention, appreciation, and opportunities that match your talent, creativity, and natural confidence.",
    recommendations: [
      "Lead with warmth and honesty.",
      "Avoid overworking yourself to prove your value.",
      "Let your creativity guide you into new opportunities.",
    ],
  },
  Virgo: {
    prediction:
      "A thoughtful and productive period is ahead. Small improvements in your routine could lead to big long-term results.",
    recommendations: [
      "Be gentle with yourself when things feel overwhelming.",
      "Create order in both work and personal life.",
      "Trust your practical instincts.",
    ],
  },
  Libra: {
    prediction:
      "Relationships may become more meaningful, and balance in your life could improve if you stay honest and patient.",
    recommendations: [
      "Choose peace over unnecessary conflict.",
      "Give love and attention to the people who matter most.",
      "Take decisions after listening to both heart and mind.",
    ],
  },
  Scorpio: {
    prediction:
      "Deep transformation may happen in your life. Hidden strengths will come forward and help you grow in a powerful way.",
    recommendations: [
      "Be patient with emotional changes.",
      "Release what no longer supports your growth.",
      "Let trust build slowly in important relationships.",
    ],
  },
  Sagittarius: {
    prediction:
      "You may feel a stronger desire to explore, learn, and move toward something bigger than your current routine.",
    recommendations: [
      "Travel, study, or explore new ideas when possible.",
      "Stay open but grounded in your values.",
      "Take a step toward your next adventure.",
    ],
  },
};

function getZodiacSign(day, month) {
  const date = new Date(2024, month - 1, day);

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Aquarius";
  }

  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Pisces";
  }

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Aries";
  }

  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Taurus";
  }

  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Gemini";
  }

  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Cancer";
  }

  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Leo";
  }

  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Virgo";
  }

  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Libra";
  }

  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Scorpio";
  }

  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Sagittarius";
  }

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Capricorn";
  }

  return "Unknown";
}

function getComplimentByDate(day) {
  const index = day > 0 && day <= compliments.length ? day - 1 : 0;
  return compliments[index];
}

function getLuckyNumber(day, month) {
  return (day + month) % 10 || 10;
}

function getLuckyColor(sign) {
  const colors = {
    Capricorn: "Green",
    Aquarius: "Blue",
    Pisces: "Lavender",
    Aries: "Red",
    Taurus: "Pink",
    Gemini: "Yellow",
    Cancer: "Silver",
    Leo: "Gold",
    Virgo: "Olive",
    Libra: "White",
    Scorpio: "Maroon",
    Sagittarius: "Purple",
  };

  return colors[sign] || "Gold";
}

function renderResult(data) {
  const resultBox = document.getElementById("result");

  if (!resultBox) {
    return;
  }

  const fullName = `${data.firstName} ${data.surname}`.trim();
  const zodiac = getZodiacSign(data.date, data.month);
  const compliment = getComplimentByDate(data.date);
  const cardCompliment =
    victimCardCompliments[data.date % victimCardCompliments.length];
  const forecast = astrologyForecast[zodiac] || astrologyForecast.Capricorn;
  const recommendations = forecast.recommendations
    .map((item) => `<li>${item}</li>`)
    .join("");

  resultBox.innerHTML = `
    <div class="result-box">
      <div class="result-header">
        <div class="profile-badge">${fullName.charAt(0).toUpperCase()}</div>
        <div class="result-heading">
          <p class="result-label">Astrology Result</p>
          <h2>${fullName}</h2>
        </div>
      </div>

      <div class="result-grid">
        <div class="result-item">
          <span>Date of Birth</span>
          <strong>${data.date} ${data.month} ${data.year}</strong>
        </div>
        <div class="result-item">
          <span>Zodiac Sign</span>
          <strong>${zodiac}</strong>
        </div>
        <div class="result-item">
          <span>Lucky Number</span>
          <strong>${getLuckyNumber(data.date, data.month)}</strong>
        </div>
        <div class="result-item">
          <span>Lucky Color</span>
          <strong>${getLuckyColor(zodiac)}</strong>
        </div>
      </div>

      <div class="insight-box">
        <p class="insight-title">Your Insights</p>
        <p>${compliment} ${cardCompliment}</p>
      </div>

      <div class="detail-grid">
        <div class="detail-box">
          <p class="detail-title">Predictions</p>
          <p>${forecast.prediction}</p>
        </div>

        <div class="detail-box">
          <p class="detail-title">Recommendations</p>
          <ul class="detail-list">
            ${recommendations}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    firstName: form.firstName.value.trim(),
    surname: form.surname.value.trim(),
    date: Number(form.dateOfBirth.value),
    month: form.month.selectedIndex,
    year: Number(form.year.value),
  };

  if (
    !data.firstName ||
    !data.surname ||
    !data.date ||
    !data.year ||
    data.month === 0
  ) {
    renderResult({
      firstName: data.firstName || "User",
      surname: data.surname || "Name",
      date: 1,
      month: 1,
      year: data.year || 2000,
    });

    const resultBox = document.getElementById("result");
    if (resultBox) {
      resultBox.querySelector(".insight-box p:last-child").textContent =
        "Please fill all the fields properly to view your complete astrology insight.";
    }

    return;
  }

  renderResult(data);
}

const form = document.querySelector(".astrology-form");
if (form) {
  form.addEventListener("submit", handleFormSubmit);
}
