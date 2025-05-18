> # Aufabenstellung
>
> Kara steht vor einem Baum, hinter dem sich ein Kleeblatt befindet.
> Kara soll um den Baum herumgehen, das Kleeblatt aufnehmen,
> es einen Schritt weiter ablegen, einen Schritt vorgehen und sich umdrehen.
> 

```Java
import javakara.JavaKaraProgram;

public class Main extends JavaKaraProgram {
    public static void main(String[] args) {
        new Main().run("F:\\Worlds\\Extern\\Aufgabe1.world");
    }

    public void myMainProgram() {
        kara.turnLeft();
        kara.move();
        kara.turnRight();
        kara.move();
        kara.move();
        kara.turnRight();
        kara.move();
        kara.turnLeft();
        kara.removeLeaf();
        kara.move();
        kara.putLeaf();
        kara.move();
        kara.turnLeft();
        kara.turnLeft();
    }
}
```