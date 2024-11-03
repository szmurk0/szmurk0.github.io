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
            { time: 0, line: "♪♪♪" },

            { time: 21, line: "Im Foureaux-Riegel tief eingegraben" },
            { time: 24, line: "Im Regelbeschuss durch Gasgranaten" },
            { time: 26, line: "Der Engländer will den Vorstoß wagen" },
            { time: 29, line: "Niemals untergeh'n" },
            { time: 32, line: "Im Zwischengelände in Nebelschwaden" },
            { time: 34, line: "Sieht man Tommys durch den Nebel jagen" },
            { time: 37, line: "Die linke Flanke nimmt schweren Schaden" },
            { time: 40, line: "Der Sturmtrupp bleibt besteh’n" },

            { time: 42, line: "Kampflos untergeh'n? (Nein)" },
            { time: 44, line: "Der Sturmtrupp bleibt besteh'n" },
            { time: 47, line: "Bis zum letzten Atemzug (Wir)" },

            { time: 50, line: "Kämpfen bis aufs Blut" },
            { time: 53, line: "Kampflos untergeh’n? (Nein)" },
            { time: 55, line: "Der Sturmtrupp bleibt besteh'n" },
            { time: 57, line: "Bis zum letzten Atemzug (Wir)" },
            { time: 60, line: "Kämpfen bis aufs Blut" },

            { time: 67, line: "♪♪♪" },


            { time: 73, line: "Hände gerührt, Spaten zur Hand" },
            { time: 76, line: "Sandsäcke füll'n, Graben bemannt" },
            { time: 79, line: "Stiefel verzurrt, Gewehr angelegt" },
            { time: 81, line: "Blick gradeaus, der Sturmtrupp verlegt" },

            { time: 84, line: "Hände gerührt, Spaten zur Hand" },
            { time: 87, line: "Sandsäcke füll'n, Graben bemannt" },
            { time: 89, line: "Stiefel verzurrt, Gewehr angelegt" },
            { time: 92, line: "Blick gradeaus, der Sturmtrupp verlegt" },


            { time: 94, line: "Aus dem Graben durch das Niemandsland" },
            { time: 100, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 105, line: "Menschenmassen aus der Nebelwand" },
            { time: 110, line: "Der Sturmtrupp mit dem Spaten in der Hand" },

            { time: 116, line: "Aus dem Graben durch das Niemandsland" },
            { time: 121, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 126, line: "Menschenmassen aus der Nebelwand" },
            { time: 131, line: "Der Sturmtrupp mit dem Spaten in der Hand" },

            { time: 137, line: "♪♪♪" },

            { time: 154, line: "Schwere Stunden waren uns beschieden" },
            { time: 158, line: "Schmerzliche Opfer mussten gebracht werden" },
            { time: 161, line: "Doch wir haben unser Gelübde gehalten" },
            { time: 165, line: "Der Allmächtige war mit uns und unsern treuen Verbündeten" },

            
            { time: 179, line: "Die Melder kamen nicht zurück" },
            { time: 182, line: "Der Tommy rollt den Graben auf" },
            { time: 185, line: "Sie dezimier'n uns Stück um Stück" },
            { time: 187, line: "Männer ergeben sich zuhauf" },
            { time: 190, line: "Wir verlagern den Beschuss" },
            { time: 192, line: "Die Munition wird knapp" },
            { time: 195, line: "Granaten im Überfluss" },
            { time: 198, line: "Regnen auf uns hinab" },

            { time: 200, line: "Wo bleibt unsre Verstärkung?" },
            { time: 203, line: "Wir brauchen Rückendeckung" },
            { time: 205, line: "Die zweite Kompanie" },
            { time: 208, line: "Wäre jetzt unsere Rettung" },

            { time: 211, line: "♪♪♪" },

            { time: 222, line: "Aus dem Graben durch das Niemandsland" },
            { time: 228, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 233, line: "Menschenmassen aus der Nebelwand" },
            { time: 238, line: "Der Sturmtrupp mit dem Spaten in der Hand" },
            
            { time: 244, line: "Aus dem Graben durch das Niemandsland" },
            { time: 250, line: "Vorwärts, Männer, leistet Widerstand" },
            { time: 255, line: "Menschenmassen aus der Nebelwand" },
            { time: 260, line: "Der Sturmtrupp mit dem Spaten in der Hand" },

            { time: 265, line: "♪♪♪" },
        ]
    },
    {
        title: "Der Maulwurf", // Dodany tytuł dla drugiego utworu
        src: "Der Maulwurf.mp3",
        lyrics: [
            { time: 20, line: "♪♪♪" },

            { time: 38, line: "Zum Einsatz als Mineur unter Tage geschickt" },
            { time: 42, line: "Ich dacht mir, da ist man vor Granaten geschützt" },
            { time: 46, line: "Die dreihunderteinundzwanzigste Mineur-Kompanie" },
            { time: 50, line: "Fünfzig Meter über uns herrscht an der Front Manie" },
            { time: 54, line: "Wir graben zwölf Stunden, zwölf Stunden zum Ruh'n" },
            { time: 58, line: "Doch ich kann beim Gewummer kein Auge zu tun" },
            { time: 62, line: "Ich wart' nur, bis der Stollen die Granate erhellt" },
            { time: 66, line: "Und wenn's nicht der Feind schafft, dann mach' ich es selbst" },

            { time: 71, line: "Graben" },
            { time: 73, line: "Und weiter graben" },
            { time: 77, line: "Mit meinem Spaten" },
            { time: 81, line: "Der Maulwurf sieht kein Licht" },
            { time: 86, line: "Graben" },
            { time: 89, line: "Und weiter graben" },
            { time: 93, line: "Stets unter Tage" },
            { time: 97, line: "Bis der Stollen endlich einbricht" },

            { time: 103, line: "♪♪♪" },

            { time: 133, line: "Vier Männer im Schleppschacht bilden eine Schicht" },
            { time: 138, line: "Einer, der den Ton mit dem Spaten absticht" },
            { time: 142, line: "Einer hält ihm den Sandsack auf" },
            { time: 146, line: "Die anderen zwei bringen den Dreck hinauf" },
            { time: 150, line: "Eine Karbidlampe spendet uns Licht" },
            { time: 154, line: "Obendrein schwarzen Qualm, der in der Brust sticht" },
            { time: 159, line: "Im Sauerstoffmangel invalide geplagt" },
            { time: 162, line: "Ich schwör's, nicht mehr lang und ich schieße mich ab" },

            { time: 167, line: "Graben" },
            { time: 169, line: "Und weiter graben" },
            { time: 173, line: "Mit meinem Spaten" },
            { time: 177, line: "Der Maulwurf sieht kein Licht" },
            { time: 182, line: "Graben" },
            { time: 185, line: "Und weiter graben" },
            { time: 189, line: "Stets unter Tage" },
            { time: 193, line: "Bis der Stollen endlich einbricht" },

            { time: 198, line: "Spatenstich an Spatenstich" },
            { time: 202, line: "Nur Wasser und Erde, für uns gibt's kein Tageslicht" },
            { time: 207, line: "Spatenstich an Spatenstich" },
            { time: 210, line: "Offene Hände und Knie, sie plagen mich" },
            { time: 215, line: "Spatenstich an Spatenstich" },
            { time: 218, line: "Seit zwei Jahren jeden Tag zwölf Stunden Arbeitsschicht" },
            { time: 222, line: "Spatenstich an Spatenstich" },
            { time: 226, line: "Nur ein weiterer Tag und ich werde wahnsinnig" },

            { time: 231, line: "Ich atme den Ruß ein und spuck' morgens schwarz" },
            { time: 234, line: "Als ob ich im Krieg nicht genug Sorgen hab'" },
            { time: 238, line: "Die stete Luftknappheit bringt Krankheit im Geist" },
            { time: 242, line: "Da passiert's, dass im Dunkeln manch Gedanke entgleist" },
            { time: 246, line: "Es wummst und es wackelt, ein Minenaufschlag" },
            { time: 251, line: "Nur Sekunden später gibt die Grabenwand nach" },
            { time: 254, line: "Unterbreche fürs Letzte den grabenden Trott" },
            { time: 259, line: "Und press' mir apathisch die 08 an den Kopf!!!" },

            { time: 262, line: "[Kopf.. kopf...]" },


            { time: 265, line: "Graben!!!" },
            { time: 267, line: "Und weiter graben!!!" },
            { time: 271, line: "Mit meinem Spaten!!!" },
            { time: 275, line: "Der Maulwurf sieht kein Licht..." },
            { time: 280, line: "Graben!!!" },
            { time: 283, line: "Und weiter graben!!!" },
            { time: 287, line: "Stets unter Tage!!!" },
            { time: 292, line: "Bis der Stollen endlich einbricht" },

            { time: 297, line: "♪♪♪" },
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
