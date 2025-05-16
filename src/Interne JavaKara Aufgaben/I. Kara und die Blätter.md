> # Aufgabenstellung
>
> Schreiben Sie ein Programm, das Kara bis zum nächsten Baum führt.
> Liegt auf einem Feld ein Blatt, soll Kara es aufnehmen; liegt auf einem Feld kein Blatt,
> eines hinlegen. Bei dem Baum angekommen ist das Programm zu beenden.
>
> ![Bild](./img/KaraUndBlätter.png)

Wir starten jedes JavaKara Programm fürs erste mit einer leeren Hauptmethode und arbeiten uns dann Stück für Stück durch das Problem durch. Die ersten Probleme sind noch relativ trivial, werden jedoch im Verlauf des Kurses deutlich komplexer und erfordern verschiedene Problemlösestrategien.

```Java
import javakara.JavaKaraProgram;  
  
public class Main extends JavaKaraProgram {  
    public static void main(String[] args) {  
        new Main().run("F:\\WorldOne.world");  
    }  
  
    public void myMainProgram() {  
          
    }  
}
```

> # Hinweis
>
> Da der Quellcode, den wir in die `myMainProgram()`-Methode schreiben sofort ausgeführt wird, 
> sobald wir aus *IntelliJ* das Programm starten, bleibt uns keine Zeit mehr die Welt in der JavaKara UI zu laden.
> Aus diesem Grund kann die `.run()`-Methode einen Pfad zu einer `.world`-Datei als optionalen Parameter erhalten,
> die Welt wird dann geladen bevor das Programm ausgeführt wird.


Dieses Problem lässt sich in zwei kleinere Probleme unterteilen, zunächst müssen wir Kara nach vorne bewegen, bis er auf einen Baum stößt.

```Java
public void myMainProgram() {  
    while (!kara.treeFront()) {  
        kara.move();  
    }  
}
```

Mit dem Sensor `kara.treeFront()` erhalten wir auskunft darüber, ob sich vor Kara ein Baum befindet. Der `!`-Operator ist der Negationsoperator, der einen booleschen Ausdruck negiert, d.h. in diesem Kontext, dass die `while`-Schleife so lange ausgeführt wird, bis `kara.treeFront()` den Wert `true` zurückgibt.

Als nächstes müssen wir dafür sorgen, dass Kara ein Blatt immer dann hinlegt, wenn er auf keinem steht, und umgekehrt.

```Java
public void myMainProgram() {  
    while (!kara.treeFront()) {
        if (kara.onLeaf()) {
            kara.removeLeaf();
        } else {  
            kara.putLeaf();
        }  
        kara.move();
    }  
}
```

Dieser Code funktioniert im Grunde korrekt, jedoch gibt es einen Grenzfall (Edge-Case) den es zu beachten gibt: Die Ausführung der `while`-Schleife wird sofort unterbrochen, sobald vor Kara ein Baum erkannt wird, d.h. Dass Kara keine Chance hat das innere `if`-Statement auszuführen wenn sie schon vor einem Baum steht.

Das Problem lässt sich jedoch trivial lösen in dem wir einfach das `if`-Statement ein weiteres mal wiederholen.

```Java
public void myMainProgram() {  
    while (!kara.treeFront()) {  
        if (kara.onLeaf()) {  
            kara.removeLeaf();  
        } else {  
            kara.putLeaf();  
        }  
        kara.move();  
    }  
    if (kara.onLeaf()) {  
        kara.removeLeaf();  
    } else {  
        kara.putLeaf();  
    }  
}
```

Um den Code etwas schöner zu gestalten und um das **DRY**-Prinzip (**D**on't **R**epeat **Y**ourself) einzuhalten, können wir dieses `if`-Statement in eine weitere Methode auslagern und diese stattdessen aufrufen.

```Java
public void myMainProgram() {  
    while (!kara.treeFront()) {  
        this.invertLeaf();  
        kara.move();  
    }  
    this.invertLeaf();  
}  
  
private void invertLeaf() {  
    if (kara.onLeaf()) {  
        kara.removeLeaf();  
    } else {  
        kara.putLeaf();  
    }  
}
```
