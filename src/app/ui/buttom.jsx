
export default function Buttom({ children, className, ...rest }) {
  return (
    <button
      className={`${className} flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-900 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500`}
      {...rest}
    >
      {children}
    </button>
  );
}