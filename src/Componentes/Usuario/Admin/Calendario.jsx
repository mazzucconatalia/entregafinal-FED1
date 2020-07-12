import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



function Calendario() {

  const localizer = momentLocalizer(moment);
  require('moment/locale/es.js');

  const [listaEventos, modificarListaEventos] = React.useState([]);

  React.useEffect(function () {
    fetch('http://localhost:4000/eventosRombu')
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (respuestaJSON) {
        modificarListaEventos(respuestaJSON);
      })

  }, []);



  return (
    <div className="contenedor-calendario">

      <Calendar
        popup
        localizer={localizer}
        events={listaEventos}
        startAccessor="inicio"
        endAccessor="fin"
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          time: "Tiempo",
          event: "Evento",
          date: "Fecha",

        }}
        onSelectEvent={event => toast(event.descripcion, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
        })}
        views={{ month: true }}
        timeslots={8}

      />
    </div>
  )
}

export default Calendario;