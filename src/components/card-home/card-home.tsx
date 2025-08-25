import { motion } from "framer-motion";
import "./card-home.css";
const CardHome = () => {
return (
<motion.div
className="info-card acrylic-effect fixed-left"
initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
>
<h2>Francauto Locadora</h2>
<p>
A Francauto Locadora é especializada no aluguel de veículos em
Franca/SP, oferecendo uma frota moderna e bem cuidada para atender suas
necessidades com conforto e segurança.
</p>
</motion.div>
);
};
export default CardHome;