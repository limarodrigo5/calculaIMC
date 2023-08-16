/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Ana",
    age: 35,
    weight: 100,
    height: 170,
  },
  {
    name: "Maria",
    age: 55,
    weight: 50,
    height: 165,
  },
];

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function printPatientIMC(patient) {
  if (IMC(patient.weight, patient.height) < 18.5) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}: Abaixo do peso
  `;
  } else if (
    IMC(patient.weight, patient.height) >= 18.5 &&
    IMC(patient.weight, patient.height) <= 24.9
  ) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}: Peso normal
  `;
  } else if (
    IMC(patient.weight, patient.height) >= 25 &&
    IMC(patient.weight, patient.height) <= 29.9
  ) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}: Sobrepeso
  `;
  } else if (
    IMC(patient.weight, patient.height) >= 30 &&
    IMC(patient.weight, patient.height) <= 34.9
  ) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}:  Obesidade grau 1
  `;
  } else if (
    IMC(patient.weight, patient.height) >= 35 &&
    IMC(patient.weight, patient.height) <= 39.9
  ) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}:  Obesidade grau 2
  `;
  } else if (IMC(patient.weight, patient.height) >= 40) {
    return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}:  Obesidade extrema
  `;
  }
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient);
  alert(IMCmessage);
}
