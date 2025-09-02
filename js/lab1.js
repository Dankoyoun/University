var films = [
  { 
    title: "Дюна 2", 
    cinema: "Multiplex", 
    hall: "Зал 1", 
    start: "2025-08-25",
    poster: "images/123.jpg" 
  },
  { 
    title: "Барбі", 
    cinema: "Київська Русь", 
    hall: "", 
    start: "2025-08-28",
    poster: "images/1234.jpg" 
  },
  { 
    title: "Оппенгеймер", 
    cinema: "Планета Кіно", 
    hall: "Зал 5", 
    start: "2025-08-20",
    poster: "images/122.jpg" 
  }
];

function diffDays(startDate, endDate) {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((endDate - startDate) / msPerDay);
}

function vivod(film) {
  const today = new Date();
  const start = new Date(film.start);
  const end = new Date(start);
  end.setDate(start.getDate() + 10);

  let status = "";
  let cssClass = "card";

  if (today >= start && today <= end) {
    const daysLeft = diffDays(today, end);
    status = `Фільм йде зараз. Залишилось <b>${daysLeft}</b> дні(в).`;
    if (daysLeft === 1) {
      status += '<br><span class="warning-text">⚠️ Останній день показу!</span>';
    }
  } else if (today < start) {
    const daysToStart = diffDays(today, start);
    status = `Показ почнеться через <b>${daysToStart}</b> дні(в).`;
  } else {
    status = "❌ Показ завершено.";
  }

  let note = "";
  if (!film.hall) {
    note = `<p class="note">В кінотеатрі лише один зал</p>`;
  }

  return `
    <div class="${cssClass}">
      <div class="poster-block">
        <img src="${film.poster}" alt="${film.title}" class="poster">
        <h3>${film.title}</h3> 
      </div>
      <div class="info">
        <p><b>Кінотеатр:</b> ${film.cinema}</p>
        <p><b>Зал:</b> ${film.hall || "—"}</p>
        <p><b>Початок:</b> ${start.toLocaleDateString()}</p>
        <p>${status}</p>
        ${note}
      </div>
    </div>
  `;
}

function ras() {
  let html = "";
  films.forEach(film => {
    html += vivod(film);
  });
  document.getElementById("rezult").innerHTML = html;
}

ras();
