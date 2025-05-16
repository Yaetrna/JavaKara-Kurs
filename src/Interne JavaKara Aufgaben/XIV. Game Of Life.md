> # Aufgabenstellung
>
> Kara möchte dem "Game of Life" zuschauen. 
> Ausgedacht hat sich dieses "Spiel" der amerikanische Mathematiker Conway.
> Die Regeln sind einfach: Ein Feld in Kara's Welt ist entweder besetzt (Kleeblatt drauf) oder
> unbesetzt (kein Kleeblatt drauf). 
> Die ganze Welt kann man sich als Population von Lebewesen vorstellen,
> aus der sich die nächste Generation nach folgenden Regeln entwickelt:
>
> 1. Ein leeres Feld wird in der nächsten Generation besetzt, 
> wenn es genau drei besetzte Nachbarfelder hat. 
> Beispiel: Das mittlere, leere Feld hat drei besetzte Nachbarfelder und wird daher "geboren":
> 
> 2. Ein besetztes Feld bleibt auch in der nächsten Generation besetzt, wenn es zwei oder drei besetzte Nachbarfelder hat.
> Beispiel: Das mittlere Feld mit Kleeblatt (hell) hat drei besetzte Nachbarfelder und bleibt daher am Leben:
> 
> 3. Alle Felder, bei denen die Voraussetzungen der Regeln 1 und 2 nicht zutreffen,
> sind in der nächsten Generation unbesetzt.
> Beispiel: Das mittlere Feld mit Kleeblatt (hell) hat zu viele besetzte Nachbarfeldern und "stirbt" daher:
> Auch bei relativ einfachen Startwelten (mit vier oder fünf besetzten Feldern) ist es schwierig,
> die Entwicklung der nächsten Generationen vorauszusehen. Man muß sie wirklich durchspielen!
>

# TODO! EXPLAIN

```Java
import javakara.JavaKaraProgram;

public class Main extends JavaKaraProgram {
    private static final int INITIAL_SLEEP_MS = 2000;
    private static final int WAIT_DURATION_MS = 125;

    public static void main(String[] args) {
        new Main().run("F:\\Worlds\\GameOfLife\\WorldOne.world");
    }

    public void myMainProgram() {
        boolean[][] field = new boolean[world.getSizeX()][world.getSizeY()];

        sleep(INITIAL_SLEEP_MS);

        while (true) {
            sleep(WAIT_DURATION_MS);

            // Erfassung des aktuellen Zustands
            for (int x = 0; x < field.length; x++) {
                for (int y = 0; y < field[x].length; y++) {
                    field[x][y] = world.isLeaf(x, y);
                }
            }

            // Berechnung der nächsten Generation
            field = updateLife(field);

            // Weltzustand aktualisieren
            updateField(field);
        }
    }

    private void updateField(boolean[][] field) {
        for (int x = 0; x < field.length; x++) {
            for (int y = 0; y < field[x].length; y++) {
                world.setLeaf(x, y, field[x][y]);
            }
        }
    }

    private boolean[][] updateLife(boolean[][] field) {
        boolean[][] nextIteration = new boolean[field.length][field[0].length];

        for (int x = 0; x < field.length; x++) {
            for (int y = 0; y < field[x].length; y++) {
                int neighbors = countNeighbors(field, x, y);
                nextIteration[x][y] = field[x][y] ? (neighbors == 2 || neighbors == 3) : (neighbors == 3);
            }
        }
        return nextIteration;
    }

    private int countNeighbors(boolean[][] field, int x, int y) {
        int count = 0;
        int xMin = Math.max(x - 1, 0);
        int xMax = Math.min(x + 1, field.length - 1);
        int yMin = Math.max(y - 1, 0);
        int yMax = Math.min(y + 1, field[0].length - 1);

        for (int i = xMin; i <= xMax; i++) {
            for (int j = yMin; j <= yMax; j++) {
                // Wir schließen i == x und j == y aus, weil wir sonst das Feld prüfen, dessen Nachbarn wir zählen.
                if (field[i][j] && !(i == x && j == y)) {
                    count++;
                }
            }
        }
        return count;
    }

    private void sleep(long milliseconds) {
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```