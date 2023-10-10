import FormField from './FormField';
import Header from './Header';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 xl:w-1/3">
        <Header />
        <form>
          <FormField
            label="First Name"
            type="text"
            name="firstName"            
          />
          <FormField
            label="Last Name"
            type="text"
            name="lastName"            
          />
          <FormField
            label="Email"
            type="email"
            name="email"            
          />
          <FormField
            label="Password"
            type="password"
            name="password"            
          />
          <button
            type="submit"
            className="w-full bg-gojek-green text-white rounded-md py-3 mt-6 hover:bg-opacity-80"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
