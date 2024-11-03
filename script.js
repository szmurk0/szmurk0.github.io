const songs = [
    {
        title: "Grossmachtfantasie", // Dodany tytuł
        src: "Grossmachtfantasie.mp3",
        lyrics: [
            { time: 0, line: "This is the first line of the song" },
            { time: 5, line: "Here comes the second line" },
            { time: 10, line: "The third line follows" },
            { time: 15, line: "And now the fourth line" },
            { time: 20, line: "Finally, the fifth line" },
        ]
    },
    {
        title: "Menschenmühle", // Dodany tytuł dla drugiego utworu
        src: "Menschenmühle.mp3",
        lyrics: [
            { time: 1, line: "Feldgrau, Paspeln, dicht an dicht "},
            { time: 4, line: "Knobelbecher, Schritt an Schritt" },
            { time: 7, line: "Rucksack, Zeltbahn frisch gepackt" },
            { time: 11, line: "„Links, zwo, drei, vier“ klingt's im Takt" },
            { time: 14, line: "Vorwärts, feindwärts, Ziel voraus" },
            { time: 17, line: "Marschbefehl stets gradeaus" },
            { time: 20, line: "Männer, brüllt es laut hinaus" },
            { time: 23, line: "„Weihnachten sind wir zuhaus“" },

            { time: 26, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 29, line: "Kriegessucht und Wahnkrankheit" },
            { time: 32, line: "Deutschland, Deutschland, Vaterland" },
            { time: 36, line: "Mordeslust im Wahnverstan" },
            { time: 39, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 42, line: "Kriegessucht und Wahnkrankheit" },
            { time: 45, line: "Deutschland, Deutschland, Vaterland" },
            { time: 48, line: "Mordeslust im Wahnverstand" },

            { time: 51, line: "Schützengräben, Drahtverhau" },
            { time: 54, line: "Kriegsanleihen, Waffenbau" },
            { time: 57, line: "Fleischwolf, Matschgrab, Mannverlust" },
            { time: 60, line: "Annektierung, Landerschluss" },
            { time: 64, line: "Menschenmühle, Massengrab" },
            { time: 67, line: "Stahlfabriken, Arbeitsplatz" },
            { time: 70, line: "Kaiser zieht und Bauer stirbt" },
            { time: 73, line: "Schachbrett-Welt den Krieg erwirkt" },

            { time: 76, line: "♪♪♪" },

            { time: 79, line: "Die Welt versinkt im Krieg" },

            { time: 85, line: "♪♪♪" },

            { time: 91, line: "Die Welt versinkt im Krieg" },

            { time: 98, line: "♪♪♪" },

            { time: 113, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 116, line: "Kriegessucht und Wahnkrankheit" },
            { time: 119, line: "Deutschland, Deutschland, Vaterland" },
            { time: 123, line: "Mordeslust im Wahnverstand" },

            { time: 126, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 129, line: "Kriegessucht und Wahnkrankheit" },
            { time: 132, line: "Deutschland, Deutschland, Vaterland" },
            { time: 136, line: "Mordeslust im Wahnverstand" },


            { time: 139, line: "19-14, Welterschluss" },
            { time: 142, line: "Land verzollt durch Menschverlust" },
            { time: 145, line: "Pickelhauben wellengleich" },
            { time: 148, line: "Schwärmen in das Frankenreich" },
            { time: 151, line: "Belgien, Frankreich, Eiffelturm" },
            { time: 154, line: "Russland kommt im Eisensturm" },
            { time: 157, line: "Nordsee, Seekrieg, Skagerrak" },
            { time: 160, line: "Isonzo, Patern, Alpenschlacht" },

            { time: 163, line: "Festgefahren, eingegraben" },
            { time: 167, line: "Wolkenbruch und Eisenhagel" },
            { time: 170, line: "Vorwärts, rückwärts, um kein Stück" },
            { time: 173, line: "Wird die Front westwärts verrückt" },
            { time: 176, line: "Menschenleben, Mat'rial" },
            { time: 179, line: "Konsequenz schlichtwegs egal" },
            { time: 182, line: "Politik mit Wahn befleckt" },
            { time: 185, line: "Die Welt mit Blut und Schlamm bedeckt" },

            { time: 188, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 191, line: "Kriegessucht und Wahnkrankheit" },
            { time: 195, line: "Deutschland, Deutschland, Vaterland" },
            { time: 198, line: "Mordeslust im Wahnverstand" },

            { time: 201, line: "Deutschland, Deutschland, Kaiserreich" },
            { time: 204, line: "Kriegessucht und Wahnkrankheit" },
            { time: 207, line: "Deutschland, Deutschland, Vaterland" },
            { time: 210, line: "Mordeslust im Wahnverstand!!!" },

            { time: 214, line: "♪♪♪" },

        ]
    },
    {
        title: "Sturmtrupp", // Dodany tytuł dla drugiego utworu
        src: "Sturmtrupp.mp3",
        lyrics: [
            { time: 0, line: "Im Foureaux-Riegel tief eingegraben" },
            { time: 4, line: "Im Regelbeschuss durch Gasgranaten" },
            { time: 8, line: "Der Engländer will den Vorstoß wagen" },
            { time: 12, line: "Niemals untergeh'n" },
            { time: 16, line: "Im Zwischengelände in Nebelschwaden" },
            { time: 20, line: "Sieht man Tommys durch den Nebel jagen" },
            { time: 24, line: "Die linke Flanke nimmt schweren Schaden" },
            { time: 28, line: "Der Sturmtrupp bleibt besteh’n" },

            { time: 32, line: "Kampflos untergeh'n? (Nein)" },
            { time: 36, line: "Der Sturmtrupp bleibt besteh'n" },
            { time: 40, line: "Bis zum letzten Atemzug (Wir)" },
            { time: 44, line: "Kämpfen bis aufs Blut" },
            { time: 48, line: "Kampflos untergeh’n? (Nein)" },
            { time: 52, line: "Der Sturmtrupp bleibt besteh'n" },
            { time: 56, line: "Bis zum letzten Atemzug (Wir)" },
            { time: 60, line: "Kämpfen bis aufs Blut" },

            { time: 64, line: "Hände gerührt, Spaten zur Hand" },
            { time: 68, line: "Sandsäcke füll'n, Graben bemannt" },
            { time: 72, line: "Stiefel verzurrt, Gewehr angelegt" },
            { time: 76, line: "Blick gradeaus, der Sturmtrupp verlegt" },

            { time: 80, line: "Aus dem Graben durch das Niemandsland" },
            { time: 84, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 88, line: "Menschenmassen aus der Nebelwand" },
            { time: 92, line: "Der Sturmtrupp mit dem Spaten in der Hand" },

            { time: 96, line: "Schwere Stunden waren uns beschieden" },
            { time: 100, line: "Schmerzliche Opfer mussten gebracht werden" },
            { time: 104, line: "Doch wir haben unser Gelübde gehalten" },
            { time: 108, line: "Der Allmächtige war mit uns und unsern treuen Verbündeten" },

            { time: 112, line: "Die Melder kamen nicht zurück" },
            { time: 116, line: "Der Tommy rollt den Graben auf" },
            { time: 120, line: "Sie dezimier'n uns Stück um Stück" },
            { time: 124, line: "Männer ergeben sich zuhauf" },
            { time: 128, line: "Wir verlagern den Beschuss" },
            { time: 132, line: "Die Munition wird knapp" },
            { time: 136, line: "Granaten im Überfluss" },
            { time: 140, line: "Regnen auf uns hinab" },
            { time: 144, line: "Wo bleibt unsre Verstärkung?" },
            { time: 148, line: "Wir brauchen Rückendeckung" },
            { time: 152, line: "Die zweite Kompanie" },
            { time: 156, line: "Wäre jetzt unsere Rettung" },

            { time: 160, line: "Aus dem Graben durch das Niemandsland" },
            { time: 164, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 168, line: "Menschenmassen aus der Nebelwand" },
            { time: 172, line: "Der Sturmtrupp mit dem Spaten in der Hand" },
        ]
    },
    {
        title: "Der Maulwurf", // Dodany tytuł dla drugiego utworu
        src: "Der Maulwurf.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Lviv zu Lemberg", // Dodany tytuł dla drugiego utworu
        src: "Lviv zu Lemberg.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Waffenbrüder", // Dodany tytuł dla drugiego utworu
        src: "Waffenbrüder.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Gott mit der Kavallerie", // Dodany tytuł dla drugiego utworu
        src: "Gott mit der Kavallerie.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Panzerhenker", // Dodany tytuł dla drugiego utworu
        src: "Panzerhenker.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Ritter der Lüfte", // Dodany tytuł dla drugiego utworu
        src: "Ritter der Lüfte.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Verdun", // Dodany tytuł dla drugiego utworu
        src: "Verdun.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Ausblutungsschlacht", // Dodany tytuł dla drugiego utworu
        src: "Ausblutungsschlacht.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    },
    {
        title: "Als die Waffen kamen", // Dodany tytuł dla drugiego utworu
        src: "Als die Waffen kamen.mp3",
        lyrics: [
            { time: 0, line: "First line of the second song" },
            { time: 4, line: "Second line of the second song" },
            // Add more lines for the second song
        ]
    }
    // You can add more songs here
];


let currentSongIndex = 0;
const audio = document.getElementById('audio');
const lyricsContainer = document.querySelector('.lyrics');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const elapsedTime = document.getElementById('elapsed-time');
const totalTime = document.getElementById('total-time');

let currentLineIndex = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    audio.load();
    document.getElementById('song-title').textContent = songs[index].title; // Ustaw tytuł utworu
    updateLyrics(0); // Load lyrics for the first line
    totalTime.textContent = formatTime(audio.duration);
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
    audio.play();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    audio.play();
});

audio.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;
    elapsedTime.textContent = formatTime(currentTime);

    updateLyrics(currentTime);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function updateLyrics(currentTime) {
    lyricsContainer.innerHTML = ''; // Clear previous lines

    // Find the current line based on the time
    for (let i = 0; i < songs[currentSongIndex].lyrics.length; i++) {
        if (currentTime >= songs[currentSongIndex].lyrics[i].time) {
            currentLineIndex = i;
        }
    }

    // Display three lines: previous, current, and next (if they exist)
    for (let i = -1; i <= 1; i++) {
        const lineIndex = currentLineIndex + i;
        if (lineIndex >= 0 && lineIndex < songs[currentSongIndex].lyrics.length) {
            const lineElement = document.createElement('p');
            lineElement.textContent = songs[currentSongIndex].lyrics[lineIndex].line;
            lineElement.classList.add('lyric-line');

            if (i === 0) {
                lineElement.classList.add('active'); // Current line
            } else if (i > 0) {
                lineElement.classList.add('future'); // Next line
            }

            lyricsContainer.appendChild(lineElement);
        }
    }
}

// Load the first song on initial page load
loadSong(currentSongIndex);
