
const schedules = {
    senin: {
        name: "Senin",
        lessons: [
            ["06.45 - 07.30", "Upacara", "-", "Kegiatan"],
            ["07.30 - 09.30", "Basis Data", "Bu Sashi", "Pelajaran"],
            ["09.30 - 09.50", "Istirahat", "-", "Istirahat"],
            ["09.50 - 10.30", "Bahasa Sunda", "Bu Febi", "Pelajaran"],
            ["10.30 - 11.50", "Pemrograman Perangkat Bergerak", "Pa Dimas", "Pelajaran"],
            ["11.50 - 12.55", "Salat dan Istirahat", "-", "Istirahat"],
            ["13.00 - 15.40", "Pemrograman Perangkat Bergerak", "Pa Dimas", "Pelajaran"],
            ["15.40 - 16.00", "Salat Ashar & Piket Kelas", "-", "Kegiatan"]
        ]
    },

    selasa: {
        name: "Selasa",
        lessons: [
            ["06.45 - 07.30", "Duquba", "-", "Kegiatan"],
            ["07.30 - 09.30", "Pemrograman Berbasis Teks Grafis", "Bu Sashi", "Pelajaran"],
            ["09.30 - 09.50", "Istirahat", "-", "Istirahat"],
            ["09.50 - 10.30", "Pemrograman Berbasis Teks Grafis", "Bu Sashi", "Pelajaran"],
            ["10.30 - 11.10", "Qiroatul Quran", "Bu Diana", "Pelajaran"],
            ["11.10 - 11.50", "Kreativitas, Inovasi dan Kewirausahaan", "Bu Nurulia Falah", "Pelajaran"],
            ["11.50 - 12.55", "Salat dan Istirahat", "-", "Istirahat"],
            ["13.00 - 15.40", "Kreativitas, Inovasi dan Kewirausahaan", "Bu Nurulia Falah", "Pelajaran"],
            ["15.40 - 16.00", "Salat Ashar & Piket Kelas", "-", "Kegiatan"]
        ]
    },

    rabu: {
        name: "Rabu",
        lessons: [
            ["06.45 - 07.30", "Duquba & Public Speaking", "-", "Kegiatan"],
            ["07.30 - 09.30", "Pemrograman Web", "Pa Sulthan", "Pelajaran"],
            ["09.30 - 09.50", "Istirahat", "-", "Istirahat"],
            ["09.50 - 11.50", "Pemrograman Web", "Pa Sulthan", "Pelajaran"],
            ["11.50 - 12.55", "Salat dan Istirahat", "-", "Istirahat"],
            ["13.00 - 14.20", "Pendidikan Pancasila", "Bu Danti", "Pelajaran"],
            ["14.20 - 15.40", "Bahasa Inggris", "Mis Karti", "Pelajaran"],
            ["15.40 - 16.00", "Salat Ashar & Piket Kelas", "-", "Kegiatan"]
        ]
    },

    kamis: {
        name: "Kamis",
        lessons: [
            ["06.45 - 07.30", "Duquba & Public Speaking", "-", "Kegiatan"],
            ["07.30 - 09.30", "Pendidikan Agama Islam", "Bu Diana", "Pelajaran"],
            ["09.30 - 09.50", "Istirahat", "-", "Istirahat"],
            ["09.50 - 10.30", "Bahasa Indonesia", "Pa Vivin", "Pelajaran"],
            ["10.30 - 11.50", "Game Developer", "Pa Anto", "Pelajaran"],
            ["11.50 - 12.55", "Salat Dzuhur & Istirahat", "-", "Istirahat"],
            ["13.00 - 14.20", "Game Developer", "Pa Anto", "Pelajaran"],
            ["14.20 - 15.40", "Bahasa Inggris", "Mis Karti", "Pelajaran"],
            ["15.40 - 16.00", "Salat Ashar & Piket Kelas", "-", "Kegiatan"]
        ]
    },

    jumat: {
        name: "Jumat",
        lessons: [
            ["06.45 - 07.30", "Duquba & Public Speaking", "-", "Kegiatan"],
            ["07.30 - 09.30", "Matematika", "Bu Septi", "Pelajaran"],
            ["09.30 - 09.50", "Istirahat", "-", "Istirahat"],
            ["09.50 - 11.50", "Bahasa Indonesia", "Pa Vivin", "Pelajaran"],
            ["11.50 - 12.55", "Salat Jumat & Istirahat", "-", "Istirahat"],
            ["13.00 - 14.20", "Sejarah Indonesia", "Pa Ghufron", "Pelajaran"],
            ["14.20 - 15.40", "Penjas, Or, dan Kes", "Pa Ari", "Pelajaran"],
            ["15.40 - 16.00", "Salat Ashar & Piket Kelas", "-", "Kegiatan"]
        ]
    },

    sabtu: {
        name: "Sabtu",
        lessons: [
            ["06.45 - 07.15", "Duquba", "-", "Kegiatan"],
            ["07.15 - 08.25", "Bimbingan Konseling", "Pa Adit", "Pelajaran"],
            ["08.25 - 09.35", "Bahasa Inggris", "Mis Farida", "Pelajaran"],
            ["09.35 - 09.55", "Istirahat", "-", "Istirahat"],
            ["09.55 - 12.15", "Program Unggulan", "-", "Pelajaran"],
            ["12.15 - 13.00", "Salat Dzuhur & Pulang", "-", "Kegiatan"]
        ]
    }
};

const tabs = document.querySelectorAll(".day-tab");
const scheduleBody = document.getElementById("schedule-body");
const selectedDay = document.getElementById("selected-day");
const scheduleCount = document.getElementById("schedule-count");

function renderSchedule(day) {
    const schedule = schedules[day];

    if (!schedule) return;

    selectedDay.textContent = schedule.name;
    scheduleCount.textContent =
        `${schedule.lessons.length} kegiatan dalam jadwal hari ${schedule.name}`;

    scheduleBody.innerHTML = schedule.lessons.map(item => {
        const [time, subject, teacher, type] = item;
        const isBreak = type === "Istirahat";

        return `
            <tr class="${isBreak ? "break-row" : ""}">
                <td class="time-cell">${time}</td>
                <td class="subject-cell">${subject}</td>
                <td class="teacher-cell ${
                    teacher === "-" ? "empty-teacher" : ""
                }">${teacher}</td>
                <td>
                    <span class="type-badge">${type}</span>
                </td>
            </tr>
        `;
    }).join("");

    tabs.forEach(tab => {
        const isActive = tab.dataset.day === day;

        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-pressed", String(isActive));
    });
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        renderSchedule(tab.dataset.day);
    });
});

// Tampilkan jadwal Senin saat website pertama kali dibuka.
renderSchedule("senin");
