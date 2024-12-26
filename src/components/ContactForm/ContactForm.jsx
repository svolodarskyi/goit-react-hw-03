import s from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onContactAdded }) => {
  const yupConfig = Yup.string()
    .min(3, 'Min 3 characters required')
    .max(50, 'Min 50 characters allowed')
    .required('This field is mandatory');
  const orderSchema = Yup.object().shape({
    name: yupConfig,
    number: yupConfig,
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={onContactAdded}
        initialValues={{
          name: '',
          number: '',
        }}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" className={s.error} component="div" />
          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="number" className={s.error} component="div" />
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
