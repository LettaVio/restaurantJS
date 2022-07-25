(()=>{"use strict";var __webpack_modules__={368:()=>{eval("\n;// CONCATENATED MODULE: ./modules/menu.js\nconst menu = () => {\r\n    const restaurant = 'tanuki';\r\n\r\n    const renderItems = (data) => {\r\n        data.forEach(element => {\r\n            console.log(element);\r\n        });\r\n    }\r\n    fetch(`./db/${restaurant}.json`)\r\n        .then(response => response.json())\r\n        .then(data => renderItems(data))\r\n        .catch(error => console.log(error))\r\n}\r\n\n;// CONCATENATED MODULE: ./modules/auth.js\nconst auth = () => {\r\n    const buttonAuth = document.querySelector(\".button-auth\");\r\n    const modalAuth = document.querySelector(\".modal-auth\");\r\n    const buttonOut = document.querySelector(\".button-out\");\r\n    const userName = document.querySelector(\".user-name\");\r\n    const closeAuth = document.querySelector(\".close-auth\");\r\n    const loginForm = document.getElementById(\"logInForm\");\r\n    const inputLogin = document.getElementById(\"login\");\r\n    const inputPassword = document.getElementById(\"password\");\r\n\r\n    const login = (user) => {\r\n\r\n        buttonAuth.style.display = 'none';\r\n        buttonOut.style.display = 'flex';\r\n        userName.style.display = 'flex';\r\n        userName.textContent = user.login;\r\n        modalAuth.style.display = 'none';\r\n    }\r\n\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex';\r\n        buttonOut.style.display = 'none';\r\n        userName.style.display = 'none';\r\n        userName.textContent = '';\r\n        localStorage.removeItem('user');\r\n    }\r\n\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex';\r\n    })\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none';\r\n    })\r\n\r\n    buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n    loginForm.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n        const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value\r\n        }\r\n        if (inputLogin.value != '') {\r\n\r\n            localStorage.setItem('user', JSON.stringify(user));\r\n            login(user);\r\n        }\r\n        else {\r\n            inputLogin.placeholder = \"Enter your Login!\";\r\n        }\r\n\r\n\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\n;// CONCATENATED MODULE: ./index.js\n\r\n\r\n\r\n\r\nauth()\r\nmenu()\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY4LmpzIiwibWFwcGluZ3MiOiI7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5RHNDO0FBQ0E7QUFDdEM7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9tZW51LmpzPzUyNGIiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hdXRoLmpzPzRhNDIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSAndGFudWtpJztcclxuXHJcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudH0uanNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gcmVuZGVySXRlbXMoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hdXRoXCIpO1xyXG4gICAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xyXG4gICAgY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb3V0XCIpO1xyXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcclxuICAgIGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYXV0aFwiKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nSW5Gb3JtXCIpO1xyXG4gICAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcblxyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSlcclxuXHJcbiAgICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9nb3V0KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5wdXRMb2dpbi52YWx1ZSAhPSAnJykge1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgICAgIGxvZ2luKHVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRMb2dpbi5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBMb2dpbiFcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICAgICAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuXHJcblxyXG5hdXRoKClcclxubWVudSgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///368\n")}},__webpack_exports__={};__webpack_modules__[368]()})();