> # Aufgabenstellung
>
> Kara soll ein Kleeblatt finden, das sich in der gleichen Zeile (oder Spalte) befindet wie er selbst.
> Zwischen ihm und dem Kleeblatt können Bäume stehen, wobei mehrere Bäume hintereinander stehen können.
> Schreibe das Programm mit einer Methode `bypassTrees()`.
>

```Java
public void myMainProgram() {
    while (!kara.onLeaf()) {
        if (kara.treeFront()) {
            this.bypassTrees();
        } else {
            kara.move();
        }
    }
}

private void bypassTrees() {
    kara.turnLeft();
    kara.move();
    kara.turnRight();
    do {
        kara.move();
    } while (kara.treeRight());
    kara.turnRight();
    kara.move();
    kara.turnLeft();
}
```
