# Prueba Técnica – Desarrollador Front-End  
Jessica Quintero

---

##  Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone <git clone https://github.com/Jessik1995/prueba-tecnica-outlet-rental-cars.git>
```

2.Version de node
```bash
nvm use 20.11.0
```

3. Instalar dependencias:
```bash
npm install
```

4. Ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```


5. Abrir en el navegador:
```
http://localhost:3000
```

---

##  Decisiones técnicas

### Framework
Se utilizó **Next.js** como framework principal para aprovechar su sistema de rutas y la capacidad de renderizado del lado del servidor.

### Server-Side Rendering (SSR)
La vista de resultados implementa **Server-Side Rendering** mediante `getServerSideProps`, permitiendo simular un flujo real de búsqueda y mejorar el rendimiento inicial de la página.

### Estado global
Se utilizó **Redux Toolkit + Thunk** para manejar:
- Resultados de búsqueda
- Vehículo seleccionado
- Estados de carga (`loading`)
- Manejo de errores (`error`)

### Mock de API
No se utiliza una API real.  
Los datos se obtienen a partir de un **mock de API**, consumido mediante un servicio asíncrono que simula una llamada GET.

---

##  Integración con pasarela de pago (conceptual)

1. En la vista de resumen, se tomaría la información del vehículo seleccionado y del total a pagar.
2. Al hacer clic en “Continuar”, se enviaría esta información a un endpoint del backend.
3. El backend devolvería una URL o sesión de pago generada por la pasarela (por ejemplo, Stripe o MercadoPago).
4. El Front-End redirigiría al usuario a la pasarela para completar el pago.
5. Una vez finalizado el proceso, el usuario sería redirigido nuevamente a la aplicación para mostrar el estado final de la reserva.