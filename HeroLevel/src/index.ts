import { attributesHero } from "./model/hero";
import { xpCalculator } from "./services/XP-calculator";



(async function main (){

   const heroi = await xpCalculator();
   console.log(`O Herói de nome ${attributesHero.NICKNAME} está no nível de ${heroi} com um total de ${attributesHero.XP} de XP!!!!😎`); 




})();