var style = "html.loading { background: #868686; } html.loading::before { content: url(\"data:image/svg+xml;base64,PHN2ZyBpZD0ibG9hZGluZ0FuaW1hdGlvbiIgaGVpZ2h0PSIxMjAiIHdpZHRoPSIxMjAiIA0KICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQogICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAgMTIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgICA8Y2lyY2xlIGlkPSJjMSIgY3g9IjMwIiBjeT0iNjAiIHI9IjEiIC8+DQogICAgPGNpcmNsZSBpZD0iYzIiIGN4PSI2MCIgY3k9IjYwIiByPSIxIiAvPg0KICAgIDxjaXJjbGUgaWQ9ImMzIiBjeD0iOTAiIGN5PSI2MCIgcj0iMSIgLz4NCiAgICA8c3R5bGU+DQogICAgICAgIGNpcmNsZSB7DQogICAgICAgICAgICBzdHJva2U6ICNmZmY7DQogICAgICAgICAgICBmaWxsOiAjZmZmOw0KICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAwOw0KICAgICAgICAgICAgZGlzcGxheTogYWJzb2x1dGU7DQogICAgICAgICAgICBhbmltYXRpb246IHNjYWxlIDYwMG1zIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlOyAgICAgICAgIA0KICAgICAgICB9DQogICAgICAgICNjMSB7DQogICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOw0KICAgICAgICB9DQogICAgICAgICNjMiB7DQogICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zOw0KICAgICAgICB9DQogICAgICAgICNjMyB7DQogICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDQwMG1zOw0KICAgICAgICB9DQogICAgICAgIEBrZXlmcmFtZXMgc2NhbGUgew0KICAgICAgICAgICAgZnJvbSB7IHN0cm9rZS13aWR0aDogMDsgfQ0KICAgICAgICAgICAgdG8geyBzdHJva2Utd2lkdGg6IDIwcHg7IH0NCiAgICAgICAgfQ0KDQogICAgICAgICNsb2FkaW5nQW5pbWF0aW9uIHsNCiAgICAgICAgICAgIA0KICAgICAgICB9DQo8L3N0eWxlPg0KPC9zdmc+DQo=\"); position: fixed; display: block; top: 50%; left: 50%; margin-top: -60px; margin-left: -60px; width: 120px; height: 120px; z-index: 2; } html.loading, html.loading > body { overflow: hidden; } html.loading > body { opacity: 0; }"
var elem = document.createElement('style');
elem.innerHTML = style;
document.head.appendChild(elem);
var classesStr = document.documentElement.getAttribute('class') || '';
document.documentElement.setAttribute('class', (classesStr += ' loading').trim());
window.addEventListener('load', removeLoadingScreen);
function removeLoadingScreen() {
    var classes = (document.documentElement.getAttribute('class') || '').split(' ');
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] === 'loading')
            classes[i] = '';
    }
    document.documentElement.setAttribute('class', classes.join(' ').trim());
}