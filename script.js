try {
$(document).ready(function(){
  $('.carru_container').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev">❮</button>',
      nextArrow: '<button type="button" class="slick-next">❯</button>'
  });
});
} catch (error) {  
}

//animacion
try {
document.addEventListener('DOMContentLoaded', function () {
  const mainWrapper = document.querySelector('.main_wrapper');
  const navLinks = document.querySelectorAll('.menu nav ul li a');
  const elementsToFade = document.querySelectorAll('.main_wrapper > *');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
         // event.preventDefault(); // Evita la navegación inmediata

          const targetUrl = this.href;

          // Añade la clase fade-out a todos los elementos a desvanecer
          elementsToFade.forEach(element => {
              element.classList.add('fade-out');
          });

          // Espera a que termine la animación de desvanecimiento antes de redirigir
          mainWrapper.addEventListener('animationend', function () {
              window.location.href = targetUrl;
          }, { once: true });
      });
  });

  // Añade la clase fade-in para la animación de entrada del contenido
  elementsToFade.forEach(element => {
      element.classList.add('fade-in');
  });
});
    
} catch (error) {
    
}
//EFECTOS VISUALES----------------------------------------------------------------------------------------------------------------------
//1 PARTICULAS CANVAS
const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        const numberOfParticles = 100;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        const mouse = {
            x: null,
            y: null
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        class Particle {
            constructor(x, y, size, color, weight) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.weight = weight;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.size -= 0.1;
                if (this.size < 0) {
                    this.x = mouse.x + (Math.random() * 20 - 10);
                    this.y = mouse.y + (Math.random() * 20 - 10);
                    this.size = Math.random() * 15 + 5;
                    this.weight = Math.random() * 2 - 0.5;
                }
                this.y += this.weight;
                this.weight += 0.05;

                if (this.y > canvas.height - this.size) {
                    this.weight *= -0.5;
                }
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = Math.random() * 5 + 2;
                let color = 'white';
                let weight = 1;
                particlesArray.push(new Particle(x, y, size, color, weight));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();

//2  ESCRITURA DE TITULOS-----------------------------------------------------------------------------------------------------------------------------------

const text = document.getElementById('typing').textContent;
        let index = 0;

        function type() {
            document.getElementById('typing').textContent = text.slice(0, index);
            index++;
            if (index <= text.length) {
                setTimeout(type, 75);
            } else {
                document.getElementById('typing').textContent = text;
            }
        }

        document.getElementById('typing').textContent = '';
        type();

//3  ESCRITURA DE TITULOS-----------------------------------------------------------------------------------------------------------------------------------
let snowflakeCount = 0;
const maxSnowflakes = 50;
const mainWrapper = document.querySelector('.main_wrapper');

function createSnowflake() {
    if (snowflakeCount >= maxSnowflakes) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    mainWrapper.appendChild(snowflake);

    const size = Math.random() * 10 + 5 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * mainWrapper.clientWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';

    snowflakeCount++;
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        snowflakeCount--;
    });
}

function startSnow() {
    setInterval(createSnowflake, 200);
}

startSnow();

window.addEventListener('resize', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => snowflake.remove());
    snowflakeCount = 0;
});
//Revelar menu efecto desv
window.sr = ScrollReveal();
sr.reveal('.menu', {
    duration: 2000,
    origin:'bottom'
});
//paralax
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});