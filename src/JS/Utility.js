import{ useMemo} from 'react';

// Hook für den jährlichen Zähler
const useBirthdayCounter = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthYear = 2003;

    // Funktion zur Überprüfung, ob das Datum nach dem 13.07. ist
    const isAfterJuly13 = now.getMonth() > 6 || (now.getMonth() === 6 && now.getDate() >= 13);

    // useMemo sorgt dafür, dass der Zähler nur neu berechnet wird, wenn sich das Jahr ändert
    // und das Datum nach dem 13.07. ist
    const counter = useMemo(() => {
        if (isAfterJuly13) {
            return currentYear - birthYear;
        }
        return currentYear - birthYear - 1; // Vor dem 13.07. noch nicht ganz ein Jahr älter
    }, [currentYear, isAfterJuly13]);
    return counter;
};

// Export der beiden Funktionen
export { useBirthdayCounter};