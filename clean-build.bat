@echo off
echo ========================================
echo LIMPIEZA COMPLETA DE CACHE - MERCATOP
echo ========================================
echo.

echo [1/4] Eliminando directorio out/...
if exist "out" (
    rmdir /s /q "out"
    echo ✓ Directorio out/ eliminado
) else (
    echo ✓ Directorio out/ no existe
)

echo.
echo [2/4] Eliminando directorio .next/...
if exist ".next" (
    rmdir /s /q ".next"
    echo ✓ Directorio .next/ eliminado
) else (
    echo ✓ Directorio .next/ no existe
)

echo.
echo [3/4] Limpiando cache de npm...
npm cache clean --force
echo ✓ Cache de npm limpiado

echo.
echo [4/4] Ejecutando build sin cache...
npm run build

echo.
echo ========================================
echo BUILD COMPLETADO SIN CACHE
echo ========================================
echo.
echo Los archivos estaticos estan en: out/
echo Sube el contenido de out/ a public_html en Hostinger
echo.
pause