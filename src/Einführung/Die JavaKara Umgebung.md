# Die JavaKara Umgebung

JavaKara ist eine Erweiterung der standard Kara-Umgebung in der die Zustände, durch die sich Kara steuern lässt, durch Java-Code ersetzt wurden. Das Standardprogramm, das als Template dient sieht wie folgt aus:

```java
import javakara.JavaKaraProgram;
   
/* BEFEHLE:  kara.
 *   move()  turnRight()  turnLeft()
 *   putLeaf()  removeLeaf()
 *
 * SENSOREN: kara.
 *   treeFront()  treeLeft()  treeRight()
 *   mushroomFront()  onLeaf()
 */
public class FindeBaum extends JavaKaraProgram {

  // hier können Sie eigene Methoden definieren

  public void myProgram() {
    // hier kommt das Hauptprogramm hin, zB:
    while (!kara.treeFront()) {
      kara.move();
    }
  }
}
```

Das Programm besteht aus dem `import`-Statement, welches die `JavaKaraProgram`-Klasse in dieses Programm einbindet, das ermöglicht es uns die im unteren Kommentar stehenden Befehle zu verwenden und auf die Objekte `kara`, `world` und `tools` zuzugreifen. Wir können in der Programmierung mit Java also folgende Befehle verwenden:

> # Hinweis zu den Rückgabetypen
>
> Die Rückgabetypen der meisten Befehle sind vom Typ `boolean`,
> dies hängt mit der internen Fehlerbehandlung von JavaKara zusammen
> und in fast jedem Fall können wir hier nur einen `true` Wert erwarten,
> da ein `false` Wert einen Fehler wirft. 
> Methoden die einen Fehler werfen, wurden in ihrem Rückgabetyp mit `!` markiert.
> Beispiel:
> Wenn vor Kara ein Baum steht und `kara.move()` ausgeführt wird,
> dann gibt diese Methode `false` zurück, diesen Wert können wir jedoch nicht verwenden,
> da das Programm davor mit einem Fehler beendet wird, da Kara gegen einen Baum gelaufen ist.

| Befehl                 | Funktion                                                              | Rückgabetyp |
| ---------------------- | --------------------------------------------------------------------- | ----------- |
| `kara.move()`          | Kara bewegt sich ein Feld nach vorne.                                 | `!boolean`  |
| `kara.turnRight()`     | Kara dreht sich um $90^{\circ}$ nach rechts.                          | `!boolean`  |
| `kara.turnLeft()`      | Kara dreht sich um $90^{\circ}$ nach links.                           | `!boolean`  |
| `kara.putLeaf()`       | Kara setzt auf das Feld, auf dem er sich gerade befindet ein Blatt.   | `!boolean`  |
| `kara.removeLeaf()`    | Kara entfernt ein Blatt auf dem Feld auf dem er sich gerade befindet. | `!boolean`  |
| `kara.treeFront()`     | Erkennt ob ein Baum vor Kara steht.                                   | `boolean`   |
| `kara.treeRight()`     | Erkennt ob ein Baum rechts neben Kara steht.                          | `boolean`   |
| `kara.treeLeft()`      | Erkennt ob ein Baum links neben Kara steht.                           | `boolean`   |
| `kara.mushroomFront()` | Erkennt ob ein Pilz vor Kara steht.                                   | `boolean`   |
| `kara.onLeaf()`        | Erkennt ob sich Kara auf einem Blatt befindet.                        | `boolean`   |

Das waren die wichtigsten Methoden, die man für das Lösen der meisten Aufgaben benötigt, es gibt noch weitere die für fortgeschrittenere Programme benötigt werden, diese sind in [Appendix A](../Anhänge/Appendix%20A.md) zu finden.
