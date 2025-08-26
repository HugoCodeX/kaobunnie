// Control de música

// Animaciones y efectos interactivos para la página de amor
document.addEventListener("DOMContentLoaded", function () {
  // Referencias a elementos
  const surpriseBtn = document.getElementById("surpriseBtn");
  const modal = document.getElementById("surpriseModal");
  const closeBtn = document.querySelector(".close");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const loveMessage = document.getElementById("loveMessage");
  const musicToggle = document.getElementById("musicToggle");

  // Control de música - Abrir en nueva pestaña
  musicToggle.addEventListener("click", function () {
    // Abrir YouTube en nueva pestaña
    window.open("https://www.youtube.com/watch?v=RmE0zb8hcds", "_blank");

    // Cambiar el texto del botón temporalmente
    this.querySelector(".music-text").textContent = "¡Música abierta! 🎵";
    this.classList.add("playing");

    // Mensaje en consola
    console.log(
      "🎵 Abriendo música de Mon Laferte para Kaobunnie en nueva pestaña"
    );

    // Crear efectos especiales cuando se abre la música
    createKaobunnieRain();

    // Volver al texto original después de 3 segundos
    setTimeout(() => {
      this.querySelector(".music-text").textContent = "Escuchar Mon Laferte";
      this.classList.remove("playing");
    }, 3000);
  });

  // Función para mostrar el modal sorpresa
  function showSurprise() {
    modal.style.display = "block";
    createFloatingHearts();
    playHeartAnimation();
  }

  // Función para cerrar el modal
  function closeSurprise() {
    modal.style.display = "none";
    // Resetear el estado del modal
    document.querySelector(".proposal-question").style.display = "block";
    document.querySelector(".proposal-buttons").style.display = "flex";
    loveMessage.style.display = "none";
  }

  // Event listeners
  surpriseBtn.addEventListener("click", showSurprise);
  closeBtn.addEventListener("click", closeSurprise);

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeSurprise();
    }
  });

  // Funcionalidad de la propuesta
  let noClickCount = 0;
  const noMessages = [
    "¿Estás segura? 🥺",
    "Por favor, di que sí 😢",
    "¡Venga, mi conejito! 🐰",
    "Te prometo ser el mejor pololo 💕",
    "¡No puedes decir que no! 😭",
  ];

  yesBtn.addEventListener("click", function () {
    // Ocultar la pregunta y botones
    document.querySelector(".proposal-question").style.display = "none";
    document.querySelector(".proposal-buttons").style.display = "none";

    // Mostrar mensaje de amor
    loveMessage.style.display = "block";

    // ¡FUEGOS ARTIFICIALES ESPECTACULARES!
    createFireworksExplosion();

    // Múltiples explosiones en secuencia
    setTimeout(() => createFireworksExplosion(), 300);
    setTimeout(() => createFireworksExplosion(), 600);
    setTimeout(() => createFireworksExplosion(), 900);
    setTimeout(() => createFireworksExplosion(), 1200);

    // Lluvia continua de elementos
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        createKaobunnieRain();
      }, i * 400);
    }
  });

  noBtn.addEventListener("click", function (e) {
    e.preventDefault();

    noClickCount++;

    if (noClickCount < noMessages.length) {
      // Cambiar el texto del botón "No"
      noBtn.textContent = noMessages[noClickCount - 1];

      // Hacer que el botón se mueva
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 100;

      noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

      // Volver a la posición original después de un momento
      setTimeout(() => {
        noBtn.style.transform = "translate(0px, 0px)";
      }, 1000);
    } else {
      // Después de varios intentos, hacer que el botón "No" desaparezca
      noBtn.style.display = "none";

      // Cambiar la pregunta
      document.querySelector(".proposal-question h3").textContent =
        "¡Solo queda una opción! 💕";

      // Hacer el botón "Sí" más grande y llamativo
      yesBtn.style.transform = "scale(1.2)";
      yesBtn.style.animation = "yesButtonPulse 0.5s ease-in-out infinite";
    }
  });

  // El botón "No" se escapa del puntero
  noBtn.addEventListener("mouseenter", function () {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    this.style.transition = "transform 0.3s ease-out";

    setTimeout(() => {
      this.style.transform = "translate(0px, 0px)";
    }, 1000);
  });

  // Crear elementos flotantes mágicos dinámicos
  function createFloatingHearts() {
    const elementsContainer = document.querySelector(".floating-elements");
    const magicalElements = ["🐰", "🐇", "🌻", "☁️", "🌸", "🌺", "💕", "💖"];

    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const element = document.createElement("div");
        element.className = "magical-float";
        element.innerHTML =
          magicalElements[Math.floor(Math.random() * magicalElements.length)];
        element.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${window.innerHeight}px;
                    font-size: ${Math.random() * 15 + 20}px;
                    pointer-events: none;
                    z-index: 1001;
                    animation: magicalFloatUp 4s ease-out forwards;
                `;

        document.body.appendChild(element);

        // Remover el elemento después de la animación
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 4000);
      }, i * 300);
    }
  }

  // Añadir animación CSS para elementos flotantes mágicos
  const style = document.createElement("style");
  style.textContent = `
        @keyframes magicalFloatUp {
            0% {
                transform: translateY(0px) rotate(0deg) scale(1);
                opacity: 1;
            }
            25% {
                transform: translateY(-${
                  window.innerHeight * 0.2
                }px) rotate(90deg) scale(1.1);
                opacity: 0.9;
            }
            50% {
                transform: translateY(-${
                  window.innerHeight * 0.5
                }px) rotate(180deg) scale(0.9);
                opacity: 0.7;
            }
            75% {
                transform: translateY(-${
                  window.innerHeight * 0.8
                }px) rotate(270deg) scale(1.2);
                opacity: 0.5;
            }
            100% {
                transform: translateY(-${
                  window.innerHeight + 100
                }px) rotate(360deg) scale(0.8);
                opacity: 0;
            }
        }
        
        @keyframes sparkleEffect {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .sparkle-text {
            animation: sparkleEffect 1.5s ease-in-out infinite;
        }
        
        @keyframes kaobunnieGlow {
            0%, 100% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,182,193,0.8); }
            50% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,1); }
        }
    `;
  document.head.appendChild(style);

  // Animación especial para los elementos del modal
  function playHeartAnimation() {
    const elements = document.querySelectorAll(".bunny-explosion > div");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transform = "scale(1.8) rotate(360deg)";
        element.style.transition = "transform 0.6s ease";
        setTimeout(() => {
          element.style.transform = "scale(1) rotate(0deg)";
        }, 600);
      }, index * 150);
    });

    // Crear lluvia de elementos especiales
    createKaobunnieRain();
  }

  // Efecto de escritura para la carta de amor
  function typeWriterEffect() {
    const letterParagraphs = document.querySelectorAll(".letter-content p");
    letterParagraphs.forEach((paragraph, index) => {
      if (index === 0) return; // Saltar el saludo

      const originalText = paragraph.textContent;
      paragraph.textContent = "";
      paragraph.style.borderRight = "2px solid #e74c3c";

      let charIndex = 0;
      const typeInterval = setInterval(() => {
        paragraph.textContent += originalText[charIndex];
        charIndex++;

        if (charIndex >= originalText.length) {
          clearInterval(typeInterval);
          paragraph.style.borderRight = "none";
        }
      }, 50);
    });
  }

  // Efectos de hover para las tarjetas de razones
  const reasonCards = document.querySelectorAll(".reason-card");
  reasonCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".reason-icon i");
      icon.style.transform = "scale(1.2) rotate(360deg)";
      icon.style.transition = "transform 0.5s ease";
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".reason-icon i");
      icon.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Efecto de parallax suave para los elementos
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;

    // Solo aplicar parallax a los elementos flotantes, no al header
    const parallaxElements = document.querySelectorAll(".floating-elements");
    parallaxElements.forEach((element) => {
      const speed = 0.1; // Velocidad más lenta
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Animación de entrada para las secciones
  function animateOnScroll() {
    const sections = document.querySelectorAll(
      ".love-letter, .reasons, .memories, .promises"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(section);
    });
  }

  // Efecto de pulso para los elementos principales
  function pulseMainHeart() {
    const bunnyLove = document.querySelector(".bunny-love");
    setInterval(() => {
      bunnyLove.style.transform = "scale(1.4) rotate(10deg)";
      bunnyLove.style.transition = "transform 0.4s ease";
      setTimeout(() => {
        bunnyLove.style.transform = "scale(1) rotate(0deg)";
      }, 400);
    }, 3000);

    // Efecto especial para el nombre
    const loveName = document.querySelector(".love-name");
    if (loveName) {
      setInterval(() => {
        loveName.classList.add("kaobunnie-glow");
        setTimeout(() => {
          loveName.classList.remove("kaobunnie-glow");
        }, 2000);
      }, 5000);
    }
  }

  // Crear elementos mágicos ocasionales
  function createShootingStar() {
    if (Math.random() > 0.92) {
      // 8% de probabilidad
      const magicalElements = ["🌟", "✨", "🌙", "⭐", "🌈"];
      const element = document.createElement("div");
      element.innerHTML =
        magicalElements[Math.floor(Math.random() * magicalElements.length)];
      element.style.cssText = `
                position: fixed;
                top: ${Math.random() * 150}px;
                left: -50px;
                font-size: ${Math.random() * 10 + 15}px;
                z-index: 1;
                pointer-events: none;
                animation: magicalShoot 3s linear forwards;
            `;

      document.body.appendChild(element);

      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 3000);
    }
  }

  // Añadir animación para elementos mágicos
  const magicalStyle = document.createElement("style");
  magicalStyle.textContent = `
        @keyframes magicalShoot {
            0% {
                left: -50px;
                transform: rotate(0deg) scale(1);
                opacity: 1;
            }
            50% {
                transform: rotate(180deg) scale(1.2);
                opacity: 0.8;
            }
            100% {
                left: ${window.innerWidth + 50}px;
                top: ${Math.random() * 300 + 100}px;
                transform: rotate(360deg) scale(0.8);
                opacity: 0;
            }
        }
        
        .kaobunnie-glow {
            animation: kaobunnieGlow 2s ease-in-out;
        }
    `;
  document.head.appendChild(magicalStyle);

  // Inicializar efectos
  animateOnScroll();
  pulseMainHeart();

  // Crear estrellas fugaces periódicamente
  setInterval(createShootingStar, 1000);

  // Efecto especial al cargar la página
  setTimeout(() => {
    document.querySelector(".main-title").classList.add("sparkle-text");
  }, 1000);

  // Agregar efecto de confeti cuando se hace hover en las promesas
  const promises = document.querySelectorAll(".promise");
  promises.forEach((promise) => {
    promise.addEventListener("mouseenter", function () {
      createMiniConfetti(this);
    });
  });

  function createMiniConfetti(element) {
    const rect = element.getBoundingClientRect();
    const kaobunnieElements = ["🐰", "🌻", "☁️", "🌸", "💕", "🌈"];

    for (let i = 0; i < 8; i++) {
      const confetti = document.createElement("div");
      confetti.innerHTML =
        kaobunnieElements[Math.floor(Math.random() * kaobunnieElements.length)];
      confetti.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top}px;
                font-size: ${Math.random() * 8 + 12}px;
                pointer-events: none;
                z-index: 1000;
                animation: kaobunnieConfetti 1.5s ease-out forwards;
            `;

      document.body.appendChild(confetti);

      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 1500);
    }
  }

  // Función especial para lluvia de elementos Kaobunnie
  function createKaobunnieRain() {
    const kaobunnieElements = [
      "🐰",
      "🐇",
      "🌻",
      "☁️",
      "🌸",
      "🌺",
      "💕",
      "💖",
      "🌈",
      "✨",
    ];

    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const element = document.createElement("div");
        element.innerHTML =
          kaobunnieElements[
            Math.floor(Math.random() * kaobunnieElements.length)
          ];
        element.style.cssText = `
                  position: fixed;
                  left: ${Math.random() * window.innerWidth}px;
                  top: -50px;
                  font-size: ${Math.random() * 10 + 15}px;
                  pointer-events: none;
                  z-index: 1002;
                  animation: kaobunnieRain 3s ease-in forwards;
              `;

        document.body.appendChild(element);

        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 3000);
      }, i * 100);
    }
  }

  // ¡FUNCIÓN DE FUEGOS ARTIFICIALES ESPECTACULARES!
  function createFireworksExplosion() {
    const fireworksElements = [
      "🐰",
      "🐇",
      "🌻",
      "☁️",
      "🌸",
      "🌺",
      "💕",
      "💖",
      "🌈",
      "✨",
      "🎊",
      "🎉",
    ];

    // Crear múltiples explosiones desde diferentes puntos
    const explosionPoints = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3 },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.3 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 },
      { x: window.innerWidth * 0.7, y: window.innerHeight * 0.5 },
    ];

    explosionPoints.forEach((point, index) => {
      setTimeout(() => {
        // Crear explosión radial desde cada punto
        for (let i = 0; i < 25; i++) {
          const element = document.createElement("div");
          element.innerHTML =
            fireworksElements[
              Math.floor(Math.random() * fireworksElements.length)
            ];

          // Calcular dirección radial
          const angle = (i / 25) * 360;
          const speed = Math.random() * 200 + 100;
          const distance = Math.random() * 300 + 150;

          const endX = point.x + Math.cos((angle * Math.PI) / 180) * distance;
          const endY = point.y + Math.sin((angle * Math.PI) / 180) * distance;

          element.style.cssText = `
            position: fixed;
            left: ${point.x}px;
            top: ${point.y}px;
            font-size: ${Math.random() * 15 + 20}px;
            pointer-events: none;
            z-index: 1003;
            transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: scale(0);
          `;

          document.body.appendChild(element);

          // Animación de explosión
          setTimeout(() => {
            element.style.transform = `translate(${endX - point.x}px, ${
              endY - point.y
            }px) scale(1.5) rotate(720deg)`;
            element.style.opacity = "1";
          }, 50);

          // Fade out y eliminación
          setTimeout(() => {
            element.style.opacity = "0";
            element.style.transform += " scale(0.5)";
          }, 1200);

          setTimeout(() => {
            if (element.parentNode) {
              element.parentNode.removeChild(element);
            }
          }, 2000);
        }
      }, index * 100);
    });

    // Explosión central adicional
    setTimeout(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      for (let i = 0; i < 40; i++) {
        const element = document.createElement("div");
        element.innerHTML =
          fireworksElements[
            Math.floor(Math.random() * fireworksElements.length)
          ];

        const angle = (i / 40) * 360;
        const distance = Math.random() * 400 + 200;
        const endX = centerX + Math.cos((angle * Math.PI) / 180) * distance;
        const endY = centerY + Math.sin((angle * Math.PI) / 180) * distance;

        element.style.cssText = `
          position: fixed;
          left: ${centerX}px;
          top: ${centerY}px;
          font-size: ${Math.random() * 20 + 25}px;
          pointer-events: none;
          z-index: 1004;
          transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: scale(0);
        `;

        document.body.appendChild(element);

        setTimeout(() => {
          element.style.transform = `translate(${endX - centerX}px, ${
            endY - centerY
          }px) scale(2) rotate(1080deg)`;
          element.style.opacity = "1";
        }, 100);

        setTimeout(() => {
          element.style.opacity = "0";
          element.style.transform += " scale(0.3)";
        }, 1800);

        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 2500);
      }
    }, 200);
  }

  // Animaciones para confeti y lluvia
  const confettiStyle = document.createElement("style");
  confettiStyle.textContent = `
        @keyframes kaobunnieConfetti {
            0% {
                transform: translateY(0px) rotate(0deg) scale(1);
                opacity: 1;
            }
            50% {
                transform: translateY(50px) rotate(180deg) scale(1.2);
                opacity: 0.8;
            }
            100% {
                transform: translateY(120px) rotate(360deg) scale(0.8);
                opacity: 0;
            }
        }
        
        @keyframes kaobunnieRain {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(${
                  window.innerHeight + 100
                }px) rotate(720deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(confettiStyle);

  // Mensaje de consola especial para Kaobunnie
  console.log("🐰💕 ¡Página de amor para Kaobunnie cargada con éxito! 🌻☁️");
  console.log(
    "✨ Cada línea de código fue escrita con amor para Tabita Mendoza ✨"
  );
  console.log("🐇 Mi querida Kaobunnie, eres mi conejito blanco favorito 🌸");
});

// Función para crear elementos Kaobunnie al hacer clic en cualquier lugar
document.addEventListener("click", function (e) {
  // No crear elementos si se hace clic en botones o enlaces
  if (
    e.target.tagName === "BUTTON" ||
    e.target.tagName === "A" ||
    e.target.closest("button")
  ) {
    return;
  }

  const kaobunnieElements = ["🐰", "🐇", "🌻", "☁️", "🌸", "💕", "✨"];
  const randomElement =
    kaobunnieElements[Math.floor(Math.random() * kaobunnieElements.length)];

  const element = document.createElement("div");
  element.innerHTML = randomElement;
  element.style.cssText = `
        position: fixed;
        left: ${e.clientX - 15}px;
        top: ${e.clientY - 15}px;
        font-size: ${Math.random() * 10 + 20}px;
        pointer-events: none;
        z-index: 1000;
        animation: clickKaobunnie 1.2s ease-out forwards;
    `;

  document.body.appendChild(element);

  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }, 1200);
});

// Animación para elementos Kaobunnie al hacer clic
const clickKaobunnieStyle = document.createElement("style");
clickKaobunnieStyle.textContent = `
    @keyframes clickKaobunnie {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        25% {
            transform: scale(1.3) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.8;
        }
        75% {
            transform: scale(1.4) rotate(270deg);
            opacity: 0.6;
        }
        100% {
            transform: scale(0) rotate(360deg) translateY(-60px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickKaobunnieStyle);

// Efecto especial al cargar para Kaobunnie
setTimeout(() => {
  const title = document.querySelector(".main-title");
  const loveName = document.querySelector(".love-name");

  if (title) title.classList.add("sparkle-text");
  if (loveName) loveName.classList.add("kaobunnie-glow");

  // Crear una lluvia especial de bienvenida
  createKaobunnieRain();
}, 2000);

// Función especial que se ejecuta cada cierto tiempo
setInterval(() => {
  if (Math.random() > 0.7) {
    createKaobunnieRain();
  }
}, 30000); // Cada 30 segundos
