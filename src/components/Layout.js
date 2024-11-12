import Header from './Header';

const Layout = ({ children , pageClass}) => (
  <div className='font-[family-name:var(--font-geist-sans)] overflow-hidden'>
    <Header />
    <main className={`${pageClass}`}>{children}</main>
  </div>
);

export default Layout;
