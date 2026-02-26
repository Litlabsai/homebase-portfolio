import Sidebar from "../components/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
