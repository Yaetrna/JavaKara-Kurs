> # Aufgabenstellung
>
> Der Biologe Aristid Lindenmayer wandte kontextfreie Grammatiken an, um das Wachstum von Pflanzen zu beschreiben.
> Wir können in Kara ein einfaches Turtle-Graphiksystem simulieren, mit dem wir einige Beispiele von Lindenmayer-Systemn studieren können.
> Das Turtle-System kenne die Bewegungsbefehle der Kara-Umgebung:
> F für einen Schritt vorwärts sowie L und R für Links- beziehungsweise Rechtsdrehung um 90°.
> Diese drei Befehle können als Alphabet für Lindenmayer-Grammatiken benutzt werden.
> Ein Wort, das aus den Buchstaben dieses Alphabets gebildet wird, ist eine Wegbeschreibung für die Turtle.
> Eine einfache Grammatik besteht beispielsweise lediglich aus der folgenden Ersetzungsregel:
>
> ![F -> FLFRFRFLF](./img/FLFRFRFLF.png)
>
> Diese Ersetzungsregel wird wiederholt auf ein beliebiges Wort angewendet, das aus den Buchstaben F, L und R besteht.
> Dabei wird jeweils jedes Vorkommen von F entsprechend der Ersetzungsregel ersetzt.
> Betrachten wir als Beispiel, wie die Regel zwei Mal auf das Wort "F" angewendet wird:
>
> ![FLFRFRFLF -> FLFRFRFLFLFLFRFRFLFRFLFRFRFLFRFLFRFRFLFLFLFRFRFLF](./img/FLFRFRFLFLFLFRFRFLFRFLFRFRFLFRFLFRFRFLFLFLFRFRFLF.png)
>
> Die Länge der resultierenden Zeichenkette wächst exponentiell.
> Die Zeichenkette beschreibt eine immer detaillierter werdende Schneeflockenkurve, wie sie in obersten Abbildung dargestellt ist.
> Programmieren Sie Kara so, dass er einfache Lindenmayer-Systeme anwenden und darstellen kann!
> Sie benötigen dazu eine Suche-/Ersetze-Regel, die angibt, wie die Zeichenkette generiert werden soll,
> sowie Wort, das als Ausgangspunkt für die Ersetzungen dient.
> Ihr Programm muss die Ersetze-Regel auf dieses Wort mehrmals anwenden und die dabei entstehende Zeichenkette schliesslich "interpretieren",
> das heisst, die in ihr enthaltenen Befehle durch Kara ausführen lassen.
> 

# TODO! EXPLAIN

```Java
import javakara.JavaKaraProgram;

public class Main extends JavaKaraProgram {
    private static final int DEPTH = 6;

    public static void main(String[] args) {
        new Main().run();

    }

    public void myMainProgram() {
        world.setSize(1000, 1000);

        sleep(5000);

        String origin = "F";
        String evolve = "FLFRFRFLF";

        for (int i = 0; i < DEPTH; i++) {
            origin = replace(origin, evolve, 'F');
        }
        interpret(origin);
    }

    private void interpret(String instructions) {
        int x = 0;
        int y = 0;
        int state = 0;
        /*
         * 0 → Norden
         * 1 → Osten
         * 2 → Süden
         * 3 → Westen
         */
        for (int i = 0; i < instructions.length(); i++) {
            switch (instructions.charAt(i)) {
                case 'F':
                    switch (state) {
                        case 0:
                            if ((y - 1) < 0) {
                                y = world.getSizeY() - 1;
                            } else {
                                y--;
                            }
                            break;
                        case 1:
                            if ((x + 1) > world.getSizeX() - 1) {
                                x = 0;
                            } else {
                                x++;
                            }
                            break;
                        case 2:
                            if ((y + 1) > world.getSizeY() - 1) {
                                y = 0;
                            } else {
                                y++;
                            }
                            break;
                        case 3:
                            if ((x - 1) < 0) {
                                x = world.getSizeX() - 1;
                            } else {
                                x--;
                            }
                        default:
                            break;
                    }
                    world.setLeaf(x, y, true);
                    break;
                case 'R':
                    state = (state + 1) % 4;
                    break;
                case 'L':
                    if (state - 1 < 0) {
                        state = 3;
                    } else {
                        state -= 1;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    private String replace(String original, String replacement, char character) {
        StringBuilder newString = new StringBuilder();
        for (int i = 0; i < original.length(); i++) {
            if (original.charAt(i) == character) {
                newString.append(replacement);
            } else {
                newString.append(original.charAt(i));
            }
        }
        return newString.toString();
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