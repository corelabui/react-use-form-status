import { useFormStatus } from 'react-dom';
import { Form, Input } from 'formfusion';
import './App.css';

export async function submitForm(formData) {
  await new Promise((res) => setTimeout(res, 1000));
  alert(formData.get('query'));
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

const MyForm = () => {
  return (
    <Form action={submitForm} className="form">
      <Input
        id="query"
        name="query"
        type="search"
        placeholder="Search for..."
        classes={{
          field: 'form__input-field',
          error: 'form__input-field__error',
          label: 'form__input-field__label',
        }}
      />
      <Submit />
    </Form>
  );
};

export default MyForm;
