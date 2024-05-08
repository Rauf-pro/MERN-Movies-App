import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div className="container mx-auto">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default AdminDashboard;
