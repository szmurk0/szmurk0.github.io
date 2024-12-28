const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
const dataArray = new Float32Array(analyser.fftSize);

const notes = [
    { name: 'C0', frequency: 16.35 },
    { name: 'C#0', frequency: 17.32 },
    { name: 'D0', frequency: 18.35 },
    { name: 'D#0', frequency: 19.45 },
    { name: 'E0', frequency: 20.60 },
    { name: 'F0', frequency: 21.83 },
    { name: 'F#0', frequency: 23.12 },
    { name: 'G0', frequency: 24.50 },
    { name: 'G#0', frequency: 25.96 },
    { name: 'A0', frequency: 27.50 },
    { name: 'A#0', frequency: 29.14 },
    { name: 'B0', frequency: 30.87 },
    { name: 'C1', frequency: 32.70 },
    { name: 'C#1', frequency: 34.65 },
    { name: 'D1', frequency: 36.71 },
    { name: 'D#1', frequency: 38.89 },
    { name: 'E1', frequency: 41.20 },
    { name: 'F1', frequency: 43.65 },
    { name: 'F#1', frequency: 46.25 },
    { name: 'G1', frequency: 49.00 },
    { name: 'G#1', frequency: 51.91 },
    { name: 'A1', frequency: 55.00 },
    { name: 'A#1', frequency: 58.27 },
    { name: 'B1', frequency: 61.74 },
    { name: 'C2', frequency: 65.41 },
    { name: 'C#2', frequency: 69.30 },
    { name: 'D2', frequency: 73.42 },
    { name: 'D#2', frequency: 77.78 },
    { name: 'E2', frequency: 82.41 },
    { name: 'F2', frequency: 87.31 },
    { name: 'F#2', frequency: 92.50 },
    { name: 'G2', frequency: 98.00 },
    { name: 'G#2', frequency: 103.83 },
    { name: 'A2', frequency: 110.00 },
    { name: 'A#2', frequency: 116.54 },
    { name: 'B2', frequency: 123.47 },
    { name: 'C3', frequency: 130.81 },
    { name: 'C#3', frequency: 138.59 },
    { name: 'D3', frequency: 146.83 },
    { name: 'D#3', frequency: 155.56 },
    { name: 'E3', frequency: 164.81 },
    { name: 'F3', frequency: 174.61 },
    { name: 'F#3', frequency: 185.00 },
    { name: 'G3', frequency: 196.00 },
    { name: 'G#3', frequency: 207.65 },
    { name: 'A3', frequency: 220.00 },
    { name: 'A#3', frequency: 233.08 },
    { name: 'B3', frequency: 246.94 },
    { name: 'C4', frequency: 261.63 },
    { name: 'C#4', frequency: 277.18 },
    { name: 'D4', frequency: 293.66 },
    { name: 'D#4', frequency: 311.13 },
    { name: 'E4', frequency: 329.63 },
    { name: 'F4', frequency: 349.23 },
    { name: 'F#4', frequency: 369.99 },
    { name: 'G4', frequency: 392.00 },
    { name: 'G#4', frequency: 415.30 },
    { name: 'A4', frequency: 440.00 },
    { name: 'A#4', frequency: 466.16 },
    { name: 'B4', frequency: 493.88 },
    { name: 'C5', frequency: 523.25 },
    { name: 'C#5', frequency: 554.37 },
    { name: 'D5', frequency: 587.33 },
    { name: 'D#5', frequency: 622.25 },
    { name: 'E5', frequency: 659.25 },
    { name: 'F5', frequency: 698.46 },
    { name: 'F#5', frequency: 739.99 },
    { name: 'G5', frequency: 783.99 },
    { name: 'G#5', frequency: 830.61 },
    { name: 'A5', frequency: 880.00 },
    { name: 'A#5', frequency: 932.33 },
    { name: 'B5', frequency: 987.77 },
    { name: 'C6', frequency: 1046.50 },
    { name: 'C#6', frequency: 1108.73 },
    { name: 'D6', frequency: 1174.66 },
    { name: 'D#6', frequency: 1244.51 },
    { name: 'E6', frequency: 1318.51 },
    { name: 'F6', frequency: 1396.91 },
    { name: 'F#6', frequency: 1479.98 },
    { name: 'G6', frequency: 1567.98 },
    { name: 'G#6', frequency: 1661.22 },
    { name: 'A6', frequency: 1760.00 },
    { name: 'A#6', frequency: 1864.66 },
    { name: 'B6', frequency: 1975.53 },
    { name: 'C7', frequency: 2093.00 },
    { name: 'C#7', frequency: 2217.46 },
    { name: 'D7', frequency: 2349.32 },
    { name: 'D#7', frequency: 2489.02 },
    { name: 'E7', frequency: 2637.02 },
    { name: 'F7', frequency: 2793.83 },
    { name: 'F#7', frequency: 2959.96 },
    { name: 'G7', frequency: 3135.96 },
    { name: 'G#7', frequency: 3322.44 },
    { name: 'A7', frequency: 3520.00 },
    { name: 'A#7', frequency: 3729.31 },
    { name: 'B7', frequency: 3951.07 },
    { name: 'C8', frequency: 4186.01 }
];


function normalizeFrequency(frequency) {
    while (frequency < 16.35) frequency *= 2;
    while (frequency > 7902.13) frequency /= 2;
    return frequency;
}

function getClosestNote(frequency) {
    let minDiff = Infinity;
    let closestNote = null;

    for (let i = 0; i < notes.length; i++) {
        const diff = Math.abs(frequency - notes[i].frequency);
        if (diff < minDiff) {
            minDiff = diff;
            closestNote = notes[i];
        }
    }
    console.log(`Częstotliwość: ${frequency}, Najbliższa nuta: ${closestNote.name}`);
    return closestNote;
}

function autoCorrelate(dataArray, sampleRate) {
    let size = dataArray.length;
    let rms = 0;

    for (let i = 0; i < size; i++) {
        let val = dataArray[i];
        rms += val * val;
    }
    rms = Math.sqrt(rms / size);

    if (rms < 0.01) return -1;

    let r1 = 0, r2 = size - 1, threshold = 0.2;
    for (let i = 0; i < size / 2; i++) {
        if (Math.abs(dataArray[i]) < threshold) {
            r1 = i;
            break;
        }
    }
    for (let i = 1; i < size / 2; i++) {
        if (Math.abs(dataArray[size - i]) < threshold) {
            r2 = size - i;
            break;
        }
    }

    dataArray = dataArray.slice(r1, r2);
    size = dataArray.length;

    let c = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            c[i] = c[i] + dataArray[j] * dataArray[j + i];
        }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;

    let maxval = -1, maxpos = -1;
    for (let i = d; i < size; i++) {
        if (c[i] > maxval) {
            maxval = c[i];
            maxpos = i;
        }
    }

    let T0 = maxpos;

    if (maxval > 0.01) {
        let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
        let a = (x1 - x3) / (2 * (2 * x2 - x1 - x3));
        T0 = T0 + a;
    }

    return sampleRate / T0;
}

async function getMicrophoneAccess() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        detectPitch();
    } catch (err) {
        console.error('Błąd dostępu do mikrofonu:', err);
    }
}

function detectPitch() {
    analyser.getFloatTimeDomainData(dataArray);
    const frequency = autoCorrelate(dataArray, audioContext.sampleRate);

    if (frequency !== -1) {
        const normalizedFrequency = normalizeFrequency(frequency);
        const note = getClosestNote(normalizedFrequency);
        const detune = Math.floor(1200 * Math.log2(frequency / note.frequency));

        const noteElement = document.getElementById('note');
        const frequencyElement = document.getElementById('frequency');
        const detuneElement = document.getElementById('detune');

        if (noteElement) {
            const neighboringNotes = getNeighboringNotes(note.name);
            const lowerNote = neighboringNotes.lower ? neighboringNotes.lower.name : '';
            const higherNote = neighboringNotes.higher ? neighboringNotes.higher.name : '';

            // Zbudowanie tekstu z klasami CSS
            noteElement.innerHTML = `
                <span class="lower-note">${lowerNote} &lt; </span> 
                <span class="current-note">${note.name}</span> 
                <span class="higher-note">&gt; ${higherNote} </span>
            `;
        }

        if (frequencyElement) frequencyElement.textContent = `${frequency.toFixed(2)} Hz`;

        if (detuneElement) {
            if (detune === 0) {
                detuneElement.textContent = 'Perfectly tuned!';
            } else if (detune < 0) {
                detuneElement.textContent = 'Tune up!';
            } else {
                detuneElement.textContent = 'Tune down!';
            }
        }
    } else {
        const noteElement = document.getElementById('note');
        const frequencyElement = document.getElementById('frequency');
        const detuneElement = document.getElementById('detune');

        if (noteElement) noteElement.textContent = 'Zagraj strunę';
        if (frequencyElement) frequencyElement.textContent = 'Częstotliwość w Hz';
        if (detuneElement) detuneElement.textContent = '';
    }

    setTimeout(() => {
        requestAnimationFrame(detectPitch);
    }, 500);
}




document.getElementById('startButton').addEventListener('click', () => {
    audioContext.resume().then(() => {
        getMicrophoneAccess();
        document.getElementById('startButton').style.display = 'none';
    });
});

function getClosestNote(frequency) {
    let minDiff = Infinity;
    let closestNote = null;

    for (let i = 0; i < notes.length; i++) {
        const diff = Math.abs(frequency - notes[i].frequency);
        if (diff < minDiff) {
            minDiff = diff;
            closestNote = notes[i];
        }
    }

    const neighboringNotes = getNeighboringNotes(closestNote.name);

    console.log(`Frequency: ${frequency}, Closest Note: ${closestNote.name}`);
    console.log(`Lower Neighbor: ${neighboringNotes.lower ? neighboringNotes.lower.name : 'None'}`);
    console.log(`Higher Neighbor: ${neighboringNotes.higher ? neighboringNotes.higher.name : 'None'}`);

    const noteElement = document.getElementById('note');
    const frequencyElement = document.getElementById('frequency');
    const detuneElement = document.getElementById('detune');
    const lowerNoteElement = document.getElementById('lowerNote');
    const higherNoteElement = document.getElementById('higherNote');

    if (noteElement) noteElement.textContent = closestNote.name;
    if (frequencyElement) frequencyElement.textContent = `${frequency.toFixed(2)} Hz`;

    if (lowerNoteElement) lowerNoteElement.textContent = `Lower: ${neighboringNotes.lower ? neighboringNotes.lower.name : 'None'}`;
    if (higherNoteElement) higherNoteElement.textContent = `Higher: ${neighboringNotes.higher ? neighboringNotes.higher.name : 'None'}`;

    if (detuneElement) {
        const detune = Math.floor(1200 * Math.log2(frequency / closestNote.frequency));
        if (detune === 0) {
            detuneElement.textContent = 'Perfectly tuned!';
        } else if (detune < 0) {
            detuneElement.textContent = 'Tune up!';
        } else {
            detuneElement.textContent = 'Tune down!';
        }
    }

    return closestNote;
}

function getNeighboringNotes(currentNote) {
    const index = notes.findIndex(note => note.name === currentNote);
    if (index === -1) return null;

    const lowerNote = notes[index - 1] || null;
    const higherNote = notes[index + 1] || null;

    return { lower: lowerNote, higher: higherNote };
}
