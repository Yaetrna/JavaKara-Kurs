> # Aufgabenstellung
>
> Kara soll ein Kleeblatt finden, das sich in der gleichen Zeile (oder Spalte) befindet wie er selbst.
> Zwischen ihm und dem Kleeblatt können Bäume stehen, wobei nie zwei Bäume direkt nebeneinander stehen.
> Schreibe das Programm mit der Methode `bypassTree()`.
>

```Java
public void myMainProgram() {
    while (!kara.onLeaf()) {
        if (kara.treeFront()) {
            this.bypassTree();
        } else {
            kara.move();
        }
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
```
