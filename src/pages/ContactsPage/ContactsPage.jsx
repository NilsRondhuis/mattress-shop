import { submitInfo } from 'services/fetchTelegram';
import { toast } from 'react-hot-toast';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import Contacts from 'components/Contacts/Contacts';
import ContactForm from 'components/ContactForm/ContactForm';
import './ContactsPage.scss';

const ContactsPage = () => {
  const handleSumbit = async values => {
    let message = `<b>Зворотній дзвінок!</b>\n`;
    message += `<b>Відправник: </b>${values.name}\n`;
    message += `<b>Телефон: </b>${values.phone}\n`;

    try {
      await submitInfo(message);
      toast.success(
        <span style={{ textAlign: 'center' }}>
          Готово 😊 Очікуйте на дзвінок від менеджера.
        </span>,
        { duration: 3000 }
      );
    } catch {
      toast.error(
        'Щось пішло не так 😒. Спробуйте ще раз, або перезавантажте сторінку.',
        { duration: 3000 }
      );
    }
  };

  return (
    <Section type="contacts-section">
      <Container>
        <h2 className="section-title">Контакти</h2>
        <p className="text">
          Якщо у вас виникли питання або Вам потрібна консультація:
        </p>

        <b className="callback-title">Зателефонуйте нам</b>
        <Contacts color="black" />
        <b className="callback-title">Ми зателефонуємо Вам</b>
        <ContactForm onSubmit={handleSumbit} />
      </Container>
    </Section>
  );
};

export default ContactsPage;
