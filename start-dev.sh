#!/bin/bash

cd /Users/josemichaelhernandezvargas/Desktop/salva-mercatop

echo "🧹 Limpiando caché..."
rm -rf .next
rm -rf node_modules/.cache

echo "🔧 Instalando dependencias..."
npm install

echo "🚀 Iniciando servidor de desarrollo..."
npm run dev