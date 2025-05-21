> # Aufgabenstellung
>
> Kara bewacht eine zusammenhängende Fläche, die durch Bäume begrenzt ist.
> Er soll endlos außen an den „Wänden“ aus Bäumen entlang laufen.
> Variante: Er soll zuerst zu seiner Fläche und dann erst endlos darum herum laufen.
>

```Java
public void myMainProgram() {
    while (true) {
        if (kara.treeFront()) {
            kara.turnLeft();
        } else {
            if (kara.treeRight()) {
                kara.move();
            } else {
                kara.turnRight();
                kara.move();
            }
        }
    }
}
```