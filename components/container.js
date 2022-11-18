export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 gap-y-5 flex flex-col justify-evenly mt-12">
      {children}
    </div>
  );
}
