import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './OrderForm.scss';

const initialValues = {
  name: '',
  phone: '',
  comment: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/\D/g, "Поле Ім'я не може містити цифри")
    .min(2, "Поле Ім'я повинно містити мінімум 2 символи")
    .required("Обов'язкове поле"),
  phone: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^((0|\+3|\+38|38))?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
      'Введіть коректний номер телефону, наприклад "0991112233" або "+380991112233"'
    )
    .required("Обов'язкове поле"),
});

const OrderForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <Form className="order-form" autoComplete="off">
            <label className="fieldset">
              <span className="label">
                Ім'я<span className="required">*</span>
              </span>
              <Field type="text" name="name" className="input" />
              <ErrorMessage
                component="div"
                name="name"
                className="error-message"
              />
            </label>
            <label className="fieldset">
              <span className="label">
                Телефон<span className="required">*</span>
              </span>
              <Field type="tel" name="phone" className="input" />
              <ErrorMessage
                component="div"
                name="phone"
                className="error-message"
              />
            </label>
            <label className="fieldset">
              <span className="label">Коментар</span>
              <Field
                as="textarea"
                name="comment"
                className="textarea"
                style={{ width: '100%', height: '100px' }}
              />
            </label>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              Оформити замовлення
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

OrderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default OrderForm;
