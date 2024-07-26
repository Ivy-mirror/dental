//array
let atenciones = [{
  hora: '11:00',
  especialista: 'IGNACIO SCHULZ',
  paciente: 'FRANCISCA ROJAS',
  rut: '9878782-1',
  prevision: 'FONASA'
},
{
  hora: '11:30',
  especialista: 'FEDERICO SUBERCASEAUX',
  paciente: 'PAMELA ESTRADA',
  rut: '15345241-3',
  prevision: 'ISAPRE'
},
{
  hora: '15:00',
  especialista: 'FERNANDO WURTHZ',
  paciente: 'ARMANDO LUNA',
  rut: '16445345-9',
  prevision: 'ISAPRE'
},
{
  hora: '15:30',
  especialista: 'ANA MARIA GODOY',
  paciente: 'MANUEL GODOY',
  rut: '17666419-0',
  prevision: 'FONASA'
},
{
  hora: '16:00',
  especialista: 'PATRICIA SUAZO',
  paciente: 'RAMÓN ULLOA',
  rut: '14989389-K',
  prevision: 'FONASA'
},
];
  let texto =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th ><th>Previsión</th></tr>";
  //ciclo for
  for (let i = 0; i < atenciones.length; i++) {
      texto += `<tr>
  <td>${atenciones[i].hora}</td>
  <td>${atenciones[i].especialista}</td>
  <td>${atenciones[i].paciente}</td>
  <td>${atenciones[i].rut}</td>
  <td>${atenciones[i].prevision}</td>
  </tr>`;
  }
  document.getElementById("horasMedicas").innerHTML = texto;


  let dental = [
    {hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},
  ];

  let horasDental = ''
  for(let hora of dental) {
    horasDental += `
    <tr>
      <td>${hora.hora}</td>
      <td>${hora.especialista}</td>
      <td>${hora.paciente}</td>
      <td>${hora.rut}</td>
      <td>${hora.prevision}</td>
    </tr>
    `
  }

  document.getElementById("dental").innerHTML = horasDental


  let radiologia = [
    {hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},
  ];

  let horasRadiologia = ''
  for(let hora of radiologia) {
    horasDental += `
    <tr>
      <td>${hora.hora}</td>
      <td>${hora.especialista}</td>
      <td>${hora.paciente}</td>
      <td>${hora.rut}</td>
      <td>${hora.prevision}</td>
    </tr>
    `
  }

  document.getElementById("radiologia").innerHTML = horasRadiologia


  let traumatologia = [
    {hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},
  ];

  let horasTraumatologia = ''
  for(let hora of traumatologia) {
    horasDental += `
    <tr>
      <td>${hora.hora}</td>
      <td>${hora.especialista}</td>
      <td>${hora.paciente}</td>
      <td>${hora.rut}</td>
      <td>${hora.prevision}</td>
    </tr>
    `
  }

  document.getElementById("traumatología").innerHTML = horasTraumatologia
