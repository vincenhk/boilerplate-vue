import * as yup from 'yup';

export const formLogin = {
  nik : {
    label: "NIK",
    name : "nik",
    rule : yup.string().required("NIK harus di isi!")
  },
  password : {
    label:"Kata Sandi",
    name : "password",
    rule: yup.string().required("Password harus di isi!")

  }
}