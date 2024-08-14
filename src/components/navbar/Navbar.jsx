import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/tishyaketu-deshpande/">
            {/* Add LinkedIn */}
            <img src="/linked_icon.png" alt="" />
          </a>
          <a href="https://github.com/Tishyaketu">
            {/* Add GitHub */}
            <img src="/github.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/tishyaketud/">
            {/* Add LeetCode */}
            <img src="/leetcode.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
