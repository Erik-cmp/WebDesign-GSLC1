const FormField = ({ label, type }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">{label}</label>
      <input
        className="w-full px-3 py-2 bg-gray-800 border border-white rounded text-white"
        type={type}
      />
    </div>
  );
};

export default FormField;
