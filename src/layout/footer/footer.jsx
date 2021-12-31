export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='lzs__footer'>
      <div className='container-fluid'>
        <small>&copy; {currentYear} Arvan React Dashboard</small>
      </div>
    </footer>
  );
}
