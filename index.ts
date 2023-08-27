class person {
  firstName: string;
  lastName: string;
  address: string;
  age: number;

  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.age = age;
  }
}
class Patient extends person {
  PatientId: number;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: object[] | number[];

  constructor(
    PatientId: number,
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    phoneNumber: number,
    emergencyContact: number
  ) {
    super(firstName, lastName, address, age);
    this.PatientId = PatientId;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = [];
  }
  info(): string {
    return `name: ${this.firstName + this.lastName} id: ${this.PatientId}`;
  }
  updateMedicalHistory() {
    return (this.medicalHistory[0] = new Date());
  }
}
class MedicalStaff extends person {
  staffID: number;
  position: string;
  department: string;

  constructor(
    staffID: number,
    position: string,
    department: string,
    firstName: string,
    lastName: string,
    address: string,
    age: number
  ) {
    super(firstName, lastName, address, age);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
  }
}
class doctor extends MedicalStaff {
  doctorId: number;
  specialization: string;
  constructor(
    doctorId: number,
    specialization: string,
    staffID: number,
    position: string,
    department: string,
    firstName: string,
    lastName: string,
    address: string,
    age: number
  ) {
    super(staffID, position, department, firstName, lastName, address, age);
    this.doctorId = doctorId;
    this.specialization = specialization;
  }
  Info(): string {
    return `doctor name: ${
      this.firstName + this.lastName
    } his specialization is: ${this.specialization} `;
  }
}
class appointment {
  patient: Patient;
  doctor: doctor;
  date: string;
  time: number;

  constructor(patient: Patient, doctor: doctor, date: string, time: number) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }

  newAppointment(
    patient: Patient,
    doctor: doctor,
    date: string,
    time: number
  ): string {
    return `hello ${
      patient.firstName + " " + patient.lastName
    }, appointment has been set for you on ${date} in ${time} to doctor ${
      doctor.firstName + " " + doctor.lastName
    }`;
  }
}
class Hospital {
  hospitalName: string;
  doctors: doctor[];
  patients: Patient[];
  appointments: appointment[];

  constructor(hospitalName: string) {
    this.hospitalName = hospitalName;
    this.doctors = [];
    this.patients = [];
    this.appointments = [];
  }
  appendDoctor(data: doctor) {
    this.doctors.push(data);
  }
  appendPatient(data: Patient) {
    this.patients.push(data);
  }
  appendAppointment(data: any) {
    this.appointments.push(data);
  }
  showAllAppointments(): object[] {
    return this.appointments;
  }
  showAppointmentsByDoctorId(doctorId: number): object[] {
    return this.appointments.filter(
      (item) => item.doctor.doctorId === doctorId
    );
  }
  showAppointmentsByPatientId(PatientId: number): object[] {
    return this.appointments.filter(
      (item) => item.patient.PatientId === PatientId
    );
  }
}

let Hospital1 = new Hospital("hilel yafe");

// create patients
let patient1 = new Patient(
  31466,
  "jack",
  "spa",
  "33 street",
  22,
  864763637,
  756663737
);
let patient2 = new Patient(
  34554,
  "david",
  "cohen",
  "55 street",
  25,
  867355537,
  77328557
);
let patient3 = new Patient(
  36293,
  "roi",
  "levy",
  "44 street",
  31,
  86645774,
  79899944
);

// create doctors
let doctor1 = new doctor(
  1,
  "surgeon",
  1,
  "dr",
  "surgeon",
  "dr amir",
  "revivo",
  "77 street",
  53
);
let doctor2 = new doctor(
  2,
  "orthopedist",
  2,
  "dr",
  "orthopedist",
  "dr yuval",
  "cohen",
  "45 street",
  67
);
let doctor3 = new doctor(
  3,
  "otolaryngology",
  3,
  "dr",
  "otolaryngology",
  "dr david",
  "ramati",
  "67 street",
  70
);

// create an appointments
let appointment1 = new appointment(patient1, doctor1, "27/08/2023", 10.35);
let appointment2 = new appointment(patient2, doctor2, "31/09/2023", 12.35);
let appointment3 = new appointment(patient3, doctor2, "02/10/2023", 10.55);

// add doctors to hospital
Hospital1.appendDoctor(doctor1);
Hospital1.appendDoctor(doctor2);
Hospital1.appendDoctor(doctor3);

// add patients to hospital
Hospital1.appendPatient(patient1);
Hospital1.appendPatient(patient2);
Hospital1.appendPatient(patient3);

// add appointments
Hospital1.appendAppointment(appointment1);
Hospital1.appendAppointment(appointment2);
Hospital1.appendAppointment(appointment3);

// filter appointments

// by doctor id
// console.log(Hospital1.showAppointmentsByDoctorId(doctor2.doctorId));

// message for success appointment
// console.log(
//   appointment1.newAppointment(patient1, doctor1, "27/08/2023", 10.35)
// );
// console.log(
//   appointment2.newAppointment(patient2, doctor3, "31/09/2023", 12.35)
// );
// console.log(
//   appointment3.newAppointment(patient3, doctor2, "02/10/2023", 10.55)
// );
let a = new Date().getDate();
let b = new Date().getMonth();
console.log(a + "/" + b + "/" + new Date().getFullYear());
console.log(typeof a);
console.log(typeof b);
