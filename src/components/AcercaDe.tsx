import "./AcercaDe.css";
import logoMascotas from "/public/images/img5.jpg";

const AcercaDe = () => {
  return (
    <div className="acercade-container">
      <div className="acercade-texto">
        <h2>Acerca de Nosotros</h2>
        <p>
          Mundo Animal es una clínica veterinaria ubicada en la ciudad de
          Cochabamba, comprometida con el bienestar y la salud de las mascotas
          de la región. Nuestro principal objetivo es brindar atención médica
          veterinaria de alta calidad, basada en el respeto, la responsabilidad
          y el amor por los animales.
        </p>
        <p>
          Contamos con un equipo de profesionales altamente capacitados y con
          vocación, que atienden con dedicación y calidez a cada paciente. .
        </p>
        <p>
          <b>Ubicación:</b> Calle San Martín 123, Cochabamnba, Bolivia.
          Teléfono: +591 12345678.
        </p>
        <p>
          <b>Servicios:</b> Consulta veterinaria, vacunación, desparasitación,
          venta de alimentos y accesorios para mascotas. Horario: Lunes a
          Viernes de 9:00 a 18:00, Sábados de 9:00 a 13:00.
        </p>
      </div>
      <img src={logoMascotas} alt="Logo Mascotas" className="acercade-imagen" />
    </div>
  );
};

export default AcercaDe;
