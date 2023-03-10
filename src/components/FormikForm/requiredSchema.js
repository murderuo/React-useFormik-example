export const formSchema = Yup.object().shape(
  {
    kisitip: Yup.string().required('Gerekli'),
    kurumadi: Yup.string().required('Gerekli'),
    // tcvknno: Yup.number().min(10).positive().integer(),
    sayino: Yup.string()
      .required('Gerekli')
      .when('ibbtakipno', (ibbtakipno, field) => (ibbtakipno[0] !== undefined ? field.notRequired() : field)),

    ibbtakipno: Yup.string()
      .required('Gerekli')
      .when('sayino', (sayino, field) => (sayino[0] !== undefined ? field.notRequired() : field)),

    date: Yup.date().required('Gerekli'),

  },
  [['ibbtakipno', 'sayino']], // --->Working area

)
