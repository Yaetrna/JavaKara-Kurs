> # Aufgabenstellung
> Version 1: Kara steht vor einer Reihe von Kleeblättern,
> an deren Ende ein Baum steht.
> Die Kleeblattreihe kann Lücken haben.
> Kara soll alle Kleeblätter aufsammeln.
> Version 2: Kara soll die Kleeblattreihe invertieren, d.h. wenn er auf einem Kleeblatt steht,
> soll er es aufnehmen; wenn er keines vorfindet, soll er eines ablegen.
>

**Version 1:**
```Java
public void myMainProgram() {
    while (!kara.treeFront()) {
        this.pickUpLeaf();
        kara.move();
    }
    this.pickUpLeaf();
}

private void pickUpLeaf() {
    if (kara.onLeaf()) {
        kara.removeLeaf();
    }
}
```

**Version 2:**
```Java
public void myMainProgram() {
    while (!kara.treeFront()) {
        invertLeaf();
        kara.move();
    }
    invertLeaf();
}

private void invertLeaf() {
    if (kara.onLeaf()) {
        kara.removeLeaf();
    } else {
        kara.putLeaf();
    }
}
```
