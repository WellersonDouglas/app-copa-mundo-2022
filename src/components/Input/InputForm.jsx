export function InputForm({ name, label, error, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">
        {label}
      </label>
      <input
        {...props}
        name={name}
        id={name}
        className={`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-red-500 ${
          error && 'border-red-600'
        }`}
      />
      <span className="p-2 text-sm text-red-300">{error}</span>
    </div>
  )
}
