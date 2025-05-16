> # Aufgabenstellung
> Kara möchte zwischen den Bäumen Slalom fahren.
> Programmieren Sie Kara so, dass er den Slalom endlos hin- und zurück fährt.
> Am Anfang ist Kara immer so platziert, dass er zuerst eine Linkskurve machen muss.
> Wie lange der Parcour ist (wieviele Bäume der Slalom hat), weiss Kara zu Beginn natürlich nicht.
> Es soll ihm auch egal sein, ob die Bäume horizontal oder vertikal nebeneinander stehen.
>
> ![Bild](./img/Slalom.png)

# TODO! EXPLAIN LATER

```Java
public void myMainProgram() {
    boolean lastMoveLeft = false;
    while (true) {
        if (kara.treeLeft() && !kara.treeRight()) {
            this.aroundTreeLeft();
            lastMoveLeft = true;
        } else if (!kara.treeLeft() && kara.treeRight()) {
            this.aroundTreeRight();
            lastMoveLeft = false;
        }
        while (kara.treeLeft() && kara.treeRight()) {
            if (lastMoveLeft) {
                this.aroundTreeRight();
                lastMoveLeft = false;
            } else {
                this.aroundTreeLeft();
                lastMoveLeft = true;
            }
        }
    }
}

private void aroundTreeLeft() {
    kara.move();
    kara.turnLeft();
    kara.move();
    kara.move();
    kara.turnLeft();
    kara.move();
}

private void aroundTreeRight() {
    kara.move();
    kara.turnRight();
    kara.move();
    kara.move();
    kara.turnRight();
    kara.move();
}
```
