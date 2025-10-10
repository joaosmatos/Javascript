// modulos em ES6

import {PI, soma } from "./calculadora";
import { subtracao } from "./cauculadora";
import { showmessage, showmessageInfo } from "./mensagens";

showmessage(PI);

showmessage(soma(5, 6, 7, 8));

showmessageInfo(subtracao(10, 6));