import { attributesHero } from "../model/hero";


export async function xpCalculator(): Promise<String>{

switch (true) {
    case (attributesHero.XP < 1000):
       return "Ferro";
    case (attributesHero.XP >= 1001 && attributesHero.XP <= 2000):
        return "Bronze";     
    case (attributesHero.XP >= 2001 && attributesHero.XP <= 5000):
        return "Prata";
    case (attributesHero.XP >= 5001 && attributesHero.XP <= 7000):
        return "Ouro";
    case (attributesHero.XP >= 7001 && attributesHero.XP <= 8000):
        return "Platina";
    case (attributesHero.XP >= 8001 && attributesHero.XP <= 9000):
        return "Ascendente";
    case (attributesHero.XP >= 9001 && attributesHero.XP <= 10000):
       return "Imortal";
    case (attributesHero.XP >= 10001):
        return "Radiante";       
    default:
       return "Valor de XP fora do intervalo esperado"
}


   
}