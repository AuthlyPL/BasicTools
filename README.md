![basic-tools-banner](https://github.com/user-attachments/assets/8afdf5f9-3c7d-4cab-a359-a26e88c58d13)

# BasicTools
Narzędzia do tworzenia stron dla Web Developerów.

# INSTALACJA LOKALNA
1. Wrzucamy plik BasicTools.js do plików lokalnych strony.
2. Dodajemy w plikach .html lub innych plikach od struktury strony:<br>``<script src="path/to/file/BasicTools.js" text="text/javascript"></script>``

# INSTALACJA CDN
1. Dodajemy w plikach .html lub innych plikach od struktury strony:<br>``<script src="https://authly.pl/cdn/v1.0/BasicTools.js" text="text/javascript"></script>``

# DOKUMENTACJA

### DEBUG
```javascript
debugTools(true); // Włącza debugowanie
debugTools(false); // Wyłącza debugowanie
// Domyślnie: Wyłączone
```

### LOOP
```javascript
new Loop(id, seconds, cb); // Tworzy pętle
stopLoop(id); // Zatrzymuje pętle

// Tworzenie pętli
new Loop('loop-id', 5, () =>
{
    if (something) // Warunek zakończenia pętli
    {
        stopLoop('loop-id'); // Zakończenie pętli
    }
});
```

### META
```javascript
new AnimatedTitle(titles, change); // titles jako lista [], change jako co ile sekund zmienia
new AnimatedTitle(['title 1', 'title 2'], 3); // dwa tytuły strony, zmiana co 3 sekundy

new AnimatedIcon(icons, change); // titles jako lista [], change jako co ile sekund zmienia
new AnimatedIcon(['path/to/image/1.icon', 'path/to/image/2.icon'], 3); // dwie ikony strony, zmiana co 3 sekundy
```

### COOKIES
```javascript
addCookie(id, value, daysToExpire); // Tworzy plik cookie, w przypadku nie ustawienia daysToExpire ustawia się na stałe
addCookie('loggedIn', true, 3); // Dodaje plik cookie loggedIn na wartość true, ważny przez 3 dni
addCookie('loggedIn', true); // Dodaje plik cookie loggedIn na wartość true, ważny na stałe

deleteCookie(id); // Usuwa plik cookie
deleteCookie('loggedIn'); // Usuwa plik cookie loggedIn

getCookieValue(id); // Zwraca wartość pliku cookie
getCookieValue('loggedIn'); // Zwraca wartość lub w przypadku braku pliku cookie zwróci ''

cookieExists(id); // Zwraca czy plik cookie został stworzony
cookieExists('loggedIn'); // Zwraca true albo false
```

### USER
```javascript
copyText(text); // Kopiuje podany tekst
copyText('hello world'); // Kopiuje do schowka hello world

isMobile(); // Zwraca czy użytkownik korzysta z urządzenia mobilnego
```

### UI
```javascript
new CenterFixed(inner, idToAppend); // Tworzy wyśrodkowany statyczny objekt, przyłączony do idToAppend, gdy nie ustawione wpisuje do body
new CenterFixed('<h1>Testowy center DIV</h1>', 'container'); // Tworzy objekt w #container
new CenterFixed('<h1>Testowy center DIV</h1>'); // Tworzy objekt w <body>

new FooterFixed(isCenter, left, translateX, bottom, background, inner, width, height, idToAppend);
new FooterFixed(true, '', '', '25px', 'red', '<h1>Awesome website &copy; 2024</h1>', '50%', '100px', 'container');
new FooterFixed(false, '25px', '-50%', '25px', 'red', '<h1>Awesome website &copy; 2024</h1>', '75%', '100px');
```
