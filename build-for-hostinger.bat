@echo off
echo ========================================
echo  MERCATOP - BUILD PARA HOSTINGER
echo ========================================
echo.

echo [1/3] Limpiando directorio out anterior...
if exist "out" (
    rmdir /s /q "out"
    echo Directorio out eliminado.
) else (
    echo No hay directorio out previo.
)
echo.

echo [2/3] Compilando proyecto para produccion...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Fallo en la compilacion
    pause
    exit /b 1
)
echo.

echo [3/3] Verificando archivos generados...
if exist "out\index.html" (
    echo ✓ Archivos estaticos generados correctamente
    echo ✓ Ubicacion: %cd%\out
    echo.
    echo INSTRUCCIONES PARA HOSTINGER:
    echo 1. Sube TODO el contenido de la carpeta 'out' a public_html
    echo 2. NO subas la carpeta 'out' en si, solo su contenido
    echo 3. Asegurate de que index.html este en la raiz de public_html
    echo.
    echo Para mas detalles, consulta: DEPLOY-HOSTINGER.md
) else (
    echo ERROR: No se generaron los archivos estaticos
)

echo.
echo ========================================
echo  PROCESO COMPLETADO
echo ========================================
pause