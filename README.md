# Proyecto: Analizador con ANTLR4 y Node.js

## 📄 Descripción
Este proyecto implementa un analizador para un lenguaje basado en bloques `repetir ... hasta ...`, usando ANTLR4 y ejecutado desde Node.js.

## 🛠 Requisitos
- Node.js v16+ (recomendado)
- ANTLR4 instalado
- Visual Studio Code (recomendado)

## 📁 Estructura
(grammar, inputs, src...)

## ⚙️ Cómo ejecutar
1. Instalar dependencias:
   ```bash
   npm install
Generar archivos de ANTLR4:
antlr4 -Dlanguage=JavaScript -o src grammar/Instruccion.g4
Ejecutar analizador con un archivo de entrada:
node src/index.js inputs/input1.txt

Verás:

Mensajes de validación

Tabla de tokens y lexemas

Árbol sintáctico

Traducción a JavaScript

✅ Entradas válidas
input1.js
input2.js

❌ Entradas inválidas
error.js: falta hasta
error2.js: mal uso de salir

Autor:
Luca Reinoso 52095