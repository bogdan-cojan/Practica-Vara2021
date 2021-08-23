# :wavy_dash: Proiect Practica :wavy_dash:

:star2: Acest proiect este o aplicatie Web scrisa in React.js (Front-End), iar pentru Back-End am un proiect Web API in C# care preia datele dintr-o baza de date SQL Server. 

![FullApp](https://github.com/bogdan-cojan/Practica-Vara2021/blob/main/DesignPictures/webApp.png?raw=true)

# :wavy_dash: Despre Aplicatie :wavy_dash:

:zap: Aplicatia mea are tema Tenis, care prezinta o lista de jucatori de tenis, fete si baieti. Apasand click pe un jucator/jucatoare se vor afisa mai multe informatii specifice despre acesta + link-urile acestuia de social media.
A doua pagina a proiectului afiseaza un top al jucatorilor sortat dupa locul in clasament si dupa sex.
Ultima pagina principala ofera posibilitatea de a adauga un nou jucator in lista.

# :wavy_dash: Functionalitati :wavy_dash:

:fire: Prima functie care o are aplicatia este de GET, care obtine printr-un API informatiile dintr-o baza de date si le afiseaza in Front-End.

:fire: A doua functie este PATCH, care ofera posibilitatea de a edita unele informatii ale jucatorului.

:fire: A treia functie este DELETE, care va sterge jucatorul dorit din baza de date.

:fire: Ultima functie este POST, prin care putem adauga un nou jucator in baza de date, care va fi apoi prezent in Front-End, fara repornirea aplicatiei.

# :wavy_dash: Teste Unitare :wavy_dash:

:heavy_check_mark: Sunt teste prezente pentru Back-End, fiind scrise intr-un proiect xUnit.

:heavy_check_mark: Am teste si pentru Front-End, folosind cadrul de testare Jest.
