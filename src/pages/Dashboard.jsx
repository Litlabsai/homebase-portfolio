import Sidebar from "../components/Sidebar";
import Terminal from "../components/Terminal";

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Terminal />
      </main>
    </div>
  );
};

export default Dashboard;
