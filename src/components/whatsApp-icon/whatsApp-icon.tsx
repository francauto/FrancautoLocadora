import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsApp-icon.css";

const WhatsAppIcon = () => {
  const handleClick = () => {
    const message =
      "Olá! Tenho interesse em saber mais sobre os serviços da Francauto Locadora.";
    window.open(
      `https://wa.me/5516999661580?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      className="whatsAppIcon"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: 1, duration: 0.5, type: "spring" },
      }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaWhatsapp
          style={{ width: "80px", height: "80px", color: "#25D366" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppIcon;
