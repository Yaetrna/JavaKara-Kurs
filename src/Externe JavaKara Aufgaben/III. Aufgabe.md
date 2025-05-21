> # Aufgabenstellung
>
> Kara steht vor einem Baum oder nicht.
> Wenn nicht, soll er einfach einen Schritt weitergehen oder ansonsten um den einzelnen Baum herumgehen.
>

```Java
import javakara.JavaKaraProgram;

public class Main extends JavaKaraProgram {
    public static void main(String[] args) {
        new Main().run();
    }

    public void myMainProgram() {
        if (kara.treeFront()) {
            this.bypassTree();
        } else {
            kara.move();
        }
    }

    private void bypassTree() {
        kara.turnLeft();
        kara.move();
        kara.turnRight();
        kara.move();
        kara.move();
        kara.turnRight();
        kara.move();
        kara.turnLeft();
    }
}
```