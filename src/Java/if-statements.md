> # if-Statements
> In der Programmierung werden wir oft mit Situationen konfrontiert,
> in denen wir abhängig einer oder mehreren Variablen, Entscheidungen treffen müssen. 
> Ein Programm muss in der Lage sein, unterschiedliche Aktionen basierend auf bestimmten Bedingungen auszuführen.
> Hierfür verwenden wir Kontrollstrukturen wie das `if`-Statement, welches eine der grundlegendsten
> Kontrollstrukturen in Java und vielen anderen Programmiersprachen darstellt.

## Grundlegende Syntax

Die einfachste Form eines `if`-Statements in Java sieht folgendermaßen aus:

```Java
if (bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung `true` ist
}
```

> # Hinweis
>
> Ein `if`-Statement prüft implizit ob die Bedingung `true` ist.
> ```Java
> if (bedingung == true) {}
> ```
> Hat dieselbe Bedeutung wie
> ```Java
> if (bedingung) {}
> ```

Die `bedingung` muss einen booleschen Wert (`true` oder `false`) enthalten. Wenn die Bedingung zu `true` ausgewertet wird, wird der Code innerhalb der geschweiften Klammern ausgeführt. Wenn die Bedingung `false` ergibt, wird dieser Code übersprungen.

## if-else Statement

Mit einem `if-else`-Statement können wir eine alternative Ausführung festlegen, falls die Bedingung `false` ergibt:

```Java
if (bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung `true` ist
} else {
    // Code, der ausgeführt wird, wenn die Bedingung `false` ist
}
```

## else-if Statement

Wenn wir mehrere Bedingungen prüfen möchten, können wir `else if` verwenden:

```Java
if (bedingung1) {
    // Code, der ausgeführt wird, wenn bedingung1 `true` ist
} else if (bedingung2) {
    // Code, der ausgeführt wird, wenn bedingung1 `false` und bedingung2 `true` ist
} else {
    // Code, der ausgeführt wird, wenn beide Bedingungen `false` sind
}
```

Hier wird jede Bedingung der Reihe nach geprüft. Sobald eine Bedingung `true` ergibt, wird der zugehörige Code ausgeführt und alle nachfolgenden Bedingungen werden übersprungen.

## Geschachtelte if-Statements

`if`-Statements können auch geschachtelt werden:

```Java
if (äußereBedingung) {
    if (innereBedingung) {
        // Code, der ausgeführt wird, wenn beide Bedingungen true sind
    }
}
```

## Vergleichsoperatoren

Für die Bedingungen in `if`-Statements werden oft Vergleichsoperatoren verwendet:

| Operator   | Bedeutung                |
|------------|--------------------------|
| `==`       | Gleichheit               |
| `!=`       | Ungleichheit             |
| `>`        | Größer als               |
| `<`        | Kleiner als              |
| `>=`       | Größer oder gleich       |
| `<=`       | Kleiner oder gleich      |

> # Hinweis
>
> Bei Vergleichen von Objekten mit `==` wird die Referenzgleichheit geprüft, nicht die inhaltliche Gleichheit.
> Um den Inhalt von Objekten zu vergleichen, sollte die `equals()`-Methode verwendet werden.

```Java
String str1 = "Hallo";
String str2 = "Hallo";
String str3 = new String("Hallo");

// Vergleicht Referenzen
if (str1 == str2) {  // true, da beide auf den gleichen String-Pool-Eintrag verweisen
    System.out.println("str1 und str2 haben die gleiche Referenz");
}

if (str1 == str3) {  // false, da str3 ein neues Objekt im Heap ist
    System.out.println("Dies wird nicht ausgegeben");
}

// Vergleicht Inhalte
if (str1.equals(str3)) {  // true, da der Inhalt gleich ist
    System.out.println("str1 und str3 haben den gleichen Inhalt");
}
```

## Logische Operatoren

Um komplexere Bedingungen zu erstellen, können logische Operatoren verwendet werden:

| Operator   | Bedeutung                                              |
|------------|--------------------------------------------------------|
| `&&`       | Logisches UND (beide Bedingungen müssen `true` sein)   |
| `\|\|`     | Logisches ODER (eine der Bedingungen muss `true` sein) |
| `!`        | Logisches NICHT (negiert den Wert)                     |

```Java
int alter = 25;
boolean hatFührerschein = true;

if (alter >= 18 && hatFührerschein) {
    System.out.println("Die Person darf Auto fahren");
}

if (alter < 18 || !hatFührerschein) {
    System.out.println("Die Person darf nicht Auto fahren");
}
```

## Kurzschluss-Auswertung

Java verwendet "kurzschluss"-Operatoren. Das bedeutet, dass bei `&&` die zweite Bedingung nur geprüft wird, wenn die erste Bedingung `true` ist. Bei `||` wird die zweite Bedingung nur geprüft, wenn die erste Bedingung `false` ist.

```Java
if (objekt != null && objekt.istGültig()) {
    // objekt.istGültig() wird nur aufgerufen, wenn objekt nicht null ist
}
```

## Der ternäre Operator

Eine Kurzform für einfache `if-else`-Statements ist der ternäre Operator:

```Java
// Syntax: bedingung ? ausdruck1 : ausdruck2
String status = (alter >= 18) ? "erwachsen" : "minderjährig";
```

Dies entspricht:

```Java
String status;
if (alter >= 18) {
    status = "erwachsen";
} else {
    status = "minderjährig";
}
```

## Blocklose if-Statements

Wenn ein `if`-Statement nur eine einzige Anweisung enthält, können die geschweiften Klammern weggelassen werden:

```Java
if (bedingung)
    eineAnweisung();  // Nur diese Anweisung gehört zum if-Block
// Hier beginnt wieder der normale Programmfluss
```

> # Hinweis
>
> Obwohl blocklose `if`-Statements syntaktisch korrekt sind, können sie zu schwer lesbarem Code und versteckten Fehlern führen.
> Es wird generell empfohlen, immer geschweifte Klammern zu verwenden, um den Code-Block klar abzugrenzen.

## Übungsbeispiel: Studenten-Notensystem

Hier ist ein Beispiel für die Verwendung von `if`-Statements in einem einfachen Notensystem:

```Java
public class Notensystem {
    public static void main(String[] args) {
        int punkte = 78;
        char note;
        
        if (punkte >= 90) {
            note = 'A';
        } else if (punkte >= 80) {
            note = 'B';
        } else if (punkte >= 70) {
            note = 'C';
        } else if (punkte >= 60) {
            note = 'D';
        } else {
            note = 'F';
        }
        
        System.out.println("Mit " + punkte + " Punkten erhält der Student die Note: " + note);
        
        // Verwendung des ternären Operators für die Bewertung "bestanden/nicht bestanden"
        String ergebnis = (punkte >= 60) ? "bestanden" : "nicht bestanden";
        System.out.println("Der Student hat " + ergebnis);
    }
}
```

## Fehler und Best Practices

### Häufige Fehler

1. **Verwechslung von `=` und `==`**:
   ```Java
   // Falsch - weist den Wert zu, anstatt zu vergleichen
   if (x = 5) { ... }
   
   // Richtig - vergleicht den Wert
   if (x == 5) { ... }
   ```

2. **Vergessen von Klammern bei mehreren Anweisungen**:
   ```Java
   // Falsch - nur die erste Anweisung gehört zum if-Block
   if (x > 5)
       System.out.println("x ist größer als 5");
       x = 5;  // Diese Zeile wird immer ausgeführt!
   
   // Richtig
   if (x > 5) {
       System.out.println("x ist größer als 5");
       x = 5;
   }
   ```

### Best Practices

1. **Immer geschweifte Klammern verwenden**, auch für einzeilige Blöcke.
2. **Bedingungen klar und lesbar formulieren**.
3. **Komplexe Bedingungen in kleinere, benannte Teile aufteilen**:
   ```Java
   // Komplex und schwer lesbar
   if (alter >= 18 && hatFührerschein && !istGefahrenquelle && fahrzeugVerfügbar) { ... }
   
   // Besser lesbar
   boolean darfFahren = alter >= 18 && hatFührerschein;
   boolean istSicher = !istGefahrenquelle && fahrzeugVerfügbar;
   
   if (darfFahren && istSicher) { ... }
   ```

4. **Vermeiden von tief geschachtelten `if`-Statements** - sie machen den Code schwer lesbar. Es ist besser frühe Returns oder das Extrahieren von Methoden zu verwenden.

## Zusammenfassung

`if`-Statements sind ein grundlegendes Element der Programmierung, das es uns ermöglicht, Entscheidungen basierend auf bestimmten Bedingungen zu treffen. In Java können wir `if`, `else if` und `else` verwenden, um verschiedene Bedingungen zu prüfen und unterschiedliche Aktionen auszuführen.
