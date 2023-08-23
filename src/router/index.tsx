import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
};

export default AppRouter;
