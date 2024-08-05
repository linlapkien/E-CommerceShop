import AdminNav from '../components/admin/AdminNav';

export const metadata = {
  title: 'E~shop Admin',
  description: 'E~shop Admin Dashboard',
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
