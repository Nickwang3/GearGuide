import Link from 'next/link';
import Layout from '../components/MyLayout'
import RegisterForm from '../components/RegisterForm'

const user = {
  email: '',
  username: '',
  password: '',
}

const CreateAccount = () => (
  <Layout>
    <div>
      <h1>Join GearGuide!</h1>
      <RegisterForm/>
    </div>
  </Layout>
);

export default CreateAccount;
